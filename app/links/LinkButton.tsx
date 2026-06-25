'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Globe, Briefcase } from 'lucide-react'
import type { LinkItem } from './config'

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
)

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
)

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
)

function getIcon(iconName: string) {
  switch (iconName) {
    case 'whatsapp':  return <WhatsAppIcon />
    case 'instagram': return <InstagramIcon />
    case 'facebook':  return <FacebookIcon />
    case 'star':      return <GoogleIcon />
    case 'globe':     return <Globe className="w-5 h-5" />
    case 'briefcase': return <Briefcase className="w-5 h-5" />
    default:          return <ExternalLink className="w-5 h-5" />
  }
}

function PreviewCard({
  preview,
  onNavigate,
  showButton,
}: {
  preview: NonNullable<LinkItem['preview']>
  onNavigate: () => void
  showButton: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.96 }}
      transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
      className="absolute z-50 w-72 rounded-2xl overflow-hidden shadow-2xl border border-white/10 bottom-[calc(100%+8px)] left-1/2 -translate-x-1/2"
    >
      <div className={`bg-gradient-to-br ${preview.bg} p-5`}>
        <span className={`text-xs font-medium px-2 py-1 rounded-full ${preview.darkText ? 'text-gray-700 bg-black/10' : 'text-white/80 bg-black/20'}`}>
          {preview.badge}
        </span>
        <h3 className={`font-bold text-lg mt-3 ${preview.darkText ? 'text-gray-900' : 'text-white'}`}>
          {preview.title}
        </h3>
        <p className={`text-sm mt-1 leading-relaxed ${preview.darkText ? 'text-gray-600' : 'text-white/70'}`}>
          {preview.description}
        </p>
        {showButton && (
          <button
            onClick={onNavigate}
            className="mt-4 w-full py-2.5 rounded-xl bg-white/20 hover:bg-white/30 text-white text-sm font-medium transition-colors"
          >
            Ir ahora →
          </button>
        )}
      </div>
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white/10" />
    </motion.div>
  )
}

interface LinkButtonProps {
  link: LinkItem
  index: number
}

export function LinkButton({ link, index }: LinkButtonProps) {
  const [showPreview, setShowPreview] = useState(false)
  const [mobileTap, setMobileTap] = useState(false)
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const navigate = () => {
    if (typeof window !== 'undefined') {
      const w = window as any
      if (w.gtag) w.gtag('event', link.analyticsEvent, { event_category: 'linkhub', event_label: link.label })
      if (w.fbq)  w.fbq('trackCustom', link.analyticsEvent)
    }
    window.open(link.url, link.external ? '_blank' : '_self')
  }

  const handleMouseEnter = () => {
    if (!link.preview) return
    hoverTimer.current = setTimeout(() => setShowPreview(true), 200)
  }

  const handleMouseLeave = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current)
    setShowPreview(false)
    setMobileTap(false)
  }

  const handleClick = (e: React.MouseEvent) => {
    const isTouch = window.matchMedia('(hover: none)').matches

    if (!isTouch) {
      navigate()
      return
    }

    // Mobile: primer tap → preview, segundo tap → navegar
    if (!showPreview && link.preview) {
      e.preventDefault()
      setShowPreview(true)
      setMobileTap(true)
    } else {
      navigate()
    }
  }

  return (
    <div className="relative w-full">
      <AnimatePresence>
        {showPreview && link.preview && (
          <PreviewCard
            preview={link.preview}
            onNavigate={() => { setShowPreview(false); navigate() }}
            showButton={mobileTap}
          />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ scale: 1.02, y: -1 }}
        whileTap={{ scale: 0.98 }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        role="link"
        tabIndex={0}
        aria-label={link.label}
        className={`
          relative w-full flex items-center gap-4 px-5 py-4 rounded-2xl
          border transition-all duration-300 group cursor-pointer select-none
          ${link.primary
            ? 'bg-[#25D366] border-[#25D366] text-white shadow-lg shadow-[#25D366]/20 hover:shadow-xl hover:shadow-[#25D366]/30'
            : 'bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-white/20'
          }
        `}
      >
        <div className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${link.primary ? 'bg-white/20' : 'bg-white/10'}`}>
          {getIcon(link.icon)}
        </div>

        <div className="flex-1 text-left">
          <div className="font-semibold text-sm leading-tight text-white">{link.label}</div>
          {link.sublabel && (
            <div className={`text-xs mt-0.5 ${link.primary ? 'text-white/70' : 'text-gray-400'}`}>
              {link.sublabel}
            </div>
          )}
        </div>

        <ExternalLink className={`shrink-0 w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 ${link.primary ? 'text-white' : 'text-gray-400'}`} />
      </motion.div>
    </div>
  )
}
