import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import 'nextra-theme-docs/style.css'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin-ext']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin-ext']
})

export const metadata: Metadata = {
  title: {
    default: 'ASEA',
    template: '%s | ASEA'
  },
  description: 'Açık Kaynak Yazılım Mühendisliği Akademisi',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000')
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navbar = <Navbar logo={<strong>ASEA</strong>} />
  const footer = (
    <Footer>
      MIT {new Date().getFullYear()} © ASEA
    </Footer>
  )

  return (
    <html lang="tr" dir="ltr" suppressHydrationWarning>
      <Head />
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/onurturgut/asea/tree/main/website/src/content"
          editLink="Bu sayfayı GitHub'da düzenle"
          feedback={{ content: 'Geri bildirim paylaş' }}
          footer={footer}
          darkMode
          nextThemes={{ defaultTheme: 'system' }}
          themeSwitch={{ dark: 'Koyu', light: 'Açık', system: 'Sistem' }}
          toc={{ backToTop: 'Yukarı dön', title: 'Bu sayfada' }}
          sidebar={{ autoCollapse: true, defaultMenuCollapseLevel: 1 }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
