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
  return (
    <section id="partners" className="py-24 bg-gradient-to-b from-white to-gray-50 relative isolate overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight text-gray-900">
            Compatible with <span className="gradient-text">industry-standard</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            platforms and data providers
          </p>
        </motion.div>

        {/* Desktop: Marquee carousel */}
        <div className="hidden md:block relative overflow-hidden py-8">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />
          
          {/* CSS-based infinite marquee */}
          <div className="partners-marquee">
            <div className="partners-track">
              {/* Triple the partners for seamless loop */}
              {[...partners, ...partners, ...partners].map((partner, index) => (
                <div
                  key={`${partner.id}-${index}`}
                  className="flex-shrink-0 w-44 h-20 flex items-center justify-center mx-4"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={160}
                    height={48}
                    className="max-h-12 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-300"
                    style={{ filter: 'grayscale(100%)' }}
                    onMouseEnter={(e) => e.currentTarget.style.filter = 'grayscale(0%)'}
                    onMouseLeave={(e) => e.currentTarget.style.filter = 'grayscale(100%)'}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: Static grid */}
        <div className="md:hidden grid grid-cols-2 gap-4">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              className="flex items-center justify-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={36}
                className="max-h-8 w-auto object-contain opacity-60"
                style={{ filter: 'grayscale(100%)' }}
              />
            </motion.div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .partners-marquee {
          overflow: hidden;
        }
        
        .partners-track {
          display: flex;
          animation: marquee 40s linear infinite;
          will-change: transform;
        }
        
        .partners-track:hover {
          animation-play-state: paused;
        }
        
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-176px * 8));
          }
        }
      `}</style>
    </section>
  );
}
