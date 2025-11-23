'use client';

import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

export default function CotizacionesPage() {
  return (
    <div className="min-h-screen bg-charcoal">
      <section className="relative py-20 bg-gradient-to-br from-navy via-charcoal to-slate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Mis Cotizaciones
          </h1>
          <p className="text-xl text-gray-400">
            Gestiona tus solicitudes de cotización
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <div className="w-20 h-20 bg-slate rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-10 h-10 text-gray-400" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">
              No tienes cotizaciones aún
            </h2>
            <p className="text-gray-400">
              Cuando solicites una cotización, aparecerá aquí
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
