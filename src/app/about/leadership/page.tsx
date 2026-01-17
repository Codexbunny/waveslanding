import { Metadata } from 'next';
import { getLocale, getMessages } from 'next-intl/server';
import LeadershipClient from './LeadershipClient';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const messages = await getMessages() as Record<string, Record<string, Record<string, string>>>;
  
  const seo = messages.seo?.leadership;
  const title = seo?.title || 'Leadership | Dr. Georg Gershinski | Waves Logix';
  const description = seo?.description || 'Meet Dr. Georg Gershinski, Founder and Managing Director of Waves Logix.';
  
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
        'ru': '/about/leadership',
      },
    },
  };
}

export default async function LeadershipPage() {
  return <LeadershipClient />;
}
