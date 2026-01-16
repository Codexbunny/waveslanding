'use client';

import { useEffect, useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CTAButton from './CTAButton';

const TELEGRAM_URL = process.env.NEXT_PUBLIC_TELEGRAM_URL || 'https://t.me/waveslogix';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Sphere configuration - spread across the screen with different base positions
const SPHERES_CONFIG = [
  { id: 1, baseX: 8, baseY: 25, color: 'purple', size: 52, oscillationSpeed: 0.08, oscillationAmp: 18 },
  { id: 2, baseX: 85, baseY: 15, color: 'blue', size: 58, oscillationSpeed: 0.07, oscillationAmp: 22 },
  { id: 3, baseX: 15, baseY: 70, color: 'purple', size: 48, oscillationSpeed: 0.09, oscillationAmp: 16 },
  { id: 4, baseX: 75, baseY: 55, color: 'blue', size: 54, oscillationSpeed: 0.075, oscillationAmp: 20 },
  { id: 5, baseX: 45, baseY: 40, color: 'purple', size: 60, oscillationSpeed: 0.065, oscillationAmp: 24 },
];

interface SphereProps {
  config: typeof SPHERES_CONFIG[0];
}

function Sphere({ config }: SphereProps) {
  const sphereRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    if (!sphereRef.current) return;

    const sphere = sphereRef.current;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = (Date.now() - startTime) / 1000;

      // Oscillation for floating effect
      const oscillationX = Math.sin(elapsed * config.oscillationSpeed * Math.PI * 2) * config.oscillationAmp * 0.6;
      const oscillationY = Math.cos(elapsed * config.oscillationSpeed * Math.PI * 2 + config.id) * config.oscillationAmp;
      
      // Secondary slower oscillation for more organic movement
      const oscillation2X = Math.sin(elapsed * config.oscillationSpeed * 0.7 * Math.PI * 2 + 2) * config.oscillationAmp * 0.3;
      const oscillation2Y = Math.cos(elapsed * config.oscillationSpeed * 0.5 * Math.PI * 2 + 1) * config.oscillationAmp * 0.4;

      // Final position
      const finalX = config.baseX + oscillationX + oscillation2X;
      const finalY = config.baseY + oscillationY + oscillation2Y;
      
      // Subtle scale pulsing
      const scale = 1 + Math.sin(elapsed * config.oscillationSpeed * Math.PI) * 0.06;

      // Apply transform
      sphere.style.left = `${finalX}%`;
      sphere.style.top = `${finalY}%`;
      sphere.style.transform = `translate(-50%, -50%) scale(${scale})`;

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [config]);

  // 3D sphere gradient colors (35% less opacity)
  const gradientColors = config.color === 'purple'
    ? {
        highlight: 'rgba(196, 167, 255, 0.39)',
        mid: 'rgba(139, 92, 246, 0.23)',
        base: 'rgba(109, 40, 217, 0.16)',
        shadow: 'rgba(76, 29, 149, 0.10)',
      }
    : {
        highlight: 'rgba(147, 197, 253, 0.39)',
        mid: 'rgba(74, 144, 226, 0.23)',
        base: 'rgba(59, 130, 246, 0.16)',
        shadow: 'rgba(30, 64, 175, 0.10)',
      };

  return (
    <div
      ref={sphereRef}
      className="absolute sphere-blur"
      style={{
        width: `${config.size * 4}px`,
        height: `${config.size * 4}px`,
        left: `${config.baseX}%`,
        top: `${config.baseY}%`,
        transform: 'translate(-50%, -50%)',
        zIndex: 1,
        pointerEvents: 'none',
      }}
    >
      {/* 3D Sphere with radial gradient */}
      <div
        className="w-full h-full rounded-full"
        style={{
          background: `
            radial-gradient(
              ellipse 30% 30% at 30% 25%,
              ${gradientColors.highlight} 0%,
              transparent 50%
            ),
            radial-gradient(
              ellipse 100% 100% at 50% 50%,
              ${gradientColors.mid} 0%,
              ${gradientColors.base} 50%,
              ${gradientColors.shadow} 80%,
              transparent 100%
            )
          `,
          boxShadow: `
            inset -20px -20px 60px rgba(0, 0, 0, 0.1),
            inset 10px 10px 40px ${gradientColors.highlight},
            0 20px 60px rgba(139, 92, 246, 0.2),
            0 40px 100px rgba(139, 92, 246, 0.1)
          `,
        }}
      />
    </div>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  const section3CtaRef = useRef<HTMLDivElement>(null);
  

  // GSAP ScrollTrigger animations
  useLayoutEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      // Hero headline - visible immediately, fades out on scroll
      gsap.to(headlineRef.current, {
        opacity: 0,
        y: -80,
        scale: 0.95,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '20% top',
          scrub: 0.8,
        },
      });

      // Tag also fades out
      gsap.to(tagRef.current, {
        opacity: 0,
        y: -50,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '15% top',
          scrub: 0.8,
        },
      });

      // Section 2 - fade in from bottom (starts earlier for shorter gap)
      gsap.fromTo(
        section2Ref.current,
        {
          opacity: 0,
          y: 80,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section2Ref.current,
            start: 'top 95%',
            end: 'top 50%',
            scrub: 0.8,
          },
        }
      );

      // Section 3 text - fade in from bottom
      gsap.fromTo(
        section3Ref.current,
        {
          opacity: 0,
          y: 80,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section3Ref.current,
            start: 'top 95%',
            end: 'top 50%',
            scrub: 0.8,
          },
        }
      );

      // Section 3 CTA buttons - slightly delayed
      gsap.fromTo(
        section3CtaRef.current,
        {
          opacity: 0,
          y: 50,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section3CtaRef.current,
            start: 'top 95%',
            end: 'top 55%',
            scrub: 0.8,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="hero-section relative overflow-hidden bg-gradient-to-br from-white via-purple-50/20 to-blue-50/30 pt-24"
    >
      {/* Spheres - fixed to viewport, floating with scroll-based path drift */}
      <div 
        className="fixed inset-0 overflow-hidden pointer-events-none" 
        style={{ zIndex: 0 }}
      >
        {SPHERES_CONFIG.map((config) => (
          <Sphere
            key={config.id}
            config={config}
          />
        ))}
      </div>

      {/* Improved wave decorative element */}
      <div className="absolute bottom-0 left-0 w-full opacity-20" style={{ zIndex: 2 }}>
        <svg 
          className="w-full h-48" 
          viewBox="0 0 1440 200" 
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradientBottom" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#A78BFA" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#4A90E2" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <path 
            d="M0,100 C240,140 480,80 720,120 C960,160 1200,100 1440,140 L1440,200 L0,200 Z" 
            fill="url(#waveGradientBottom)"
          />
        </svg>
      </div>

      {/* Headline - visible immediately, fades out on scroll */}
      <div 
        ref={headlineRef}
        className="h-[65vh] flex items-center justify-center"
        style={{ zIndex: 10 }}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-8">
              <span className="text-gray-900">Where market science meets </span>
              <span className="gradient-text">automated intelligence</span>
            </h1>
            {/* Tag - under headline, clickable to scroll to next section */}
            <div ref={tagRef}>
              <a 
                href="#hero-section-2"
                className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-sm font-semibold shadow-lg cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Explore new Forex opportunities!
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Subheadline - fades in from bottom on scroll (reduced height for shorter gap) */}
      <div 
        id="hero-section-2"
        ref={section2Ref}
        className="h-[45vh] flex items-center justify-center py-10"
        style={{ zIndex: 10 }}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              We apply Elliott Wave theory, quantitative research, and automated systems to professional account management and long-term strategy development.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section - fades in from bottom on scroll */}
      <div 
        className="h-[75vh] flex items-center justify-center py-10"
        style={{ zIndex: 10 }}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            {/* "Not signals" text moved up with more margin below */}
            <p 
              ref={section3Ref}
              className="text-2xl md:text-4xl font-bold text-gray-900 max-w-5xl mx-auto mb-24"
            >
              Not signals. Not speculation. A structured approach to the market.
            </p>

            <div
              ref={section3CtaRef}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <CTAButton href={TELEGRAM_URL} variant="primary" className="text-lg px-10 py-5 min-w-[250px]">
                Start Collaboration
              </CTAButton>
              <a 
                href="#services" 
                className="text-gray-700 hover:text-purple-600 font-semibold transition-colors flex items-center gap-2"
              >
                Learn More
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" style={{ zIndex: 10 }}>
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
