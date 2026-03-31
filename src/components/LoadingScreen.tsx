import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const LoadingScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [count, setCount] = useState(5);

  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => setCount(count - 1), 400);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(onComplete, 800);
      return () => clearTimeout(timer);
    }
  }, [count, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-cinematic-black z-[10000] flex items-center justify-center flex-col"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="relative w-32 h-32 md:w-48 md:h-48 flex items-center justify-center">
        {/* Film Countdown Circle */}
        <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 192 192">
          <circle
            cx="96"
            cy="96"
            r="90"
            fill="none"
            stroke="rgba(201, 168, 76, 0.1)"
            strokeWidth="2"
          />
          <motion.circle
            cx="96"
            cy="96"
            r="90"
            fill="none"
            stroke="#C9A84C"
            strokeWidth="2"
            strokeDasharray="565.48"
            initial={{ strokeDashoffset: 0 }}
            animate={{ strokeDashoffset: 565.48 }}
            transition={{ duration: 2.4, ease: "linear" }}
          />
        </svg>
        
        <AnimatePresence mode="wait">
          <motion.span
            key={count}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.5 }}
            className="text-4xl md:text-6xl font-display font-black text-cinematic-gold"
          >
            {count > 0 ? count : "START"}
          </motion.span>
        </AnimatePresence>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 text-[8px] md:text-xs tracking-[0.2em] md:tracking-[0.4em] uppercase text-cinematic-gold/50 px-6 text-center"
      >
        A Portfolio by Jack Yasinton Huvanundana
      </motion.div>
    </motion.div>
  );
};
