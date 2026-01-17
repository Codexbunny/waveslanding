import { Metadata } from 'next';
import { getLocale, getMessages } from 'next-intl/server';
import AccountManagementClient from './AccountManagementClient';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const messages = await getMessages() as Record<string, Record<string, Record<string, string>>>;
  
  const seo = messages.seo?.accountManagement;
  const title = seo?.title || 'Professional Account Advisory Services | Waves Logix';
  const description = seo?.description || 'Premium brokerage account advisory for clients with $300,000+ capital.';
  
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
        'en': '/services/account-management',
        'ru': '/services/account-management',
      },
    },
  };
}

export default async function AccountManagementPage() {
  return <AccountManagementClient />;
}
