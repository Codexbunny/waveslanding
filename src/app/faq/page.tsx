import { Metadata } from 'next';
import { getLocale, getMessages } from 'next-intl/server';
import FAQPageClient from './FAQPageClient';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const messages = await getMessages() as Record<string, Record<string, string>>;
  
  const title = messages.faq?.metaTitle || 'Frequently Asked Questions | Waves Logix';
  const description = messages.faq?.metaDescription || 'Answers to common questions about Waves Logix services, account management, market analysis, and Elliott Wave methodology.';
  
  return {
    title,
    description,
    keywords: ['FAQ', 'Forex FAQ', 'account management questions', 'Elliott wave FAQ', 'trading questions'],
    openGraph: {
      title,
      description,
      locale,
      type: 'website',
      siteName: 'Waves Logix',
      url: 'https://waveslogix.space/faq',
    },
    twitter: {
      card: 'summary',
      title,
      description,
    },
    alternates: {
      canonical: 'https://waveslogix.space/faq',
      languages: {
        'en': '/faq',
        'ru': '/faq',
      },
    },
  };
}

export default async function FAQPage() {
  return <FAQPageClient />;
}
