'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTAButton from '@/components/CTAButton';

const TELEGRAM_URL = process.env.NEXT_PUBLIC_TELEGRAM_URL || 'https://t.me/waveslogix';

// Icons
const IconChart = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const IconCpu = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M3 9h2m-2 6h2m14-6h2m-2 6h2M7 7h10a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V9a2 2 0 012-2zm4 4h2v2h-2v-2z" />
  </svg>
);

const IconTarget = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>
);

const IconGlobe = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
  </svg>
);

const IconShield = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const IconDocument = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const IconCheck = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

export default function AnalyticsPage() {
  const t = useTranslations('serviceAnalytics');
  const tCommon = useTranslations('common');

  const approachPoints = t.raw('approachPoints') as string[];
  const audiences = t.raw('forWhom.audiences') as string[];
  const formats = t.raw('delivery.formats') as string[];
  const reasons = t.raw('whyChoose.reasons') as string[];

  const analysisItems = [
    { key: 'structure', icon: <IconChart className="w-6 h-6" />, color: 'from-purple-500 to-purple-600' },
    { key: 'scenarios', icon: <IconTarget className="w-6 h-6" />, color: 'from-blue-500 to-blue-600' },
    { key: 'levels', icon: <IconChart className="w-6 h-6" />, color: 'from-indigo-500 to-indigo-600' },
    { key: 'macro', icon: <IconGlobe className="w-6 h-6" />, color: 'from-cyan-500 to-cyan-600' },
    { key: 'risk', icon: <IconShield className="w-6 h-6" />, color: 'from-violet-500 to-violet-600' },
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #8B5CF6 1px, transparent 1px),
              linear-gradient(to bottom, #8B5CF6 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-purple-50/50 to-transparent" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 border border-purple-200 mb-8">
                <IconCpu className="w-4 h-4 text-purple-600" />
                <span className="text-purple-700 text-sm font-semibold tracking-wide">{t('badge')}</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                {t('title')}
              </h1>
              <p className="text-xl md:text-2xl text-purple-600 font-medium mb-8">
                {t('subtitle')}
              </p>
              
              <p className="text-gray-600 text-lg max-w-2xl">
                {t('description')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
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
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mb-6">
                  <IconCpu className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {t('approachTitle')}
                </h2>
                <div className="space-y-4">
                  {approachPoints.map((point: string, index: number) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <IconCheck className="w-4 h-4 text-purple-600" />
                      </div>
                      <p className="text-gray-700">{point}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="liquid-glass rounded-3xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <IconShield className="w-8 h-8 text-purple-600" />
                  <h3 className="text-2xl font-bold text-gray-900">{t('independentTitle')}</h3>
                </div>
                <p className="text-purple-600 font-medium mb-4">{t('independentSubtitle')}</p>
                <p className="text-gray-700 leading-relaxed">
                  {t('independentDescription')}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {t('whatIncluded.title')}
            </motion.h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {analysisItems.map((item, index) => (
                <motion.div
                  key={item.key}
                  className="liquid-glass rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {t(`whatIncluded.items.${item.key}.title`)}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {t(`whatIncluded.items.${item.key}.description`)}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="grid lg:grid-cols-2 gap-12"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                  {t('forWhom.title')}
                </h2>
                <div className="flex flex-wrap gap-3">
                  {audiences.map((audience: string, index: number) => (
                    <motion.span
                      key={index}
                      className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-50 to-blue-50 text-gray-700 font-medium border border-purple-200"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      {audience}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className="liquid-glass rounded-3xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <IconDocument className="w-8 h-8 text-purple-600" />
                  <h3 className="text-2xl font-bold text-gray-900">{t('delivery.title')}</h3>
                </div>
                <div className="space-y-4">
                  {formats.map((format: string, index: number) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-purple-500" />
                      <span className="text-gray-700">{format}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
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
      <section className="py-20 bg-gradient-to-br from-purple-600 to-blue-600">
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
            <p className="text-white/80 text-lg mb-8">
              Contact Waves Logix to discuss your analytical requirements and receive a tailored proposal.
            </p>
            <CTAButton href={TELEGRAM_URL} variant="secondary" className="text-lg px-10 py-5 bg-white text-purple-600 hover:bg-gray-100">
              {tCommon('requestProposal')}
            </CTAButton>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
