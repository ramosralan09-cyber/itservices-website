'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FileText, User } from 'lucide-react';

const dashboardLinks = [
  {
    icon: FileText,
    title: 'Mis Cotizaciones',
    description: 'Ver y gestionar tus solicitudes de cotización',
    href: '/dashboard/cotizaciones',
  },
  {
    icon: User,
    title: 'Mi Perfil',
    description: 'Editar información personal y configuración',
    href: '/dashboard/perfil',
  },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-charcoal">
      <section className="relative py-20 bg-gradient-to-br from-navy via-charcoal to-slate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Dashboard
            </h1>
            <p className="text-xl text-gray-400">
              Bienvenido a tu panel de control
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dashboardLinks.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={item.href}>
                    <div className="card-elevated p-8 group cursor-pointer h-full">
                      <div className="w-14 h-14 bg-deepBlue/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Icon className="w-7 h-7 text-deepBlue" />
                      </div>
                      <h2 className="text-2xl font-semibold text-white mb-2 group-hover:text-deepBlue transition-colors">
                        {item.title}
                      </h2>
                      <p className="text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
