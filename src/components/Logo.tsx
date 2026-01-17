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
          <linearGradient id="waveGradientMain" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#4B7C9B" />
            <stop offset="50%" stopColor="#5A8FB0" />
            <stop offset="100%" stopColor="#4A7A99" />
          </linearGradient>
        </defs>
        
        {/* Elliott Wave - 5 waves pattern, clean and professional */}
        <path 
          className={animated ? 'wave-path-animated' : ''}
          d="M8 28 
             C12 28, 14 24, 18 24 
             C22 24, 24 28, 28 28
             C32 28, 35 18, 40 18
             C45 18, 47 26, 52 26
             C57 26, 62 10, 68 10
             C74 10, 76 22, 82 22
             C88 22, 94 6, 100 6"
          stroke="url(#waveGradientMain)" 
          strokeWidth="4" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          style={{
            strokeDasharray: animated ? 200 : 'none',
            strokeDashoffset: 0,
          }}
        />
        
        {/* Company name - WAVES */}
        <text 
          x="8" 
          y="38" 
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
          fontSize="13" 
          fontWeight="700" 
          fill="#1E293B" 
          letterSpacing="2.5px"
        >
          WAVES
        </text>
        
        {/* Company name - LOGICAL TD */}
        <text 
          x="8" 
          y="47" 
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
          animation: waveFlow 3s ease-in-out infinite;
        }
        
        @keyframes waveFlow {
          0%, 100% {
            stroke-dashoffset: 0;
            opacity: 1;
          }
          50% {
            stroke-dashoffset: -15;
            opacity: 0.85;
          }
        }
        
        .logo-svg:hover .wave-path-animated {
          animation: waveFlowHover 1.5s ease-in-out infinite;
        }
        
        @keyframes waveFlowHover {
          0%, 100% {
            stroke-dashoffset: 0;
          }
          50% {
            stroke-dashoffset: -25;
          }
        }
      `}</style>
    </Link>
  );
}
