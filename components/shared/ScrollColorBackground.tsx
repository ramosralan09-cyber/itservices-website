'use client';

import { motion } from 'framer-motion';
import { useScrollColor } from '@/hooks/useScrollColor';
import { useEffect, useState } from 'react';

interface ScrollColorBackgroundProps {
  children: React.ReactNode;
  sections: Array<{ offset: number; color: string }>;
}

export function ScrollColorBackground({ children, sections }: ScrollColorBackgroundProps) {
  const backgroundColor = useScrollColor(sections);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <div className="relative">
      <motion.div
        animate={{ backgroundColor }}
        transition={{
          duration: prefersReducedMotion ? 0 : 0.3,
          ease: 'linear',
        }}
        className="fixed inset-0 -z-10"
        style={{ willChange: 'background-color' }}
      />

      <div className="relative z-0">
        {children}
      </div>
    </div>
  );
}
