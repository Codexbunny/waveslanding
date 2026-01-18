'use client';

import { motion } from 'framer-motion';

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export default function CTAButton({ 
  href, 
  children, 
  variant = 'primary',
  className = '' 
}: CTAButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center gap-2 px-8 py-4 font-bold text-base transition-all duration-300 relative overflow-hidden group';
  
  const variantClasses = variant === 'primary' 
    ? 'bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-500 text-white shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30'
    : 'bg-white text-purple-600 border border-purple-200 hover:bg-purple-50 hover:border-purple-400';

  // Modern geometric shape with cut corners
  const clipPath = 'polygon(0 8px, 8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px))';

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${variantClasses} ${className}`}
      style={{ clipPath }}
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.97 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Shimmer effect on hover */}
      <motion.span
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      />
      
      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {variant === 'primary' && (
          <svg 
            className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        )}
      </span>
      
      {/* Corner accents for primary */}
      {variant === 'primary' && (
        <>
          <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/30" />
          <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/30" />
        </>
      )}
    </motion.a>
  );
}
