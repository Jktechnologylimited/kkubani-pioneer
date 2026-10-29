import "server-only";
export type SiteIdentity = {
  userId: string;
  organizationId: string;
  scope: readonly string[];
};
export function storageConfigured() {
  return Boolean(
    process.env.JKTL_CUSTOM_PROJECT_ID && process.env.JKTL_CUSTOM_API_KEY,
  );
}
export async function businessStorage(
  resource: "content" | "media",
  query: Record<string, string>,
  options: RequestInit = {},
  identity?: SiteIdentity,
) {
  const project = process.env.JKTL_CUSTOM_PROJECT_ID,
    key = process.env.JKTL_CUSTOM_API_KEY;
  if (!project || !key || !/^[a-f0-9]{64}$/.test(key))
    throw Error("Website content connection is not configured");
  const url = new URL(
    "/api/custom/cms/" + resource,
    "https://business.jktl.com.ng",
  );
  url.searchParams.set("projectId", project);
  for (const [k, v] of Object.entries(query)) url.searchParams.set(k, v);
  const headers = new Headers(options.headers);
  headers.set("Authorization", `Bearer ${key}`);
  if (identity) {
    headers.set("x-jktl-user-id", identity.userId);
    headers.set("x-jktl-organization-id", identity.organizationId);
  }
  const response = await fetch(url, {
    ...options,
    headers,
    cache: "no-store",
    redirect: "error",
    signal: AbortSignal.timeout(8000),
  });
  if (!response.ok)
    throw Error("Website content request failed. Reload before retrying.");
  return response;
}
