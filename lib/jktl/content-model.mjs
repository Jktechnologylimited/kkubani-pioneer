/** Only these four homepage fields are editable. No code, URLs, credentials or deployment settings. */
export const defaults = Object.freeze({
  heroTitle: "Expert Legal Counsel",
  heroDescription:
    "Providing strategic legal solutions tailored to your needs.",
  welcomeTitle: "Welcome to K.K. Ubani & Co.",
  welcomeSubtitle: "...all round legal service at its optimum",
});
const limits = {
  heroTitle: 120,
  heroDescription: 500,
  welcomeTitle: 160,
  welcomeSubtitle: 500,
};
export function fields(value) {
  if (
    !value ||
    typeof value !== "object" ||
    Array.isArray(value) ||
    Object.keys(value).length !== 4 ||
    Object.keys(value).some((k) => !Object.hasOwn(limits, k))
  )
    throw Error("Only approved homepage fields can be edited");
  const result = {};
  for (const [k, max] of Object.entries(limits)) {
    if (
      typeof value[k] !== "string" ||
      !value[k].trim() ||
      value[k].length > max ||
      /[\u0000-\u0008\u000b\u000c\u000e-\u001f]/.test(value[k])
    )
      throw Error("Check the homepage text and field lengths");
    result[k] = value[k].trim();
  }
  return result;
}
export function initialRecord(projectId) {
  return {
    version: 1,
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
    value.version !== 1 ||
    value.projectId !== projectId ||
    !Number.isSafeInteger(value.revision) ||
    value.revision < 0 ||
    !Array.isArray(value.audit) ||
    value.audit.length > 100
  )
    throw Error("Invalid website content record");
  return {
    ...value,
    draft: fields(value.draft),
    published: value.published === null ? null : fields(value.published),
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
