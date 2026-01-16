'use client';

import { motion, useSpring, useTransform, useMotionValueEvent, useMotionValue } from 'framer-motion';
import { useState, useEffect } from 'react';
import CTAButton from './CTAButton';

const TELEGRAM_URL = process.env.NEXT_PUBLIC_TELEGRAM_URL || 'https://t.me/waveslogix';

// Elliott Wave pattern positions (5 points forming a wave)
const ELLIOTT_WAVE_CIRCLES = [
  { id: 1, baseX: 0.15, baseY: 0.7, color: 'purple', size: 'w-32 h-32 md:w-40 md:h-40' },
  { id: 2, baseX: 0.35, baseY: 0.65, color: 'purple', size: 'w-32 h-32 md:w-40 md:h-40' },
  { id: 3, baseX: 0.5, baseY: 0.3, color: 'blue', size: 'w-36 h-36 md:w-44 md:h-44' }, // Peak - slightly larger
  { id: 4, baseX: 0.65, baseY: 0.55, color: 'purple', size: 'w-32 h-32 md:w-40 md:h-40' },
  { id: 5, baseX: 0.85, baseY: 0.45, color: 'blue', size: 'w-32 h-32 md:w-40 md:h-40' },
];

function ElliottWaveCircle({ circle, mousePos, hoveredCircle, setHoveredCircle }: {
  circle: typeof ELLIOTT_WAVE_CIRCLES[0];
  mousePos: { x: number; y: number };
  hoveredCircle: number | null;
  setHoveredCircle: (id: number | null) => void;
}) {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  // Calculate mouse repulsion
  useEffect(() => {
    const distance = Math.sqrt(
      Math.pow(mousePos.x - circle.baseX, 2) + 
      Math.pow(mousePos.y - circle.baseY, 2)
    );
    const repulsionRadius = 0.18;
    const repulsionStrength = hoveredCircle === circle.id ? 0.25 : 0.15;
    
    if (distance < repulsionRadius && distance > 0.01) {
      const angle = Math.atan2(
        circle.baseY - mousePos.y,
        circle.baseX - mousePos.x
      );
      const repulsion = repulsionStrength * (1 - distance / repulsionRadius);
      setMouseOffset({
        x: Math.cos(angle) * repulsion * 100,
        y: Math.sin(angle) * repulsion * 100,
      });
    } else {
      setMouseOffset({ x: 0, y: 0 });
    }
  }, [mousePos, circle, hoveredCircle]);

  const springX = useSpring(mouseOffset.x, { stiffness: 150, damping: 30 });
  const springY = useSpring(mouseOffset.y, { stiffness: 150, damping: 30 });

  return (
    <motion.div
      style={{
        position: 'absolute',
        left: `${circle.baseX * 100}%`,
        top: `${circle.baseY * 100}%`,
        x: springX,
        y: springY,
        transform: 'translate(-50%, -50%)',
      }}
      onMouseEnter={() => setHoveredCircle(circle.id)}
      onMouseLeave={() => setHoveredCircle(null)}
    >
      <motion.div
        className={`${circle.size} rounded-full ${
          circle.color === 'purple' 
            ? 'bg-gradient-to-br from-purple-400/25 via-purple-500/30 to-purple-600/25' 
            : 'bg-gradient-to-br from-blue-400/25 via-blue-500/30 to-blue-600/25'
        } backdrop-blur-[80px] border border-white/20 shadow-[0_0_100px_rgba(139,92,246,0.3),0_0_200px_rgba(139,92,246,0.15)] cursor-pointer`}
        style={{
          filter: 'blur(20px) drop-shadow(0 20px 40px rgba(139, 92, 246, 0.2))',
        }}
        animate={{
          x: [
            0,
            Math.sin(circle.id * 1.5) * 60,
            Math.cos(circle.id * 2) * 80,
            Math.sin(circle.id * 0.8) * 50,
            0,
          ],
          y: [
            0,
            Math.cos(circle.id * 1.2) * 70,
            Math.sin(circle.id * 1.8) * 90,
            Math.cos(circle.id * 1.5) * 60,
            0,
          ],
          scale: [1, 1.15, 1.05, 1.1, 1],
          rotateX: [0, 10, -10, 5, 0],
          rotateY: [0, -10, 10, -5, 0],
        }}
        transition={{
          x: {
            duration: 12 + circle.id * 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          },
          y: {
            duration: 15 + circle.id * 1.2,
            repeat: Infinity,
            ease: "easeInOut",
          },
          scale: {
            duration: 6 + circle.id * 0.8,
            repeat: Infinity,
            ease: "easeInOut",
          },
          rotateX: {
            duration: 10 + circle.id,
            repeat: Infinity,
            ease: "easeInOut",
          },
          rotateY: {
            duration: 12 + circle.id * 0.8,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        whileHover={{
          scale: 1.6,
          filter: 'blur(15px) drop-shadow(0 30px 60px rgba(139, 92, 246, 0.5))',
          borderColor: "rgba(255, 255, 255, 0.4)",
        }}
      />
    </motion.div>
  );
}

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCircle, setHoveredCircle] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-purple-50/20 to-blue-50/30 pt-24" style={{ perspective: '1000px' }}>
      {/* Elliott Wave Circles - 5 glass circles in wave pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {ELLIOTT_WAVE_CIRCLES.map((circle) => (
          <ElliottWaveCircle
            key={circle.id}
            circle={circle}
            mousePos={mousePosition}
            hoveredCircle={hoveredCircle}
            setHoveredCircle={setHoveredCircle}
          />
        ))}
      </div>

      {/* Improved wave decorative element */}
      <div className="absolute bottom-0 left-0 w-full opacity-20">
        <motion.svg 
          className="w-full h-48" 
          viewBox="0 0 1440 200" 
          preserveAspectRatio="none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.2, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          <defs>
            <linearGradient id="waveGradientBottom" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#A78BFA" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#4A90E2" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <motion.path 
            d="M0,100 C240,140 480,80 720,120 C960,160 1200,100 1440,140 L1440,200 L0,200 Z" 
            fill="url(#waveGradientBottom)"
            animate={{
              d: [
                "M0,100 C240,140 480,80 720,120 C960,160 1200,100 1440,140 L1440,200 L0,200 Z",
                "M0,120 C240,100 480,140 720,100 C960,140 1200,120 1440,100 L1440,200 L0,200 Z",
                "M0,100 C240,140 480,80 720,120 C960,160 1200,100 1440,140 L1440,200 L0,200 Z",
              ]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.svg>
      </div>

      {/* Tag */}
      <div className="absolute top-32 left-1/2 transform -translate-x-1/2 z-20 w-full px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span 
              className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-sm font-semibold shadow-lg"
              animate={{
                y: [0, -8, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Исследуй новые Forex возможности!
            </motion.span>
          </motion.div>
        </div>
      </div>

      {/* Headline - появляется сразу, исчезает при скролле */}
      <div className="h-[70vh] flex items-center justify-center relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <motion.h1
              className="text-5xl md:text-7xl font-extrabold leading-tight"
              initial={{ opacity: 1, y: 0, scale: 1 }}
              animate={{ 
                opacity: scrollY > 100 ? 0 : 1,
                y: scrollY > 100 ? -80 : 0,
                scale: scrollY > 100 ? 0.9 : 1
              }}
              transition={{ 
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1]
              }}
            >
              <span className="text-gray-900">Where market science meets </span>
              <span className="gradient-text">automated intelligence</span>
            </motion.h1>
          </div>
        </div>
      </div>
      
      {/* Subheadline - появляется при скролле, когда headline исчезает */}
      <div className="h-[60vh] flex items-center justify-center relative z-10 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <motion.p
              className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ 
                opacity: [0, 0.5, 1],
                y: [60, 10, 0],
                scale: [0.95, 1, 1]
              }}
              viewport={{ once: false, amount: 0.6 }}
              transition={{ 
                duration: 1.2,
                ease: [0.25, 0.1, 0.25, 1]
              }}
            >
              We apply Elliott Wave theory, quantitative research, and automated systems to professional account management and long-term strategy development.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Scroll-trigger строка и кнопки - появляются вместе при дальнейшем скролле */}
      <div className="h-[60vh] flex items-center justify-center relative z-10 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center space-y-12">
            <motion.p
              className="text-2xl md:text-4xl font-bold text-gray-900 max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ 
                opacity: [0, 0.5, 1],
                y: [60, 10, 0],
                scale: [0.95, 1, 1]
              }}
              viewport={{ once: false, amount: 0.6 }}
              transition={{ 
                duration: 1.2,
                ease: [0.25, 0.1, 0.25, 1]
              }}
            >
              Not signals. Not speculation. A structured approach to the market.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ 
                opacity: [0, 0.7, 1],
                y: [40, 5, 0],
                scale: [0.95, 1, 1]
              }}
              viewport={{ once: false, amount: 0.6 }}
              transition={{ 
                duration: 1.2,
                delay: 0.3,
                ease: [0.25, 0.1, 0.25, 1]
              }}
            >
              <CTAButton href={TELEGRAM_URL} variant="primary" className="text-lg px-10 py-5 min-w-[250px]">
                Начать сотрудничество
              </CTAButton>
              <a 
                href="#services" 
                className="text-gray-700 hover:text-purple-600 font-semibold transition-colors flex items-center gap-2"
              >
                Узнать больше
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
}

