'use client';

import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
  href?: string;
  animated?: boolean;
}

export default function Logo({ 
  className = '', 
  width = 200, 
  height = 60,
  href,
  animated = true
}: LogoProps) {
  const logoContent = (
    <div className={`flex items-center ${animated ? 'logo-animated' : ''} ${className}`}>
      <Image
        src="/logo.svg"
        alt="Waves Logical TD"
        width={width}
        height={height}
        priority
        className="h-auto"
      />
    </div>
  );

  // If href is provided, wrap in Link
  if (href) {
    return (
      <Link href={href} className="inline-block">
        {logoContent}
      </Link>
    );
  }

  return logoContent;
}
