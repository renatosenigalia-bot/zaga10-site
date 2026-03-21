import type { Metadata } from 'next'
import { Bebas_Neue, Barlow_Semi_Condensed, Inter } from 'next/font/google'
import './globals.css'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

const barlowSemiCondensed = Barlow_Semi_Condensed({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-barlow-sc',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const siteUrl = 'https://zaga10.com.br'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Zaga10 Comunicação — Branding, Design e Estratégia',
    template: '%s | Zaga10 Comunicação',
  },
  description:
    'Agência de comunicação especializada em branding, identidade visual, design gráfico e estratégia de conteúdo. Clientes: Nestlé, Bayer, Apsen.',
  keywords: [
    'agência de comunicação',
    'branding',
    'identidade visual',
    'design gráfico',
    'estratégia de conteúdo',
    'social media',
    'Zaga10',
  ],
  authors: [{ name: 'Zaga10 Comunicação', url: siteUrl }],
  creator: 'Zaga10 Comunicação',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteUrl,
    siteName: 'Zaga10 Comunicação',
    title: 'Zaga10 Comunicação — Branding, Design e Estratégia',
    description:
      'Agência de comunicação especializada em branding, identidade visual e estratégia de conteúdo.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zaga10 Comunicação',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zaga10 Comunicação — Branding, Design e Estratégia',
    description:
      'Agência de comunicação especializada em branding, identidade visual e estratégia de conteúdo.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Zaga10 Comunicação',
  description:
    'Agência de comunicação especializada em branding, identidade visual, design gráfico e estratégia de conteúdo.',
  url: siteUrl,
  logo: `${siteUrl}/images/logo/zaga10-logo-principal.svg`,
  email: 'contato@zaga10.com.br',
  sameAs: [
    'https://www.instagram.com/zaga10comunicacao',
    'https://www.linkedin.com/company/zaga10',
  ],
  knowsAbout: [
    'Branding',
    'Identidade Visual',
    'Design Gráfico',
    'Estratégia de Conteúdo',
    'Social Media',
    'Campanhas de Marketing',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt-BR"
      className={`${bebasNeue.variable} ${barlowSemiCondensed.variable} ${inter.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="font-body bg-white text-brand-navy antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-xl focus:py-md focus:bg-brand-electric focus:text-brand-navy focus:font-body focus:font-semibold focus:text-body-sm focus:rounded-md"
        >
          Pular para o conteúdo principal
        </a>
        {children}
      </body>
    </html>
  )
}
