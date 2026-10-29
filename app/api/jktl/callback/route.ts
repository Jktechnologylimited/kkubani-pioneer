import { NextResponse } from "next/server";
import { cmsConfig } from "@/lib/jktl/config";
import { exchangeJktlGrant } from "@/lib/jktl/custom-cms.mjs";
import { issue } from "@/lib/jktl/session-model.mjs";
import { CMS_COOKIE } from "@/lib/jktl/authorize";
export const runtime = "nodejs";
export async function GET(request: Request) {
  try {
    const c = cmsConfig(),
      params = new URL(request.url).searchParams;
    if (params.get("jktl_project") !== c.projectId) throw Error();
    const identity = await exchangeJktlGrant({
      code: params.get("jktl_code") || "",
      projectId: c.projectId,
      apiKey: c.apiKey,
    });
    if (
      identity.organizationId !== c.organizationId ||
      !identity.scope.includes("content:read")
    )
      throw Error();
    const response = NextResponse.redirect(new URL("/jktl-cms", request.url));
    response.headers.set("Cache-Control", "no-store");
    response.headers.set("Referrer-Policy", "no-referrer");
    response.cookies.set(CMS_COOKIE, issue(identity, c.projectId, c.secret), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/jktl-cms",
      maxAge: 300,
    });
    return response;
  } catch {
    return NextResponse.json(
      {
        error:
          "Website editor access is unavailable. Open a fresh link from JKTL Business.",
      },
      {
        status: 401,
        headers: {
          "Cache-Control": "no-store",
          "Referrer-Policy": "no-referrer",
        },
      },
    );
  }
}
