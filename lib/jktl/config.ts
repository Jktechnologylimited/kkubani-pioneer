import "server-only";
export function cmsConfig() {
  const projectId = process.env.JKTL_CUSTOM_PROJECT_ID || "",
    organizationId = process.env.JKTL_CUSTOM_ORGANIZATION_ID || "",
    apiKey = process.env.JKTL_CUSTOM_API_KEY || "",
    secret = process.env.JKTL_CMS_SESSION_SECRET || "";
  if (
    process.env.JKTL_CMS_ENABLED !== "true" ||
    !/^[a-f0-9]{8}(?:-[a-f0-9]{4}){3}-[a-f0-9]{12}$/i.test(projectId) ||
    !/^[a-f0-9]{8}(?:-[a-f0-9]{4}){3}-[a-f0-9]{12}$/i.test(organizationId) ||
    !/^[a-f0-9]{64}$/.test(apiKey) ||
    secret.length < 32
  )
    throw Error("Website editing is not connected yet. Contact JKTL support.");
  return { projectId, organizationId, apiKey, secret };
}
