'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Phone, MessageCircle, Instagram, Facebook } from 'lucide-react';

interface CtaBannerProps {
  title: string;
  subtitle?: string;
  badge?: string;
  primaryLabel: string;
  primaryHref: string;
  primaryIcon?: 'phone' | 'message' | 'instagram' | 'facebook';
  secondaryLabel?: string;
  secondaryHref?: string;
  gradientClass: string;
}

export function CtaBanner({
  title,
  subtitle,
  badge,
  primaryLabel,
  primaryHref,
  primaryIcon = 'message',
  secondaryLabel,
  secondaryHref,
  gradientClass,
}: CtaBannerProps) {
  const isExternal = primaryHref.startsWith('http') || primaryHref.startsWith('tel:');
  const isSecondaryExternal = secondaryHref?.startsWith('http') || secondaryHref?.startsWith('tel:');

  const getIcon = () => {
    switch (primaryIcon) {
      case 'phone':
        return <Phone className="w-5 h-5" />;
      case 'instagram':
        return <Instagram className="w-5 h-5" />;
      case 'facebook':
        return <Facebook className="w-5 h-5" />;
      default:
        return <MessageCircle className="w-5 h-5" />;
    }
  };

  const PrimaryButton = (
    <motion.a
      href={primaryHref}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="px-8 py-4 bg-white text-deepBlue rounded-xl font-bold hover:bg-gray-100 transition-colors flex items-center gap-2 justify-center shadow-xl"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {getIcon()}
      {primaryLabel}
    </motion.a>
  );

  const SecondaryButton = secondaryLabel && secondaryHref && (
    <motion.a
      href={secondaryHref}
      {...(isSecondaryExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-bold hover:bg-white hover:text-deepBlue transition-colors flex items-center gap-2 justify-center"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {secondaryLabel}
    </motion.a>
  );

  return (
    <div className={`${gradientClass} py-12`}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            {badge && (
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                <span className="text-white font-semibold text-sm">{badge}</span>
              </div>
            )}
            <h3 className="text-3xl font-bold text-white mb-2">
              {title}
            </h3>
            {subtitle && (
              <p className="text-blue-100 text-lg">
                {subtitle}
              </p>
            )}
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            {PrimaryButton}
            {SecondaryButton}
          </div>
        </div>
      </div>
    </div>
  );
}
