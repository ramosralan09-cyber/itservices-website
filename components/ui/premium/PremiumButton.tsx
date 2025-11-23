'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import Link from 'next/link';

interface PremiumButtonProps {
  href?: string;
  onClick?: () => void;
  icon?: LucideIcon;
  children: React.ReactNode;
  variant?: 'blue' | 'green' | 'yellow' | 'orange' | 'purple';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  className?: string;
}

const variantStyles = {
  blue: 'bg-gradient-to-r from-blue-500 to-blue-600 hover:shadow-blue-500/50',
  green: 'bg-gradient-to-r from-green-500 to-emerald-600 hover:shadow-green-500/50',
  yellow: 'bg-gradient-to-r from-yellow-500 to-orange-500 hover:shadow-yellow-500/50',
  orange: 'bg-gradient-to-r from-orange-500 to-red-500 hover:shadow-orange-500/50',
  purple: 'bg-gradient-to-r from-purple-500 to-pink-600 hover:shadow-purple-500/50',
};

const sizeStyles = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export function PremiumButton({
  href,
  onClick,
  icon: Icon,
  children,
  variant = 'blue',
  size = 'md',
  fullWidth = false,
  className = '',
}: PremiumButtonProps) {
  const buttonClasses = `
    inline-flex items-center justify-center gap-2
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    text-white rounded-xl font-semibold
    shadow-xl hover:shadow-2xl
    transition-all
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `;

  const content = (
    <>
      {Icon && <Icon className="w-5 h-5" />}
      {children}
    </>
  );

  if (href) {
    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={fullWidth ? 'w-full' : 'inline-block'}
      >
        <Link href={href} className={buttonClasses}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={buttonClasses}
    >
      {content}
    </motion.button>
  );
}
