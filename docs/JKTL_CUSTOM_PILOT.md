# JKTL Business pilot: K.K. Ubani and Co

The website remains in this repository and its current Vercel project. The approved owner is `info@kkubaniandco.com`. Creating a Business project does not automatically connect this editor or send an invitation.

## What is editable

The full existing public website is editable through 538 explicitly registered fields across 42 source files: homepage slideshow/welcome, about copy, all service pages, attorney cards and biographies, client logos, testimonials, navigation, contact details/social links, office hours, forms' labels/status copy, footer, 404 content and page SEO titles/descriptions. The editor provides section selection, search, original-field restore, image replacement/uploads, draft save and explicit publication. Existing section structure/routes are preserved; adding a new page or changing application behavior remains a reviewed source change. Code, SMTP credentials, private user/case records, billing and deployments are never editable content.

Content is React-escaped text, never executable HTML. Image URLs are limited to local images, authenticated uploads served through the fixed public image route and images.unsplash.com. Link schemes and destinations are validated server-side. New PNG/JPEG/WebP uploads are limited to 3 MB with signature checks; SVG/HTML are rejected. Website imagery is public content, not a confidential document upload facility.

The site had no database or existing CMS. Content and uploaded website images now use JKTL Business's existing PostgreSQL database through a server-only, per-project API. Migration 063 adds tenant-bound content and media tables. The site receives no Business database password or storage token. Draft, published content, revision and the latest 100 actor audit entries are updated atomically. Revision checks reject stale writes; an ambiguous save requires a reload before retrying and is never automatically repeated.

Publishing invalidates the site's layout. Public pages and server metadata read the published snapshot through the authenticated Business connection; drafts require the active client's current read permission. The same request snapshot feeds server pages and client components. If Business or its database is unavailable, public pages fall back to original text and emit a generic diagnostic, while editing fails closed. This means published content availability depends on Business; independent source deployments and stable project IDs are retained.

The version-1 four-field document is upgraded in memory while retaining published values, draft, revision and audit. Only a later explicitly authorized save writes version 2.

See [the exact Vercel private settings checklist](JKTL_PRIVATE_SETTINGS.md).

## Server-only environment settings

Configure on this website's existing deployment, never with a NEXT_PUBLIC prefix:

- `JKTL_CMS_ENABLED=true` only when ready to validate the integration.
- `JKTL_CUSTOM_PROJECT_ID`: the persistent project UUID from Business.
- `JKTL_CUSTOM_ORGANIZATION_ID`: the approved client organization UUID.
- `JKTL_CUSTOM_API_KEY`: the per-project integration key generated once in Business.
- `JKTL_CMS_SESSION_SECRET`: a new random secret of at least 32 characters.

Do not commit values. Business stores the integration key hash and tenant-scoped content/media. Preserve the project/organization UUIDs across deployments; the deployment URL/commit is not the identity. A new integration key invalidates the old one.

## Connect and validate

1. Apply Business migration 062 through the existing migration process. Register/link the approved organization and owner without sending an invitation. Inspect an existing owner account before making a new organization.
2. In Admin → Custom Projects, add this production website, repository and deployment references. Keep internal notes separate from the client-facing description. Link only actual owned domains/email services; configure hosting/maintenance only at approved contract prices.
3. Set callback to `https://www.kkubaniandco.com/api/jktl/callback` (confirm the current canonical production host first). Declare `site.text`, `site.images`, `site.navigation`, `site.seo`; the adapter enforces the complete field manifest. Start read-only; enable write/publish only for the authorized pilot. Changing callback, fields or scopes clears CMS-test confirmation.
4. Generate the integration key; put it and the IDs in the website's secret environment. Do not paste credentials in notes or chat. Deploy this source independently.
5. Enable readiness/CMS confirmation only for controlled validation and invite the approved pilot owner individually through the existing workflow. These flags are operator assertions; turn them off on failure. Use that authorized account and a fresh one-use Business grant to exercise callback, sign-in and project ownership; confirm foreign organizations and expired grants fail. The editor is `/jktl-cms`, excluded from the sitemap and marked noindex. Direct access fails closed. Sign-in stays in Business, not a second password database.
6. Save a draft; verify the public homepage is unchanged. Explicitly publish approved text, confirm the real homepage, then restore approved text. Try a stale editor revision and revoked CMS scope. Business must authorize every editor read/write/publish. Cookies are HttpOnly, SameSite=Lax, Secure in production and expire after thirty minutes; keys never reach browser JavaScript.
7. Verify acceptance on the correct account and record the completed live CMS checks before declaring the connection tested. Do not send repeated invitations unnecessarily. Approve service proposals explicitly; test invoice checkout only with the established authorized payment procedure.
8. Open a project support request in the shared inbox. Verify support sees safe project context and not internal deployment metadata. Deploy another source commit, confirm published content and the same Business project/services remain connected.

The readiness confirmation is an operator assertion, not an automatic production connectivity check. Until steps above are completed, this is implemented code, not a verified live client connection. No client invitation or charge is sent by installation/build.

## Checks

`node --test tests/jktl-cms.test.mjs` covers full-site field/link/image validation, legacy record preservation, upload limits/types, draft/publish separation, stale writes, signed session expiry/tenant binding, and server-to-server authorization failure/revocation. Mock responses are test fixtures, not live Business assertions. `npm run build` compiles the production application (the existing font requires network access). Business has separate PostgreSQL tests for grants, invitations, tenant isolation, invoicing and shared support.

## Full-site expansion validation

The production build and TypeScript checks passed. Nine automated tests cover schema/security/storage/session/backward compatibility and all-public-page SEO/sitemap coverage. Chromium verified the original homepage on desktop/mobile, all 26 public sitemap routes returning HTTP 200, the gated/noindex editor and invalid media denial. A separate isolated browser fixture with mocked save/upload actions verified section navigation/search, draft-versus-publish behavior, replacement-image controls and read-only restrictions. Server-render tests confirmed changed fixture content appears in homepage, service page, attorney biography, footer and metadata HTML.

These are local/code validations. Migration 063 was applied to the existing Business database; existing owner/project records were verified and preserved. No production website content write, live client invitation, actual client login, or deployed publication has been claimed. The private environment checklist must be completed and the approved owner pilot validated before live use.

## PostgreSQL storage protocol

`GET /api/custom/cms/content?projectId=…&view=published` returns only published fields to the website server authenticated by its project key. Draft reads and all writes additionally require `x-jktl-user-id` and `x-jktl-organization-id`, current Business membership and the relevant content scopes. `POST` accepts fields, expected revision and draft/publish mode; conflicts return 409. Generic transport bounds supplement the website's exact field schema.

`/api/custom/cms/media` stores/retrieves project-bound PNG/JPEG/WebP data with server authorization and upload size/signature checks. The website serves its public image URLs through a credential-free image proxy. Integration credentials never reach browser JavaScript. No automatic copy/import of an earlier external storage store is performed; existing production data would need a separately verified import. No such production content store was configured or written during this pilot.
