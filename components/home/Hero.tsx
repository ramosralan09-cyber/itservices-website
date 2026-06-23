'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronDown, FileText, Sparkles, ArrowRight } from 'lucide-react';

export function Hero() {
  const whatsappLink = "https://wa.me/19392842551?text=Hola%2C%20estoy%20interesado%20en%20una%20cotizaci%C3%B3n%20con%20IT%20Services%20%26%20Security.%20Servicio%3A%20%5BIndicar%5D%20%7C%20Nombre%3A%20%5BEscribir%5D%20%7C%20Tel%C3%A9fono%3A%20%5Bxxx-xxx-xxxx%5D";

  return (
    <section className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden">
      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full mb-8"
          >
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 font-semibold text-sm">12+ años protegiendo empresas en PR</span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Protección inteligente y
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-skyBlue to-deepBlue">
              {" "}conectividad profesional
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Soluciones de seguridad, redes y automatización para empresas en Puerto Rico
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#0B5FFF] to-[#FF7A00] text-white rounded-xl font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-blue-500/50 flex items-center justify-center gap-2 overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <FileText className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Solicitar Cotización</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.button
              onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
              className="group w-full sm:w-auto px-8 py-4 bg-slate/80 backdrop-blur-sm border-2 border-gray-600 text-white hover:border-blue-500 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Explorar servicios</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-8 text-gray-400 text-sm"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>120+ Proyectos completados</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span>Cobertura en toda la isla</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
              <span>Soporte 24/7</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
