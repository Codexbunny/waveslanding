'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTAButton from '@/components/CTAButton';

const TELEGRAM_URL = process.env.NEXT_PUBLIC_TELEGRAM_URL || 'https://t.me/waveslogix';

// Icons
const IconShield = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const IconChart = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const IconLightning = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const IconUsers = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const IconLock = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

const IconCheck = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

export default function AccountManagementPage() {
  const t = useTranslations('serviceAccountManagement');
  const tCommon = useTranslations('common');

  const features = [
    { key: 'advisory', icon: <IconChart className="w-6 h-6" /> },
    { key: 'monitoring', icon: <IconLightning className="w-6 h-6" /> },
    { key: 'recommendations', icon: <IconChart className="w-6 h-6" /> },
    { key: 'risk', icon: <IconShield className="w-6 h-6" /> },
    { key: 'support', icon: <IconUsers className="w-6 h-6" /> },
  ];

  const transparencyPoints = t.raw('transparencyPoints') as string[];
  const steps = t.raw('howItWorks.steps') as string[];
  const reasons = t.raw('whyChoose.reasons') as string[];

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Dark premium background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-950 to-gray-900" />
        
        {/* Gradient orbs */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/20 to-amber-600/20 border border-amber-500/30 mb-8">
                <IconShield className="w-4 h-4 text-amber-400" />
                <span className="text-amber-400 text-sm font-semibold tracking-wide">{t('badge')}</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {t('title')}
              </h1>
              <p className="text-xl md:text-2xl text-purple-300 font-medium mb-8">
                {t('subtitle')}
              </p>
              
              {/* Capital requirement */}
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12">
                <span className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
                  {t('capitalRequirement')}
                </span>
                <div className="hidden md:block h-12 w-px bg-gray-700" />
                <p className="text-gray-400 max-w-lg text-lg">
                  {t('description')}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="grid lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-6">
                  <IconLock className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {t('transparencyTitle')}
                </h2>
                <p className="text-xl text-purple-600 font-medium mb-6">
                  {t('transparencySubtitle')}
                </p>
                <div className="space-y-4">
                  {transparencyPoints.map((point: string, index: number) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <IconCheck className="w-4 h-4 text-green-600" />
                      </div>
                      <p className="text-gray-700">{point}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="liquid-glass rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('paymentTitle')}</h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {t('paymentDescription')}
                </p>
                <div className="p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-200">
                  <p className="text-amber-800 font-medium">
                    {t('note')}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              What You Receive
            </motion.h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.key}
                  className="liquid-glass rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {t(`features.${feature.key}.title`)}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {t(`features.${feature.key}.description`)}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {t('howItWorks.title')}
            </motion.h2>
            
            <div className="space-y-6">
              {steps.map((step: string, index: number) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-6"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="pt-2">
                    <p className="text-gray-700 text-lg">{step}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {t('whyChoose.title')}
            </motion.h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {reasons.map((reason: string, index: number) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-purple-300 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <IconCheck className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{reason}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-950 to-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t('cta')}
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Contact Waves Logix to receive a personalized proposal and discuss your objectives in detail.
            </p>
            <CTAButton href={TELEGRAM_URL} variant="primary" className="text-lg px-10 py-5 bg-gradient-to-r from-amber-500 to-amber-600 hover:shadow-amber-500/25">
              {tCommon('discussObjectives')}
            </CTAButton>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
