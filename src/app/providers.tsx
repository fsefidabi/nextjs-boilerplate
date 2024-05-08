import React from "react"
import { NextIntlClientProvider, useMessages } from "next-intl"
import AuthProvider from "@app/context/AuthProvider"

type ProvidersProps = {
  locale: string;
  children: React.ReactNode;
}

export default function Providers({ locale, children }: ProvidersProps) {
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
