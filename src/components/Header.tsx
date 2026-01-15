'use client';

import { motion } from 'framer-motion';
import Logo from './Logo';
import CTAButton from './CTAButton';

const TELEGRAM_URL = process.env.NEXT_PUBLIC_TELEGRAM_URL || 'https://t.me/waveslogix';

export default function Header() {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 glass-effect"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Logo width={180} height={50} />
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-gray-700 hover:text-purple-600 transition-colors">Услуги</a>
          <a href="#certificate" className="text-gray-700 hover:text-purple-600 transition-colors">Сертификат</a>
          <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors">Контакты</a>
          <CTAButton href={TELEGRAM_URL} variant="primary">
            Telegram
          </CTAButton>
        </div>
        <div className="md:hidden">
          <CTAButton href={TELEGRAM_URL} variant="primary" className="text-sm px-4 py-2">
            Telegram
          </CTAButton>
        </div>
      </nav>
    </motion.header>
  );
}

