'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { IconContainer } from './IconContainer';

interface PremiumCardProps {
  icon?: LucideIcon;
  iconVariant?: 'blue' | 'green' | 'yellow' | 'purple' | 'red' | 'cyan' | 'orange';
  title: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
  hoverBorderColor?: string;
}

export function PremiumCard({
  icon,
  iconVariant = 'blue',
  title,
  description,
  children,
  className = '',
  hoverBorderColor = 'hover:border-blue-500/50',
}: PremiumCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className={`bg-gradient-to-br from-slate/80 to-charcoal/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 ${hoverBorderColor} transition-all group ${className}`}
    >
      {(icon || title) && (
        <div className="flex items-center gap-3 mb-6">
          {icon && <IconContainer icon={icon} variant={iconVariant} />}
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white">{title}</h3>
            {description && (
              <p className="text-gray-400 text-sm mt-1">{description}</p>
            )}
          </div>
        </div>
      )}

      {children && <div className="text-gray-300">{children}</div>}
    </motion.div>
  );
}
