"use server";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { requireCms, CMS_COOKIE } from "@/lib/jktl/authorize";
import { saveContent } from "@/lib/jktl/content-store";
export async function saveHomepage(
  input: unknown,
  revision: number,
  publish: boolean,
) {
  try {
    if (typeof publish !== "boolean") throw Error("Choose a valid operation");
    const { config, identity } = await requireCms(
      publish ? "content:publish" : "content:write",
    );
    const next = await saveContent(
      config.projectId,
      input,
      revision,
      publish ? "publish" : "draft",
      identity,
    );
    if (publish) revalidatePath("/");
    return { ok: true as const, revision: next.revision };
  } catch {
    return {
      ok: false as const,
      error:
        "Unable to save. Check your editing permissions and reload the current draft before retrying.",
    };
  }
}
export async function leaveEditor() {
  (await cookies()).delete({ name: CMS_COOKIE, path: "/jktl-cms" });
  revalidatePath("/jktl-cms");
}
