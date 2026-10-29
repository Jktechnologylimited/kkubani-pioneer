"use server";
import { randomUUID } from "node:crypto";
import { businessStorage } from "@/lib/jktl/business-storage";
import { MAX_IMAGE_BYTES, imageType } from "@/lib/jktl/media-model.mjs";
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
    if (publish) revalidatePath("/", "layout");
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
export async function uploadWebsiteImage(data: FormData) {
  try {
    const { identity } = await requireCms("content:write");
    const image = data.get("image");
    if (
      !(image instanceof File) ||
      image.size > MAX_IMAGE_BYTES ||
      image.size < 12
    )
      throw Error();
    const buffer = Buffer.from(await image.arrayBuffer()),
      format = imageType(buffer),
      name = randomUUID() + "." + format.ext;
    await businessStorage(
      "media",
      { mediaId: name.split(".")[0] },
      {
        method: "POST",
        headers: { "Content-Type": format.type },
        body: new Uint8Array(buffer),
      },
      identity,
    );
    return { ok: true as const, url: "/api/jktl/media/" + name };
  } catch {
    return {
      ok: false as const,
      error:
        "Image upload failed. Use PNG, JPEG or WebP up to 3 MB and check your editing access.",
    };
  }
}
