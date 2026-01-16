'use client';

import { motion } from 'framer-motion';

export default function Partners() {
  // Placeholder for partners - can be updated with actual partner logos
  const partners = [
    { id: 1, name: 'Partner 1', logo: '/partner1.png' },
    { id: 2, name: 'Partner 2', logo: '/partner2.png' },
    { id: 3, name: 'Partner 3', logo: '/partner3.png' },
    { id: 4, name: 'Partner 4', logo: '/partner4.png' },
  ];

  return (
    <section id="partners" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
            Наши <span className="gradient-text">партнёры</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Trusted by leading companies in the financial industry
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              className="w-full max-w-[200px] h-32 flex items-center justify-center liquid-glass rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.05 }}
            >
              <p className="text-gray-400 text-sm text-center font-medium">{partner.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
