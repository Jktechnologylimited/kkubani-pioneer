import "server-only";
import { defaults, initialRecord, record, fields } from "./content-model.mjs";
import {
  businessStorage,
  storageConfigured,
  type SiteIdentity,
} from "./business-storage";
export async function readContent(projectId: string, identity: SiteIdentity) {
  if (projectId !== process.env.JKTL_CUSTOM_PROJECT_ID)
    throw Error("Invalid website project");
  const value = await (
    await businessStorage("content", { view: "draft" }, {}, identity)
  ).json();
  return {
    data: value === null ? initialRecord(projectId) : record(value, projectId),
  };
}
export async function saveContent(
  projectId: string,
  input: unknown,
  revision: number,
  mode: string,
  identity: SiteIdentity,
) {
  if (
    projectId !== process.env.JKTL_CUSTOM_PROJECT_ID ||
    !Number.isSafeInteger(revision) ||
    !["draft", "publish"].includes(mode) ||
    !identity.scope.includes("content:write") ||
    (mode === "publish" && !identity.scope.includes("content:publish"))
  )
    throw Error("Content operation is not authorized");
  const approved = fields(input);
  const response = await businessStorage(
    "content",
    {},
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fields: approved, revision, mode }),
    },
    identity,
  );
  const next = record(await response.json(), projectId);
  if (next.revision !== revision + 1)
    throw Error("Unexpected saved revision. Reload before retrying.");
  return next;
}
export async function publishedHomepage(): Promise<Record<string, string>> {
  if (!storageConfigured()) return defaults;
  try {
    const result = await (
      await businessStorage("content", { view: "published" })
    ).json();
    return (
      result.published === null ? defaults : fields(result.published)
    ) as Record<string, string>;
  } catch {
    console.warn(
      "JKTL published content unavailable; preserving original website defaults",
    );
    return defaults;
  }
}
