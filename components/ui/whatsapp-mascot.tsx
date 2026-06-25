'use client'

import { useState, useEffect, useRef } from 'react'
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
const VIDEO_IDLE = '/mascot/inicio.mp4'
const VIDEO_CLICK = '/mascot/click.mp4'

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
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => setShowBubble(true), 3000)
    return () => clearTimeout(timer)
  }, [])

  const playIdle = () => {
    const video = videoRef.current
    if (!video) return
    video.src = VIDEO_IDLE
    video.loop = true
    video.play().catch(() => {})
  }

  const playClick = () => {
    const video = videoRef.current
    if (!video) return
    video.src = VIDEO_CLICK
    video.loop = false
    video.onended = () => playIdle()
    video.play().catch(() => {})
  }

  const handleMascotClick = () => {
    const next = !open
    setOpen(next)
    setShowBubble(false)
    if (next) {
      playClick()
    } else {
      playIdle()
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3">

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
                onClick={() => { setOpen(false); playIdle() }}
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

            {/* Llamada directa */}
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
            className="relative bg-white text-gray-900 text-sm font-medium px-4 py-2.5 rounded-2xl rounded-br-sm shadow-lg cursor-pointer select-none"
            onClick={handleMascotClick}
          >
            ¿Cómo te puedo ayudar?
            <div className="absolute -bottom-2 right-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mascota — video 9:16 */}
      <motion.button
        onClick={handleMascotClick}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        className="relative overflow-hidden rounded-2xl shadow-2xl cursor-pointer bg-transparent border-0 p-0"
        style={{ width: '80px', height: '142px' }}
        aria-label="Abrir chat de WhatsApp"
      >
        <video
          ref={videoRef}
          src={VIDEO_IDLE}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ display: 'block' }}
        />
        {!open && (
          <span className="absolute top-2 right-2 w-3 h-3 bg-green-500 rounded-full border-2 border-black/30 animate-pulse" />
        )}
      </motion.button>
    </div>
  )
}
