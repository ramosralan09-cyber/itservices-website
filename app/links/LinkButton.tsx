'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import type { LinkItem } from './config'

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  )
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}

function BriefcaseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  )
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )
}

function getIcon(iconName: string, className?: string) {
  switch (iconName) {
    case 'whatsapp':  return <WhatsAppIcon className={className} />
    case 'instagram': return <InstagramIcon className={className} />
    case 'facebook':  return <FacebookIcon className={className} />
    case 'globe':     return <GlobeIcon className={className} />
    case 'briefcase': return <BriefcaseIcon className={className} />
    case 'star':      return <StarIcon className={className} />
    default:          return null
  }
}

function PreviewCard({ item, onNavigate }: { item: LinkItem; onNavigate: () => void }) {
  const [imgLoaded, setImgLoaded] = useState(false)
  const [imgError, setImgError] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.97 }}
      transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
      className="absolute bottom-full left-0 mb-3 w-72 z-50 rounded-2xl overflow-hidden shadow-2xl border border-white/10"
      style={{ background: '#111' }}
    >
      <div className="relative w-full h-40 overflow-hidden bg-white/5">
        {!imgError ? (
          <>
            {!imgLoaded && (
              <div className="absolute inset-0 animate-pulse bg-white/5 flex items-center justify-center">
                {getIcon(item.icon as string, 'w-8 h-8 text-white/20')}
              </div>
            )}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.screenshotUrl}
              alt={`Preview de ${item.label}`}
              className={`w-full h-full object-cover object-top transition-opacity duration-300 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
              onLoad={() => setImgLoaded(true)}
              onError={() => setImgError(true)}
            />
          </>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-white/5">
            {getIcon(item.icon as string, 'w-8 h-8 text-white/40')}
            <span className="text-white/30 text-xs">{item.sublabel}</span>
          </div>
        )}
      </div>

      <div className="px-4 py-3 flex items-center justify-between gap-3">
        <div className="flex-1 min-w-0">
          <p className="text-white text-sm font-medium truncate">{item.label}</p>
          <p className="text-white/40 text-xs truncate">{item.sublabel}</p>
        </div>
        <button
          onClick={(e) => { e.stopPropagation(); onNavigate() }}
          className="shrink-0 flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg text-white/80 hover:text-white border border-white/10 hover:border-white/30 transition-all duration-150"
        >
          Ir ahora
          <ExternalLink className="w-3 h-3" />
        </button>
      </div>
    </motion.div>
  )
}

interface LinkButtonProps {
  item: LinkItem
}

export function LinkButton({ item }: LinkButtonProps) {
  const [showPreview, setShowPreview] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [mobileState, setMobileState] = useState<'idle' | 'preview'>('idle')
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    setIsMobile(window.matchMedia('(hover: none)').matches)
  }, [])

  const trackAndNavigate = useCallback(() => {
    if (typeof window !== 'undefined') {
      const w = window as any
      if (typeof w.gtag === 'function') w.gtag('event', item.analyticsEvent, { event_category: 'links_page', event_label: item.id })
      if (typeof w.fbq === 'function')  w.fbq('trackCustom', item.analyticsEvent)
    }
    window.open(item.url, item.external ? '_blank' : '_self', 'noopener,noreferrer')
    setShowPreview(false)
    setMobileState('idle')
  }, [item])

  const handleMouseEnter = useCallback(() => {
    if (isMobile) return
    hoverTimer.current = setTimeout(() => setShowPreview(true), 200)
  }, [isMobile])

  const handleMouseLeave = useCallback(() => {
    if (isMobile) return
    if (hoverTimer.current) clearTimeout(hoverTimer.current)
    setShowPreview(false)
  }, [isMobile])

  const handleClick = useCallback(() => {
    if (!isMobile) { trackAndNavigate(); return }
    if (mobileState === 'idle') {
      setMobileState('preview')
    } else {
      trackAndNavigate()
    }
  }, [isMobile, mobileState, trackAndNavigate])

  const isPreviewVisible = isMobile ? mobileState === 'preview' : showPreview

  return (
    <div className="relative w-full">
      <AnimatePresence>
        {isPreviewVisible && (
          <PreviewCard item={item} onNavigate={trackAndNavigate} />
        )}
      </AnimatePresence>

      <motion.button
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.015 }}
        whileTap={{ scale: 0.985 }}
        className={`relative w-full flex items-center gap-4 px-5 py-4 rounded-2xl border transition-all duration-200 text-left ${
          item.primary
            ? 'bg-[#25D366] border-[#25D366] text-white hover:bg-[#22C55E] hover:border-[#22C55E]'
            : 'bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-white/20'
        }`}
      >
        <div className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${item.primary ? 'bg-white/20' : 'bg-white/10'}`}>
          {getIcon(item.icon as string, 'w-5 h-5')}
        </div>

        <div className="flex-1 min-w-0">
          <p className="font-semibold text-sm leading-tight">{item.label}</p>
          <p className={`text-xs mt-0.5 ${item.primary ? 'text-white/70' : 'text-white/40'}`}>{item.sublabel}</p>
        </div>

        <ExternalLink className={`shrink-0 w-4 h-4 ${item.primary ? 'text-white/60' : 'text-white/30'}`} />
      </motion.button>
    </div>
  )
}
