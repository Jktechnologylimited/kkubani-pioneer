import { businessStorage } from "@/lib/jktl/business-storage";
import { mediaFile, MAX_IMAGE_BYTES } from "@/lib/jktl/media-model.mjs";
export const runtime = "nodejs";
export async function GET(
  _request: Request,
  context: { params: Promise<{ file: string }> },
) {
  try {
    const file = mediaFile((await context.params).file),
      response = await businessStorage("media", {
        mediaId: file.split(".")[0],
      });
    const type = file.endsWith(".jpg")
      ? "image/jpeg"
      : file.endsWith(".png")
        ? "image/png"
        : "image/webp";
    if (response.headers.get("Content-Type") !== type) throw Error();
    const bytes = await response.arrayBuffer();
    if (bytes.byteLength > MAX_IMAGE_BYTES) throw Error();
    return new Response(bytes, {
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
