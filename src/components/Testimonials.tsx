'use client';

import { motion } from 'framer-motion';

export default function Testimonials() {
  // Placeholder for testimonials - can be updated with actual testimonials
  const testimonials = [
    {
      id: 1,
      name: 'Client Name',
      role: 'Investor',
      content: 'Professional service with excellent results. Highly recommended!',
      rating: 5
    },
    {
      id: 2,
      name: 'Client Name',
      role: 'Trader',
      content: 'Great analysis and support. Helped me make better trading decisions.',
      rating: 5
    },
    {
      id: 3,
      name: 'Client Name',
      role: 'Business Owner',
      content: 'Transparent and reliable partnership. Very satisfied with the service.',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-purple-50/30 to-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Отзывы <span className="gradient-text">клиентов</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            What our clients say about working with us
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="liquid-glass rounded-2xl p-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

