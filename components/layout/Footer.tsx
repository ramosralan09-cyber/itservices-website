'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  Shield,
  Mail,
  Phone,
  Instagram,
  Facebook,
  Send,
  MapPin,
  Clock,
  Award,
  ChevronRight,
  Cookie,
} from 'lucide-react';
import { useState } from 'react';
import { CtaCarousel } from '@/components/home/CtaCarousel';

export function Footer() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulación de envío – aquí luego se puede conectar a un servicio real
    await new Promise(resolve => setTimeout(resolve, 1000));

    setSubmitted(true);
    setEmail('');
    setIsSubmitting(false);

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <footer className="relative bg-charcoal border-t border-gray-800 overflow-hidden">
      {/* Fondos suaves */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-deepBlue rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-skyBlue rounded-full filter blur-3xl" />
      </div>

      <div className="relative">
        {/* CTA superior (carrusel) */}
        <CtaCarousel />

        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
            {/* Marca + redes + cobertura */}
            <section
              className="lg:col-span-1"
              aria-label="Acerca de IT Services & Security y redes sociales"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <div className="mb-4">
                  <Image
                    src="/images/logos/itss-logo.png"
                    alt="IT Services & Security - Cámaras de seguridad, control de acceso y redes en Puerto Rico"
                    width={180}
                    height={23}
                    className="h-9 w-auto"
                  />
                </div>

                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  Protegiendo negocios puertorriqueños con{' '}
                  <span className="text-gray-200 font-semibold">
                    cámaras de seguridad, control de acceso y redes empresariales
                  </span>{' '}
                  desde 2012, con servicio local confiable y instalación profesional.
                </p>

                <div className="flex gap-3" aria-label="Redes sociales">
                  <motion.a
                    href="https://www.instagram.com/itservicespr?igsh=MmI5Z3J2dWYwMHVz&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate rounded-lg flex items-center justify-center text-gray-400 hover:text-[#FF7A00] transition-colors duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Instagram IT Services & Security"
                  >
                    <Instagram className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="https://www.facebook.com/share/1EThrPqd8w/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate rounded-lg flex items-center justify-center text-gray-400 hover:text-[#FF7A00] transition-colors duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Facebook IT Services & Security"
                  >
                    <Facebook className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="https://www.tiktok.com/@itservicespr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate rounded-lg flex items-center justify-center text-gray-400 hover:text-[#FF7A00] transition-colors duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="TikTok IT Services & Security"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                    </svg>
                  </motion.a>
                  <motion.a
                    href="mailto:itservice.pr4u@gmail.com"
                    className="w-10 h-10 bg-slate rounded-lg flex items-center justify-center text-gray-400 hover:text-[#FF7A00] transition-colors duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Enviar correo a IT Services & Security"
                  >
                    <Mail className="w-5 h-5" />
                  </motion.a>
                </div>
              </motion.div>

              <div className="space-y-3 mt-6">
                <div className="flex items-start gap-3 text-sm">
                  <MapPin className="w-4 h-4 text-skyBlue mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Cobertura</p>
                    <p className="text-gray-400 text-xs">Toda la isla de Puerto Rico</p>
                    <p className="text-gray-500 text-xs">Base: Mayagüez (Región Oeste)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <Clock className="w-4 h-4 text-skyBlue mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Horario</p>
                    <p className="text-gray-400 text-xs">Lun-Vie: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-400 text-xs">Sáb: 9:00 AM - 5:00 PM</p>
                    <p className="text-orange text-xs mt-1">*Emergencias con cargo adicional</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Servicios */}
            <nav aria-label="Servicios de IT Services & Security">
              <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <Shield className="w-5 h-5 text-skyBlue" />
                Servicios
              </h4>
              <ul className="space-y-3">
                {[
                  { name: 'Redes y Conectividad', href: '/servicios/redes' },
                  { name: 'Sistemas de Seguridad (CCTV)', href: '/servicios/seguridad' },
                  { name: 'Control de Acceso y TeleEntry', href: '/servicios/seguridad#acceso' },
                  { name: 'Consultoría Técnica', href: '/servicios/consultoria' },
                  { name: 'Soporte y Mantenimiento', href: '/servicios/soporte' },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-skyBlue transition-colors text-sm flex items-center gap-2 group"
                    >
                      <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="group-hover:translate-x-1 transition-transform">
                        {item.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Empresa */}
            <nav aria-label="Información de la empresa">
              <h4 className="text-white font-bold text-lg mb-6">Empresa</h4>
              <ul className="space-y-3">
                {[
                  { name: 'Sobre Nosotros', href: '/nosotros' },
                  { name: 'Portafolio', href: '/portafolio' },
                  { name: 'Trabaja con Nosotros', href: '/careers', badge: 'Próximamente' },
                  { name: 'Casos de Éxito', href: '/portafolio' },
                  { name: 'Contacto', href: '/contacto' },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-skyBlue transition-colors text-sm flex items-center gap-2 group"
                    >
                      <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="group-hover:translate-x-1 transition-transform">
                        {item.name}
                      </span>
                      {item.badge && (
                        <span className="text-xs bg-orange/20 text-orange px-2 py-0.5 rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <p className="text-gray-500 text-xs mb-3">Trabajamos con:</p>
                <div className="flex flex-wrap gap-2">
                  {['Hikvision', 'Uniview', 'Ruijie', 'MikroTik', 'Epcom'].map((brand) => (
                    <span
                      key={brand}
                      className="text-xs bg-slate text-gray-400 px-2 py-1 rounded"
                    >
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
            </nav>

            {/* Legal + contacto directo */}
            <section aria-label="Legal y contacto directo">
              <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <Shield className="w-5 h-5 text-skyBlue" />
                Legal y Políticas
              </h4>
              <nav aria-label="Enlaces legales">
                <ul className="space-y-3">
                  {[
                    { name: 'Garantías y Protección', href: '/garantias', icon: '🛡️' },
                    { name: 'Términos y Condiciones', href: '/terminos', icon: '📄' },
                    { name: 'Política de Privacidad', href: '/privacidad', icon: '🔒' },
                    { name: 'Cobertura de Servicio', href: '/cobertura', icon: '📍' },
                  ].map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-gray-400 hover:text-skyBlue transition-colors text-sm flex items-center gap-2 group"
                      >
