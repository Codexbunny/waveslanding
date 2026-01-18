import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import ClientProviders from '@/components/ClientProviders';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Waves Logix - Professional Forex Analysis & Advisory Services",
    template: "%s | Waves Logix",
  },
  description: "Independent analytical and advisory firm specializing in Forex, gold, and oil markets. Elliott Wave analysis, quantitative research, and professional account management for high-net-worth clients and institutions.",
  keywords: [
    "Forex trading",
    "Elliott wave theory",
    "Elliott wave analysis",
    "account management",
    "trading strategies",
    "Forex analysis",
    "Waves Logix",
    "market analysis",
    "gold trading",
    "oil trading",
    "quantitative research",
    "automated trading systems",
    "professional account advisory",
    "XAUUSD analysis",
    "currency trading"
  ],
  authors: [{ name: "Waves Logix Ltd." }],
  creator: "Waves Logix Ltd.",
  publisher: "Waves Logix Ltd.",
  metadataBase: new URL('https://waveslogix.space'),
  alternates: {
    canonical: 'https://waveslogix.space',
    languages: {
      'en': 'https://waveslogix.space',
      'ru': 'https://waveslogix.space/ru',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'ru_RU',
    siteName: 'Waves Logix',
    title: 'Waves Logix - Professional Forex Analysis & Advisory Services',
    description: 'Independent analytical and advisory firm. Elliott Wave analysis, quantitative research, and professional account management.',
    url: 'https://waveslogix.space',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Waves Logix - Professional Forex Analysis',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Waves Logix - Professional Forex Analysis',
    description: 'Elliott Wave analysis and professional account management for Forex, gold, and oil markets.',
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
    // Add verification codes when available
    // google: 'verification_code',
  },
  category: 'finance',
};

// Organization JSON-LD schema
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Waves Logix Ltd.',
  url: 'https://waveslogix.space',
  logo: 'https://waveslogix.space/logo.svg',
  description: 'Independent analytical and advisory firm specializing in Forex, gold, and oil markets using Elliott Wave Theory and quantitative research.',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'Saint Lucia',
  },
  foundingDate: '2025',
  founder: {
    '@type': 'Person',
    name: 'Dr. Georg Gershinski',
    jobTitle: 'CEO & Lead Analyst',
  },
  sameAs: [
    'https://t.me/waveslogix',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    availableLanguage: ['English', 'Russian'],
  },
};

// Website schema for better search appearance
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Waves Logix',
  url: 'https://waveslogix.space',
  description: 'Professional Forex Analysis & Advisory Services',
  inLanguage: ['en', 'ru'],
  publisher: {
    '@type': 'Organization',
    name: 'Waves Logix Ltd.',
  },
};

// Professional Service schema
const professionalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Waves Logix Ltd.',
  url: 'https://waveslogix.space',
  description: 'Professional Forex market analysis and brokerage account advisory services',
  priceRange: '$$$',
  areaServed: 'Worldwide',
  serviceType: ['Financial Analysis', 'Market Research', 'Account Advisory'],
  knowsAbout: ['Forex Trading', 'Elliott Wave Theory', 'Technical Analysis', 'Gold Trading', 'Oil Trading'],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        {/* Preconnect to critical domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="https://t.me" />
        
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        
        {/* Structured Data - Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        
        {/* Structured Data - Professional Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(professionalServiceSchema),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <ClientProviders>
            {children}
          </ClientProviders>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
