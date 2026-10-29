export const MAX_IMAGE_BYTES = 3 * 1024 * 1024;
export function imageType(bytes) {
  if (bytes.length < 12 || bytes.length > MAX_IMAGE_BYTES)
    throw Error("Invalid image size");
  if (bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff)
    return { ext: "jpg", type: "image/jpeg" };
  if (
    bytes.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]))
  )
    return { ext: "png", type: "image/png" };
  if (
    bytes.subarray(0, 4).toString() === "RIFF" &&
    bytes.subarray(8, 12).toString() === "WEBP"
  )
    return { ext: "webp", type: "image/webp" };
  throw Error("Only PNG, JPEG and WebP images are accepted");
}
export function mediaFile(value) {
  if (
    typeof value !== "string" ||
    !/^[a-f0-9]{8}(?:-[a-f0-9]{4}){3}-[a-f0-9]{12}\.(?:jpg|png|webp)$/.test(
      value,
    )
  )
    throw Error("Invalid image");
  return value;
}
