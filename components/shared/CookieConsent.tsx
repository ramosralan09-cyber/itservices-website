'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, Settings, X, Check } from 'lucide-react';
import Link from 'next/link';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setTimeout(() => setShowBanner(true), 1000);
    } else {
      try {
        const saved = JSON.parse(consent);
        setPreferences(saved);
      } catch (e) {
        console.error('Error loading cookie preferences');
      }
    }
  }, []);

  useEffect(() => {
    const handleOpenSettings = () => {
      setShowModal(true);
    };

    window.addEventListener('openCookieSettings' as any, handleOpenSettings);
    return () => window.removeEventListener('openCookieSettings' as any, handleOpenSettings);
  }, []);

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem('cookieConsent', JSON.stringify(prefs));
    setPreferences(prefs);
    setShowBanner(false);
    setShowModal(false);

    if (prefs.analytics) {
      console.log('Analytics enabled');
    }
    if (prefs.marketing) {
      console.log('Marketing enabled');
    }
  };

  const acceptAll = () => {
    savePreferences({
      necessary: true,
      analytics: true,
      marketing: true,
    });
  };

  const rejectAll = () => {
    savePreferences({
      necessary: true,
      analytics: false,
      marketing: false,
    });
  };

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <>
      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
          >
            <div className="max-w-6xl mx-auto bg-gradient-to-br from-slate to-charcoal rounded-2xl shadow-2xl border border-gray-700 overflow-hidden">
              <div className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Cookie className="w-6 h-6 text-blue-400" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">
                      🍪 Uso de Cookies
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">
                      Utilizamos cookies para mejorar tu experiencia, analizar el tráfico del sitio y personalizar contenido.
                      Al hacer clic en "Aceptar todo", aceptas el uso de todas las cookies.
                      Puedes gestionar tus preferencias en cualquier momento.
                    </p>
                    <p className="text-gray-400 text-xs">
                      Lee nuestra{' '}
                      <Link href="/privacidad" className="text-blue-400 hover:text-blue-300 underline">
                        Política de Privacidad
                      </Link>
                      {' '}para más información.
                    </p>
                  </div>

                  <button
                    onClick={rejectAll}
                    className="text-gray-400 hover:text-white transition-colors p-2"
                    aria-label="Cerrar"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mt-6">
                  <motion.button
                    onClick={acceptAll}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all inline-flex items-center justify-center gap-2"
                  >
                    <Check className="w-5 h-5" />
                    Aceptar Todo
                  </motion.button>

                  <motion.button
                    onClick={openModal}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 px-6 py-3 bg-slate border border-gray-600 text-white rounded-lg font-semibold hover:bg-navy transition-all inline-flex items-center justify-center gap-2"
                  >
                    <Settings className="w-5 h-5" />
                    Personalizar
                  </motion.button>

                  <motion.button
                    onClick={rejectAll}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-3 bg-slate border border-gray-600 text-white rounded-lg font-semibold hover:bg-navy transition-all"
                  >
                    Rechazar
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl bg-gradient-to-br from-slate to-charcoal rounded-2xl shadow-2xl border border-gray-700 max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                    <Settings className="w-7 h-7 text-blue-400" />
                    Preferencias de Cookies
                  </h2>
                  <button
                    onClick={() => setShowModal(false)}
                    className="text-gray-400 hover:text-white transition-colors p-2"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <p className="text-gray-300 mb-6">
                  Gestiona qué cookies deseas permitir. Las cookies necesarias siempre están activas
                  ya que son esenciales para el funcionamiento del sitio.
                </p>

                <div className="space-y-4">
                  <div className="bg-charcoal rounded-xl p-6 border border-gray-700">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-2">
                          Cookies Necesarias
                        </h3>
                        <p className="text-sm text-gray-400">
                          Esenciales para el funcionamiento básico del sitio. No se pueden desactivar.
                        </p>
                      </div>
                      <div className="flex items-center gap-2 ml-4">
                        <span className="text-sm text-green-400 font-semibold">Siempre activo</span>
                        <div className="w-12 h-6 bg-green-600 rounded-full flex items-center justify-end px-1">
                          <div className="w-4 h-4 bg-white rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    <ul className="text-xs text-gray-500 space-y-1 mt-3">
                      <li>• Preferencias de cookies</li>
                      <li>• Seguridad y autenticación</li>
                      <li>• Funcionalidad del sitio</li>
                    </ul>
                  </div>

                  <div className="bg-charcoal rounded-xl p-6 border border-gray-700">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-2">
                          Cookies Analíticas
                        </h3>
                        <p className="text-sm text-gray-400">
                          Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web.
                        </p>
                      </div>
                      <button
                        onClick={() => setPreferences(prev => ({ ...prev, analytics: !prev.analytics }))}
                        className="ml-4"
                      >
                        <div className={`w-12 h-6 rounded-full flex items-center transition-all ${
                          preferences.analytics ? 'bg-blue-600 justify-end' : 'bg-gray-600 justify-start'
                        } px-1`}>
                          <div className="w-4 h-4 bg-white rounded-full"></div>
                        </div>
                      </button>
                    </div>
                    <ul className="text-xs text-gray-500 space-y-1 mt-3">
                      <li>• Google Analytics</li>
                      <li>• Estadísticas de visitas</li>
                      <li>• Análisis de comportamiento</li>
                    </ul>
                  </div>

                  <div className="bg-charcoal rounded-xl p-6 border border-gray-700">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-2">
                          Cookies de Marketing
                        </h3>
                        <p className="text-sm text-gray-400">
                          Se utilizan para mostrar anuncios relevantes y medir la efectividad de campañas.
                        </p>
                      </div>
                      <button
                        onClick={() => setPreferences(prev => ({ ...prev, marketing: !prev.marketing }))}
                        className="ml-4"
                      >
                        <div className={`w-12 h-6 rounded-full flex items-center transition-all ${
                          preferences.marketing ? 'bg-blue-600 justify-end' : 'bg-gray-600 justify-start'
                        } px-1`}>
                          <div className="w-4 h-4 bg-white rounded-full"></div>
                        </div>
                      </button>
                    </div>
                    <ul className="text-xs text-gray-500 space-y-1 mt-3">
                      <li>• Anuncios personalizados</li>
                      <li>• Remarketing</li>
                      <li>• Seguimiento de conversiones</li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mt-8">
                  <motion.button
                    onClick={() => savePreferences(preferences)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
                  >
                    Guardar Preferencias
                  </motion.button>
                  <motion.button
                    onClick={acceptAll}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-3 bg-slate border border-gray-600 text-white rounded-lg font-semibold hover:bg-navy transition-all"
                  >
                    Aceptar Todo
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
