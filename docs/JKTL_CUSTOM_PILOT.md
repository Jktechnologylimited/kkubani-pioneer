# K.K. Ubani managed editor

Approved client: **K.K. Ubani and Co**, owner **info@kkubaniandco.com**. Existing Business project: `a88f0b0d-6c51-43d2-8a8d-00e37c18c339`; organization: `5efc5a2b-3117-4993-9d04-cfd5db0bd5b3`.

## Architecture

The editor runs in Business at `/business/custom/<project UUID>/edit`, using the existing Business session, permissions, PostgreSQL database and email provider. The website uses no CMS secrets or new environment variables. Its public project reference is configured in `lib/jktl/site-connection.ts` and permits only published content/image reads.

The website keeps its source repository, layout, SMTP handlers and deployment. The four-field prototype has been expanded to 538 registered fields across all public page content: home, about, services, attorneys, client logos, testimonials, contact/social links, office hours, forms' display copy, navigation, footer, 404 text, images and SEO titles/descriptions. Adding routes or changing application behavior remains reviewed source work.

Business stores the approved field manifest on the project, validates all submitted content against it, and enforces activated owner membership plus read/write/publish scopes. Drafts and publication use optimistic revisions and a bounded actor audit. Uploads accept PNG/JPEG/WebP up to 3 MB with signature checks, through authenticated Business actions. Neither public readers nor other businesses can read drafts or write data.

The old `/jktl-cms` page and callback redirect to the Business editor without forwarding obsolete grant codes. No second site session or private key exchange remains. Existing external-CMS contracts in Business are preserved for other websites.

## Rollout

1. Apply Business migrations 063/064 through the existing migration process.
2. In Team → Custom Projects → **Editor inside JKTL Business**, import this repository's `lib/jktl/content-manifest.json`, select the approved scopes and enable the managed editor for the existing project. No integration key is required.
3. Deploy Business and this repository. The client's current public site remains unchanged until explicitly published content exists.
4. Send the approved owner's existing secure invitation and verify activation/login. Do not email a password or create another account.
5. Verify draft/save/publication, rejected stale edits, revoked permissions, upload behavior, support, and continued connectivity after another website deployment. Confirm with approved harmless content and restore it afterwards. Do not claim activation or live publication before these checks.

Public website and SEO metadata read a shared published snapshot per request. If Business is unavailable, the site falls back to its original source content; editing fails closed. Dynamic public routes remain in the sitemap; the editor and APIs are excluded.

See [the environment checklist](JKTL_PRIVATE_SETTINGS.md): no new website private settings.
