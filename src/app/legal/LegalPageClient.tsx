'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface LegalPageClientProps {
  pageKey: 'terms' | 'kycAml' | 'privacy';
}

export default function LegalPageClient({ pageKey }: LegalPageClientProps) {
  const t = useTranslations(`legal.${pageKey}`);

  const sections = t.raw('sections') as Array<{ title: string; content: string }>;

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero */}
      <section className="relative pt-32 pb-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                {t('title')}
              </h1>
              <p className="text-gray-500 text-sm">
                {t('lastUpdated')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            {/* Introduction */}
            <motion.p
              className="text-gray-700 text-lg leading-relaxed mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {t('introduction')}
            </motion.p>

            {/* Sections */}
            <div className="space-y-10">
              {sections.map((section: { title: string; content: string }, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                      {index + 1}
                    </span>
                    {section.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed pl-11">
                    {section.content}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Contact */}
            <motion.div
              className="mt-16 p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl border border-purple-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-700">
                {t('contactNote')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
