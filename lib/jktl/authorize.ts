import "server-only";
import { cookies } from "next/headers";
import { cmsConfig } from "./config";
import { inspect } from "./session-model.mjs";
import { validateJktlSession } from "./custom-cms.mjs";
export const CMS_COOKIE = "kkubani_jktl_content";
export async function requireCms(scope = "content:read") {
  const c = cmsConfig(),
    raw = (await cookies()).get(CMS_COOKIE)?.value;
  const identity = inspect(raw, c.projectId, c.organizationId, c.secret);
  if (!identity)
    throw Error("Open this website editor from your JKTL Business project.");
  const current = await validateJktlSession({
    identity,
    projectId: c.projectId,
    apiKey: c.apiKey,
  });
  if (!current.scope.includes(scope))
    throw Error("Your account does not have this editing permission.");
  return { config: c, identity: current };
}
