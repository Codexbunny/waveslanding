'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

// Icons
const IconShield = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const IconLock = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

const IconTrendingUp = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

export default function ServiceBlockAccountManagement() {
  const t = useTranslations('serviceAccountManagement');
  const tCommon = useTranslations('common');

  return (
    <section className="relative py-24">
      {/* Dark premium background - more muted, professional */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900" />
      
      {/* Subtle pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Gradient orbs - softer, less saturated */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-slate-600/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/15 to-amber-600/15 border border-amber-500/25 mb-8">
              <IconShield className="w-4 h-4 text-amber-400/80" />
              <span className="text-amber-400/90 text-sm font-semibold tracking-wide">{t('badge')}</span>
            </div>

            {/* Title */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight tracking-tight">
              {t('title')}
            </h2>
            <p className="text-xl md:text-2xl text-indigo-300/80 font-medium mb-6">
              {t('subtitle')}
            </p>
            
            {/* Capital requirement - refined, professional */}
            <div className="flex items-center gap-6 mb-8">
              <span className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-amber-500/80 to-amber-600/70 bg-clip-text text-transparent">
                {t('capitalRequirement')}
              </span>
              <div className="h-12 w-px bg-slate-600" />
              <p className="text-slate-400 max-w-md">
                {t('description')}
              </p>
            </div>
          </motion.div>

          {/* Key points grid - staggered animations */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Full Transparency */}
            <motion.div
              className="bg-white/[0.03] backdrop-blur-sm rounded-2xl p-6 border border-white/[0.06] hover:border-indigo-400/20 transition-all duration-300 hover:bg-white/[0.05]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/80 to-indigo-600/80 flex items-center justify-center mb-4">
                <IconLock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{t('transparencyTitle')}</h3>
              <p className="text-slate-400 text-sm">{t('transparencySubtitle')}</p>
            </motion.div>

            {/* Performance-Based */}
            <motion.div
              className="bg-white/[0.03] backdrop-blur-sm rounded-2xl p-6 border border-white/[0.06] hover:border-amber-400/20 transition-all duration-300 hover:bg-white/[0.05]"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <motion.div 
                className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/70 to-amber-600/70 flex items-center justify-center mb-4"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4, type: "spring", stiffness: 200 }}
              >
                <IconTrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{t('paymentTitle')}</h3>
              <p className="text-slate-400 text-sm">{t('paymentDescription')}</p>
            </motion.div>

            {/* Forex, Gold & Oil */}
            <motion.div
              className="bg-white/[0.03] backdrop-blur-sm rounded-2xl p-6 border border-white/[0.06] hover:border-cyan-400/20 transition-all duration-300 hover:bg-white/[0.05]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/70 to-cyan-600/70 flex items-center justify-center mb-4">
                <IconShield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Forex, Gold & Oil</h3>
              <p className="text-slate-400 text-sm">Specialized focus on high-liquidity markets</p>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            className="flex flex-col sm:flex-row items-center gap-6"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.4, delay: 0.25 }}
          >
            <Link
              href="/services/account-management"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-500/90 to-amber-600/80 text-slate-900 font-bold rounded-full hover:shadow-lg hover:shadow-amber-500/15 transition-all duration-300 hover:from-amber-500 hover:to-amber-600"
            >
              {tCommon('discussObjectives')}
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/services/account-management"
              className="text-slate-400 hover:text-white transition-colors font-medium"
            >
              {tCommon('learnMore')} →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
