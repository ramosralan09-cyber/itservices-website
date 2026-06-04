'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const STORAGE_KEY = 'itss_promo_shown';

export function SummerPromoModal() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem(STORAGE_KEY)) {
      sessionStorage.setItem(STORAGE_KEY, '1');
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  const close = () => setVisible(false);

  return (
    <div
      className="fixed inset-0 flex items-center justify-center"
      style={{ zIndex: 9999, backgroundColor: 'rgba(0,0,0,0.85)', animation: 'itssPromoFadeIn 300ms ease forwards' }}
      onClick={close}
    >
      <style>{`
        @keyframes itssPromoFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>

      <div
        className="relative rounded-xl overflow-hidden w-[95vw] max-w-[480px]"
        style={{ backgroundColor: '#111' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={close}
          aria-label="Cerrar"
          className="absolute top-3 right-3 text-white text-2xl font-bold leading-none z-10 w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors"
        >
          ×
        </button>

        {/* Promo image */}
        <div className="w-full relative">
          <Image
            src="/promo-verano.png"
            alt="Promoción de Verano – 4 Cámaras"
            width={480}
            height={480}
            className="w-full h-auto"
            priority
          />
        </div>

        {/* CTA buttons */}
        <div className="flex gap-3 p-4">
          <a
            href="tel:+17876193432"
            className="flex-1 text-center font-bold text-white py-3 px-4 rounded-lg text-sm transition-opacity hover:opacity-90 active:opacity-80"
            style={{ backgroundColor: '#FF7A00' }}
          >
            📞 Llamar Ahora
          </a>
          <a
            href="https://wa.me/19392842551?text=Hola%2C%20estoy%20interesado%20en%20la%20Promoci%C3%B3n%20de%20Verano%20de%204%20c%C3%A1maras."
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center font-bold text-white py-3 px-4 rounded-lg text-sm transition-opacity hover:opacity-90 active:opacity-80"
            style={{ backgroundColor: '#25D366' }}
          >
            💬 WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
