'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MapPin } from 'lucide-react'
import { portfolioProjects } from '@/data/portfolio'
import { PortfolioCard } from './PortfolioCard'

const ROW2_SLUGS = ['ricomini-camuy', 'pr-9-ponce', 'mayaguez-square-district']
const ROW3_SLUGS = ['infosys-aguadilla', 'vistas-del-rio-apartments']

export function PortfolioGrid() {
  const featured = portfolioProjects.find(p => p.slug === 'cuartel-policia-cabo-rojo')!
  const row2 = ROW2_SLUGS.map(s => portfolioProjects.find(p => p.slug === s)!)
  const row3 = ROW3_SLUGS.map(s => portfolioProjects.find(p => p.slug === s)!)
  const featuredCover = featured.coverImage ?? featured.images[0]

  return (
    <div className="space-y-8">

      {/* Row 1: Featured card — full width */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Link href={`/portafolio/${featured.slug}`}>
          <div className="group bg-slate border border-gray-600/40 rounded-xl overflow-hidden hover:border-deepBlue/60 hover:-translate-y-1 transition-all duration-300 grid md:grid-cols-5 shadow-card hover:shadow-card-hover">

            {/* Image — 3/5 */}
            <div className="md:col-span-3 relative h-72 md:h-auto bg-navy">
              <Image
                src={featuredCover}
                alt={featured.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 md:bg-gradient-to-r from-transparent to-slate/20 hidden md:block" />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-deepBlue text-white text-xs font-semibold rounded-full">
                  {featured.category}
                </span>
              </div>
            </div>

            {/* Content — 2/5 */}
            <div className="md:col-span-2 p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1.5 text-gray-400 text-sm mb-3">
                  <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                  {featured.location}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-skyBlue transition-colors leading-snug">
                  {featured.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {featured.summary}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {featured.technologies.map(tech => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-navy border border-gray-600/50 text-gray-400 text-xs rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <span className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-600/60 text-white text-sm rounded-lg group-hover:bg-deepBlue group-hover:border-deepBlue transition-colors w-fit">
                Ver proyecto <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </Link>
      </motion.div>

      {/* Row 2: 3 equal columns */}
      <div className="grid md:grid-cols-3 gap-6">
        {row2.map((project, i) => (
          <PortfolioCard key={project.slug} project={project} index={i} />
        ))}
      </div>

      {/* Row 3: 2 cards + CTA */}
      <div className="grid md:grid-cols-3 gap-6">
        {row3.map((project, i) => (
          <PortfolioCard key={project.slug} project={project} index={i + 3} />
        ))}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.24 }}
          className="h-full"
        >
          <Link href="/contacto" className="block h-full">
            <div className="group h-full bg-slate border border-gray-600/40 rounded-xl hover:border-deepBlue/60 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center p-10 text-center min-h-[280px] shadow-card hover:shadow-card-hover">
              <div className="w-16 h-16 bg-deepBlue/10 border border-deepBlue/30 rounded-full flex items-center justify-center mb-6 group-hover:bg-deepBlue/20 transition-colors">
                <ArrowRight className="w-7 h-7 text-skyBlue" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-skyBlue transition-colors">
                ¿Tienes un proyecto?
              </h3>
              <p className="text-gray-400 text-sm mb-6">Hablemos →</p>
              <span className="inline-flex items-center gap-2 px-5 py-2.5 border border-deepBlue/50 text-skyBlue text-sm rounded-lg group-hover:bg-deepBlue group-hover:text-white group-hover:border-deepBlue transition-colors">
                Contáctanos <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>
        </motion.div>
      </div>

    </div>
  )
}
