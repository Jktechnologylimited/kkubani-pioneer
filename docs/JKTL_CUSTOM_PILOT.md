# JKTL Business pilot: K.K. Ubani and Co

The website remains in this repository and its current Vercel project. The approved owner is `info@kkubaniandco.com`. Creating a Business project does not automatically connect this editor or send an invitation.

## What is editable

Only `heroTitle`, `heroDescription`, `welcomeTitle` and `welcomeSubtitle` on the homepage. Original text is preserved until a draft is explicitly published. Existing images, contact forms, attorney/service pages, layout, SMTP and deployment configuration stay unchanged. Content is React-escaped text, never executable HTML. Other fields need a separately reviewed schema change.

The site had no database or existing CMS. This adapter uses one private Vercel Blob JSON object per stable Business project UUID. Draft, published content, revision and the latest 100 audit entries are stored together. Writes use ETag preconditions (or create-only for the first write); an ambiguous save requires a reload before retrying. Publication invalidates the homepage path; the homepage reads the published snapshot at request time. If private storage is unavailable, it falls back to the original text and emits a generic diagnostic. It does not fetch Business during public page loads.

## Server-only environment settings

Configure on this website's existing deployment, never with a NEXT_PUBLIC prefix:

- `JKTL_CMS_ENABLED=true` only when ready to validate the integration.
- `JKTL_CUSTOM_PROJECT_ID`: the persistent project UUID from Business.
- `JKTL_CUSTOM_ORGANIZATION_ID`: the approved client organization UUID.
- `JKTL_CUSTOM_API_KEY`: the per-project integration key generated once in Business.
- `JKTL_CMS_SESSION_SECRET`: a new random secret of at least 32 characters.
- `BLOB_READ_WRITE_TOKEN`: a private Blob store bound to this website.

Do not commit values. Business stores the key hash, not this website's Blob token. Preserve the project/organization UUIDs and Blob store across deployments; the deployment URL/commit is not the identity. A new integration key invalidates the old one.

## Connect and validate

1. Apply Business migration 062 through the existing migration process. Register/link the approved organization and owner without sending an invitation. Inspect an existing owner account before making a new organization.
2. In Admin → Custom Projects, add this production website, repository and deployment references. Keep internal notes separate from the client-facing description. Link only actual owned domains/email services; configure hosting/maintenance only at approved contract prices.
3. Set callback to `https://www.kkubaniandco.com/api/jktl/callback` (confirm the current canonical production host first). Declare the four supported field identifiers. Start read-only; enable write/publish only for the authorized pilot. Changing callback, fields or scopes clears CMS-test confirmation.
4. Generate the integration key; put it and the IDs in the website's secret environment. Do not paste credentials in notes or chat. Deploy this source independently.
5. Enable readiness/CMS confirmation only for controlled validation and invite the approved pilot owner individually through the existing workflow. These flags are operator assertions; turn them off on failure. Use that authorized account and a fresh one-use Business grant to exercise callback, sign-in and project ownership; confirm foreign organizations and expired grants fail. The editor is `/jktl-cms`, excluded from the sitemap and marked noindex. Direct access fails closed. Sign-in stays in Business, not a second password database.
6. Save a draft; verify the public homepage is unchanged. Explicitly publish approved text, confirm the real homepage, then restore approved text. Try a stale editor revision and revoked CMS scope. Business must authorize every editor read/write/publish. Cookies are HttpOnly, SameSite=Lax, Secure in production and expire after five minutes; keys never reach browser JavaScript.
7. Verify acceptance on the correct account and record the completed live CMS checks before declaring the connection tested. Do not send repeated invitations unnecessarily. Approve service proposals explicitly; test invoice checkout only with the established authorized payment procedure.
8. Open a project support request in the shared inbox. Verify support sees safe project context and not internal deployment metadata. Deploy another source commit, confirm published content and the same Business project/services remain connected.

The readiness confirmation is an operator assertion, not an automatic production connectivity check. Until steps above are completed, this is implemented code, not a verified live client connection. No client invitation or charge is sent by installation/build.

## Checks

`node --test tests/jktl-cms.test.mjs` covers field validation, draft/publish separation, stale writes, signed session expiry/tenant binding, and server-to-server authorization failure/revocation. Mock responses are test fixtures, not live Business assertions. `npm run build` compiles the production application (the existing font requires network access). Business has separate PostgreSQL tests for grants, invitations, tenant isolation, invoicing and shared support.
