import "server-only";
import { get, put } from "@vercel/blob";
import { defaults, initialRecord, record, change } from "./content-model.mjs";
export async function readContent(projectId: string) {
  if (!process.env.BLOB_READ_WRITE_TOKEN)
    throw Error("Website content storage is not configured");
  const value = await get(`jktl-content/${projectId}.json`, {
    access: "private",
    useCache: false,
    abortSignal: AbortSignal.timeout(8000),
  });
  if (!value) return { data: initialRecord(projectId), etag: null };
  if (value.statusCode !== 200 || value.blob.size > 65536)
    throw Error("Invalid website content record");
  const raw = await new Response(value.stream).text();
  if (raw.length > 65536) throw Error("Invalid website content record");
  return { data: record(JSON.parse(raw), projectId), etag: value.blob.etag };
}
export async function saveContent(
  projectId: string,
  input: unknown,
  revision: number,
  mode: string,
  identity: {
    userId: string;
    organizationId: string;
    scope: readonly string[];
  },
) {
  const current = await readContent(projectId),
    next = change(current.data, input, revision, mode, identity);
  try {
    await put(`jktl-content/${projectId}.json`, JSON.stringify(next), {
      access: "private",
      addRandomSuffix: false,
      contentType: "application/json",
      ...(current.etag ? { ifMatch: current.etag } : { allowOverwrite: false }),
      abortSignal: AbortSignal.timeout(8000),
    });
  } catch {
    throw Error("Save was not confirmed. Reload the editor before retrying.");
  }
  return next;
}
export async function publishedHomepage() {
  const project = process.env.JKTL_CUSTOM_PROJECT_ID;
  if (!project || !process.env.BLOB_READ_WRITE_TOKEN) return defaults;
  try {
    return (await readContent(project)).data.published || defaults;
  } catch {
    console.warn(
      "JKTL homepage content unavailable; preserving original website defaults",
    );
    return defaults;
  }
}
