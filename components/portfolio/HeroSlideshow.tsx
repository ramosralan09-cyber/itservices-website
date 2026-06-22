'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const IMAGES = Array.from({ length: 7 }, (_, i) => `/portfolio/header/imagen-${i + 1}.jpg`)

export function HeroSlideshow() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setActive(p => (p + 1) % IMAGES.length), 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <>
      {IMAGES.map((src, i) => (
        <div key={src} className="absolute inset-0 bg-navy">
          <Image
            src={src}
            alt=""
            fill
            className={`object-cover transition-opacity duration-1000 ${
              i === active ? 'opacity-100' : 'opacity-0'
            }`}
            priority={i === 0}
            aria-hidden="true"
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/85 to-charcoal/40 pointer-events-none" />

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-1 rounded-full transition-all duration-500 ${
              i === active ? 'w-8 bg-skyBlue' : 'w-2 bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Ir a imagen ${i + 1}`}
          />
        ))}
      </div>
    </>
  )
}
