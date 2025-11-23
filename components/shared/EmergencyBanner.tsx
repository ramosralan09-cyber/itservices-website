'use client';

import { motion, useScroll } from 'framer-motion';
import { Phone, MessageSquare } from 'lucide-react';
import { useState, useEffect } from 'react';
import { trackConversion } from '@/lib/analytics';

export default function EmergencyBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setIsVisible(latest > 300);
    });
  }, [scrollY]);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      className="fixed bottom-6 left-6 z-50"
    >
      <div className="bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl shadow-2xl p-4 max-w-sm">
        <div className="text-white font-bold text-sm mb-3 flex items-center gap-2">
          🚨 Emergencia 24/7
        </div>
        <div className="flex gap-2">
          <a
            href="tel:+19392842551"
            onClick={() => trackConversion('phone_click', 0)}
            className="flex items-center gap-2 px-4 py-2 bg-white text-red-600 rounded-lg font-semibold text-sm hover:bg-red-50 transition-colors"
          >
            <Phone className="w-4 h-4" />
            Llamar
          </a>
          <a
            href="https://wa.me/19392842551?text=Emergencia:%20"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackConversion('whatsapp_emergency', 0)}
            className="flex items-center gap-2 px-4 py-2 bg-white text-green-600 rounded-lg font-semibold text-sm hover:bg-green-50 transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            WhatsApp
          </a>
        </div>
      </div>
    </motion.div>
  );
}
