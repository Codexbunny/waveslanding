'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Lightbox from './Lightbox';

const CERTIFICATE_IMAGE = '/certificates/incorporation.webp';

export default function Certificate() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const t = useTranslations('certificate');
  const tCommon = useTranslations('common');

  const certificateInfo = {
    type: t('type'),
    country: t('country'),
    companyNumber: t('companyNumber'),
    incorporationDate: t('incorporationDate'),
    law: t('law'),
  };

  return (
    <>
      <section id="certificate" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
              {t('title')} <span className="gradient-text">{t('titleHighlight')}</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              {t('subtitle')}
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <motion.div
              className="liquid-glass rounded-3xl p-8 md:p-12 grid md:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Certificate Info */}
              <div>
                <div className="mb-8">
                  <div className="w-16 h-16 purple-gradient rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold mb-6 text-gray-900">
                    {certificateInfo.type}
                  </h3>
                </div>
                <div className="space-y-6">
                  <div className="p-4 bg-white/70 rounded-xl">
                    <p className="text-sm text-gray-500 mb-2 uppercase tracking-wide font-semibold">Company Name</p>
                    <p className="text-xl font-bold text-gray-900">{tCommon('companyName')}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-white/70 rounded-xl">
                      <p className="text-sm text-gray-500 mb-2 uppercase tracking-wide font-semibold">Country</p>
                      <p className="text-lg font-bold text-gray-900">{certificateInfo.country}</p>
                    </div>
                    <div className="p-4 bg-white/70 rounded-xl">
                      <p className="text-sm text-gray-500 mb-2 uppercase tracking-wide font-semibold">Company Number</p>
                      <p className="text-lg font-bold text-gray-900">{certificateInfo.companyNumber}</p>
                    </div>
                  </div>
                  <div className="p-4 bg-white/70 rounded-xl">
                    <p className="text-sm text-gray-500 mb-2 uppercase tracking-wide font-semibold">Date of Incorporation</p>
                    <p className="text-xl font-bold text-gray-900">{certificateInfo.incorporationDate}</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl border border-purple-100">
                    <p className="text-sm text-gray-500 mb-2 uppercase tracking-wide font-semibold">Governing Law</p>
                    <p className="text-lg font-semibold text-gray-900">{certificateInfo.law}</p>
                  </div>
                </div>
              </div>

              {/* Certificate Preview with Blur */}
              <div className="relative">
                <motion.div
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl cursor-pointer group"
                  onClick={() => setIsLightboxOpen(true)}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Blurred certificate background */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center scale-110"
                    style={{ 
                      backgroundImage: `url(${CERTIFICATE_IMAGE})`,
                      filter: 'blur(8px)',
                    }}
                  />
                  
                  {/* Gradient overlay for "protected" feel */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/30" />
                  
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 shimmer-overlay opacity-50" />
                  
                  {/* Border glow on hover */}
                  <div className="absolute inset-0 border-2 border-purple-300/30 rounded-2xl group-hover:border-purple-400/60 transition-colors" />
                  
                  {/* Click hint */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div 
                      className="bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg flex items-center gap-2 group-hover:bg-white transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      <span className="text-gray-800 font-semibold">{t('clickToView')}</span>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lightbox for full certificate view */}
      <Lightbox
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        imageSrc={CERTIFICATE_IMAGE}
        imageAlt="Certificate of Incorporation - Waves Logix Ltd."
      />
    </>
  );
}
