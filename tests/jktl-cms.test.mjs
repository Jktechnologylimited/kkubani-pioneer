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
  assert.throws(() => fields({ ...input, heroTitle: "x".repeat(121) }));
  assert.throws(() => fields({ ...input, heroTitle: "" }));
});
test("site session is signed, project/org bound and expires after five minutes", () => {
  const now = Date.now(),
    cookie = issue(identity, project, secret, now);
  assert.equal(
    inspect(cookie, project, org, secret, now).userId,
    identity.userId,
  );
  for (const [value, p, o, s, t] of [
    [cookie, org, org, secret, now],
    [cookie, project, project, secret, now],
    [cookie, project, org, secret, now + 301000],
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

// Exercise the production storage adapter with a private-Blob contract mock.
import ts from 'typescript';
import {readFileSync} from 'node:fs';
import * as contentModel from '../lib/jktl/content-model.mjs';
test('private storage uses conditional writes and preserves the confirmed public snapshot',async()=>{
 let stored=null,etag=null,fail=false;
 const code=ts.transpileModule(readFileSync(new URL('../lib/jktl/content-store.ts',import.meta.url),'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText;
 const m={exports:{}};
 const blob={get:async(path,options)=>{assert.equal(options.access,'private');assert.equal(options.useCache,false);return stored?{statusCode:200,blob:{size:JSON.stringify(stored).length,etag},stream:new Response(JSON.stringify(stored)).body}:null},put:async(path,value,options)=>{assert.equal(options.access,'private');if(fail)throw Error('ambiguous');if(etag)assert.equal(options.ifMatch,etag);else assert.equal(options.allowOverwrite,false);stored=JSON.parse(value);etag='revision-'+stored.revision;}};
 new Function('require','module','exports',code)(name=>name==='server-only'?{}:name==='@vercel/blob'?blob:contentModel,m,m.exports);
 const old=process.env.BLOB_READ_WRITE_TOKEN;process.env.BLOB_READ_WRITE_TOKEN='test-only';
 try{const api=m.exports;await api.saveContent(project,{...defaults,heroTitle:'Published title'},0,'publish',identity);assert.equal(stored.published.heroTitle,'Published title');await assert.rejects(()=>api.saveContent(project,defaults,0,'draft',identity));await api.saveContent(project,defaults,1,'draft',identity);assert.equal(stored.published.heroTitle,'Published title');fail=true;await assert.rejects(()=>api.saveContent(project,defaults,2,'publish',identity),/Reload/);assert.equal(stored.revision,2);}finally{if(old===undefined)delete process.env.BLOB_READ_WRITE_TOKEN;else process.env.BLOB_READ_WRITE_TOKEN=old;}
});
