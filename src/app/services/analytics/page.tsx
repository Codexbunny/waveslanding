import { Metadata } from 'next';
import { getLocale, getMessages } from 'next-intl/server';
import AnalyticsClient from './AnalyticsClient';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const messages = await getMessages() as Record<string, Record<string, Record<string, string>>>;
  
  const seo = messages.seo?.analytics;
  const title = seo?.title || 'Advanced Forex Market Analysis | Waves Logix';
  const description = seo?.description || 'High-precision Forex market analysis using Elliott Wave Theory and quantitative research for professional traders and brokerage companies.';
  
  return {
    title,
    description,
    keywords: ['Forex analysis', 'Elliott wave analysis', 'market research', 'trading signals', 'technical analysis', 'XAUUSD', 'gold analysis'],
    openGraph: {
      title,
      description,
      locale,
      type: 'website',
      siteName: 'Waves Logix',
      url: 'https://waveslogix.space/services/analytics',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: 'https://waveslogix.space/services/analytics',
      languages: {
        'en': '/services/analytics',
        'es': '/services/analytics',
      },
    },
  };
}

export default async function AnalyticsPage() {
  return <AnalyticsClient />;
}
