# K.K. Ubani: use the existing JKTL Business environment

**No new private environment variables are required on K.K. Ubani.**

Website editing now runs inside JKTL Business. It uses Business's existing DATABASE_URL, session/login system and configured email provider. Do not copy any of those secrets into the client website.

The K.K. Ubani source contains only its public project reference (`a88f0b0d-6c51-43d2-8a8d-00e37c18c339`) and the public Business origin. It can fetch published website content and public images; it cannot fetch drafts, write content or change permissions. All editing, publication and uploads require the client's normal Business session.

## Client workflow

1. JKTL sends the existing client a secure invitation from **Team → Custom Projects**.
2. The owner, **info@kkubaniandco.com**, accepts and signs into Business.
3. Under **My Projects → K.K. Ubani and Co → Manage website**, the owner edits, saves drafts and publishes.
4. Published content appears on the independently deployed client website.

The editor covers the site's 538 registered content fields and images. It does not expose code, deployment settings, other businesses or database credentials.

## Deployment

Deploy the updated Business and K.K. Ubani repositories. Migration 064 adds the managed-editor configuration to existing project records; migration 063 stores content/images in Business PostgreSQL. The existing owner and project are reused. Account activation remains required; configuration never silently activates an owner.

If you previously added JKTL_CMS_ENABLED, JKTL_CUSTOM_PROJECT_ID, JKTL_CUSTOM_ORGANIZATION_ID, JKTL_CUSTOM_API_KEY or JKTL_CMS_SESSION_SECRET to K.K. Ubani, this managed editor no longer uses them. After the new deployment, they may be removed. Keep the site's existing SMTP/contact-form variables.

No Blob account, client database or separate CMS login is required. Public rendering falls back to original website content if Business is unavailable. Existing external-CMS integrations for other websites retain their existing authentication behavior.
