'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, ArrowRight } from 'lucide-react'
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
      transition={{ delay: index * 0.08 }}
      className="h-full"
    >
      <Link href={`/portafolio/${project.slug}`} className="block h-full">
        <div className="group h-full bg-[#0d1117] border border-gray-800 rounded-xl overflow-hidden hover:border-teal-500/50 hover:-translate-y-1 transition-all duration-300 flex flex-col">

          {/* Cover image */}
          <div className="relative h-52 bg-gray-800 flex-shrink-0">
            <Image
              src={project.images[0]}
              alt={project.title}
              fill
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117]/70 via-transparent to-transparent" />
            {/* Category badge top-left */}
            <div className="absolute top-3 left-3">
              <span className="px-2.5 py-1 bg-teal-500 text-white text-xs font-semibold rounded-full">
                {project.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-5 flex flex-col flex-1">
            {/* Location */}
            <div className="flex items-center gap-1.5 text-gray-400 text-sm mb-2">
              <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
              <span className="truncate">{project.location}</span>
            </div>

            {/* Title */}
            <h3 className="text-base font-bold text-white mb-2 group-hover:text-teal-400 transition-colors line-clamp-2 leading-snug">
              {project.title}
            </h3>

            {/* Summary */}
            <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-1 leading-relaxed">
              {project.summary}
            </p>

            {/* Tech tags — all of them */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.technologies.map(tech => (
                <span
                  key={tech}
                  className="px-2 py-0.5 bg-gray-900 border border-gray-700 text-gray-400 text-xs rounded"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA button */}
            <span className="inline-flex items-center gap-1.5 px-4 py-2 border border-gray-700 text-white text-sm rounded-lg group-hover:bg-teal-500 group-hover:border-teal-500 transition-colors w-fit">
              Ver proyecto <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
