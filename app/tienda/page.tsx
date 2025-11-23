'use client';

import { motion } from 'framer-motion';
import { Camera, Network, Fingerprint, Shirt, Ticket, CheckCircle, Instagram, Store, Package, Shield, Wifi, Bell, Mail, ArrowRight, Phone, MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '@/lib/whatsapp';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import Link from 'next/link';

const categories = [
  {
    icon: Camera,
    name: 'Cámaras de Seguridad',
    description: 'CCTV IP, analógicas, PTZ - Hikvision, Uniview, Epcom desde 2MP hasta 4K',
    color: 'from-blue-600 to-blue-700',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    borderColor: 'border-blue-600'
  },
  {
    icon: Wifi,
    name: 'Equipos de Redes',
    description: 'Switches, routers, access points - Ruijie, MikroTik, Ubiquiti',
    color: 'from-violet-600 to-violet-700',
    iconBg: 'bg-violet-100',
    iconColor: 'text-violet-600',
    borderColor: 'border-violet-600'
  },
  {
    icon: Shield,
    name: 'Control de Acceso',
    description: 'Sistemas biométricos, tarjetas RFID, cerraduras inteligentes',
    color: 'from-indigo-600 to-indigo-700',
    iconBg: 'bg-indigo-100',
    iconColor: 'text-indigo-600',
    borderColor: 'border-indigo-600'
  },
  {
    icon: Package,
    name: 'Accesorios y Cables',
    description: 'Cables UTP, conectores, fuentes de poder, gabinetes - Varias marcas',
    color: 'from-brandViolet-600 to-brandViolet-600',
    iconBg: 'bg-violet-100',
    iconColor: 'text-brandViolet-600',
    borderColor: 'border-brandViolet-600'
  },
  {
    icon: Shirt,
    name: 'Merch ITSS Exclusivo',
    description: 'Camisetas, gorras, stickers, tazas con nuestro logo',
    color: 'from-blue-600 to-violet-600',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    borderColor: 'border-blue-600'
  },
  {
    icon: Ticket,
    name: 'Rifas Mensuales',
    description: 'Boletos para sorteos de equipos y servicios especiales',
    color: 'from-violet-600 to-brandViolet-600',
    iconBg: 'bg-violet-100',
    iconColor: 'text-violet-600',
    borderColor: 'border-violet-600'
  },
];

const features = [
  {
    icon: '🚚',
    title: 'Envío a toda la isla',
    description: 'Entregas rápidas en Puerto Rico'
  },
  {
    icon: '💳',
    title: 'Pagos seguros',
    description: 'Múltiples métodos de pago'
  },
  {
    icon: '🛡️',
    title: 'Garantía oficial',
    description: 'Productos con garantía del fabricante'
  },
  {
    icon: '🔧',
    title: 'Soporte técnico',
    description: 'Asesoría especializada incluida'
  }
];

export default function TiendaPage() {
  const whatsappLink = "https://wa.me/19392842551?text=Hola%2C%20estoy%20interesado%20en%20una%20cotizaci%C3%B3n%20con%20IT%20Services%20%26%20Security.%20Servicio%3A%20%5BIndicar%5D%20%7C%20Nombre%3A%20%5BEscribir%5D%20%7C%20Tel%C3%A9fono%3A%20%5Bxxx-xxx-xxxx%5D";
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [discountCode, setDiscountCode] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.whatsapp,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.ok) {
        if (result.error === 'duplicate') {
          setError('Este email ya está registrado en la lista de espera. ¡Gracias por tu interés!');
        } else {
          throw new Error(result.error || 'Failed to submit to waitlist');
        }
        return;
      }

      setDiscountCode('ITSS2025');
      setSubmitted(true);
      setFormData({ name: '', email: '', whatsapp: '' });
    } catch (error: any) {
      console.error('Error submitting waitlist:', error);
      setError('Error al enviar el formulario. Por favor intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-charcoal">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pb-24 bg-gradient-to-b from-deepBlue to-charcoal">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-600 to-violet-600 rounded-2xl mb-6">
              <Store className="w-12 h-12 text-white" />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Tienda Online
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400 mt-2">
                Próximamente
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Estamos preparando nuestra tienda en línea con los mejores productos de seguridad y tecnología
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-slate">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Categorías de Productos
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Explora lo que estará disponible en nuestra tienda online
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-charcoal rounded-xl p-6 border-2 ${category.borderColor} hover:shadow-lg hover:shadow-blue-600/20 transition-all group`}
              >
                <div className={`w-14 h-14 ${category.iconBg} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <category.icon className={`w-7 h-7 ${category.iconColor}`} />
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {category.name}
                </h3>

                <p className="text-sm text-gray-400">
                  {category.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Beneficios de Comprar con Nosotros
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate rounded-xl p-6 text-center border border-gray-700 hover:border-blue-600 transition-colors"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter/Waitlist Section */}
      <section className="py-16 bg-gradient-to-b from-slate to-charcoal">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-violet-600 rounded-2xl p-8 md:p-12 shadow-2xl"
          >
            {!submitted ? (
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6 backdrop-blur-sm">
                  <Bell className="w-8 h-8 text-white" />
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  ¡Sé el primero en saberlo!
                </h2>

                <p className="text-lg text-blue-100 mb-2">
                  Regístrate para recibir una notificación cuando lancemos
                </p>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-3 mb-8"
                >
                  <p className="text-white font-semibold text-sm">
                    ⭐ Los primeros 50 registrados recibirán un 15% de descuento
                  </p>
                </motion.div>

                <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-red-500/20 border border-red-400/30 rounded-xl text-red-200 text-sm backdrop-blur-sm"
                    >
                      {error}
                    </motion.div>
                  )}

                  <Input
                    type="text"
                    placeholder="Nombre completo"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-white/90 border-0 text-gray-900 placeholder:text-gray-500 h-12"
                    required
                    disabled={isSubmitting}
                  />

                  <Input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-white/90 border-0 text-gray-900 placeholder:text-gray-500 h-12"
                    required
                    disabled={isSubmitting}
                  />

                  <Input
                    type="tel"
                    placeholder="WhatsApp (+1787 o +1939)"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    className="bg-white/90 border-0 text-gray-900 placeholder:text-gray-500 h-12"
                    required
                    disabled={isSubmitting}
                  />

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-white text-blue-600 hover:bg-blue-50 font-semibold h-12 text-base"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Enviando...' : (
                      <>
                        Notificarme
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                  className="w-20 h-20 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
                >
                  <CheckCircle className="w-12 h-12 text-white" />
                </motion.div>

                <h3 className="text-3xl font-bold text-white mb-4">
                  ¡Gracias por registrarte! 🎉
                </h3>

                <p className="text-lg text-blue-100 mb-6">
                  Aquí está tu código de descuento exclusivo
                </p>

                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: 'spring' }}
                  className="inline-block px-8 py-6 bg-white/20 backdrop-blur-sm rounded-xl mb-6 border border-white/30"
                >
                  <p className="text-white text-sm font-medium mb-2">Tu código de descuento:</p>
                  <p className="text-white text-4xl font-bold tracking-wider mb-2">{discountCode}</p>
                  <p className="text-blue-100 text-sm">15% de descuento en tu primera compra</p>
                </motion.div>

                <p className="text-blue-100 mb-6">
                  Te notificaremos cuando la tienda esté lista. Revisa tu email para confirmar tu suscripción.
                </p>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    setDiscountCode('');
                    setFormData({ name: '', email: '', whatsapp: '' });
                    setError('');
                  }}
                  className="px-6 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg text-white transition-colors border border-white/30"
                >
                  Registrar otro email
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Temporary CTA */}
      <section className="py-16 bg-charcoal">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate rounded-2xl p-8 border-2 border-gray-700 text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              ¿Necesitas productos ahora?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Mientras preparamos nuestra tienda online, contáctanos directamente para cotizaciones y pedidos especiales
            </p>
            <div className="flex justify-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#0B5FFF] to-[#FF7A00] text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-orange-500/50 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Solicitar Cotización
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-600 via-violet-600 to-brandViolet-600">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Mantente conectado
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Síguenos en redes sociales para estar al tanto de novedades y promociones
            </p>

            <motion.a
              href="https://www.instagram.com/itservicespr?igsh=MmI5Z3J2dWYwMHVz&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow-xl"
            >
              <Instagram className="w-6 h-6" />
              Síguenos en Instagram
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
