'use client';

import { motion } from 'framer-motion';

interface GradientBannerProps {
  children: React.ReactNode;
  variant?: 'blue' | 'purple' | 'green' | 'orange';
  className?: string;
}

const variantStyles = {
  blue: 'from-blue-600/20 via-violet-600/20 to-blue-600/20 border-blue-500/30',
  purple: 'from-purple-600/20 via-pink-600/20 to-purple-600/20 border-purple-500/30',
  green: 'from-green-600/20 via-emerald-600/20 to-green-600/20 border-green-500/30',
  orange: 'from-orange-600/20 via-red-600/20 to-orange-600/20 border-orange-500/30',
};

export function GradientBanner({
  children,
  variant = 'blue',
  className = ''
}: GradientBannerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`bg-gradient-to-r ${variantStyles[variant]} border rounded-2xl p-6 ${className}`}
    >
      {children}
    </motion.div>
  );
}
