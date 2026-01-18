'use client';

import { useEffect, useRef, useState } from 'react';

export default function CursorFollower() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  
  // Position refs for smooth lerp animation
  const mousePos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    // Check if mobile device
    const checkMobile = () => {
      const mobile = window.matchMedia('(max-width: 768px)').matches || 
                     'ontouchstart' in window ||
                     navigator.maxTouchPoints > 0;
      setIsMobile(mobile);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Skip on mobile
    if (isMobile) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    // Lerp factor - lower = smoother/slower, higher = faster
    const lerp = 0.15;

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      
      if (!isVisible) {
        // Initialize cursor position immediately on first move
        cursorPos.current = { x: e.clientX, y: e.clientY };
        setIsVisible(true);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Animation loop with lerp for smooth following
    const animate = () => {
      if (!cursor) return;

      // Lerp towards mouse position
      cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * lerp;
      cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * lerp;

      // Apply transform (GPU accelerated)
      cursor.style.transform = `translate3d(${cursorPos.current.x}px, ${cursorPos.current.y}px, 0) translate(-50%, -50%)`;

      animationRef.current = requestAnimationFrame(animate);
    };

    // Start animation and event listeners
    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isMobile, isVisible]);

  // Don't render on mobile
  if (isMobile) return null;

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none z-[9999] mix-blend-difference"
      style={{
        width: '24px',
        height: '24px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.6) 0%, rgba(139, 92, 246, 0.2) 60%, transparent 100%)',
        filter: 'blur(4px)',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.3s ease',
        willChange: 'transform',
        top: 0,
        left: 0,
      }}
      aria-hidden="true"
    />
  );
}
