import manifest from "./content-manifest.json" with { type: "json" };
export { manifest };
export const defaults = Object.freeze(
  Object.fromEntries(
    Object.entries(manifest).map(([id, f]) => [id, f.default]),
  ),
);
const legacy = [
  "heroTitle",
  "heroDescription",
  "welcomeTitle",
  "welcomeSubtitle",
];
export const MAX_RECORD_BYTES = 524288;
export function fields(value) {
  if (
    !value ||
    typeof value !== "object" ||
    Array.isArray(value) ||
    Object.keys(value).length !== Object.keys(manifest).length ||
    Object.keys(value).some((k) => !Object.hasOwn(manifest, k))
  )
    throw Error("Only registered website content fields can be edited");
  const result = {};
  for (const [id, field] of Object.entries(manifest)) {
    const v = value[id];
    if (
      typeof v !== "string" ||
      !v.trim() ||
      v.length > field.max ||
      /[\u0000-\u0008\u000b\u000c\u000e-\u001f]/.test(v)
    )
      throw Error("Check the website text and field lengths");
    if (field.kind === "image" && !validImage(v))
      throw Error(
        "Use an existing website image, an uploaded image, or an approved HTTPS image URL",
      );
    if (field.kind === "link" && !validLink(v))
      throw Error("Use a safe website, HTTPS, email or telephone link");
    result[id] = v;
  }
  if (new TextEncoder().encode(JSON.stringify(result)).length > 200000)
    throw Error("Website content exceeds the allowed size");
  return result;
}
export function validImage(v) {
  if (typeof v !== "string" || /[\s\\<>"'()]/.test(v) || v.includes(".."))
    return false;
  if (v.startsWith("/api/") && !v.startsWith("/api/jktl/media/")) return false;
  if (/^\/(?!\/)/.test(v))
    return (
      /^\/(?:[a-z0-9_&.%!+\/-])+\.(?:png|jpe?g|webp|gif|avif)$/i.test(v) ||
      /^\/api\/jktl\/media\/[a-f0-9-]{36}\.(?:png|jpg|webp)$/.test(v)
    );
  try {
    const u = new URL(v);
    return (
      u.protocol === "https:" &&
      u.hostname === "images.unsplash.com" &&
      !u.username &&
      !u.password &&
      !u.port
    );
  } catch {
    return false;
  }
}
export function validLink(v) {
  if (
    typeof v !== "string" ||
    /[\u0000-\u0020\\<>"']/.test(v) ||
    v.startsWith("//")
  )
    return false;
  if (v.startsWith("/") && !v.startsWith("/api/") && !v.includes(".."))
    return true;
  if (/^#[a-z0-9_-]+$/i.test(v)) return true;
  if (
    /^mailto:[^?\s@]+@[^?\s@]+\.[^?\s@]+$/.test(v) ||
    /^tel:\+?[\d()-]+$/.test(v)
  )
    return true;
  try {
    const u = new URL(v);
    return (
      u.protocol === "https:" &&
      !u.username &&
      !u.password &&
      !u.port &&
      u.hostname.includes(".") &&
      !/^\d+\.\d+\.\d+\.\d+$/.test(u.hostname) &&
      !u.hostname.endsWith(".local") &&
      !u.hostname.endsWith(".localhost")
    );
  } catch {
    return false;
  }
}
export function initialRecord(projectId) {
  return {
    version: 2,
    projectId,
    revision: 0,
    draft: { ...defaults },
    published: null,
    audit: [],
  };
}
export function record(value, projectId) {
  if (
    !value ||
    ![1, 2].includes(value.version) ||
    value.projectId !== projectId ||
    !Number.isSafeInteger(value.revision) ||
    value.revision < 0 ||
    !Array.isArray(value.audit) ||
    value.audit.length > 100
  )
    throw Error("Invalid website content record");
  const hydrate = (v) => {
    if (
      !v ||
      typeof v !== "object" ||
      Array.isArray(v) ||
      Object.keys(v).some((k) => !Object.hasOwn(manifest, k))
    )
      throw Error("Invalid content manifest");
    if (value.version === 1 && Object.keys(v).some((k) => !legacy.includes(k)))
      throw Error("Invalid legacy content");
    return fields({ ...defaults, ...v });
  };
  return {
    ...value,
    version: 2,
    draft: hydrate(value.draft),
    published: value.published === null ? null : hydrate(value.published),
  };
}
export function change(
  current,
  input,
  revision,
  mode,
  identity,
  now = new Date().toISOString(),
) {
  if (!Number.isSafeInteger(revision) || revision !== current.revision)
    throw Error("Content changed. Reload before saving");
  if (
    !["draft", "publish"].includes(mode) ||
    !identity.scope.includes("content:write") ||
    (mode === "publish" && !identity.scope.includes("content:publish"))
  )
    throw Error("This content operation is not authorized");
  const next = fields(input);
  return {
    ...current,
    version: 2,
    revision: current.revision + 1,
    draft: next,
    published: mode === "publish" ? next : current.published,
    audit: [
      ...current.audit,
      {
        revision: current.revision + 1,
        action: mode,
        actor: identity.userId,
        organizationId: identity.organizationId,
        at: now,
      },
    ].slice(-100),
  };
}
