'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Instagram, Facebook, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const contactInfo = [
  {
    icon: Phone,
    label: 'WhatsApp',
    value: '(939) 284-2551',
    href: 'https://wa.me/19392842551',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'itservice.pr4u@gmail.com',
    href: 'mailto:itservice.pr4u@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Ubicación',
    value: 'Puerto Rico',
    href: null,
  },
];

const socialLinks = [
  {
    icon: Instagram,
    label: 'Instagram',
    href: 'https://www.instagram.com/itservicespr?igsh=MmI5Z3J2dWYwMHVz&utm_source=qr',
  },
  {
    icon: Facebook,
    label: 'Facebook',
    href: 'https://www.facebook.com/share/1EThrPqd8w/',
  },
];

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-charcoal">
      <section className="relative py-20 bg-gradient-to-br from-navy via-charcoal to-slate overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full mb-6"
            >
              <Mail className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 font-semibold text-sm">
                Estamos Aquí Para Ayudarte
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Contacto y Cotizaciones
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
              Estamos listos para ayudarte con tu proyecto de cámaras de seguridad, redes
              empresariales y control de acceso en Puerto Rico. Respuesta garantizada en
              24–48 horas para negocios en toda la isla.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto"
          >
            <div className="grid gap-10 md:grid-cols-2 items-start">
              <div>
                <h2 className="text-3xl font-bold text-white mb-8">
                  Información de Contacto en Puerto Rico
                </h2>

                <div className="space-y-6">
                  {contactInfo.map((item) => {
                    const Icon = item.icon;
                    const content = (
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-deepBlue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-deepBlue" />
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm mb-1">
                            {item.label}
                          </p>
                          <p className="text-white font-medium">{item.value}</p>
                        </div>
                      </div>
                    );

                    return item.href ? (
                      <a
                        key={item.label}
                        href={item.href}
                        className="block hover:opacity-80 transition-opacity"
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={
                          item.href.startsWith('http')
                            ? 'noopener noreferrer'
                            : undefined
                        }
                        onClick={(e) => {
                          if (item.href.startsWith('mailto:')) {
                            e.preventDefault();
                            window.location.href = item.href;
                          }
                        }}
                      >
                        {content}
                      </a>
                    ) : (
                      <div key={item.label}>{content}</div>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white mb-2 text-center">
                  Contáctanos por WhatsApp o Redes
                </h3>
                <p className="text-sm text-gray-300 mb-4 text-center">
                  Elige el canal que prefieras. Respondemos más rápido por WhatsApp y
                  atendemos proyectos de cámaras de seguridad, redes y control de acceso
                  para negocios en toda la isla.
                </p>

                <Button
                  asChild
                  size="lg"
                  className="w-full justify-center px-6 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white text-lg font-semibold shadow-lg shadow-emerald-500/40"
                >
                  <a
                    href="https://wa.me/19392842551"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MessageSquare className="w-5 h-5 mr-3" />
                    WhatsApp
                  </a>
                </Button>

                <Button
                  asChild
                  size="lg"
                  className="w-full justify-center px-6 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold shadow-lg shadow-blue-600/40"
                >
                  <a
                    href="https://www.facebook.com/share/1EThrPqd8w/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Facebook className="w-5 h-5 mr-3" />
                    Facebook
                  </a>
                </Button>

                <Button
                  asChild
                  size="lg"
                  className="w-full justify-center px-6 py-4 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 text-white text-lg font-semibold shadow-lg shadow-purple-500/40"
                >
                  <a
                    href="https://www.instagram.com/itservicespr?igsh=MmI5Z3J2dWYwMHVz&utm_source=qr"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Instagram className="w-5 h-5 mr-3" />
                    Instagram
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
