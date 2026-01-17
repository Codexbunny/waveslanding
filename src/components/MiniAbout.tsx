'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import Lightbox from './Lightbox';

const IconBuilding = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const IconUser = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const IconCertificate = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>
);

const IconExpand = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
  </svg>
);

export default function MiniAbout() {
  const t = useTranslations('miniAbout');
  const tCert = useTranslations('certificate');
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <>
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Section header */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                {t('title')} <span className="gradient-text">{t('titleHighlight')}</span>
              </h2>
            </motion.div>

            {/* Two-column layout */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left: Mini About */}
              <motion.div
                className="liquid-glass rounded-3xl p-8 md:p-10"
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {t('description')}
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  {t('descriptionContinued')}
                </p>
                
                {/* Motto */}
                <div className="p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl border-l-4 border-purple-500 mb-8">
                  <p className="text-gray-800 font-medium italic">
                    "{t('motto')}"
                  </p>
                </div>

                {/* Links */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/about/company"
                    className="group flex items-center gap-3 px-6 py-3 bg-white rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconBuilding className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                      {t('linkCompany')}
                    </span>
                  </Link>

                  <Link
                    href="/about/leadership"
                    className="group flex items-center gap-3 px-6 py-3 bg-white rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconUser className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                      {t('linkLeadership')}
                    </span>
                  </Link>
                </div>
              </motion.div>

              {/* Right: Certificate */}
              <motion.div
                className="liquid-glass rounded-3xl p-8 md:p-10"
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: 0.05 }}
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center flex-shrink-0">
                    <IconCertificate className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                      {tCert('title')} <span className="gradient-text">{tCert('titleHighlight')}</span>
                    </h3>
                    <p className="text-gray-600">{tCert('subtitle')}</p>
                  </div>
                </div>

                {/* Certificate info */}
                <div className="space-y-4 mb-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-white/70 rounded-lg">
                      <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-1">Company</p>
                      <p className="font-bold text-gray-900">Waves Logix Ltd.</p>
                    </div>
                    <div className="p-3 bg-white/70 rounded-lg">
                      <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-1">Number</p>
                      <p className="font-bold text-gray-900">{tCert('companyNumber')}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-white/70 rounded-lg">
                      <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-1">Country</p>
                      <p className="font-bold text-gray-900">{tCert('country')}</p>
                    </div>
                    <div className="p-3 bg-white/70 rounded-lg">
                      <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-1">Date</p>
                      <p className="font-bold text-gray-900">{tCert('incorporationDate')}</p>
                    </div>
                  </div>
                </div>

                {/* Certificate preview - clickable */}
                <motion.button
                  onClick={() => setIsLightboxOpen(true)}
                  className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 hover:border-amber-400 transition-colors group cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Image
                    src="/certificate.jpg"
                    alt="Certificate of Incorporation"
                    fill
                    className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                    <div className="flex items-center gap-2 text-white font-medium">
                      <IconExpand className="w-5 h-5" />
                      {tCert('clickToView')}
                    </div>
                  </div>
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        imageSrc="/certificate.jpg"
        imageAlt="Certificate of Incorporation - Waves Logix Ltd."
      />
    </>
  );
}
