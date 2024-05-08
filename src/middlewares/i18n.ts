import createIntlMiddleware from "next-intl/middleware"
import { locales, defaultLocale, localePrefix } from "@/lib/i18n"

export default createIntlMiddleware({
  // A list of all locales that are supported
  locales: locales,

  // Used when no locale matches
  defaultLocale: defaultLocale,

  localePrefix: localePrefix
})
