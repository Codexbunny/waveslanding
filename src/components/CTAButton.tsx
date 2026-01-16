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
  const baseClasses = 'inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-base transition-all duration-300 relative overflow-hidden group';
  
  const variantClasses = variant === 'primary' 
    ? 'purple-gradient text-white shadow-lg hover:shadow-2xl'
    : 'bg-white text-purple-600 border-2 border-purple-500 hover:bg-purple-50 hover:border-purple-600';

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${variantClasses} ${className}`}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <span className="relative z-10">{children}</span>
      {variant === 'primary' && (
        <motion.span
          className="absolute inset-0 bg-white/20"
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 0.5 }}
        />
      )}
    </motion.a>
  );
}
