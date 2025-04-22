import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Innovation Store | Plataforma de Brindes Personalizados',
    template: '%s | Innovation Store'
  },
  description: 'Plataforma completa para brindes personalizados corporativos. Consulte preços em tempo real, prazos de entrega e mais de 1000 produtos para personalização.',
  keywords: ['brindes personalizados', 'brindes corporativos', 'personalização', 'innovation store', 'franquias', 'distribuidores', 'empresas'],
  authors: [{ name: 'Innovation Store' }],
  creator: 'Innovation Store',
  publisher: 'Innovation Store',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://innovationstore.com.br'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Innovation Store | Plataforma de Brindes Personalizados',
    description: 'Consulte preços em tempo real, acompanhe seus pedidos e tenha acesso a mais de 1000 produtos para personalização em um só lugar.',
    url: 'https://innovationstore.com.br',
    siteName: 'Innovation Store',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Innovation Store - Plataforma de Brindes Personalizados'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Innovation Store | Brindes Personalizados',
    description: 'Consulte preços em tempo real, acompanhe seus pedidos e tenha acesso a mais de 1000 produtos para personalização.',
    images: ['/og-image.png'],
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
  verification: {
    google: 'Adicione sua verificação do Google Search Console aqui',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
