import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { createRequire } from "node:module";
import ts from "typescript";
import {
  defaults,
  fields,
  record,
  manifest,
  validImage,
  validLink,
} from "../lib/jktl/content-model.mjs";
const require = createRequire(import.meta.url),
  project = "a88f0b0d-6c51-43d2-8a8d-00e37c18c339";
function load(file, deps = {}) {
  const code = ts.transpileModule(
      readFileSync(new URL(file, import.meta.url), "utf8"),
      {
        compilerOptions: {
          module: ts.ModuleKind.CommonJS,
          target: ts.ScriptTarget.ES2022,
        },
      },
    ).outputText,
    m = { exports: {} };
  new Function("require", "module", "exports", code)(
    (n) => (n in deps ? deps[n] : require(n)),
    m,
    m.exports,
  );
  return m.exports;
}
test("full content schema rejects unknown fields and unsafe links or images", () => {
  assert.ok(Object.keys(manifest).length > 500);
  assert.deepEqual(fields(defaults), defaults);
  assert.throws(() => fields({ ...defaults, sourceCode: "injected" }));
  assert.throws(() => fields({ ...defaults, heroTitle: "" }));
  for (const v of [
    "javascript:alert(1)",
    "//evil.example",
    "/api/private",
    "https://user:pass@evil.example",
  ])
    assert.equal(validLink(v), false);
  for (const v of [
    "data:image/svg+xml,evil",
    "/../private.png",
    "/api/private.png",
  ])
    assert.equal(validImage(v), false);
});
test("legacy content remains readable without adding credentials to the website", () => {
  const old = {
    version: 1,
    projectId: project,
    revision: 1,
    draft: {
      heroTitle: "Draft",
      heroDescription: "Description",
      welcomeTitle: "Welcome",
      welcomeSubtitle: "Firm",
    },
    published: {
      heroTitle: "Published",
      heroDescription: "Description",
      welcomeTitle: "Welcome",
      welcomeSubtitle: "Firm",
    },
    audit: [],
  };
  const migrated = record(old, project);
  assert.equal(migrated.published.heroTitle, "Published");
  assert.equal(
    Object.keys(migrated.draft).length,
    Object.keys(manifest).length,
  );
});
test("site connection is public and transport can only read fixed published content or images", async () => {
  const connection = load("../lib/jktl/site-connection.ts"),
    bridge = load("../lib/jktl/business-storage.ts", {
      "server-only": {},
      "./site-connection": connection,
    }),
    previous = globalThis.fetch;
  let requests = [];
  try {
    globalThis.fetch = async (url, options) => {
      requests.push({ url, options });
      assert.equal(url.origin, "https://business.jktl.com.ng");
      assert.equal(options.method, "GET");
      assert.equal(options.credentials, "omit");
      assert.equal(options.headers, undefined);
      assert.equal(options.body, undefined);
      assert.equal(options.redirect, "error");
      return Response.json({ published: null });
    };
    await bridge.businessStorage("content");
    await bridge.businessStorage("media", project + ".png");
    assert.equal(
      requests[0].url.pathname,
      `/api/custom/sites/${project}/content`,
    );
    assert.ok(!requests[0].url.searchParams.has("view"));
    assert.equal(
      connection.businessEditorUrl,
      `https://business.jktl.com.ng/business/custom/${project}/edit`,
    );
  } finally {
    globalThis.fetch = previous;
  }
});
test("public rendering uses validated published data and fails gracefully on outage", async () => {
  let response = { published: { ...defaults, heroTitle: "Managed title" } };
  const store = load("../lib/jktl/content-store.ts", {
    "server-only": {},
    "./content-model.mjs": { defaults, fields },
    "./business-storage": {
      businessStorage: async () => {
        if (response === null) throw Error("outage");
        return Response.json(response);
      },
    },
  });
  assert.equal((await store.publishedHomepage()).heroTitle, "Managed title");
  response = null;
  assert.deepEqual(await store.publishedHomepage(), defaults);
});
test("every existing public route keeps editable metadata and sitemap discovery", async () => {
  const files = [],
    walk = (dir) => {
      for (const e of readdirSync(new URL("../" + dir, import.meta.url), {
        withFileTypes: true,
      })) {
        if (e.isDirectory() && !["api", "jktl-cms"].includes(e.name))
          walk(dir + "/" + e.name);
        else if (e.name === "page.tsx") files.push(dir + "/" + e.name);
      }
    };
  walk("app");
  const routes = await require("../next-sitemap.config.js").additionalPaths();
  for (const file of files) {
    assert.match(
      readFileSync(new URL("../" + file, import.meta.url), "utf8"),
      /export async function generateMetadata/,
    );
    assert.equal(
      Object.values(manifest).filter(
        (f) => f.source === file && /^SEO /.test(f.label),
      ).length,
      2,
    );
    assert.ok(
      routes.some(
        (r) =>
          r.loc ===
          "/" + file.replace(/^app\//, "").replace(/\/?page\.tsx$/, ""),
      ),
    );
  }
  assert.equal(routes.length, files.length);
});
test("website code requires no integration secrets and old editor redirects to Business", () => {
  for (const p of [
    "../lib/jktl/business-storage.ts",
    "../lib/jktl/content-store.ts",
    "../app/jktl-cms/page.tsx",
    "../app/api/jktl/callback/route.ts",
  ]) {
    const source = readFileSync(new URL(p, import.meta.url), "utf8");
    assert.doesNotMatch(
      source,
      /JKTL_CUSTOM_API_KEY|DATABASE_URL|JKTL_CMS_SESSION_SECRET|BLOB_READ_WRITE_TOKEN/,
    );
  }
  assert.match(
    readFileSync(new URL("../app/jktl-cms/page.tsx", import.meta.url), "utf8"),
    /redirect\(businessEditorUrl\)/,
  );
});
