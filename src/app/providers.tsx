import React from "react"
import { NextIntlClientProvider, useMessages } from "next-intl"
import AuthProvider from "./context/AuthProvider"

export default function Providers({ locale, children }) {
  const messages = useMessages()

  return (
    <AuthProvider>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <body>
          {children}
        </body>
      </NextIntlClientProvider>
    </AuthProvider>
  )
}
