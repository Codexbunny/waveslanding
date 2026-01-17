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
  
  // Colors based on variant
  const textColor = variant === 'dark' ? '#FFFFFF' : '#1E293B';
  const subtextColor = variant === 'dark' ? '#94A3B8' : '#64748B';
  const waveColors = variant === 'dark' 
    ? { start: '#7DD3FC', mid: '#38BDF8', end: '#0EA5E9' }  // Lighter blue for dark bg
    : { start: '#4B7C9B', mid: '#5A8FB0', end: '#4A7A99' };
  
  // Wave path - compact Elliott wave pattern
  // Starts from left, goes through 5 waves, ends balanced
  const wavePath = `M-5 22 
     C2 22, 6 16, 14 16 
     C22 16, 26 26, 34 26
     C42 26, 48 10, 58 10
     C68 10, 72 22, 82 22
     C92 22, 96 14, 105 14`;
  
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
            <stop offset="40%" stopColor="rgba(255,255,255,0.5)" />
            <stop offset="60%" stopColor="rgba(255,255,255,0.5)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
          
          {/* Mask to keep wave behind the text area */}
          <mask id={`textMaskLogo-${variant}`}>
            <rect x="0" y="0" width="180" height="50" fill="white" />
            <rect x="4" y="30" width="72" height="22" fill="black" rx="2" />
          </mask>
        </defs>
        
        {/* Wave layers - BEHIND text */}
        <g mask={`url(#textMaskLogo-${variant})`}>
          {/* Base wave - always visible */}
          <path 
            d={wavePath}
            stroke={`url(#waveBase-${variant})`}
            strokeWidth="3.5" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          
          {/* Highlight wave - animated shimmer moving right to left */}
          {animated && (
            <path 
              className="wave-highlight"
              d={wavePath}
              stroke={`url(#waveHighlight-${variant})`}
              strokeWidth="3.5" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              style={{
                strokeDasharray: '25 120',
                strokeDashoffset: 0,
              }}
            />
          )}
        </g>
        
        {/* Text layer - FRONT - larger and bolder */}
        <text 
          x="6" 
          y="42" 
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
          fontSize="17" 
          fontWeight="800" 
          fill={textColor}
          letterSpacing="2.8px"
        >
          WAVES
        </text>
        
        <text 
          x="6" 
          y="50" 
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
          fontSize="8" 
          fontWeight="600" 
          fill={subtextColor}
          letterSpacing="1.4px"
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
            stroke-dashoffset: 150;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </Link>
  );
}
