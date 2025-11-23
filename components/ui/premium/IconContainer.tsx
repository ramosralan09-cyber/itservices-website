'use client';

import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface IconContainerProps {
  icon: LucideIcon;
  variant?: 'blue' | 'green' | 'yellow' | 'purple' | 'red' | 'cyan' | 'orange';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const variantStyles = {
  blue: 'bg-blue-500/20 text-blue-400',
  green: 'bg-green-500/20 text-green-400',
  yellow: 'bg-yellow-500/20 text-yellow-400',
  purple: 'bg-purple-500/20 text-purple-400',
  red: 'bg-red-500/20 text-red-400',
  cyan: 'bg-violet-500/20 text-violet-400',
  orange: 'bg-orange-500/20 text-orange-400',
};

const sizeStyles = {
  sm: 'w-10 h-10',
  md: 'w-12 h-12',
  lg: 'w-16 h-16',
};

const iconSizes = {
  sm: 'w-5 h-5',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
};

export function IconContainer({
  icon: Icon,
  variant = 'blue',
  size = 'md',
  className = ''
}: IconContainerProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.1, rotate: 5 }}
      transition={{ type: 'spring', stiffness: 400 }}
      className={`${sizeStyles[size]} ${variantStyles[variant]} rounded-xl flex items-center justify-center ${className}`}
    >
      <Icon className={iconSizes[size]} />
    </motion.div>
  );
}
