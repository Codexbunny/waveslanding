'use client';

import Link from 'next/link';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
  animated?: boolean;
}

export default function Logo({ 
  className = '', 
  width = 180, 
  height = 50,
  animated = true
}: LogoProps) {
  const scale = width / 180;
  const scaledHeight = 50 * scale;
  
  // Wave path - reused for both base and highlight
  const wavePath = `M-10 22 
     C-4 22, 0 18, 6 18 
     C12 18, 16 24, 22 24
     C28 24, 34 12, 42 12
     C50 12, 54 20, 62 20
     C70 20, 78 6, 88 6
     C98 6, 104 16, 112 16
     C120 16, 128 2, 138 2`;
  
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
          <linearGradient id="waveBase" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#4B7C9B" />
            <stop offset="50%" stopColor="#5A8FB0" />
            <stop offset="100%" stopColor="#4A7A99" />
          </linearGradient>
          
          <linearGradient id="waveHighlight" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="40%" stopColor="rgba(255,255,255,0.4)" />
            <stop offset="60%" stopColor="rgba(255,255,255,0.4)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
          
          <mask id="textMaskLogo">
            <rect x="0" y="0" width="180" height="50" fill="white" />
            <rect x="4" y="28" width="58" height="22" fill="black" rx="2" />
          </mask>
        </defs>
        
        {/* Wave layers - BEHIND text */}
        <g mask="url(#textMaskLogo)">
          {/* Base wave - always visible */}
          <path 
            d={wavePath}
            stroke="url(#waveBase)" 
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
              stroke="url(#waveHighlight)" 
              strokeWidth="3.5" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              style={{
                strokeDasharray: '30 170',
                strokeDashoffset: 0,
              }}
            />
          )}
        </g>
        
        {/* Text layer - FRONT */}
        <text 
          x="6" 
          y="40" 
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
          fontSize="14" 
          fontWeight="700" 
          fill="#1E293B" 
          letterSpacing="2.5px"
        >
          WAVES
        </text>
        
        <text 
          x="6" 
          y="48" 
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
          fontSize="7" 
          fontWeight="600" 
          fill="#64748B" 
          letterSpacing="1.2px"
        >
          LOGIX LTD.
        </text>
      </svg>
      
      <style jsx>{`
        .logo-animated .wave-highlight {
          animation: highlightFlow 2.5s linear infinite;
        }
        
        .logo-animated:hover .wave-highlight {
          animation-duration: 0.8s;
        }
        
        @keyframes highlightFlow {
          0% {
            stroke-dashoffset: 200;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </Link>
  );
}
