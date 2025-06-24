import type { Metadata } from 'next'
import { Geist_Mono, Inter, Noto_Sans } from 'next/font/google'
import './styles/globals.css'
import Providers from '@/providers/providers'

const notoSans = Noto_Sans({
  variable: '--font-noto-sans',
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '500', '600', '700', '900'],
})
const inter = Inter({
  variable: '--font-inter',
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '500', '600', '700', '900'],
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
    <html suppressHydrationWarning className="dark" lang="en">
      <body
        className={`${notoSans.variable} ${inter.variable} ${geistMono.variable} 
        font-(family-name:--font-inter) antialiased
        bg-page`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
