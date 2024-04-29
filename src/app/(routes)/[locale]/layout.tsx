import type { Metadata } from "next"
import { locales } from "../../../configs/i18n"
import Providers from "../../providers"

export const metadata: Metadata = {
  title: "Brandi",
  description: "Save time without sacrificing returns."
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
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
