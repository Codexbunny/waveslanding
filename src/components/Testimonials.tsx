'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const QuoteIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
  </svg>
);

export default function Testimonials() {
  const t = useTranslations('testimonials');
  
  const testimonials = [
    {
      id: 1,
      name: 'Alexander M.',
      role: 'Private Investor',
      content: 'Professional service with excellent results. The structured approach to market analysis has significantly improved my portfolio performance.',
      initials: 'AM'
    },
    {
      id: 2,
      name: 'Victoria S.',
      role: 'Forex Trader',
      content: 'Outstanding analytical support. The wave-based methodology provides clarity in volatile markets that I haven\'t found elsewhere.',
      initials: 'VS'
    },
    {
      id: 3,
      name: 'Michael K.',
      role: 'Asset Manager',
      content: 'Transparent partnership with consistent communication. Their performance-based model aligns interests perfectly with clients.',
      initials: 'MK'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #6366f1 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            What our clients say about working with us
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="relative bg-gradient-to-b from-white to-gray-50/50 rounded-3xl p-8 border border-gray-100 hover:border-indigo-100 transition-all duration-300 hover:shadow-lg group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 text-indigo-100 group-hover:text-indigo-200 transition-colors">
                <QuoteIcon className="w-10 h-10" />
              </div>
              
              {/* Content */}
              <p className="text-gray-600 mb-8 text-base leading-relaxed relative z-10">
                "{testimonial.content}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{testimonial.initials}</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
