'use client'

import Link from 'next/link'
import { CircularGallery, type GalleryItem } from '@/components/ui/circular-gallery'

const PORTFOLIO_ITEMS: GalleryItem[] = [
  {
    common: 'Cuartel Policía Cabo Rojo',
    binomial: 'Seguridad & CCTV',
    href: '/portafolio',
    photo: {
      url: '/portfolio/cuartel-policia-cabo-rojo/home.png',
      text: 'Proyecto de seguridad en Cuartel Policía Cabo Rojo',
      pos: 'center',
      by: 'IT Services & Security',
    },
  },
  {
    common: 'Ricomini Supermercados',
    binomial: 'Redes & Conectividad',
    href: '/portafolio',
    photo: {
      url: '/portfolio/ricomini-camuy/portada.jpg',
      text: 'Infraestructura de redes en Ricomini Camuy',
      pos: 'center',
      by: 'IT Services & Security',
    },
  },
  {
    common: 'PR-9 Ponce',
    binomial: 'Infraestructura IT',
    href: '/portafolio',
    photo: {
      url: '/portfolio/pr-9-ponce/home.png',
      text: 'Proyecto IT en PR-9 Ponce',
      pos: 'center',
      by: 'IT Services & Security',
    },
  },
  {
    common: 'Mayagüez Square District',
    binomial: 'Control de Acceso',
    href: '/portafolio',
    photo: {
      url: '/portfolio/mayaguez-square-district/home.png',
      text: 'Control de acceso en Mayagüez Square District',
      pos: 'center',
      by: 'IT Services & Security',
    },
  },
  {
    common: 'InfoSys Aguadilla',
    binomial: 'Cableado Estructurado',
    href: '/portafolio',
    photo: {
      url: '/portfolio/infosys-aguadilla/home.png',
      text: 'Cableado estructurado en InfoSys Aguadilla',
      pos: 'center',
      by: 'IT Services & Security',
    },
  },
  {
    common: 'Vistas del Río Apartments',
    binomial: 'CCTV & Seguridad',
    href: '/portafolio',
    photo: {
      url: '/portfolio/vistas-del-rio-apartments/home.png',
      text: 'Seguridad residencial en Vistas del Río',
      pos: 'center',
      by: 'IT Services & Security',
    },
  },
]

export function PortfolioGallerySection() {
  return (
    <section className="py-24 overflow-hidden bg-charcoal">
      {/* Heading */}
      <div className="text-center mb-4 px-6">
        <span className="text-xs uppercase tracking-widest text-gray-500 border border-white/10 rounded-full px-4 py-1.5 inline-block mb-4">
          Nuestro Portafolio
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Proyectos realizados en{' '}
          <span className="text-skyBlue">Puerto Rico</span>
        </h2>
        <p className="mt-3 text-gray-400 max-w-xl mx-auto text-sm">
          Más de 120 proyectos completados para negocios, escuelas, edificios e
          instituciones en toda la isla.
        </p>
      </div>

      {/* Circular gallery — fixed height required for 3D positioning */}
      <div className="relative w-full h-[520px]">
        <CircularGallery
          items={PORTFOLIO_ITEMS}
          radius={520}
          autoRotateSpeed={0.015}
          className="w-full h-full"
        />
      </div>

      {/* CTA */}
      <div className="text-center mt-6 px-6">
        <Link
          href="/portafolio"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 text-white text-sm font-medium hover:bg-white/5 transition-colors duration-300"
        >
          Ver todos los proyectos →
        </Link>
      </div>
    </section>
  )
}
