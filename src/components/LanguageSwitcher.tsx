'use client';

import { useTransition } from 'react';
import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { locales, localeNames, type Locale } from '@/i18n/config';

export default function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const [isPending, startTransition] = useTransition();

  const switchLocale = (newLocale: Locale) => {
    if (newLocale === locale) return;
    
    startTransition(() => {
      document.cookie = `locale=${newLocale};path=/;max-age=31536000`;
      window.location.reload();
    });
  };

  return (
    <div className="flex items-center gap-1 bg-gray-100/80 rounded-full p-1">
      {locales.map((loc) => (
        <motion.button
          key={loc}
          onClick={() => switchLocale(loc)}
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
            locale === loc
              ? 'bg-white text-purple-600 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          } ${isPending ? 'opacity-50 cursor-wait' : ''}`}
          whileHover={{ scale: locale === loc ? 1 : 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={isPending}
        >
          {loc.toUpperCase()}
        </motion.button>
      ))}
    </div>
  );
}
