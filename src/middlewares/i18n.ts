import createIntlMiddleware from "next-intl/middleware"
import { locales, defaultLocale, localePrefix } from "../configs/i18n"

export default createIntlMiddleware({
  // A list of all locales that are supported
  locales: locales,

  // Used when no locale matches
  defaultLocale: defaultLocale,

  localePrefix: localePrefix
})

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
    "/((?!_next|_vercel|.*\\..*).*)"
  ]
}
