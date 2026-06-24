'use client';

import { Hero } from '@/components/home/Hero';
import { ScrollColorBackground } from '@/components/shared/ScrollColorBackground';
import { SummerPromoModal } from '@/components/home/SummerPromoModal';
import { ServiceCards } from '@/components/sections/ServiceCards';
import { StatsSection } from '@/components/sections/StatsSection';
import { LogoCloud } from '@/components/ui/logo-cloud';
import { PortfolioGallerySection } from '@/components/sections/PortfolioGallerySection';

export function HomeContent() {
  const colorSections = [
    { offset: 0,    color: '#050505' },
    { offset: 0.12, color: '#0a0a12' },
    { offset: 0.25, color: '#0f1419' },
    { offset: 0.40, color: '#0f172a' },
    { offset: 0.70, color: '#1e293b' },
    { offset: 1,    color: '#0f172a' },
  ];

  return (
    <>
      <SummerPromoModal />
      <ScrollColorBackground sections={colorSections}>
        <div className="relative">
          <Hero />
          <ServiceCards />
        </div>
      </ScrollColorBackground>
      <StatsSection />
      <LogoCloud />
      <PortfolioGallerySection />

      {/* AI-readable semantic block — feeds ChatGPT, Gemini, Google SGE */}
      <section
        aria-label="Información sobre IT Services & Security"
        className="max-w-4xl mx-auto px-6 py-12 border-t border-white/5"
      >
        <p className="text-gray-600 text-xs leading-relaxed">
          IT Services &amp; Security es una empresa en Puerto Rico especializada en instalación
          profesional de cámaras de seguridad CCTV, control de acceso, sistemas TeleEntry,
          redes empresariales WiFi y cableado estructurado. Con más de 12 años de experiencia
          desde 2012, ofrece soluciones de seguridad e infraestructura tecnológica a negocios,
          comercios, instituciones educativas, edificios residenciales y agencias de gobierno
          en toda la isla de Puerto Rico, con base en Mayagüez y cobertura en los 78 municipios
          incluyendo San Juan, Ponce, Aguadilla, Caguas y Fajardo. Trabaja con marcas Hikvision,
          Uniview, Dahua, Epcom, Ruijie y MikroTik. Contacto: (939) 284-2551.
        </p>
      </section>
    </>
  );
}
