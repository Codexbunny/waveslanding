'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function Partners() {
  const t = useTranslations('partners');
  
  // Placeholder partners - can be updated with actual partner logos
  const partners = [
    { id: 1, name: 'MetaTrader', initials: 'MT' },
    { id: 2, name: 'TradingView', initials: 'TV' },
    { id: 3, name: 'Interactive Brokers', initials: 'IB' },
    { id: 4, name: 'Bloomberg Terminal', initials: 'BT' },
    { id: 5, name: 'Reuters', initials: 'RE' },
    { id: 6, name: 'CQG', initials: 'CQ' },
  ];

  return (
    <section id="partners" className="py-24 bg-gradient-to-b from-white to-gray-50 relative isolate overflow-hidden">
      {/* Ensure content is above any background elements */}
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Our <span className="gradient-text">Partners</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Trusted by leading companies in the financial industry
          </p>
        </motion.div>

        {/* Marquee container */}
        <div className="relative overflow-hidden py-8">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10" />
          
          {/* Marquee track */}
          <motion.div 
            className="flex gap-8"
            animate={{ x: [0, -50 * partners.length * 3] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {/* Triple the partners for seamless loop */}
            {[...partners, ...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className="flex-shrink-0 w-40 h-24 flex flex-col items-center justify-center bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-indigo-100 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center mb-2">
                  <span className="text-lg font-bold text-slate-600">{partner.initials}</span>
                </div>
                <p className="text-xs text-gray-500 font-medium text-center px-2 truncate w-full">{partner.name}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Static grid fallback for smaller screens */}
        <div className="md:hidden grid grid-cols-2 gap-4 mt-8">
          {partners.slice(0, 4).map((partner, index) => (
            <motion.div
              key={partner.id}
              className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center mb-2">
                <span className="text-lg font-bold text-slate-600">{partner.initials}</span>
              </div>
              <p className="text-xs text-gray-500 font-medium text-center">{partner.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
