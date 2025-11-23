'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';
import { trackConversion } from '@/lib/analytics';

export function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const whatsappNumber = '19392842551';

  const quickMessages = [
    { text: 'Cotización de CCTV', icon: '📹' },
    { text: 'Instalación de red', icon: '🌐' },
    { text: 'Soporte técnico', icon: '🛠️' },
    { text: 'Consultoría', icon: '💡' },
  ];

  useEffect(() => {
    const handleSidebarChange = (event: CustomEvent) => {
      setSidebarOpen(event.detail.isOpen);
      if (event.detail.isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('sidebarStateChange' as any, handleSidebarChange as any);
    return () => {
      window.removeEventListener('sidebarStateChange' as any, handleSidebarChange as any);
    };
  }, []);

  const sendMessage = (text?: string) => {
    const messageToSend = text || message || 'Hola, necesito información sobre sus servicios';
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageToSend)}`;
    trackConversion('whatsapp_click', 0);
    window.open(url, '_blank');
    setIsOpen(false);
    setMessage('');
  };

  return (
    <>
      <motion.div
        className="fixed bottom-6 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1,
          right: sidebarOpen ? 'auto' : '1.5rem',
          left: sidebarOpen ? '1.5rem' : 'auto'
        }}
        transition={{
          delay: 1,
          type: 'spring',
          stiffness: 200,
          right: { duration: 0.3 },
          left: { duration: 0.3 }
        }}
      >
        <motion.div
          className="absolute inset-0 bg-green-500 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full shadow-2xl flex items-center justify-center text-white group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-7 h-7" />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <MessageCircle className="w-7 h-7" />
              </motion.div>
            )}
          </AnimatePresence>

          <motion.span
            className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            1
          </motion.span>
        </motion.button>

        <AnimatePresence>
          {!isOpen && !sidebarOpen && (
            <motion.div
              className={`absolute top-1/2 -translate-y-1/2 bg-slate px-4 py-2 rounded-lg shadow-xl whitespace-nowrap ${
                sidebarOpen ? 'left-20' : 'right-20'
              }`}
              initial={{ opacity: 0, x: sidebarOpen ? -10 : 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: sidebarOpen ? -10 : 10 }}
              transition={{ delay: 2 }}
            >
              <p className="text-white text-sm font-medium">¿Necesitas ayuda?</p>
              <div className={`absolute top-1/2 -translate-y-1/2 ${
                sidebarOpen
                  ? 'left-0 -translate-x-full'
                  : 'right-0 translate-x-full'
              }`}>
                <div className={`w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent ${
                  sidebarOpen
                    ? 'border-r-8 border-r-slate'
                    : 'border-l-8 border-l-slate'
                }`} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`fixed bottom-28 w-96 bg-slate rounded-2xl shadow-2xl overflow-hidden z-50 ${
              sidebarOpen ? 'left-6' : 'right-6'
            }`}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-white font-bold">IT Services & Security</h3>
                  <p className="text-green-100 text-sm flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse" />
                    En línea
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 max-h-96 overflow-y-auto">
              <motion.div
                className="bg-charcoal rounded-2xl rounded-tl-none p-4 mb-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <p className="text-white text-sm mb-2">
                  👋 ¡Hola! Bienvenido a <strong>IT Services & Security</strong>
                </p>
                <p className="text-gray-400 text-xs">
                  ¿En qué podemos ayudarte hoy?
                </p>
              </motion.div>

              <div className="space-y-2 mb-4">
                <p className="text-gray-400 text-xs mb-2">Respuestas rápidas:</p>
                {quickMessages.map((msg, index) => (
                  <motion.button
                    key={msg.text}
                    onClick={() => sendMessage(msg.text)}
                    className="w-full text-left px-4 py-3 bg-charcoal hover:bg-navy rounded-xl transition-colors group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    whileHover={{ x: 4 }}
                  >
                    <span className="flex items-center gap-2 text-white text-sm">
                      <span className="text-xl">{msg.icon}</span>
                      {msg.text}
                    </span>
                  </motion.button>
                ))}
              </div>

              <div className="border-t border-gray-700 pt-4">
                <p className="text-gray-400 text-xs mb-2">O escribe tu mensaje:</p>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                    placeholder="Escribe aquí..."
                    className="flex-1 px-4 py-2 bg-charcoal text-white rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <motion.button
                    onClick={() => sendMessage()}
                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Send className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </div>

            <div className="bg-charcoal p-3 text-center">
              <p className="text-gray-500 text-xs">
                Respuesta típica en <strong className="text-green-400">minutos</strong>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
