'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Calendar, ArrowRight } from 'lucide-react'
import type { PortfolioProject } from '@/data/portfolio'

interface PortfolioCardProps {
  project: PortfolioProject
  index: number
}

export function PortfolioCard({ project, index }: PortfolioCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Link href={`/portafolio/${project.slug}`}>
        <motion.div
          className="group relative bg-slate rounded-2xl overflow-hidden cursor-pointer"
          whileHover={{ y: -8 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative h-64 overflow-hidden">
            <Image
              src={project.images[0]}
              alt={project.title}
              fill
              loading="lazy"
              quality={85}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate via-slate/50 to-transparent" />

            {project.featured && (
              <div className="absolute top-4 left-4 px-3 py-1 bg-orange rounded-full">
                <span className="text-white text-xs font-bold">DESTACADO</span>
              </div>
            )}

            <div className="absolute top-4 right-4 flex flex-wrap gap-2 justify-end">
              {project.category.slice(0, 2).map((cat) => (
                <span
                  key={cat}
                  className="px-2 py-1 bg-deepBlue/80 backdrop-blur-sm text-white text-xs rounded-lg"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>

          <div className="p-6">
            <div className="flex items-center gap-4 mb-3 text-sm text-gray-400">
              <span className="font-semibold text-skyBlue">{project.client}</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {project.location}
              </span>
            </div>

            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-skyBlue transition-colors line-clamp-2">
              {project.title}
            </h3>

            <p className="text-gray-400 text-sm mb-4 line-clamp-2">
              {project.summary}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-charcoal text-gray-400 text-xs rounded"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="px-2 py-1 bg-charcoal text-gray-400 text-xs rounded">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-700">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <Calendar className="w-3 h-3" />
                {new Date(project.completedDate).toLocaleDateString('es-PR', {
                  month: 'short',
                  year: 'numeric'
                })}
              </div>
              <div className="flex items-center gap-2 text-skyBlue text-sm font-medium group-hover:gap-3 transition-all">
                Ver proyecto
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
            style={{
              background: 'radial-gradient(circle at center, rgba(11, 95, 255, 0.15) 0%, transparent 70%)'
            }}
          />
        </motion.div>
      </Link>
    </motion.div>
  )
}
