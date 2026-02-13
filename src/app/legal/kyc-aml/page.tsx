import { Metadata } from 'next';
import { getLocale } from 'next-intl/server';
import LegalPageClient from '../LegalPageClient';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  
  return {
    title: 'KYC / AML Policy | Waves Logix',
    description: 'Know Your Customer and Anti-Money Laundering policy of Waves Logix Ltd.',
    openGraph: {
      title: 'KYC / AML Policy | Waves Logix',
      description: 'KYC and AML compliance policy for Waves Logix Ltd.',
      locale,
      type: 'website',
      siteName: 'Waves Logix',
      url: 'https://waveslogix.space/legal/kyc-aml',
    },
    alternates: {
      canonical: 'https://waveslogix.space/legal/kyc-aml',
      languages: {
        'en': '/legal/kyc-aml',
        'es': '/legal/kyc-aml',
      },
    },
  };
}

export default function KycAmlPage() {
  return <LegalPageClient pageKey="kycAml" />;
}
