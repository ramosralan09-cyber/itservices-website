'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PortfolioCard } from './PortfolioCard'
import { portfolioProjects, categories } from '@/data/portfolio'

export function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState('Todos')

  const filteredProjects = portfolioProjects.filter((project) => {
    if (activeCategory === 'Todos') return true
    return project.category.includes(activeCategory)
  })

  return (
    <div>
      <div className="flex flex-wrap gap-3 mb-12 justify-center">
        {categories.map((category) => {
          const count = category === 'Todos'
            ? portfolioProjects.length
            : portfolioProjects.filter(p => p.category.includes(category)).length

          return (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-xl font-medium transition-all ${
                activeCategory === category
                  ? 'bg-deepBlue text-white shadow-lg shadow-deepBlue/50'
                  : 'bg-slate text-gray-400 hover:text-white hover:bg-navy'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
              <span className="ml-2 text-xs opacity-70">({count})</span>
            </motion.button>
          )
        })}
      </div>

      <motion.p
        key={activeCategory}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-gray-400 text-sm mb-8"
      >
        Mostrando <span className="text-white font-bold">{filteredProjects.length}</span> proyecto{filteredProjects.length !== 1 && 's'}
      </motion.p>

      <motion.div
        layout
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <PortfolioCard project={project} index={index} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20"
        >
          <p className="text-gray-400 text-lg">
            No hay proyectos en esta categoría todavía.
          </p>
        </motion.div>
      )}
    </div>
  )
}
