import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { org } from '@/data'
import { LanguageProvider } from '@/i18n/LanguageProvider'
import { ThemeProvider } from '@/theme/ThemeProvider'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import './globals.css'

// Applied before paint to avoid a flash of the wrong theme / language.
const noFlashScript = `(function(){try{var t=localStorage.getItem('theme');if(!t)t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';if(t==='dark')document.documentElement.classList.add('dark');var l=localStorage.getItem('lang');if(l==='en'||l==='hi'||l==='pa')document.documentElement.lang=l;}catch(e){}})();`

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  metadataBase: new URL(org.siteUrl),
  title: {
    default: `${org.name} — Community Welfare in Barotiwala, Himachal Pradesh`,
    template: `%s | ${org.name}`,
  },
  description: org.description,
  applicationName: org.name,
  keywords: [
    'Doon Welfare Foundation',
    'NGO Barotiwala',
    'NGO Himachal Pradesh',
    'charity Himachal Pradesh',
    'education support NGO',
    'daughter marriage support',
    'tree plantation',
    'environment conservation',
    'public drinking water',
    'animal welfare',
    'stray animal rescue',
    'community welfare',
    'volunteer Himachal',
    'donate NGO India',
  ],
  authors: [{ name: org.name }],
  creator: org.name,
  publisher: org.name,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: org.siteUrl,
    siteName: org.name,
    title: `${org.name} — Building a kinder, stronger community`,
    description: org.description,
    images: [
      {
        url: '/logo.svg',
        width: 512,
        height: 512,
        alt: `${org.name} logo`,
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: `${org.name} — Community Welfare in Himachal Pradesh`,
    description: org.description,
    images: ['/logo.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  category: 'Nonprofit',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'NGO',
  name: org.name,
  url: org.siteUrl,
  logo: `${org.siteUrl}/logo.svg`,
  description: org.description,
  email: org.email,
  telephone: '+91-9716186777',
  address: {
    '@type': 'PostalAddress',
    streetAddress: `${org.address.line1}, ${org.address.line2}`,
    addressLocality: 'Barotiwala',
    addressRegion: 'Himachal Pradesh',
    postalCode: org.address.pin,
    addressCountry: 'IN',
  },
  areaServed: 'Barotiwala, Himachal Pradesh',
  sameAs: [org.social.instagram, org.social.facebook],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${poppins.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: noFlashScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ThemeProvider>
          <LanguageProvider>
            <div className="min-h-screen bg-surface">
              <Navbar />
              <main>{children}</main>
              <Footer />
            </div>
            <FloatingWhatsApp />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
