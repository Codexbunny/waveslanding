import { Metadata } from 'next';
import { getLocale, getMessages } from 'next-intl/server';
import ResearchListClient from './ResearchListClient';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const messages = await getMessages() as Record<string, Record<string, string>>;
  
  const title = messages.research?.metaTitle || 'Research & Insights | Waves Logix';
  const description = messages.research?.metaDescription || 'Market analysis, research articles, and insights from Waves Logix';
  
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
        'en': '/research',
        'ru': '/research',
      },
    },
  };
}

export default async function ResearchPage() {
  return <ResearchListClient />;
}
