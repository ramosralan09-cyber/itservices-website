'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import * as LucideIcons from 'lucide-react';

interface ServiceCardProps {
  service: {
    id: string;
    title: string;
    description: string;
    icon: string;
    image?: string;
    imageAlt?: string;
  };
  categorySlug: string;
  index: number;
}

export function ServiceCard({ service, categorySlug, index }: ServiceCardProps) {
  const Icon = (LucideIcons as any)[service.icon] || LucideIcons.Box;
  const whatsappLink = `https://wa.me/19392842551?text=Hola%2C%20estoy%20interesado%20en%20una%20cotizaci%C3%B3n%20con%20IT%20Services%20%26%20Security.%20Servicio%3A%20${encodeURIComponent(service.title)}%20%7C%20Nombre%3A%20%5BEscribir%5D%20%7C%20Tel%C3%A9fono%3A%20%5Bxxx-xxx-xxxx%5D`;

  return (
    <motion.div
      className="group relative bg-slate rounded-2xl overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden bg-gradient-to-br from-navy to-slate">
        {service.image && (
          <>
            <Image
              src={service.image}
              alt={service.imageAlt || service.title}
              fill
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              loading="lazy"
              quality={85}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-[#0B5FFF]/20" style={{ mixBlendMode: 'multiply' }} />
            <div className="absolute inset-0 bg-gradient-to-t from-slate via-slate/50 to-transparent" />
          </>
        )}

        <div className="absolute top-4 right-4 w-12 h-12 bg-deepBlue/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-skyBlue transition-colors">
          {service.title}
        </h3>
        <p className="text-gray-400 text-sm mb-6 line-clamp-2">
          {service.description}
        </p>

        <motion.a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full px-6 py-3 bg-gradient-to-r from-[#0B5FFF] to-[#FF7A00] hover:from-blue-600 hover:to-orange-600 text-white rounded-lg text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-xl text-center"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Cotizar ahora
        </motion.a>
      </div>

      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(11, 95, 255, 0.1) 0%, transparent 70%)'
        }}
      />
    </motion.div>
  );
}
