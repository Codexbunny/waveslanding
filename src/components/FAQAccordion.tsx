'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  items: FAQItem[];
}

interface FAQAccordionProps {
  categories: FAQCategory[];
}

// Custom plus/minus icon for modern look
const IconToggle = ({ isOpen }: { isOpen: boolean }) => (
  <motion.div
    className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center flex-shrink-0"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    <motion.div
      className="relative w-4 h-4"
      animate={{ rotate: isOpen ? 45 : 0 }}
      transition={{ duration: 0.2 }}
    >
      {/* Horizontal line */}
      <span className="absolute top-1/2 left-0 w-full h-0.5 bg-purple-600 -translate-y-1/2" />
      {/* Vertical line (becomes part of X when rotated) */}
      <motion.span 
        className="absolute top-0 left-1/2 w-0.5 h-full bg-purple-600 -translate-x-1/2"
        animate={{ opacity: isOpen ? 1 : 1 }}
      />
    </motion.div>
  </motion.div>
);

function FAQItemComponent({ item, index }: { item: FAQItem; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className={`relative transition-colors duration-300 ${isOpen ? 'bg-gradient-to-r from-purple-50/50 to-blue-50/30' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      {/* Left accent bar when open */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-blue-500 rounded-r"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: isOpen ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        style={{ originY: 0 }}
      />
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsOpen(!isOpen);
          }
        }}
        className="w-full py-6 px-6 flex items-center justify-between text-left transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-inset group"
        aria-expanded={isOpen}
      >
        <span className={`pr-4 text-base md:text-lg font-medium transition-colors ${isOpen ? 'text-purple-700' : 'text-gray-900 group-hover:text-purple-600'}`}>
          {item.question}
        </span>
        <IconToggle isOpen={isOpen} />
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 text-gray-600 leading-relaxed pl-7 border-l-2 border-transparent">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Bottom border - hidden for last item */}
      <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
    </motion.div>
  );
}

export default function FAQAccordion({ categories }: FAQAccordionProps) {
  return (
    <div className="space-y-12">
      {categories.map((category, categoryIndex) => (
        <motion.div 
          key={categoryIndex}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
        >
          {/* Category header with accent */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full" />
            <h2 className="text-2xl font-bold text-gray-900">
              {category.title}
            </h2>
          </div>
          
          {/* FAQ container with subtle geometry */}
          <div 
            className="bg-white border border-gray-100 shadow-sm shadow-purple-500/5 overflow-hidden"
            style={{
              clipPath: 'polygon(0 8px, 8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%)',
            }}
          >
            {category.items.map((item, index) => (
              <FAQItemComponent key={index} item={item} index={index} />
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
