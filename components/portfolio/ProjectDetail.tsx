'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  MapPin,
  Calendar,
  DollarSign,
  Clock,
  ArrowLeft,
  CheckCircle,
  Lightbulb,
  Target,
  TrendingUp,
  Phone,
  MessageCircle
} from 'lucide-react'
import type { PortfolioProject } from '@/data/portfolio'
import { Lightbox } from './Lightbox'
import { PortfolioCard } from './PortfolioCard'

interface ProjectDetailProps {
  project: PortfolioProject
  relatedProjects: PortfolioProject[]
}

export function ProjectDetail({ project, relatedProjects }: ProjectDetailProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  return (
    <>
      <div className="min-h-screen bg-charcoal">
        <div className="container mx-auto px-6 pt-24">
          <Link
            href="/portafolio"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al portfolio
          </Link>
        </div>

        <div className="container mx-auto px-6 pb-12">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-skyBlue font-bold text-lg">{project.client}</span>
                <span className="flex items-center gap-1 text-gray-400">
                  <MapPin className="w-4 h-4" />
                  {project.location}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                {project.title}
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {project.summary}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.category.map((cat) => (
                  <span
                    key={cat}
                    className="px-4 py-2 bg-deepBlue text-white text-sm rounded-lg"
                  >
                    {cat}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4">
                {project.projectValue && (
                  <div className="bg-slate p-4 rounded-xl">
                    <div className="flex items-center gap-2 text-gray-400 mb-1">
                      <DollarSign className="w-4 h-4" />
                      <span className="text-sm">Valor del Proyecto</span>
                    </div>
                    <p className="text-white font-bold">{project.projectValue}</p>
                  </div>
                )}
                {project.duration && (
                  <div className="bg-slate p-4 rounded-xl">
                    <div className="flex items-center gap-2 text-gray-400 mb-1">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">Duración</span>
                    </div>
                    <p className="text-white font-bold">{project.duration}</p>
                  </div>
                )}
                <div className="bg-slate p-4 rounded-xl">
                  <div className="flex items-center gap-2 text-gray-400 mb-1">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">Completado</span>
                  </div>
                  <p className="text-white font-bold">
                    {new Date(project.completedDate).toLocaleDateString('es-PR', {
                      month: 'long',
                      year: 'numeric'
                    })}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div
                className="relative h-[500px] rounded-2xl overflow-hidden cursor-pointer group"
                onClick={() => openLightbox(0)}
              >
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  priority
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <svg className="w-8 h-8 text-deepBlue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </motion.div>
                </div>
              </div>

              {project.images.length > 1 && (
                <div className="grid grid-cols-4 gap-3 mt-4">
                  {project.images.slice(1, 5).map((image, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="relative h-24 rounded-lg overflow-hidden cursor-pointer"
                      onClick={() => openLightbox(index + 1)}
                    >
                      <Image
                        src={image}
                        alt={`${project.title} ${index + 2}`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20 hover:bg-black/0 transition-colors" />
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </div>

        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto space-y-16">

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-orange/20 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-orange" />
                </div>
                <h2 className="text-3xl font-bold text-white">El Reto</h2>
              </div>
              <div className="bg-slate p-8 rounded-2xl border-l-4 border-orange">
                <p className="text-gray-300 text-lg leading-relaxed">
                  {project.challenge}
                </p>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-deepBlue/20 rounded-xl flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-skyBlue" />
                </div>
                <h2 className="text-3xl font-bold text-white">La Solución</h2>
              </div>
              <div className="bg-slate p-8 rounded-2xl border-l-4 border-deepBlue">
                <p className="text-gray-300 text-lg leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-400" />
                </div>
                <h2 className="text-3xl font-bold text-white">Resultados</h2>
              </div>
              <div className="bg-gradient-to-r from-green-500/10 to-deepBlue/10 p-8 rounded-2xl border-l-4 border-green-500">
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {project.results}
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  {project.results.split('.').filter(r => r.trim().length > 0).map((result, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{result.trim()}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6">Tecnologías Utilizadas</h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.05 }}
                    className="px-6 py-3 bg-slate text-white rounded-xl border border-gray-700 hover:border-skyBlue transition-colors"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.section>
          </div>
        </div>

        <div className="bg-gradient-to-r from-deepBlue to-skyBlue">
          <div className="container mx-auto px-6 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                ¿Necesitas un Proyecto Similar?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Nuestro equipo está listo para diseñar e implementar la solución perfecta para tu negocio
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href={`https://wa.me/19392842551?text=Hola%2C%20vi%20el%20proyecto%20de%20${encodeURIComponent(project.client)}%20y%20me%20interesa%20algo%20similar`}
                  className="px-8 py-4 bg-white text-deepBlue rounded-xl font-bold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageCircle className="w-5 h-5" />
                  Cotizar por WhatsApp
                </motion.a>
                <motion.a
                  href="tel:+17876193432"
                  className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-bold hover:bg-white hover:text-deepBlue transition-colors flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="w-5 h-5" />
                  Llamar Ahora
                </motion.a>
              </div>
            </div>
          </div>
        </div>

        {relatedProjects.length > 0 && (
          <div className="container mx-auto px-6 py-16">
            <h2 className="text-3xl font-bold text-white mb-8">Proyectos Relacionados</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProjects.map((relatedProject, index) => (
                <PortfolioCard
                  key={relatedProject.slug}
                  project={relatedProject}
                  index={index}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      <Lightbox
        images={project.images}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  )
}
