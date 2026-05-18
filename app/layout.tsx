import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import ThemeProvider from '@/components/ThemeProvider'
import type { Metadata } from 'next'
import { Montserrat, Syne } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-montserrat',
  display: 'swap',
})


export const metadata: Metadata = {
  title: {
    default: 'Novda Textile — Woven with Precision. Worn with Pride.',
    template: '%s | Novda Textile',
  },
  description:
    'Novda Textile is a premier garment manufacturer in Tashkent, Uzbekistan — producing T-shirts, underwear, tops, and sportswear for brands worldwide.',
  openGraph: {
    title: 'Novda Textile',
    description: 'Premium garment manufacturing from Tashkent, Uzbekistan.',
    type: 'website',
  },
}

import LanguageProvider from '@/components/LanguageProvider'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${syne.variable}`} suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          <LanguageProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
