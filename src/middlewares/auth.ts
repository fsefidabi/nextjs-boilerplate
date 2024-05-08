import { withAuth } from "next-auth/middleware"
import { NextRequest } from "next/server"
import withI18nMiddleware from "./i18n"
import { locales } from "@/lib/i18n"

export default withAuth(
  // Note that this callback is only invoked if
  // the `authorized` callback has returned `true`
  // and not for pages listed in `pages`.
  function onSuccess(request) {
    return withI18nMiddleware(request)
  },
  {
    callbacks: {
      authorized: ({ token }) => token != null
    },
    pages: {
      signIn: "/login"
    }
  }
)

const publicPages = ["/login"]

export function isPublicPage(request: NextRequest) {
  const publicPathnameRegex = RegExp(
    `^(/(${locales.join("|")}))?(${publicPages
      .flatMap((p) => (p === "/" ? ["", "/"] : p))
      .join("|")})/?$`,
    "i"
  )
  return publicPathnameRegex.test(request.nextUrl.pathname)
}
