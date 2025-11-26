'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Lightbulb,
  Target,
  TrendingUp,
  Users,
  CheckCircle,
  MessageCircle,
  Phone,
  Zap,
  Award,
  ArrowRight,
} from 'lucide-react';
import { ScrollColorBackground } from '@/components/shared/ScrollColorBackground';

export default function ConsultoriaClient() {
  const colorSections = [
    { offset: 0, color: '#050505' }, // Pure black - Hero top
    { offset: 0.12, color: '#0a0a12' }, // Very dark
    { offset: 0.25, color: '#0f1419' }, // Dark navy
    { offset: 0.40, color: '#0f172a' }, // Slate navy
    { offset: 0.60, color: '#1e293b' }, // Medium navy
    { offset: 0.75, color: '#1e3a5f' }, // Blue navy
    { offset: 0.88, color: '#0c4a6e' }, // Deep blue
    { offset: 1, color: '#0369a1' }, // Strong blue - CTA
  ];

  const whatsappLink =
    'https://wa.me/19392842551?text=Hola%2C%20estoy%20interesado%20en%20una%20cotizaci%C3%B3n%20con%20IT%20Services%20%26%20Security.%20Servicio%3A%20Consultor%C3%ADa%20T%C3%A9cnica%20%7C%20Nombre%3A%20%5BEscribir%5D%20%7C%20Tel%C3%A9fono%3A%20%5Bxxx-xxx-xxxx%5D';

  return (
    <ScrollColorBackground sections={colorSections}>
      <div className="min-h-screen">
        {/* HERO */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="container mx-auto px-6 relative z-10 py-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-violet-600 to-blue-600 rounded-2xl mb-6 shadow-lg shadow-violet-500/30"
              >
                <Lightbulb className="w-10 h-10 text-white" />
              </motion.div>

              {/* H1 optimizado para SEO */}
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Consultoría Tecnológica y Proyectos de Seguridad en Puerto Rico
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Asesoría especializada para diseñar y optimizar tus sistemas de cámaras
                de seguridad, control de acceso, redes empresariales e infraestructura IT
                para negocios en toda la isla.
              </p>

              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center gap-2 text-gray-300">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Auditorías Técnicas</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <span>Planificación Estratégica</span>
                </div>
                <div className="flex
