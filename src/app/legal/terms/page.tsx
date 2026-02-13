import { Metadata } from 'next';
import { getLocale } from 'next-intl/server';
import LegalPageClient from '../LegalPageClient';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  
  return {
    title: 'Terms of Use | Waves Logix',
    description: 'Terms of Use for Waves Logix Ltd. services, website, and advisory platform.',
    openGraph: {
      title: 'Terms of Use | Waves Logix',
      description: 'Terms of Use for Waves Logix Ltd. services.',
      locale,
      type: 'website',
      siteName: 'Waves Logix',
      url: 'https://waveslogix.space/legal/terms',
    },
    alternates: {
      canonical: 'https://waveslogix.space/legal/terms',
      languages: {
        'en': '/legal/terms',
        'es': '/legal/terms',
      },
    },
  };
}

export default function TermsPage() {
  return <LegalPageClient pageKey="terms" />;
}
