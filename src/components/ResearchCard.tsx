'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface ResearchCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  index: number;
}

const IconArrow = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const IconClock = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export default function ResearchCard({ 
  slug, 
  title, 
  excerpt, 
  date, 
  readTime, 
  category,
  index 
}: ResearchCardProps) {
  return (
    <motion.article
      className="group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/research/${slug}`}>
        <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 hover:border-purple-300 hover:shadow-lg transition-all duration-300">
          {/* Category badge */}
          <div className="mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-700">
              {category}
            </span>
          </div>
          
          {/* Title */}
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
            {title}
          </h3>
          
          {/* Excerpt */}
          <p className="text-gray-600 mb-6 line-clamp-3">
            {excerpt}
          </p>
          
          {/* Meta info */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>{date}</span>
              <span className="flex items-center gap-1">
                <IconClock className="w-4 h-4" />
                {readTime}
              </span>
            </div>
            
            <span className="flex items-center gap-2 text-purple-600 font-medium group-hover:gap-3 transition-all">
              Read
              <IconArrow className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
