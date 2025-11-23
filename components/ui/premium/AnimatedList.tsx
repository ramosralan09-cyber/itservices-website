'use client';

import { motion } from 'framer-motion';
import { Check, ChevronRight, LucideIcon } from 'lucide-react';

interface AnimatedListProps {
  items: Array<{
    text: string;
    emoji?: string;
  }>;
  icon?: 'check' | 'chevron' | LucideIcon;
  iconColor?: string;
  className?: string;
}

export function AnimatedList({
  items,
  icon = 'check',
  iconColor = 'text-green-400',
  className = ''
}: AnimatedListProps) {
  const IconComponent = typeof icon === 'string'
    ? (icon === 'check' ? Check : ChevronRight)
    : icon;

  return (
    <ul className={`space-y-3 ${className}`}>
      {items.map((item, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="flex items-start gap-3 text-gray-300"
        >
          {item.emoji ? (
            <span className="text-xl flex-shrink-0 mt-0.5">{item.emoji}</span>
          ) : (
            <IconComponent className={`w-5 h-5 ${iconColor} flex-shrink-0 mt-0.5`} />
          )}
          <span>{item.text}</span>
        </motion.li>
      ))}
    </ul>
  );
}
