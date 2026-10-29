import test from "node:test";
import assert from "node:assert/strict";
import {
  defaults,
  initialRecord,
  fields,
  change,
  record,
} from "../lib/jktl/content-model.mjs";
import { issue, inspect } from "../lib/jktl/session-model.mjs";
import {
  exchangeJktlGrant,
  validateJktlSession,
} from "../lib/jktl/custom-cms.mjs";
const project = "10000000-0000-4000-8000-000000000001",
  org = "10000000-0000-4000-8000-000000000002",
  secret = "test-only-session-secret-not-for-production",
  key = "a".repeat(64);
const identity = {
  userId: "10000000-0000-4000-8000-000000000003",
  organizationId: org,
  scope: ["content:read", "content:write", "content:publish"],
};
test("only approved homepage text can be saved; drafts stay unpublished and stale writes fail", () => {
  const initial = initialRecord(project),
    input = { ...defaults, heroTitle: "Updated legal counsel" };
  const draft = change(initial, input, 0, "draft", identity);
  assert.equal(draft.published, null);
  assert.equal(draft.draft.heroTitle, input.heroTitle);
  assert.throws(() => change(draft, input, 0, "publish", identity));
  assert.throws(() =>
    change(draft, input, 1, "publish", {
      ...identity,
      scope: ["content:read", "content:write"],
    }),
  );
  assert.throws(() =>
    change(draft, input, 1, "draft", { ...identity, scope: ["content:read"] }),
  );
  const published = change(draft, input, 1, "publish", identity);
  assert.equal(published.published.heroTitle, input.heroTitle);
  assert.equal(published.audit[1].actor, identity.userId);
  assert.equal(record(published, project).revision, 2);
  assert.throws(() => record(published, org));
  assert.throws(() => fields({ ...input, sourceCode: "injected" }));
  assert.throws(() => fields({ ...input, heroTitle: "x".repeat(2501) }));
  assert.throws(() => fields({ ...input, heroTitle: "" }));
});
test("site session is signed, project/org bound and expires after thirty minutes", () => {
  const now = Date.now(),
    cookie = issue(identity, project, secret, now);
  assert.equal(
    inspect(cookie, project, org, secret, now).userId,
    identity.userId,
  );
  for (const [value, p, o, s, t] of [
    [cookie, org, org, secret, now],
    [cookie, project, project, secret, now],
    [cookie, project, org, secret, now + 1801000],
    [cookie + "x", project, org, secret, now],
    [cookie, project, org, "wrong-secret", now],
  ])
    assert.equal(inspect(value, p, o, s, t), null);
  assert.throws(() => issue(identity, project, "weak"));
});
test("Business reauthorization narrows session scopes and fails closed on revoke, outage or invalid identities", async () => {
  const response = {
    issuer: "https://business.jktl.com.ng",
    audience: project,
    subject: identity.userId,
    organizationId: org,
    scope: ["content:read"],
  };
  const fetchImpl = async (url, options) => {
    assert.equal(new URL(url).hostname, "business.jktl.com.ng");
    assert.equal(options.redirect, "error");
    assert.equal(options.headers.Authorization, `Bearer ${key}`);
    return Response.json(response);
  };
  const current = await validateJktlSession({
    identity,
    projectId: project,
    apiKey: key,
    fetchImpl,
  });
  assert.deepEqual(current.scope, ["content:read"]);
  for (const fetcher of [
    async () => new Response("", { status: 401 }),
    async () => {
      throw Error("outage");
    },
    async () => Response.json({ ...response, scope: ["admin"] }),
    async () => Response.json({ ...response, organizationId: project }),
  ])
    await assert.rejects(() =>
      validateJktlSession({
        identity,
        projectId: project,
        apiKey: key,
        fetchImpl: fetcher,
      }),
    );
  await assert.rejects(() =>
    exchangeJktlGrant({
      code: key,
      projectId: project,
      apiKey: key,
      portalOrigin: "https://other.example",
      fetchImpl,
    }),
  );
});

