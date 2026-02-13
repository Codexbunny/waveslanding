import { Metadata } from 'next';
import { getLocale, getMessages } from 'next-intl/server';
import LeadershipClient from './LeadershipClient';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const messages = await getMessages() as Record<string, Record<string, Record<string, string>>>;
  
  const seo = messages.seo?.leadership;
  const title = seo?.title || 'Team & Structure | Waves Logix';
  const description = seo?.description || 'A multidisciplinary team applying quantitative research and institutional standards to professional market analysis.';
  
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
        'en': '/about/leadership',
        'es': '/about/leadership',
      },
    },
  };
}

export default async function LeadershipPage() {
  return <LeadershipClient />;
}
