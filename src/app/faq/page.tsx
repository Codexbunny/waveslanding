import { Metadata } from 'next';
import { getLocale, getMessages } from 'next-intl/server';
import FAQPageClient from './FAQPageClient';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const messages = await getMessages() as Record<string, Record<string, string>>;
  
  const title = messages.faq?.metaTitle || 'FAQ - Waves Logix';
  const description = messages.faq?.metaDescription || 'Frequently asked questions about Waves Logix services';
  
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      locale,
      type: 'website',
      siteName: 'Waves Logix',
    },
    alternates: {
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
