import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export const CustomCursor: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('button, a, .interactive')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveMouse);
    window.addEventListener('mouseover', handleHoverStart);

    return () => {
      window.removeEventListener('mousemove', moveMouse);
      window.removeEventListener('mouseover', handleHoverStart);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      <style>{`
        @media (min-width: 768px) {
          body, html, #root, * { cursor: none !important; }
        }
      `}</style>
      <motion.div
        className="hidden md:block fixed top-0 left-0 w-4 h-4 bg-cinematic-gold rounded-full pointer-events-none z-[20000] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
      <motion.div
        className="hidden md:block fixed top-0 left-0 w-12 h-12 border border-cinematic-gold rounded-full pointer-events-none z-[19999]"
        animate={{
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? 'rgba(201, 168, 76, 0.1)' : 'transparent',
        }}
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </>
  );
};

export const FilmGrain: React.FC = () => (
  <div className="fixed inset-0 pointer-events-none z-[9997] opacity-[0.03] bg-noise mix-blend-overlay" />
);
