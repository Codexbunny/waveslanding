import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
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
  description: "Independent analytical and advisory firm specializing in Forex, gold, and oil markets. Professional market analysis for high-net-worth clients and institutions.",
  keywords: ["Forex trading", "Elliott wave theory", "account advisory", "trading strategies", "Forex analysis", "Waves Logix", "market analysis", "gold trading", "oil trading"],
  authors: [{ name: "Waves Logix Ltd." }],
  creator: "Waves Logix Ltd.",
  publisher: "Waves Logix Ltd.",
  metadataBase: new URL('https://waveslogix.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Waves Logix',
    title: 'Waves Logix - Professional Forex Analysis & Advisory Services',
    description: 'Independent analytical and advisory firm specializing in Forex, gold, and oil markets.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Waves Logix',
    description: 'Professional Forex Analysis & Advisory Services',
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
};

// Organization JSON-LD schema
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Waves Logix Ltd.',
  url: 'https://waveslogix.com',
  logo: 'https://waveslogix.com/logo.svg',
  description: 'Independent analytical and advisory firm specializing in Forex, gold, and oil markets.',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'Saint Lucia',
  },
  foundingDate: '2025',
  founder: {
    '@type': 'Person',
    name: 'Dr. Georg Gershinski',
  },
  sameAs: [
    'https://t.me/waveslogix',
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
