import { NextResponse } from "next/server";
import { businessEditorUrl } from "@/lib/jktl/site-connection";
/** Keep old bookmarks safe; never forward obsolete grant codes or create a second login. */
export async function GET() {
  const response = NextResponse.redirect(businessEditorUrl, 303);
  response.headers.set("Cache-Control", "no-store");
  response.headers.set("Referrer-Policy", "no-referrer");
  response.cookies.set("kkubani_jktl_content", "", {
    path: "/jktl-cms",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 0,
  });
  return response;
}
