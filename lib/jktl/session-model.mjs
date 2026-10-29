import { createHmac, timingSafeEqual } from "node:crypto";
const sign = (v, secret) =>
  createHmac("sha256", secret)
    .update("jktl-cms-session:" + v)
    .digest("base64url");
export function issue(identity, projectId, secret, now = Date.now()) {
  if (typeof secret !== "string" || secret.length < 32)
    throw Error("CMS session secret is not configured");
  const raw = Buffer.from(
    JSON.stringify({
      ...identity,
      projectId,
      exp: Math.floor(now / 1000) + 1800,
    }),
  ).toString("base64url");
  return raw + "." + sign(raw, secret);
}
export function inspect(
  value,
  projectId,
  organizationId,
  secret,
  now = Date.now(),
) {
  try {
    if (
      typeof secret !== "string" ||
      secret.length < 32 ||
      typeof value !== "string" ||
      value.length > 5000
    )
      return null;
    const [raw, signature, ...extra] = value.split(".");
    if (extra.length || !raw || !signature) return null;
    const a = Buffer.from(signature, "base64url"),
      b = Buffer.from(sign(raw, secret), "base64url");
    if (a.length !== b.length || !timingSafeEqual(a, b)) return null;
    const i = JSON.parse(Buffer.from(raw, "base64url").toString());
    if (
      i.projectId !== projectId ||
      i.organizationId !== organizationId ||
      typeof i.userId !== "string" ||
      !Array.isArray(i.scope) ||
      i.scope.some(
        (s) =>
          !["content:read", "content:write", "content:publish"].includes(s),
      ) ||
      !Number.isInteger(i.exp) ||
      i.exp <= Math.floor(now / 1000) ||
      i.exp > Math.floor(now / 1000) + 1801
    )
      return null;
    return i;
  } catch {
    return null;
  }
}
