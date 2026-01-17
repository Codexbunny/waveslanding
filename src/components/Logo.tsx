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
  // Calculate scale factor based on width
  const scale = width / 180;
  const scaledHeight = 50 * scale;
  
  return (
    <Link href="/" className={`inline-block ${className}`}>
      <svg 
        width={width} 
        height={height || scaledHeight} 
        viewBox="0 0 180 50" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="logo-svg"
        aria-label="Waves Logical TD"
      >
        <defs>
          <linearGradient id="waveGradientLogo" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#4B7C9B" />
            <stop offset="40%" stopColor="#5A8FB0" />
            <stop offset="100%" stopColor="#4A7A99" />
          </linearGradient>
          
          {/* Mask to clip wave behind text area */}
          <mask id="textMask">
            <rect x="0" y="0" width="180" height="50" fill="white" />
            {/* Black areas will hide the wave - covering text region */}
            <rect x="4" y="28" width="58" height="22" fill="black" rx="2" />
          </mask>
        </defs>
        
        {/* Wave layer - BEHIND text (rendered first, masked) */}
        <g mask="url(#textMask)">
          <path 
            className={animated ? 'wave-path-animated' : ''}
            d="M-10 22 
               C-4 22, 0 18, 6 18 
               C12 18, 16 24, 22 24
               C28 24, 34 12, 42 12
               C50 12, 54 20, 62 20
               C70 20, 78 6, 88 6
               C98 6, 104 16, 112 16
               C120 16, 128 2, 138 2"
            stroke="url(#waveGradientLogo)" 
            strokeWidth="3.5" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            style={{
              strokeDasharray: animated ? 280 : 'none',
              strokeDashoffset: 0,
            }}
          />
        </g>
        
        {/* Text layer - FRONT (rendered after wave) */}
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
          LOGICAL TD
        </text>
      </svg>
      
      <style jsx>{`
        .wave-path-animated {
          animation: waveFlowSmooth 6s ease-in-out infinite;
        }
        
        @keyframes waveFlowSmooth {
          0%, 100% {
            stroke-dashoffset: 0;
          }
          50% {
            stroke-dashoffset: -40;
          }
        }
      `}</style>
    </Link>
  );
}
