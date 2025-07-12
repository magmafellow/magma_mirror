import type { Metadata } from 'next'
import { Geist_Mono, Inter, Noto_Sans } from 'next/font/google'
import './styles/globals.css'
import Providers from '@/providers/providers'
import Header from '@/components-manual/blocks/header/header'
import { Fragment } from 'react'

const notoSans = Noto_Sans({
  variable: '--font-noto-sans',
  subsets: ['cyrillic', 'latin', 'cyrillic-ext'],
})
const inter = Inter({
  variable: '--font-inter',
  subsets: ['cyrillic', 'latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})
// const geistSans = Geist({
//   variable: '--font-geist-sans',
//   subsets: ['latin'],
// })

export const metadata: Metadata = {
  title: 'Magma Mirror',
  description: 'Powered by Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`${notoSans.variable} ${inter.variable} ${geistMono.variable} 
        font-(family-name:--font-inter) antialiased
        bg-page`}
      >
        <Providers>
          <Fragment>{children}</Fragment>
          <div className="dialog_box"></div>
          <div className="something_box"></div>
        </Providers>
      </body>
    </html>
  )
}
