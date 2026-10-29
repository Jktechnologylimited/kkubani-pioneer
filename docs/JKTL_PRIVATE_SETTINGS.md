# K.K. Ubani: private settings to add

In **Vercel → existing K.K. Ubani project → Settings → Environment Variables**, add these for **Production**. Mark private values Sensitive. Redeploy after saving. Do not add a NEXT_PUBLIC prefix.

| Name | Value/source |
| --- | --- |
| `JKTL_CMS_ENABLED` | `true` when ready for the controlled connection test |
| `JKTL_CUSTOM_PROJECT_ID` | `a88f0b0d-6c51-43d2-8a8d-00e37c18c339` (verified existing project) |
| `JKTL_CUSTOM_ORGANIZATION_ID` | `5efc5a2b-3117-4993-9d04-cfd5db0bd5b3` (verified existing client) |
| `JKTL_CUSTOM_API_KEY` | Generate the project's integration key in Business; copy the one-time value directly into Vercel |
| `JKTL_CMS_SESSION_SECRET` | Generate a new private value with `openssl rand -hex 32` and save the output directly in Vercel |

Do not put the Business DATABASE_URL, GitHub credentials, Vercel API tokens or the client's SMTP password into these fields. Existing SMTP settings remain unchanged. Integration IDs are references; the API key, session secret and storage token are private. Preview deployments must not share production project credentials; otherwise preview edits could affect production.

In **Business → Team → Custom Projects**, use:

- Client: **K.K. Ubani and Co**.
- Owner: **info@kkubaniandco.com** (find existing user/organization before creating one).
- Website: **https://www.kkubaniandco.com** (confirm the deployed canonical domain).
- CMS callback: **https://www.kkubaniandco.com/api/jktl/callback**.
- Approved field identifiers: **site.text**, **site.images**, **site.navigation**, **site.seo**. The website independently enforces its complete 538-field manifest. These four identifiers describe supported groups; they are not wildcard permission to execute code.
- Scope: read initially; add write and publish for the authorized client once the controlled validation is ready. Changing fields/scopes clears the Business CMS-test confirmation, so reconfirm only after reviewing the updated adapter.

The account must be invited/activated through the existing secure Business invitation flow, not by emailing a password. Readiness confirmations are operator assertions, not proof of a completed live test. Verify draft, publication, revocation, support and independent redeployment before declaring the connection live. No billing price is assumed or automatically charged.

## Database verification

The Business database connection is now available and was verified through the workspace proxy. Migration 063 has been applied, and the existing K.K. Ubani owner, client organization and project were found and preserved. No duplicate account/project was created. The site does not need DATABASE_URL.

The existing project currently has no integration key, no confirmed CMS connection and an owner invitation that has not been activated. Generate the integration key in Business, add the five website settings above and deploy both applications. Configure the approved field groups/scopes, then perform the controlled client invitation/editor validation. No live client email was sent or website content changed during these storage changes.
