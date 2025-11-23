'use client';

import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface BadgeProps {
  icon?: LucideIcon;
  text: string;
  variant?: 'blue' | 'green' | 'yellow' | 'purple' | 'red';
  className?: string;
}

const variantStyles = {
  blue: 'bg-blue-500/10 border-blue-500/30 text-blue-400',
  green: 'bg-green-500/10 border-green-500/30 text-green-400',
  yellow: 'bg-yellow-500/10 border-yellow-500/30 text-yellow-400',
  purple: 'bg-purple-500/10 border-purple-500/30 text-purple-400',
  red: 'bg-red-500/10 border-red-500/30 text-red-400',
};

export function Badge({ icon: Icon, text, variant = 'blue', className = '' }: BadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className={`inline-flex items-center gap-2 px-4 py-2 border rounded-full ${variantStyles[variant]} ${className}`}
    >
      {Icon && <Icon className="w-4 h-4" />}
      <span className="font-semibold text-sm">{text}</span>
    </motion.div>
  );
}
