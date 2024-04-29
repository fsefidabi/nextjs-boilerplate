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
