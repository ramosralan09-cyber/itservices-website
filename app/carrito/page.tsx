'use client';

import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function CarritoPage() {
  return (
    <div className="min-h-screen bg-charcoal flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-md"
      >
        <div className="w-20 h-20 bg-slate rounded-full flex items-center justify-center mx-auto mb-6">
          <ShoppingCart className="w-10 h-10 text-gray-400" />
        </div>
        <h1 className="text-3xl font-bold text-white mb-4">
          Tu carrito está vacío
        </h1>
        <p className="text-gray-400 mb-8">
          La tienda estará disponible próximamente. Por ahora, puedes explorar nuestros servicios y solicitar cotizaciones.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-deepBlue hover:bg-skyBlue">
            <Link href="/servicios">Ver Servicios</Link>
          </Button>
          <Button asChild variant="outline" className="border-gray-400/30">
            <Link href="/tienda">Lista de Espera</Link>
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
