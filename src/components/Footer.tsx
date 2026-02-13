'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Logo from './Logo';
import CTAButton from './CTAButton';
import TelegramIcon from './TelegramIcon';

const TELEGRAM_URL = process.env.NEXT_PUBLIC_TELEGRAM_URL || 'https://t.me/waveslogix';

export default function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');
  const tCommon = useTranslations('common');

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 purple-gradient rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Logo width={180} height={50} variant="dark" />
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              {t('description')}
            </p>
            <CTAButton href={TELEGRAM_URL} variant="secondary" className="bg-white text-purple-600 hover:bg-purple-50 border-0">
              {t('telegramChannel')}
            </CTAButton>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">{t('servicesTitle')}</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/services/account-management" 
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-purple-500 rounded-full group-hover:scale-150 transition-transform"></span>
                  {tNav('accountManagement')}
                </Link>
              </li>
              <li>
                <Link 
                  href="/services/analytics" 
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-purple-500 rounded-full group-hover:scale-150 transition-transform"></span>
                  {tNav('analytics')}
                </Link>
              </li>
            </ul>
          </div>

          {/* About & Resources */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">{t('aboutTitle')}</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/about/company" 
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-purple-500 rounded-full group-hover:scale-150 transition-transform"></span>
                  {tNav('aboutCompany')}
                </Link>
              </li>
              <li>
                <Link 
                  href="/about/leadership" 
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-purple-500 rounded-full group-hover:scale-150 transition-transform"></span>
                  {tNav('leadership')}
                </Link>
              </li>
              <li>
                <Link 
                  href="/research" 
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-purple-500 rounded-full group-hover:scale-150 transition-transform"></span>
                  {tNav('research')}
                </Link>
              </li>
              <li>
                <Link 
                  href="/faq" 
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-purple-500 rounded-full group-hover:scale-150 transition-transform"></span>
                  {tNav('faq')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">{t('contactTitle')}</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a 
                  href={TELEGRAM_URL} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <TelegramIcon size={20} />
                  {t('telegramChannel')}
                </a>
              </li>
              <li className="text-sm">
                {tCommon('companyName')}
              </li>
              <li className="text-sm">
                Saint Lucia
              </li>
              <li className="text-sm">
                Company No: 2025-00384
              </li>
            </ul>

            {/* Legal */}
            <h4 className="font-bold text-lg mt-8 mb-4 text-white">{t('legalTitle')}</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/legal/terms" 
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group text-sm"
                >
                  <span className="w-1 h-1 bg-purple-500 rounded-full group-hover:scale-150 transition-transform"></span>
                  {tNav('termsOfUse')}
                </Link>
              </li>
              <li>
                <Link 
                  href="/legal/kyc-aml" 
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group text-sm"
                >
                  <span className="w-1 h-1 bg-purple-500 rounded-full group-hover:scale-150 transition-transform"></span>
                  {tNav('kycAml')}
                </Link>
              </li>
              <li>
                <Link 
                  href="/legal/privacy" 
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group text-sm"
                >
                  <span className="w-1 h-1 bg-purple-500 rounded-full group-hover:scale-150 transition-transform"></span>
                  {tNav('privacyPolicy')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 text-sm mb-2">
            &copy; {new Date().getFullYear()} {tCommon('companyName')} {tCommon('copyright')}
          </p>
          <p className="text-gray-500 text-xs">
            {t('certificateInfo')}
          </p>
        </div>
      </div>
    </footer>
  );
}