// Exercise the production adapter with an authenticated Business API contract mock.
import ts from "typescript";
import { readFileSync } from "node:fs";
import * as contentModel from "../lib/jktl/content-model.mjs";
test("Business storage preserves published content, rejects stale saves and never retries ambiguous writes", async () => {
  let stored = null,
    fail = false,
    calls = 0;
  const code = ts.transpileModule(
      readFileSync(
        new URL("../lib/jktl/content-store.ts", import.meta.url),
        "utf8",
      ),
      {
        compilerOptions: {
          module: ts.ModuleKind.CommonJS,
          target: ts.ScriptTarget.ES2022,
        },
      },
    ).outputText,
    m = { exports: {} };
  const bridge = {
    storageConfigured: () => true,
    businessStorage: async (resource, query, options = {}, who) => {
      assert.equal(resource, "content");
      assert.equal(who.organizationId, identity.organizationId);
      if (options.method === "POST") {
        calls++;
        const input = JSON.parse(options.body);
        stored = contentModel.change(
          stored || contentModel.initialRecord(project),
          input.fields,
          input.revision,
          input.mode,
          who,
        );
        if (fail) throw Error("Save not confirmed. Reload before retrying.");
        return Response.json(stored);
      }
      return Response.json(stored);
    },
  };
  new Function("require", "module", "exports", code)(
    (n) =>
      n === "server-only"
        ? {}
        : n === "./business-storage"
          ? bridge
          : contentModel,
    m,
    m.exports,
  );
  const old = process.env.JKTL_CUSTOM_PROJECT_ID;
  process.env.JKTL_CUSTOM_PROJECT_ID = project;
  try {
    const api = m.exports;
    await api.saveContent(
      project,
      { ...defaults, heroTitle: "Published title" },
      0,
      "publish",
      identity,
    );
    assert.equal(stored.published.heroTitle, "Published title");
    await assert.rejects(() =>
      api.saveContent(project, defaults, 0, "draft", identity),
    );
    await api.saveContent(project, defaults, 1, "draft", identity);
    assert.equal(stored.published.heroTitle, "Published title");
    fail = true;
    const before = calls;
    await assert.rejects(
      () => api.saveContent(project, defaults, 2, "publish", identity),
      /Reload/,
    );
    assert.equal(calls, before + 1);
    assert.equal((await api.readContent(project, identity)).data.revision, 3);
    await assert.rejects(() => api.readContent(org, identity));
  } finally {
    if (old === undefined) delete process.env.JKTL_CUSTOM_PROJECT_ID;
    else process.env.JKTL_CUSTOM_PROJECT_ID = old;
  }
});
import { manifest, validImage, validLink } from "../lib/jktl/content-model.mjs";
import {
  imageType,
  mediaFile,
  MAX_IMAGE_BYTES,
} from "../lib/jktl/media-model.mjs";
test("every public page and content component has a registered editable schema; secrets and code are absent", () => {
  assert.ok(Object.keys(manifest).length > 500);
  const sources = new Set(Object.values(manifest).map((f) => f.source));
  for (const source of [
    "app/page.tsx",
    "app/about/page.tsx",
    "app/contact/page.tsx",
    "app/booking/page.tsx",
    "app/our-attorneys/page.tsx",
    "app/not-found.tsx",
    "app/law-firm-services/corporate/page.tsx",
    "app/our-attorneys/kenneth-kelechi-ubani/page.tsx",
    "components/Footer.tsx",
    "components/Topbar.tsx",
    "components/Services.tsx",
    "components/clients.tsx",
  ])
    assert.ok(sources.has(source), source);
  assert.deepEqual(fields(defaults), defaults);
  for (const value of [
    "javascript:alert(1)",
    "data:text/html,evil",
    "//evil.example",
    "/api/private",
    "https://user:pass@evil.example",
    "https://127.0.0.1",
  ])
    assert.equal(validLink(value), false, value);
  for (const value of [
    "javascript:alert(1)",
    "data:image/svg+xml,evil",
    "https://evil.example/image.svg",
    "//evil.example/a.png",
    "/../private.png",
    "/api/private.png",
  ])
    assert.equal(validImage(value), false, value);
  assert.equal(validImage("/areas/corporate.jpg"), true);
  assert.equal(validImage("https://images.unsplash.com/photo-123?w=800"), true);
  const image = Object.keys(manifest).find((k) => manifest[k].kind === "image"),
    link = Object.keys(manifest).find((k) => manifest[k].kind === "link");
  assert.throws(() =>
    fields({ ...defaults, [image]: "data:image/svg+xml,<svg/>" }),
  );
  assert.throws(() => fields({ ...defaults, [link]: "javascript:alert(1)" }));
});
test("old four-field documents retain their published values when upgraded to the full site schema", () => {
  const previous = {
    version: 1,
    projectId: project,
    revision: 12,
    draft: {
      heroTitle: "Legacy draft",
      heroDescription: "Description",
      welcomeTitle: "Welcome",
      welcomeSubtitle: "Firm",
    },
    published: {
      heroTitle: "Legacy published",
      heroDescription: "Description",
      welcomeTitle: "Welcome",
      welcomeSubtitle: "Firm",
    },
    audit: [],
  };
  const upgraded = record(previous, project);
  assert.equal(upgraded.version, 2);
  assert.equal(upgraded.revision, 12);
  assert.equal(upgraded.published.heroTitle, "Legacy published");
  assert.equal(
    Object.keys(upgraded.published).length,
    Object.keys(manifest).length,
  );
  const next = change(upgraded, upgraded.draft, 12, "draft", identity);
  assert.equal(next.published.heroTitle, "Legacy published");
});
test("uploads reject executable/mismatched types, large files and arbitrary storage paths", () => {
  const png = Buffer.concat([
    Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
    Buffer.alloc(12),
  ]);
  assert.equal(imageType(png).ext, "png");
  assert.equal(
    imageType(Buffer.from([255, 216, 255, ...Array(20).fill(0)])).ext,
    "jpg",
  );
  assert.throws(() => imageType(Buffer.from('<svg onload="evil">')));
  assert.throws(() => imageType(Buffer.alloc(MAX_IMAGE_BYTES + 1)));
  assert.equal(mediaFile(project + ".png"), project + ".png");
  for (const value of ["../private.json", project + ".svg", "anything.png"])
    assert.throws(() => mediaFile(value));
});
test("all existing public routes retain editable server metadata and sitemap discovery", async () => {
  const { readdirSync } = await import("node:fs");
  const files = [];
  const walk = (dir) => {
    for (const e of readdirSync(new URL("../" + dir, import.meta.url), {
      withFileTypes: true,
    })) {
      if (e.isDirectory() && !["api", "jktl-cms"].includes(e.name))
        walk(dir + "/" + e.name);
      else if (e.isFile() && e.name === "page.tsx")
        files.push(dir + "/" + e.name);
    }
  };
  walk("app");
  const { createRequire } = await import("node:module");
  const require = createRequire(import.meta.url),
    config = require("../next-sitemap.config.js");
  const routes = await config.additionalPaths();
  for (const file of files) {
    const source = readFileSync(new URL("../" + file, import.meta.url), "utf8");
    assert.match(source, /export async function generateMetadata/, file);
    const fields = Object.values(manifest).filter(
      (f) => f.source === file && /^SEO /.test(f.label),
    );
    assert.equal(fields.length, 2, file);
    assert.ok(
      routes.some(
        (r) =>
          r.loc ===
          "/" + file.replace(/^app\//, "").replace(/\/?page\.tsx$/, ""),
      ),
      file,
    );
  }
  assert.equal(routes.length, files.length);
  assert.ok(
    routes.every(
      (r) => !r.loc.includes("/jktl-cms") && !r.loc.includes("/api/"),
    ),
  );
});
test('storage transport keeps credentials server-side and fixed to Business without retries',async()=>{
 const code=ts.transpileModule(readFileSync(new URL('../lib/jktl/business-storage.ts',import.meta.url),'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText,m={exports:{}};
 new Function('require','module','exports',code)(()=>({}),m,m.exports);
 const oldProject=process.env.JKTL_CUSTOM_PROJECT_ID,oldKey=process.env.JKTL_CUSTOM_API_KEY,oldFetch=globalThis.fetch;
 process.env.JKTL_CUSTOM_PROJECT_ID=project;process.env.JKTL_CUSTOM_API_KEY=key;let calls=0;
 try{globalThis.fetch=async(url,options)=>{calls++;assert.equal(url.origin,'https://business.jktl.com.ng');assert.equal(url.searchParams.get('projectId'),project);assert.equal(options.headers.get('Authorization'),'Bearer '+key);assert.equal(options.headers.get('x-jktl-user-id'),identity.userId);assert.equal(options.redirect,'error');assert.equal(options.cache,'no-store');return new Response('unavailable',{status:503})};await assert.rejects(()=>m.exports.businessStorage('content',{view:'draft'},{},identity));assert.equal(calls,1);}finally{globalThis.fetch=oldFetch;if(oldProject===undefined)delete process.env.JKTL_CUSTOM_PROJECT_ID;else process.env.JKTL_CUSTOM_PROJECT_ID=oldProject;if(oldKey===undefined)delete process.env.JKTL_CUSTOM_API_KEY;else process.env.JKTL_CUSTOM_API_KEY=oldKey;}
});
