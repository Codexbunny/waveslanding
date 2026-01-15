'use client';

import { motion } from 'framer-motion';
import CTAButton from './CTAButton';

const TELEGRAM_URL = process.env.NEXT_PUBLIC_TELEGRAM_URL || 'https://t.me/waveslogix';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 purple-gradient rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400 rounded-full opacity-10 blur-3xl"></div>
      </div>

      {/* Wave decorative elements */}
      <div className="absolute top-1/2 left-0 w-full">
        <svg className="w-full h-64 opacity-5" viewBox="0 0 1200 200" preserveAspectRatio="none">
          <path d="M0,100 Q300,50 600,100 T1200,100 L1200,200 L0,200 Z" fill="#8B5CF6" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 text-gray-900"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="gradient-text">Waves Logix</span>
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-gray-700 mb-4 font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Development of trading strategies based on Elliot wave theory
          </motion.p>
          
          <motion.p
            className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Scientific approach to the market, the right course in the ocean of the Forex market
          </motion.p>

          <motion.p
            className="text-2xl md:text-3xl font-semibold text-gray-800 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            With Waves Logix, you're never trading alone
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <CTAButton href={TELEGRAM_URL} variant="primary" className="text-lg px-12 py-5">
              Начать сотрудничество
            </CTAButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

