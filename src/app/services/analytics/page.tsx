import { Metadata } from 'next';
import { getLocale, getMessages } from 'next-intl/server';
import AnalyticsClient from './AnalyticsClient';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const messages = await getMessages() as Record<string, Record<string, Record<string, string>>>;
  
  const seo = messages.seo?.analytics;
  const title = seo?.title || 'Advanced Forex Market Analysis | Waves Logix';
  const description = seo?.description || 'High-precision Forex analysis for professional traders and brokerage companies.';
  
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
        'en': '/services/analytics',
        'ru': '/services/analytics',
      },
    },
  };
}

export default async function AnalyticsPage() {
  return <AnalyticsClient />;
}
