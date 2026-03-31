import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ['Home', 'About', 'Work', 'Skills', 'Resume', 'Contact'];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed top-0 left-0 w-full z-[9990] px-6 md:px-12 py-6 flex justify-between items-center bg-cinematic-black/20 backdrop-blur-md border-b border-white/5"
      >
        <a href="#home" className="text-xl font-display font-bold tracking-tighter text-cinematic-gold interactive">
          JYH<span className="text-white">.</span>
        </a>
        
        <div className="hidden md:flex gap-12">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[10px] uppercase tracking-[0.3em] text-cinematic-offwhite/70 hover:text-cinematic-gold transition-colors interactive"
            >
              {item}
            </a>
          ))}
        </div>
        
        <button 
          onClick={() => setIsMenuOpen(true)}
          className="md:hidden flex flex-col gap-1.5 interactive"
        >
          <div className="w-6 h-0.5 bg-cinematic-gold" />
          <div className="w-4 h-0.5 bg-cinematic-gold self-end" />
        </button>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[9999] bg-cinematic-black flex flex-col items-center justify-center gap-8"
          >
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-8 right-8 p-4 text-cinematic-gold interactive"
            >
              <X size={32} />
            </button>
            
            {navItems.map((item, i) => (
              <motion.a
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="text-4xl font-display font-black tracking-tighter text-white hover:text-cinematic-gold transition-colors"
              >
                {item}
              </motion.a>
            ))}
            
            <div className="absolute bottom-12 flex gap-8 text-[10px] tracking-[0.4em] uppercase text-cinematic-offwhite/30">
              <a href="#">IG</a>
              <a href="#">LI</a>
              <a href="#">BE</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
