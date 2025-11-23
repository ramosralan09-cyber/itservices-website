'use client';

import { useState, useEffect } from 'react';
import { CtaBanner } from './CtaBanner';
import { motion } from 'framer-motion';

interface Slide {
  key: string;
  title: string;
  subtitle: string;
  badge?: string;
  primaryLabel: string;
  primaryHref: string;
  primaryIcon: 'phone' | 'message' | 'instagram' | 'facebook';
  secondaryLabel?: string;
  secondaryHref?: string;
  gradientClass: string;
}

const slides: Slide[] = [
  {
    key: 'project',
    title: '¿Listo para tu próximo proyecto?',
    subtitle: 'Más de 120 clientes satisfechos confían en nosotros en toda la isla',
    primaryLabel: 'Solicitar Cotización',
    primaryHref: 'https://wa.me/19392842551?text=Hola%2C%20necesito%20una%20cotización',
    primaryIcon: 'message' as const,
    gradientClass: 'bg-gradient-to-br from-blue-600 via-violet-600 to-blue-600',
  },
  {
    key: 'instagram',
    title: 'Mantente conectado',
    subtitle: 'Síguenos en redes sociales para estar al tanto de novedades y promociones',
    primaryLabel: 'Síguenos en Instagram',
    primaryHref: 'https://www.instagram.com/itservicespr?igsh=MmI5Z3J2dWYwMHVz&utm_source=qr',
    primaryIcon: 'instagram' as const,
    gradientClass: 'bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600',
  },
  {
    key: 'facebook',
    title: 'Conéctate por Facebook',
    subtitle: 'Síguenos en Facebook para ver proyectos, noticias y promociones',
    primaryLabel: 'Síguenos en Facebook',
    primaryHref: 'https://www.facebook.com/itservicespr',
    primaryIcon: 'facebook' as const,
    gradientClass: 'bg-gradient-to-r from-[#0B5EFF] to-[#1A8CFF]',
  },
];

export function CtaCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div className="relative min-h-[200px] md:min-h-[180px]">
        {slides.map((slide, index) => (
          <div
            key={slide.key}
            className={`
              transition-all duration-500 ease-out
              ${
                index === activeIndex
                  ? 'opacity-100 translate-y-0 relative'
                  : 'opacity-0 -translate-y-2 pointer-events-none absolute inset-0'
              }
            `}
          >
            <CtaBanner
              title={slide.title}
              subtitle={slide.subtitle}
              badge={slide.badge}
              primaryLabel={slide.primaryLabel}
              primaryHref={slide.primaryHref}
              primaryIcon={slide.primaryIcon}
              secondaryLabel={slide.secondaryLabel}
              secondaryHref={slide.secondaryHref}
              gradientClass={slide.gradientClass}
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2 py-4 bg-charcoal/50">
        {slides.map((slide, index) => (
          <button
            key={slide.key}
            onClick={() => setActiveIndex(index)}
            className={`
              w-2 h-2 rounded-full transition-all duration-300
              ${
                index === activeIndex
                  ? 'bg-skyBlue w-8'
                  : 'bg-gray-500 hover:bg-gray-400'
              }
            `}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
