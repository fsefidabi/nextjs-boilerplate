import { NextRequest } from "next/server"
import withI18nMiddleware from "./middlewares/i18n"
import withAuthMiddleware, { isPublicPage } from "./middlewares/auth"

export default function middleware(request: NextRequest) {
  if (isPublicPage(request)) {
    return withI18nMiddleware(request)
  } else {
    return (withAuthMiddleware as any)(request)
  }
}

export const config = {
  matcher: [
    // Enable a redirect to a matching locale at the root
    "/",

    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    // "/(de|en)/:path*",
    "/(en)/:path*",

    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    "/((?!api|_next|_vercel|static|.*\\..*).*)"
  ]
}
