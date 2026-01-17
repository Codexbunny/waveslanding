'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const partners = [
  { id: 1, name: 'Investing.com', logo: '/partners/investingcom.png' },
  { id: 2, name: 'TradingView', logo: '/partners/tradingview.png' },
  { id: 3, name: 'Refinitiv', logo: '/partners/refinitiv.png' },
  { id: 4, name: 'CME Group', logo: '/partners/cme_group.png' },
  { id: 5, name: 'MetaTrader', logo: '/partners/metatrader.png' },
  { id: 6, name: 'Bloomberg', logo: '/partners/bloomberg.png' },
  { id: 7, name: 'OANDA', logo: '/partners/oanda.png' },
  { id: 8, name: 'ICE', logo: '/partners/ice.png' },
];

export default function Partners() {
  // Duplicate partners for seamless loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section id="partners" className="py-16 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight text-gray-900">
            Compatible with <span className="gradient-text">industry-standard</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            platforms and data providers
          </p>
        </motion.div>

        {/* Desktop: Marquee carousel */}
        <div className="hidden md:block relative py-6">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />
          
          {/* CSS-based infinite marquee */}
          <div className="partners-marquee">
            <div className="partners-track">
              {duplicatedPartners.map((partner, index) => (
                <div
                  key={`${partner.id}-${index}`}
                  className="flex-shrink-0 w-40 h-16 flex items-center justify-center mx-6"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={140}
                    height={40}
                    className="max-h-10 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: Static grid */}
        <div className="md:hidden grid grid-cols-2 gap-3">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="flex items-center justify-center p-4 bg-white rounded-xl border border-gray-100 shadow-sm"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={100}
                height={30}
                className="max-h-7 w-auto object-contain grayscale opacity-60"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
