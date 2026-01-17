'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Logo from './Logo';
import CTAButton from './CTAButton';
import LanguageSwitcher from './LanguageSwitcher';

const TELEGRAM_URL = process.env.NEXT_PUBLIC_TELEGRAM_URL || 'https://t.me/waveslogix';

const IconChevronDown = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const IconMenu = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const IconClose = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

interface DropdownProps {
  label: string;
  items: { label: string; href: string }[];
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

function Dropdown({ label, items, isOpen, onToggle, onClose }: DropdownProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={onToggle}
        className="flex items-center gap-1 text-gray-700 hover:text-purple-600 transition-colors font-medium relative group"
      >
        {label}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <IconChevronDown className="w-4 h-4" />
        </motion.div>
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50"
          >
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="block px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Header() {
  const t = useTranslations('nav');
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const servicesItems = [
    { label: t('accountManagement'), href: '/services/account-management' },
    { label: t('analytics'), href: '/services/analytics' },
  ];

  const aboutItems = [
    { label: t('aboutCompany'), href: '/about/company' },
    { label: t('leadership'), href: '/about/leadership' },
  ];

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass-effect shadow-lg' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Logo width={180} height={50} />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Dropdown
              label={t('services')}
              items={servicesItems}
              isOpen={servicesOpen}
              onToggle={() => {
                setServicesOpen(!servicesOpen);
                setAboutOpen(false);
              }}
              onClose={() => setServicesOpen(false)}
            />
            <Dropdown
              label={t('about')}
              items={aboutItems}
              isOpen={aboutOpen}
              onToggle={() => {
                setAboutOpen(!aboutOpen);
                setServicesOpen(false);
              }}
              onClose={() => setAboutOpen(false)}
            />
            <a 
              href="#contact" 
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium relative group"
            >
              {t('contact')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
            </a>
            
            <LanguageSwitcher />
            
            <CTAButton href={TELEGRAM_URL} variant="primary" className="text-sm">
              Telegram
            </CTAButton>
          </div>

          {/* Mobile: Language + Menu */}
          <div className="lg:hidden flex items-center gap-4">
            <LanguageSwitcher />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-700 hover:text-purple-600 transition-colors"
            >
              {mobileMenuOpen ? <IconClose /> : <IconMenu />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white pt-20"
          >
            <div className="container mx-auto px-6 py-8">
              <div className="space-y-6">
                {/* Services */}
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wide mb-3">{t('services')}</p>
                  <div className="space-y-2">
                    {servicesItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-3 text-lg font-medium text-gray-900 hover:text-purple-600 transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* About */}
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wide mb-3">{t('about')}</p>
                  <div className="space-y-2">
                    {aboutItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-3 text-lg font-medium text-gray-900 hover:text-purple-600 transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Contact */}
                <div className="pt-4 border-t border-gray-200">
                  <a
                    href="#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-3 text-lg font-medium text-gray-900 hover:text-purple-600 transition-colors"
                  >
                    {t('contact')}
                  </a>
                </div>

                {/* CTA */}
                <div className="pt-4">
                  <CTAButton href={TELEGRAM_URL} variant="primary" className="w-full text-center">
                    Telegram
                  </CTAButton>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
