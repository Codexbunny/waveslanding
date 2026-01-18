'use client';

import Link from 'next/link';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
  animated?: boolean;
  variant?: 'light' | 'dark';
}

export default function Logo({ 
  className = '', 
  width = 180, 
  height = 50,
  animated = true,
  variant = 'light'
}: LogoProps) {
  const scale = width / 180;
  const scaledHeight = 50 * scale;
  
  // Colors based on variant - improved contrast for dark backgrounds
  const textColor = variant === 'dark' ? '#FFFFFF' : '#1E293B';
  const subtextColor = variant === 'dark' ? '#CBD5E1' : '#64748B';
  const waveColors = variant === 'dark' 
    ? { start: '#7DD3FC', mid: '#38BDF8', end: '#0EA5E9' }
    : { start: '#6366F1', mid: '#8B5CF6', end: '#A855F7' };
  
  // Compact wave path - starts over W, ends over S
  // 3 smooth Elliott wave peaks, balanced and proportional to text
  const wavePath = `M8 18 
     C14 18, 18 10, 26 10
     C34 10, 38 22, 46 22
     C54 22, 58 8, 66 8
     C72 8, 76 16, 80 16`;
  
  return (
    <Link href="/" className={`inline-block ${className}`}>
      <svg 
        width={width} 
        height={height || scaledHeight} 
        viewBox="0 0 180 50" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={`logo-svg ${animated ? 'logo-animated' : ''}`}
        aria-label="Waves Logix Ltd."
      >
        <defs>
          <linearGradient id={`waveBase-${variant}`} x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor={waveColors.start} />
            <stop offset="50%" stopColor={waveColors.mid} />
            <stop offset="100%" stopColor={waveColors.end} />
          </linearGradient>
          
          <linearGradient id={`waveHighlight-${variant}`} x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="40%" stopColor="rgba(255,255,255,0.6)" />
            <stop offset="60%" stopColor="rgba(255,255,255,0.6)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
          
          {/* Filter for text glow on dark backgrounds */}
          {variant === 'dark' && (
            <filter id="textGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="1" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          )}
        </defs>
        
        {/* Wave layers - positioned above text */}
        <g>
          {/* Base wave - always visible */}
          <path 
            d={wavePath}
            stroke={`url(#waveBase-${variant})`}
            strokeWidth="3" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          
          {/* Highlight wave - animated shimmer */}
          {animated && (
            <path 
              className="wave-highlight"
              d={wavePath}
              stroke={`url(#waveHighlight-${variant})`}
              strokeWidth="3" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              style={{
                strokeDasharray: '20 80',
                strokeDashoffset: 0,
              }}
            />
          )}
        </g>
        
        {/* Text layer - larger, bolder, better contrast */}
        <text 
          x="6" 
          y="40" 
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
          fontSize="22" 
          fontWeight="800" 
          fill={textColor}
          letterSpacing="3.5px"
          filter={variant === 'dark' ? 'url(#textGlow)' : undefined}
        >
          WAVES
        </text>
        
        <text 
          x="6" 
          y="49" 
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
          fontSize="9" 
          fontWeight="600" 
          fill={subtextColor}
          letterSpacing="1.6px"
        >
          LOGIX LTD.
        </text>
      </svg>
      
      <style jsx>{`
        .logo-animated .wave-highlight {
          animation: highlightFlow 3.5s linear infinite;
        }
        
        @keyframes highlightFlow {
          0% {
            stroke-dashoffset: 100;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </Link>
  );
}
