'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Phone } from 'lucide-react'
import { trackConversion } from '@/lib/analytics'
import { gtagEvent } from '@/lib/gtag'

const QUICK_MESSAGES = [
  { label: '📹 Cotización de cámaras', msg: 'Hola, me interesa una cotización para instalar cámaras de seguridad.' },
  { label: '🔒 Control de acceso', msg: 'Hola, necesito información sobre sistemas de control de acceso.' },
  { label: '📶 Redes y WiFi', msg: 'Hola, me interesa instalar una red WiFi empresarial.' },
  { label: '🛠️ Soporte técnico', msg: 'Hola, necesito soporte técnico para mi sistema.' },
]

const WA_NUMBER = '19392842551'
const CALL_NUMBER = 'tel:+19392684351'

function trackWA(label: string) {
  trackConversion('whatsapp_click', 0)
  gtagEvent('generate_lead', {
    method: 'whatsapp',
    location: 'mascot_widget',
    quick_message: label,
  })
}

export function WhatsAppMascot() {
  const [open, setOpen] = useState(false)
  const [showBubble, setShowBubble] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowBubble(true), 3000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (open) setShowBubble(false)
  }, [open])

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

      {/* Panel de mensajes rápidos */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#111] border border-white/10 rounded-2xl shadow-2xl w-72 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-white text-sm font-medium">IT Services &amp; Security</span>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-gray-500 hover:text-white transition-colors"
                aria-label="Cerrar"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Mensaje de bienvenida */}
            <div className="px-4 py-3">
              <div className="bg-white/5 rounded-xl px-3 py-2 text-gray-300 text-sm">
                👋 ¡Hola! ¿En qué te podemos ayudar hoy?
              </div>
            </div>

            {/* Quick messages */}
            <div className="px-4 pb-3 flex flex-col gap-2">
              {QUICK_MESSAGES.map((item) => (
                <a
                  key={item.label}
                  href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(item.msg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWA(item.label)}
                  className="text-sm text-left px-3 py-2.5 rounded-xl border border-white/10 text-gray-300 hover:bg-white/5 hover:text-white hover:border-white/20 transition-all duration-200"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Footer — llamada directa */}
            <div className="px-4 pb-4 pt-1 border-t border-white/5">
              <a
                href={CALL_NUMBER}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-white/10 text-gray-400 hover:text-white hover:border-white/20 text-sm transition-all duration-200"
              >
                <Phone className="w-4 h-4" />
                Llamar: (939) 268-4351
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Burbuja de texto */}
      <AnimatePresence>
        {showBubble && !open && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.9 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative bg-white text-gray-900 text-sm font-medium px-4 py-2 rounded-2xl rounded-br-sm shadow-lg cursor-pointer select-none"
            onClick={() => setOpen(true)}
          >
            ¿Cómo te puedo ayudar?
            <div className="absolute -bottom-2 right-4 w-0 h-0 border-l-8 border-r-0 border-t-8 border-l-transparent border-t-white" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botón mascota */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-16 h-16 rounded-full shadow-2xl flex items-center justify-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)' }}
        aria-label="Abrir chat de WhatsApp"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="w-7 h-7 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="mascot"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              {/* Robot de seguridad SVG */}
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Cuerpo */}
                <rect x="11" y="22" width="14" height="10" rx="3" fill="white" fillOpacity="0.9"/>
                {/* Cabeza */}
                <circle cx="18" cy="16" r="8" fill="white" fillOpacity="0.95"/>
                {/* Casco / visera */}
                <path d="M10 16C10 11.58 13.58 8 18 8C22.42 8 26 11.58 26 16" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
                <rect x="9" y="14.5" width="18" height="3" rx="1.5" fill="white"/>
                {/* Ojos */}
                <circle cx="15" cy="17" r="1.5" fill="#128C7E"/>
                <circle cx="21" cy="17" r="1.5" fill="#128C7E"/>
                {/* Sonrisa */}
                <path d="M15 20C15 20 16.5 21.5 18 21.5C19.5 21.5 21 20 21 20" stroke="#128C7E" strokeWidth="1.2" strokeLinecap="round"/>
                {/* Brazos */}
                <rect x="6" y="23" width="5" height="2.5" rx="1.25" fill="white" fillOpacity="0.9"/>
                <rect x="25" y="23" width="5" height="2.5" rx="1.25" fill="white" fillOpacity="0.9"/>
              </svg>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Dot de notificación */}
        {!open && (
          <span className="absolute top-1 right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-[#25D366] animate-pulse" />
        )}
      </motion.button>
    </div>
  )
}
