import React from "react"
import type { Metadata } from "next"
import Providers from "../../providers"

export const metadata: Metadata = {
  title: "Brandi",
  description: "Save time without sacrificing returns."
}

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string
  }
}

export default function RootLayout({
                                     children,
                                     params: { locale }
                                   }: Readonly<RootLayoutProps>) {

  return (
    <html lang={locale}>
      <Providers locale={locale}>
        <body>
          <div id={"test"}>
            {children}
          </div>
        </body>
      </Providers>
    </html>
  )
}
