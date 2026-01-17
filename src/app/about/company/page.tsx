import { Metadata } from 'next';
import { getLocale, getMessages } from 'next-intl/server';
import AboutCompanyClient from './AboutCompanyClient';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const messages = await getMessages() as Record<string, Record<string, Record<string, string>>>;
  
  const seo = messages.seo?.aboutCompany;
  const title = seo?.title || 'About Waves Logix Ltd. | Company Overview';
  const description = seo?.description || 'Independent analytical and advisory firm based in Saint Lucia.';
  
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
        'en': '/about/company',
        'ru': '/about/company',
      },
    },
  };
}

export default async function AboutCompanyPage() {
  return <AboutCompanyClient />;
}
