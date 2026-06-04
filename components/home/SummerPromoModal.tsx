'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Smartphone, Camera, Wrench, X, Phone } from 'lucide-react';

const STORAGE_KEY = 'itss_promo_shown';

const features = [
  '4 Cámaras EPCOM',
  'Grabadora 4 Canales',
  'Junction Box',
  'Cableado Estructurado',
  'Instalación Completa',
];

const benefits = [
  { icon: Shield, label: 'Seguridad 24/7' },
  { icon: Smartphone, label: 'Acceso Remoto' },
  { icon: Camera, label: 'Imágenes HD' },
  { icon: Wrench, label: 'Instalación Profesional' },
];

export function SummerPromoModal() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem(STORAGE_KEY)) {
      sessionStorage.setItem(STORAGE_KEY, '1');
      setVisible(true);
    }
  }, []);

  const close = () => setVisible(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;900&display=swap');

        @keyframes itss-scan {
          0%   { transform: translateY(-100%); opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { transform: translateY(900%); opacity: 0; }
        }
        @keyframes itss-pulse-price {
          0%, 100% { transform: scale(1); }
          50%       { transform: scale(1.032); }
        }
        .itss-scan-line { animation: itss-scan 4s ease-in-out infinite; }
        .itss-price-pulse { animation: itss-pulse-price 3s ease-in-out infinite; }
        .itss-modal-scroll::-webkit-scrollbar { display: none; }
        .itss-modal-scroll { -ms-overflow-style: none; scrollbar-width: none; }
        .itss-btn-call:hover  { box-shadow: 0 6px 32px rgba(255,122,0,0.65), inset 0 1px 0 rgba(255,255,255,0.18) !important; }
        .itss-btn-wa:hover    { box-shadow: 0 6px 32px rgba(37,211,102,0.55), inset 0 1px 0 rgba(255,255,255,0.18) !important; }
      `}</style>

      <AnimatePresence>
        {visible && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-3"
            style={{ backdropFilter: 'blur(5px) brightness(0.6)', backgroundColor: 'rgba(0,0,0,0.72)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={close}
          >
            <motion.div
              className="itss-modal-scroll relative w-full max-w-md overflow-y-auto rounded-2xl"
              style={{
                maxHeight: '95svh',
                backgroundColor: '#080F22',
                border: '1px solid rgba(59,130,246,0.18)',
                boxShadow:
                  '0 0 0 1px rgba(245,166,35,0.08), 0 0 60px rgba(245,166,35,0.14), 0 30px 60px rgba(0,0,0,0.7)',
              }}
              initial={{ opacity: 0, scale: 0.84, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.91, y: 12 }}
              transition={{ type: 'spring', damping: 22, stiffness: 320, mass: 0.8 }}
              onClick={e => e.stopPropagation()}
            >
              {/* ── Close ── */}
              <button
                onClick={close}
                aria-label="Cerrar"
                className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                <X size={15} className="text-white/70" />
              </button>

              {/* ── Badges ── */}
              <div className="px-5 pt-5 pb-2 flex flex-wrap items-center gap-2">
                <span
                  className="flex items-center gap-1.5 font-black uppercase tracking-wide"
                  style={{
                    transform: 'rotate(-2deg)',
                    background: 'linear-gradient(130deg, #F5A623 0%, #FFD542 60%, #F5A623 100%)',
                    padding: '5px 13px',
                    borderRadius: '999px',
                    fontSize: '11px',
                    color: '#0D1A36',
                    letterSpacing: '0.06em',
                    boxShadow: '0 2px 14px rgba(245,166,35,0.4)',
                  }}
                >
                  ☀️ Oferta de Verano
                </span>
                <span
                  className="font-bold uppercase tracking-widest"
                  style={{
                    background: 'rgba(59,130,246,0.15)',
                    border: '1px solid rgba(59,130,246,0.28)',
                    padding: '4px 11px',
                    borderRadius: '999px',
                    fontSize: '10px',
                    color: '#93C5FD',
                    letterSpacing: '0.1em',
                  }}
                >
                  Todo incluido
                </span>
              </div>

              {/* ── Headline ── */}
              <div className="px-5 pb-3">
                <h2
                  className="text-white"
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: '26px',
                    fontWeight: 900,
                    lineHeight: 1.05,
                    letterSpacing: '-0.01em',
                  }}
                >
                  Protege lo que más importa
                </h2>
              </div>

              {/* ── Promo image with scan line ── */}
              <div className="relative w-full overflow-hidden" style={{ lineHeight: 0 }}>
                <Image
                  src="/promo-verano.png"
                  alt="Promoción de Verano – 4 Cámaras de Seguridad"
                  width={480}
                  height={480}
                  className="w-full h-auto block"
                  priority
                />
                {/* amber scan line */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div
                    className="itss-scan-line w-full"
                    style={{
                      height: '3px',
                      background: 'linear-gradient(90deg, transparent 0%, rgba(245,166,35,0.25) 30%, rgba(245,166,35,0.6) 50%, rgba(245,166,35,0.25) 70%, transparent 100%)',
                    }}
                  />
                </div>
                {/* gradient fade into card */}
                <div
                  className="absolute inset-x-0 bottom-0"
                  style={{ height: '72px', background: 'linear-gradient(to bottom, transparent, #080F22)' }}
                />
              </div>

              {/* ── Price block ── */}
              <div className="px-5 pt-1 pb-2 text-center">
                <p
                  className="uppercase font-semibold tracking-widest"
                  style={{ fontSize: '10px', color: 'rgba(255,255,255,0.42)', marginBottom: '2px', letterSpacing: '0.14em' }}
                >
                  Todo este sistema instalado por solo
                </p>
                <div className="itss-price-pulse inline-block">
                  <span
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: '62px',
                      fontWeight: 900,
                      color: '#F5A623',
                      lineHeight: 1,
                      letterSpacing: '-0.02em',
                      textShadow: '0 0 40px rgba(245,166,35,0.35)',
                      display: 'block',
                    }}
                  >
                    $849.99
                  </span>
                </div>
              </div>

              {/* ── Feature pills ── */}
              <div className="px-5 pb-4 flex flex-wrap justify-center gap-1.5">
                {features.map(f => (
                  <span
                    key={f}
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.09)',
                      borderRadius: '999px',
                      padding: '4px 11px',
                      fontSize: '11px',
                      color: 'rgba(255,255,255,0.75)',
                      whiteSpace: 'nowrap',
                      fontWeight: 500,
                    }}
                  >
                    {f}
                  </span>
                ))}
              </div>

              {/* ── Benefits 2×2 ── */}
              <div className="px-5 pb-4 grid grid-cols-2 gap-2">
                {benefits.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      backdropFilter: 'blur(8px)',
                      border: '1px solid rgba(255,255,255,0.07)',
                      borderRadius: '12px',
                      padding: '10px 12px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '9px',
                    }}
                  >
                    <Icon size={17} style={{ color: '#F5A623', flexShrink: 0 }} />
                    <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.82)', fontWeight: 600, lineHeight: 1.3 }}>
                      {label}
                    </span>
                  </div>
                ))}
              </div>

              {/* ── Divider ── */}
              <div className="mx-5 mb-4" style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(245,166,35,0.18), transparent)' }} />

              {/* ── CTA buttons ── */}
              <div className="px-5 pb-5 flex gap-3">
                <a
                  href="tel:+17876193432"
                  className="itss-btn-call flex-1 flex items-center justify-center gap-2 font-bold text-white rounded-xl transition-all active:scale-95"
                  style={{
                    padding: '14px 16px',
                    fontSize: '14px',
                    background: 'linear-gradient(135deg, #E86D00 0%, #FF8C1A 60%, #FFA040 100%)',
                    boxShadow: '0 4px 22px rgba(255,122,0,0.42), inset 0 1px 0 rgba(255,255,255,0.14)',
                    letterSpacing: '0.01em',
                  }}
                >
                  <Phone size={15} strokeWidth={2.5} />
                  Llamar Ahora
                </a>

                <a
                  href="https://wa.me/19392842551?text=Hola%2C%20estoy%20interesado%20en%20la%20Promoci%C3%B3n%20de%20Verano%20de%204%20c%C3%A1maras."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="itss-btn-wa flex-1 flex items-center justify-center gap-2 font-bold text-white rounded-xl transition-all active:scale-95"
                  style={{
                    padding: '14px 16px',
                    fontSize: '14px',
                    background: 'linear-gradient(135deg, #128C3A 0%, #25D366 60%, #34E875 100%)',
                    boxShadow: '0 4px 22px rgba(37,211,102,0.33), inset 0 1px 0 rgba(255,255,255,0.14)',
                    letterSpacing: '0.01em',
                  }}
                >
                  <span style={{ fontSize: '15px', lineHeight: 1 }}>💬</span>
                  WhatsApp
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
