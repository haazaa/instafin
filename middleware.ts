import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const hostHeader = request.headers.get("host") || "";
  const hostname = hostHeader.split(":")[0];

  // Only apply coming soon gate for instafin.ai
  if (hostname === "instafin.ai") {
    const path = url.pathname;

    // Allow the coming-soon page itself and Next/static assets to pass through
    const isAllowed =
      path.startsWith("/coming-soon") ||
      path.startsWith("/_next") ||
      path.startsWith("/api") ||
      path === "/favicon.ico" ||
      path.endsWith(".svg") ||
      path.endsWith(".png") ||
      path.endsWith(".jpg") ||
      path.endsWith(".jpeg") ||
      path.endsWith(".webp") ||
      path.endsWith(".ico");

    if (!isAllowed) {
      const rewriteUrl = url.clone();
      rewriteUrl.pathname = "/coming-soon";
      return NextResponse.rewrite(rewriteUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next).*)"],
};
