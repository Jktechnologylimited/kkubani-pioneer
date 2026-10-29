import "server-only";
import { siteConnection } from "./site-connection";
/** Published content and public website images only. No key, cookie, draft or write support. */
export async function businessStorage(
  resource: "content" | "media",
  file?: string,
) {
  const path =
    `/api/custom/sites/${siteConnection.projectId}/` +
    (resource === "content"
      ? "content"
      : `media/${encodeURIComponent(file || "")}`);
  const response = await fetch(new URL(path, siteConnection.businessOrigin), {
    method: "GET",
    credentials: "omit",
    cache: "no-store",
    redirect: "error",
    signal: AbortSignal.timeout(8000),
  });
  if (!response.ok) throw Error("Published website content is unavailable");
  return response;
}
