import { Metadata } from 'next';
import { getLocale, getMessages } from 'next-intl/server';
import AccountManagementClient from './AccountManagementClient';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const messages = await getMessages() as Record<string, Record<string, Record<string, string>>>;
  
  const seo = messages.seo?.accountManagement;
  const title = seo?.title || 'Professional Brokerage Account Advisory | Waves Logix';
  const description = seo?.description || 'Premium brokerage account advisory and management for high-net-worth clients. Specialized in Forex, gold, and oil markets with performance-based compensation.';
  
  return {
    title,
    description,
    keywords: ['account management', 'brokerage advisory', 'Forex account management', 'PAMM', 'managed accounts', 'wealth management', 'professional trading'],
    openGraph: {
      title,
      description,
      locale,
      type: 'website',
      siteName: 'Waves Logix',
      url: 'https://waveslogix.space/services/account-management',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: 'https://waveslogix.space/services/account-management',
      languages: {
        'en': '/services/account-management',
        'es': '/services/account-management',
      },
    },
  };
}

export default async function AccountManagementPage() {
  return <AccountManagementClient />;
}
