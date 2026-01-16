'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Logo from './Logo';
import CTAButton from './CTAButton';

const TELEGRAM_URL = process.env.NEXT_PUBLIC_TELEGRAM_URL || 'https://t.me/waveslogix';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-effect shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Logo width={180} height={50} />
        </motion.a>
        <div className="hidden md:flex items-center gap-8">
          <a 
            href="#services" 
            className="text-gray-700 hover:text-purple-600 transition-colors font-medium relative group"
          >
            Услуги
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
          </a>
          <a 
            href="#certificate" 
            className="text-gray-700 hover:text-purple-600 transition-colors font-medium relative group"
          >
            Сертификат
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
          </a>
          <a 
            href="#contact" 
            className="text-gray-700 hover:text-purple-600 transition-colors font-medium relative group"
          >
            Контакты
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
          </a>
          <CTAButton href={TELEGRAM_URL} variant="primary" className="text-sm">
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
