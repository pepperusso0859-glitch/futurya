import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, DM_Sans } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/providers'

export const metadata: Metadata = {
  title: {
    default: 'Futurya – Science of Human Movement | Personal Training, EMS & Wellness a Taranto',
    template: '%s | Futurya',
  },
  description: 'Centro di personal training, movimento funzionale, allenamento EMS e recupero/benessere a Taranto. Metodo scientifico su misura per risultati duraturi. Piazza Medaglie D\'Oro, 10.',
  keywords: ['personal training Taranto', 'palestra Taranto', 'EMS Taranto', 'allenamento funzionale', 'wellness Taranto', 'sauna Taranto', 'recupero sportivo', 'elettrostimolazione'],
  authors: [{ name: 'Futurya' }],
  creator: 'Futurya',
  publisher: 'Futurya',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    url: 'https://futurya.it',
    siteName: 'Futurya – Science of Human Movement',
    title: 'Futurya – Science of Human Movement | Personal Training, EMS & Wellness a Taranto',
    description: 'Centro di personal training, movimento funzionale, allenamento EMS e recupero/benessere a Taranto. Metodo scientifico su misura per risultati duraturi.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Futurya – Science of Human Movement',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Futurya – Science of Human Movement',
    description: 'Personal training, EMS e wellness a Taranto con metodo scientifico su misura.',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'google-site-verification-code',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#faf6f3' },
    { media: '(prefers-color-scheme: dark)', color: '#080808' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="min-h-screen bg-surface-darker text-brand-50 antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}