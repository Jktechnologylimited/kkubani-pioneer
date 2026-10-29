# K.K. Ubani: private settings to add

In **Vercel → existing K.K. Ubani project → Settings → Environment Variables**, add these for **Production**. Mark private values Sensitive. Redeploy after saving. Do not add a NEXT_PUBLIC prefix.

| Name | Value/source |
| --- | --- |
| `JKTL_CMS_ENABLED` | `true` when ready for the controlled connection test |
| `JKTL_CUSTOM_PROJECT_ID` | Stable project UUID shown by Business → Team → Custom Projects, K.K. Ubani project |
| `JKTL_CUSTOM_ORGANIZATION_ID` | Client organization UUID shown in the same Business screen |
| `JKTL_CUSTOM_API_KEY` | Generate the project's integration key in Business; copy the one-time value directly into Vercel |
| `JKTL_CMS_SESSION_SECRET` | Generate a new private value with `openssl rand -hex 32` and save the output directly in Vercel |
| `BLOB_READ_WRITE_TOKEN` | In this Vercel project, connect/create a **private Vercel Blob store**. Vercel supplies this variable. Use the same store across deployments. |

Do not put the Business DATABASE_URL, GitHub credentials, Vercel API tokens or the client's SMTP password into these fields. Existing SMTP settings remain unchanged. Integration IDs are references; the API key, session secret and storage token are private. Preview deployments must not share the production content store/project credentials; otherwise preview edits could affect production.

In **Business → Team → Custom Projects**, use:

- Client: **K.K. Ubani and Co**.
- Owner: **info@kkubaniandco.com** (find existing user/organization before creating one).
- Website: **https://www.kkubaniandco.com** (confirm the deployed canonical domain).
- CMS callback: **https://www.kkubaniandco.com/api/jktl/callback**.
- Approved field identifiers: **site.text**, **site.images**, **site.navigation**, **site.seo**. The website independently enforces its complete 538-field manifest. These four identifiers describe supported groups; they are not wildcard permission to execute code.
- Scope: read initially; add write and publish for the authorized client once the controlled validation is ready. Changing fields/scopes clears the Business CMS-test confirmation, so reconfirm only after reviewing the updated adapter.

The account must be invited/activated through the existing secure Business invitation flow, not by emailing a password. Readiness confirmations are operator assertions, not proof of a completed live test. Verify draft, publication, revocation, support and independent redeployment before declaring the connection live. No billing price is assumed or automatically charged.

## Database environment distinction

The running Codex process and the saved cloud configuration were checked on 29 October 2026: this process has no DATABASE_URL, and the saved cloud secrets list is empty. A variable stored only in Vercel does not reach Codex. To allow live client registration from this workspace, save DATABASE_URL as a secret in the **Codex cloud environment used by this conversation**, then start/restart a workspace with that configuration. Do not paste the value into chat. No connection string is included in this guide.

Until the database binding and website settings are available, the code can be built/tested, but no live client record or invitation is claimed to exist.
