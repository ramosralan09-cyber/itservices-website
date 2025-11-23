'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
  iconColor?: string;
}

interface BenefitsGridProps {
  benefits: Benefit[];
  columns?: 2 | 3 | 4;
  className?: string;
}

export function BenefitsGrid({
  benefits,
  columns = 3,
  className = ''
}: BenefitsGridProps) {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4',
  };

  return (
    <div className={`grid gap-6 ${gridCols[columns]} ${className}`}>
      {benefits.map((benefit, index) => {
        const Icon = benefit.icon;
        const iconColorClass = benefit.iconColor || 'text-blue-400';

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="text-center"
          >
            <Icon className={`w-8 h-8 ${iconColorClass} mx-auto mb-3`} />
            <h4 className="text-white font-semibold mb-1">{benefit.title}</h4>
            <p className="text-gray-400 text-sm">{benefit.description}</p>
          </motion.div>
        );
      })}
    </div>
  );
}
