import { Metadata } from 'next';
import { getLocale } from 'next-intl/server';
import LegalPageClient from '../LegalPageClient';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  
  return {
    title: 'Privacy Policy | Waves Logix',
    description: 'Privacy Policy of Waves Logix Ltd. — how we collect, use, and protect your personal information.',
    openGraph: {
      title: 'Privacy Policy | Waves Logix',
      description: 'Privacy Policy for Waves Logix Ltd.',
      locale,
      type: 'website',
      siteName: 'Waves Logix',
      url: 'https://waveslogix.space/legal/privacy',
    },
    alternates: {
      canonical: 'https://waveslogix.space/legal/privacy',
      languages: {
        'en': '/legal/privacy',
        'es': '/legal/privacy',
      },
    },
  };
}

export default function PrivacyPage() {
  return <LegalPageClient pageKey="privacy" />;
}
