'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { Badge } from './Badge';

interface SectionHeaderProps {
  badge?: {
    icon?: LucideIcon;
    text: string;
    variant?: 'blue' | 'green' | 'yellow' | 'purple' | 'red';
  };
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeader({
  badge,
  title,
  description,
  align = 'center',
  className = '',
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`flex flex-col ${alignClass} mb-12 ${className}`}
    >
      {badge && (
        <Badge
          icon={badge.icon}
          text={badge.text}
          variant={badge.variant}
          className="mb-6"
        />
      )}

      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
        {title}
      </h2>

      {description && (
        <p className="text-xl text-gray-300 max-w-3xl">
          {description}
        </p>
      )}
    </motion.div>
  );
}
