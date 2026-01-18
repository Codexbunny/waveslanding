'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const partners = [
  { id: 1, name: 'Investing.com', logo: '/partners/investingcom.png', category: 'Data' },
  { id: 2, name: 'TradingView', logo: '/partners/tradingview.png', category: 'Charts' },
  { id: 3, name: 'Refinitiv', logo: '/partners/refinitiv.png', category: 'Data' },
  { id: 4, name: 'CME Group', logo: '/partners/cme_group.png', category: 'Exchange' },
  { id: 5, name: 'MetaTrader', logo: '/partners/metatrader.png', category: 'Platform' },
  { id: 6, name: 'Bloomberg', logo: '/partners/bloomberg.png', category: 'Terminal' },
  { id: 7, name: 'OANDA', logo: '/partners/oanda.png', category: 'Broker' },
  { id: 8, name: 'ICE', logo: '/partners/ice.png', category: 'Exchange' },
];

// Staggered animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
};

export default function Partners() {
  return (
    <section id="partners" className="py-24 bg-gradient-to-b from-white via-gray-50/50 to-white relative">
      {/* Subtle background pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #8B5CF6 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 border border-purple-200 mb-6">
            <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
            <span className="text-purple-700 text-sm font-semibold tracking-wide">Integrations</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight text-gray-900">
            Compatible with <span className="gradient-text">Industry Leaders</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Seamless integration with world-class platforms and data providers
          </p>
        </motion.div>

        {/* Partners Grid - Desktop and Tablet */}
        <motion.div
          className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {partners.map((partner) => (
            <motion.div
              key={partner.id}
              variants={itemVariants}
              className="group relative"
            >
              <div 
                className="relative bg-white rounded-2xl p-8 border border-gray-100 
                           hover:border-purple-200 hover:shadow-xl hover:shadow-purple-500/10
                           transition-all duration-300 h-full flex flex-col items-center justify-center
                           before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br 
                           before:from-purple-500/0 before:to-blue-500/0 before:opacity-0
                           hover:before:opacity-5 before:transition-opacity"
                style={{
                  clipPath: 'polygon(0 12px, 12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%)',
                }}
              >
                {/* Corner accent */}
                <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-purple-300/50 rounded-tl" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-purple-300/50 rounded-br" />
                
                {/* Logo container */}
                <div className="relative w-full h-24 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={180}
                    height={60}
                    className="max-h-16 w-auto object-contain grayscale opacity-70 
                               group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>
                
                {/* Name and category */}
                <div className="text-center">
                  <p className="font-semibold text-gray-900 group-hover:text-purple-700 transition-colors">
                    {partner.name}
                  </p>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">
                    {partner.category}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile: 2-column grid */}
        <motion.div 
          className="sm:hidden grid grid-cols-2 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {partners.map((partner) => (
            <motion.div
              key={partner.id}
              variants={itemVariants}
              className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm flex flex-col items-center"
              style={{
                clipPath: 'polygon(0 8px, 8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%)',
              }}
            >
              <div className="w-full h-12 flex items-center justify-center mb-3">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={120}
                  height={40}
                  className="max-h-10 w-auto object-contain grayscale opacity-70"
                />
              </div>
              <p className="text-sm font-medium text-gray-700 text-center">{partner.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
