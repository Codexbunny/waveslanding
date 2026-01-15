import Image from 'next/image';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function Logo({ className = '', width = 200, height = 60 }: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src="/logo.svg"
        alt="Waves Logix Ltd."
        width={width}
        height={height}
        priority
        className="h-auto"
      />
    </div>
  );
}

