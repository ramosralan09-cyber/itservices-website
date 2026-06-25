'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { User, ShoppingCart, Menu, X, ChevronRight, Facebook, Instagram } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { CommandPalette } from '@/components/shared/CommandPalette';

const navItems = [
  { name: 'Redes', href: '/servicios/redes' },
  { name: 'Seguridad', href: '/servicios/seguridad' },
  { name: 'Portafolio', href: '/portafolio' },
  { name: 'Contacto', href: '/contacto' },
];

const sidebarSections = [
  {
    title: 'SERVICIOS',
    links: [
      { name: 'Redes', href: '/servicios/redes' },
      { name: 'Seguridad (CCTV)', href: '/servicios/seguridad' },
      { name: 'Consultoría IT', href: '/servicios/consultoria' },
      { name: 'Soporte Técnico', href: '/servicios/soporte' },
    ]
  },
  {
    title: 'EMPRESA',
    links: [
      { name: 'Nosotros', href: '/nosotros' },
      { name: 'Portafolio', href: '/portafolio' },
      { name: 'Cobertura', href: '/cobertura' },
      { name: 'Tienda', href: '/tienda' },
      { name: 'Contacto', href: '/contacto' },
    ]
  },
  {
    title: 'RECURSOS',
    links: [
      { name: 'Preguntas Frecuentes', href: '/faq' },
    ]
  },
  {
    title: 'LEGAL',
    links: [
      { name: 'Política de Privacidad', href: '/privacidad' },
      { name: 'Términos y Condiciones', href: '/terminos' },
      { name: 'Garantías y Protección', href: '/garantias' },
      { name: 'Cobertura de Servicio', href: '/cobertura' },
    ]
  }
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setScrolled(latest > 50);
    });
  }, [scrollY]);

  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [sidebarOpen]);

  useEffect(() => {
    window.dispatchEvent(new CustomEvent('sidebarStateChange', { detail: { isOpen: sidebarOpen } }));
  }, [sidebarOpen]);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-charcoal/80 backdrop-blur-xl shadow-lg'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                <Image
                  src="/images/logos/itss-logo.png"
                  alt="IT Services & Security - Puerto Rico"
                  width={160}
                  height={20}
                  className="h-7 md:h-8 w-auto"
                  priority
                />
              </motion.div>
            </Link>

            <nav className={`hidden md:flex items-center gap-1 transition-opacity duration-300 ${
              sidebarOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}>
              {navItems.map((item) => (
                <NavLink key={item.name} href={item.href} pathname={pathname}>
                  {item.name}
                </NavLink>
              ))}
            </nav>

            <div className="flex items-center gap-4">
<div className={`transition-opacity duration-300 ${
                sidebarOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
              }`}>
                <CommandPalette />
              </div>

              <motion.a
                href="/auth/login"
                className={`p-2 text-gray-400 hover:text-white transition-all hidden md:flex ${
                  sidebarOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Account"
              >
                <User className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="/carrito"
                className={`relative p-2 text-gray-400 hover:text-white transition-all hidden md:flex ${
                  sidebarOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Cart"
              >
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-orange text-white text-xs rounded-full flex items-center justify-center">
                  0
                </span>
              </motion.a>

              <button
                className="p-2 hover:bg-slate rounded-lg transition-colors"
                onClick={() => setSidebarOpen(!sidebarOpen)}
                aria-label="Menu"
              >
                {sidebarOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60]"
          >
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setSidebarOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 bottom-0 w-80 md:w-96 bg-navy shadow-2xl overflow-y-auto z-50"
            >
              <div className="sticky top-0 bg-navy border-b border-gray-700 p-6 z-10">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-white">Menú</h2>
                  <button
                    onClick={() => setSidebarOpen(false)}
                    className="p-2 hover:bg-slate rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-400" />
                  </button>
                </div>
              </div>

              <div className="p-6 space-y-8">
                {sidebarSections.map((section, sectionIndex) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: sectionIndex * 0.1 }}
                  >
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                      {section.title}
                    </h3>
                    <div className="space-y-1">
                      {section.links.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                          <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setSidebarOpen(false)}
                            className={`flex items-center justify-between p-3 rounded-lg transition-all group ${
                              isActive
                                ? 'bg-blue-600 text-white'
                                : 'text-gray-300 hover:bg-slate hover:text-white'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <span className="font-medium">{link.name}</span>
                            </div>
                            <ChevronRight className={`w-4 h-4 transition-transform ${
                              isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                            }`} />
                          </Link>
                        );
                      })}
                    </div>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="pt-6 border-t border-gray-700"
                >
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                    Contacto Rápido
                  </h3>
                  <div className="space-y-3">
                    <a
                      href="tel:+19392684351"
                      className="flex items-center gap-3 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                    >
                      <div>
                        <div className="text-xs text-blue-200">Llámanos</div>
                        <div className="font-semibold">(939) 268-4351</div>
                      </div>
                    </a>
                    <a
                      href="https://wa.me/19392842551"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                    >
                      <div>
                        <div className="text-xs text-green-200">WhatsApp</div>
                        <div className="font-semibold">(939) 284-2551</div>
                      </div>
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="pt-6 border-t border-gray-700"
                >
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                    Síguenos
                  </h3>
                  <div className="flex gap-3">
                    <a
                      href="https://www.facebook.com/share/1EThrPqd8w/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-slate rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.instagram.com/itservicespr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-slate rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-pink-600 transition-all"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function NavLink({
  href,
  children,
  pathname
}: {
  href: string;
  children: React.ReactNode;
  pathname: string;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const isActive = pathname === href;

  return (
    <a
      href={href}
      className="relative px-4 py-2 text-gray-300 hover:text-white transition-colors"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-deepBlue to-skyBlue"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered || isActive ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      />
    </a>
  );
}
