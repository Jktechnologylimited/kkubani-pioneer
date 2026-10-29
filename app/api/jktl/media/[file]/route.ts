import { get } from "@vercel/blob";
import { mediaFile, MAX_IMAGE_BYTES } from "@/lib/jktl/media-model.mjs";
export const runtime = "nodejs";
export async function GET(
  _request: Request,
  context: { params: Promise<{ file: string }> },
) {
  try {
    const file = mediaFile((await context.params).file),
      project = process.env.JKTL_CUSTOM_PROJECT_ID;
    if (!project || !process.env.BLOB_READ_WRITE_TOKEN) throw Error();
    const result = await get(`jktl-content/${project}/images/${file}`, {
      access: "private",
      useCache: true,
      abortSignal: AbortSignal.timeout(8000),
    });
    if (
      !result ||
      result.statusCode !== 200 ||
      result.blob.size > MAX_IMAGE_BYTES
    )
      throw Error();
    const type = file.endsWith(".jpg")
      ? "image/jpeg"
      : file.endsWith(".png")
        ? "image/png"
        : "image/webp";
    return new Response(result.stream, {
      headers: {
        "Content-Type": type,
        "X-Content-Type-Options": "nosniff",
        "Cache-Control": "public, max-age=31536000, immutable",
        "Content-Security-Policy": "default-src 'none'; sandbox",
      },
    });
  } catch {
    return new Response("Image not found", {
      status: 404,
      headers: { "Cache-Control": "no-store" },
    });
  }
}
