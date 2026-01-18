import { Metadata } from 'next';
import { getLocale, getMessages } from 'next-intl/server';
import AboutCompanyClient from './AboutCompanyClient';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const messages = await getMessages() as Record<string, Record<string, Record<string, string>>>;
  
  const seo = messages.seo?.aboutCompany;
  const title = seo?.title || 'About Waves Logix Ltd. | Company Overview';
  const description = seo?.description || 'Waves Logix Ltd. is an independent analytical and advisory firm incorporated in Saint Lucia, specializing in Forex, gold, and oil market analysis.';
  
  return {
    title,
    description,
    keywords: ['about Waves Logix', 'Forex company', 'market analysis firm', 'Saint Lucia company', 'trading advisory'],
    openGraph: {
      title,
      description,
      locale,
      type: 'website',
      siteName: 'Waves Logix',
      url: 'https://waveslogix.space/about/company',
    },
    twitter: {
      card: 'summary',
      title,
      description,
    },
    alternates: {
      canonical: 'https://waveslogix.space/about/company',
      languages: {
        'en': '/about/company',
        'ru': '/about/company',
      },
    },
  };
}

export default async function AboutCompanyPage() {
  return <AboutCompanyClient />;
}
