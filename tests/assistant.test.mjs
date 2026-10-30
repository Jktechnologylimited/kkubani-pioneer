import test from "node:test";
import assert from "node:assert/strict";
import ts from "typescript";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { defaults, manifest } from "../lib/jktl/content-model.mjs";
const require = createRequire(import.meta.url);
function load(path, deps = {}) {
  const module = { exports: {} };
  new Function(
    "require",
    "module",
    "exports",
    ts.transpileModule(readFileSync(new URL(path, import.meta.url), "utf8"), {
      compilerOptions: {
        esModuleInterop: true,
        module: ts.ModuleKind.CommonJS,
        target: ts.ScriptTarget.ES2022,
      },
    }).outputText,
  )((n) => (n in deps ? deps[n] : require(n)), module, module.exports);
  return module.exports;
}
const { answerQuestion } = load("../lib/assistant.ts", {
  "./jktl/content-model.mjs": { manifest },
});
const copy = (k) => defaults[k] || "";
test("assistant uses firm contact information and explains meeting confirmation", () => {
  assert.match(answerQuestion("contact", copy).text, /info@kkubaniandco.com/);
  const answer = answerQuestion("book a meeting", copy);
  assert.equal(answer.booking, true);
  assert.match(answer.text, /does not reserve/);
});
test("assistant answers about matching practice and avoids giving case advice", () => {
  assert.match(answerQuestion("corporate", copy).text, /governance/);
  assert.match(
    answerQuestion("will I win my case?", copy).text,
    /cannot give legal advice/,
  );
  assert.match(
    answerQuestion("what are your fees?", copy).text,
    /depend on the matter/,
  );
});
test("booking rejects malformed, invalid and past requests without contacting SMTP", async () => {
  let sent = false;
  const { POST } = load("../app/api/send-booking/route.ts", {
    nodemailer: {
      createTransport() {
        sent = true;
        throw Error("must not contact SMTP");
      },
    },
  });
  const request = (data) =>
    new Request("http://localhost/api/send-booking", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    });
  assert.equal((await POST(request(null))).status, 400);
  assert.equal(
    (
      await POST(
        request({
          name: "Test",
          email: "bad",
          number: "123",
          date: "2030-02-31",
          time: "10:00 AM",
        }),
      )
    ).status,
    400,
  );
  assert.equal(
    (
      await POST(
        request({
          name: "Test",
          email: "test@example.com",
          number: "123",
          date: "2020-01-01",
          time: "10:00 AM",
        }),
      )
    ).status,
    400,
  );
  assert.equal(sent, false);
});

test("booking uses Resend and never reports failed delivery as success", async () => {
  const previousKey = process.env.RESEND_API_KEY,
    previousFetch = globalThis.fetch;
  const { POST } = load("../app/api/send-booking/route.ts");
  const data = {
    name: "Test <visitor>",
    email: "visitor@example.com",
    number: "123456789",
    date: "2099-01-05",
    time: "10:00 AM",
  };
  const request = () =>
    new Request("http://localhost/api/send-booking", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    });
  let sent;
  try {
    delete process.env.RESEND_API_KEY;
    assert.equal((await POST(request())).status, 503);
    process.env.RESEND_API_KEY = "test-only";
    globalThis.fetch = async (url, options) => {
      assert.equal(url, "https://api.resend.com/emails");
      sent = JSON.parse(options.body);
      return Response.json({ id: "test-message" });
    };
    assert.equal((await POST(request())).status, 200);
    assert.deepEqual(sent.to, ["info@kkubaniandco.com"]);
    assert.equal(sent.reply_to, "visitor@example.com");
    assert.match(sent.html, /Test &lt;visitor&gt;/);
    globalThis.fetch = async () =>
      Response.json({ message: "Rejected" }, { status: 403 });
    assert.equal((await POST(request())).status, 502);
    globalThis.fetch = async () => Response.json({});
    assert.equal((await POST(request())).status, 502);
  } finally {
    globalThis.fetch = previousFetch;
    if (previousKey === undefined) delete process.env.RESEND_API_KEY;
    else process.env.RESEND_API_KEY = previousKey;
  }
});

test("assistant uses current website hours and offers an honest human handoff", () => {
  const edited = (k) =>
    k === "components.Footer.field11" ? "10am–3pm" : copy(k);
  assert.match(answerQuestion("office hours", edited).text, /10am–3pm/);
  assert.equal(
    answerQuestion("where are you located?", copy).source,
    "/contact",
  );
  const human = answerQuestion("I want to chat with a human", copy);
  assert.equal(human.human, true);
  assert.match(human.text, /automated website assistant/);
  assert.equal(answerQuestion("tell me about the firm", copy).source, "/about");
});
