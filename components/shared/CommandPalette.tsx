'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'
import {
  Search,
  Command as CommandIcon,
  ArrowRight,
  Clock,
  TrendingUp,
  X
} from 'lucide-react'
import Fuse from 'fuse.js'
import { allSearchData, type SearchItem } from '@/data/search-index'

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchItem[]>([])
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [recentSearches, setRecentSearches] = useState<SearchItem[]>([])
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  const fuse = new Fuse(allSearchData, {
    keys: [
      { name: 'title', weight: 2 },
      { name: 'description', weight: 1 },
      { name: 'keywords', weight: 1.5 },
      { name: 'category', weight: 0.5 },
    ],
    threshold: 0.3,
    includeScore: true,
    minMatchCharLength: 2,
  })

  const popularItems = allSearchData.filter(item =>
    ['seguridad-camaras', 'redes-fibra', 'policia-cabo-rojo', 'ricomini-mayaguez'].includes(item.id)
  )

  useEffect(() => {
    const recent = localStorage.getItem('recentSearches')
    if (recent) {
      setRecentSearches(JSON.parse(recent).slice(0, 5))
    }
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setIsOpen(true)
      }
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  useEffect(() => {
    if (query.trim().length === 0) {
      setResults([])
      setSelectedIndex(0)
      return
    }

    const searchResults = fuse.search(query).map(result => result.item)
    setResults(searchResults.slice(0, 8))
    setSelectedIndex(0)
  }, [query])

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      const displayedResults = query ? results : recentSearches.length > 0 ? recentSearches : popularItems

      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setSelectedIndex(prev => (prev + 1) % displayedResults.length)
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setSelectedIndex(prev => (prev - 1 + displayedResults.length) % displayedResults.length)
      } else if (e.key === 'Enter' && displayedResults[selectedIndex]) {
        e.preventDefault()
        handleSelect(displayedResults[selectedIndex])
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, query, results, selectedIndex, recentSearches, popularItems])

  const handleSelect = (item: SearchItem) => {
    const updated = [item, ...recentSearches.filter(i => i.id !== item.id)].slice(0, 5)
    setRecentSearches(updated)
    localStorage.setItem('recentSearches', JSON.stringify(updated))

    router.push(item.url)
    setIsOpen(false)
    setQuery('')
  }

  const clearRecent = () => {
    setRecentSearches([])
    localStorage.removeItem('recentSearches')
  }

  const displayedResults = query ? results : recentSearches.length > 0 ? recentSearches : popularItems

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-4 py-2 bg-slate text-gray-400 rounded-lg hover:text-white hover:bg-navy transition-colors group"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Search className="w-4 h-4" />
        <span className="hidden md:inline text-sm">Buscar...</span>
        <kbd className="hidden md:inline-flex items-center gap-1 px-2 py-0.5 bg-charcoal rounded text-xs">
          <CommandIcon className="w-3 h-3" />K
        </kbd>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9000]"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ type: 'spring', duration: 0.3 }}
              className="fixed top-20 left-1/2 -translate-x-1/2 w-full max-w-2xl bg-slate rounded-2xl shadow-2xl z-[9001] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3 p-4 border-b border-gray-700">
                <Search className="w-5 h-5 text-gray-400" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Buscar servicios, proyectos, páginas..."
                  className="flex-1 bg-transparent text-white placeholder-gray-400 focus:outline-none"
                />
                {query && (
                  <button
                    onClick={() => setQuery('')}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
                <kbd className="px-2 py-1 bg-charcoal rounded text-xs text-gray-400">
                  ESC
                </kbd>
              </div>

              <div className="max-h-[60vh] overflow-y-auto">
                {displayedResults.length > 0 ? (
                  <div className="p-2">
                    <div className="flex items-center justify-between px-3 py-2 text-xs text-gray-500">
                      <span className="flex items-center gap-2">
                        {query ? (
                          <>
                            <Search className="w-3 h-3" />
                            Resultados
                          </>
                        ) : recentSearches.length > 0 ? (
                          <>
                            <Clock className="w-3 h-3" />
                            Recientes
                          </>
                        ) : (
                          <>
                            <TrendingUp className="w-3 h-3" />
                            Popular
                          </>
                        )}
                      </span>
                      {!query && recentSearches.length > 0 && (
                        <button
                          onClick={clearRecent}
                          className="hover:text-gray-400 transition-colors"
                        >
                          Limpiar
                        </button>
                      )}
                    </div>

                    {displayedResults.map((item, index) => (
                      <motion.button
                        key={item.id}
                        onClick={() => handleSelect(item)}
                        onMouseEnter={() => setSelectedIndex(index)}
                        className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl text-left transition-colors ${
                          index === selectedIndex
                            ? 'bg-deepBlue text-white'
                            : 'hover:bg-navy text-gray-300'
                        }`}
                        whileHover={{ x: 4 }}
                      >
                        <span className="text-2xl">{item.icon}</span>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <p className="font-medium truncate">{item.title}</p>
                            {item.category && (
                              <span className="text-xs bg-charcoal px-2 py-0.5 rounded">
                                {item.category}
                              </span>
                            )}
                          </div>
                          <p className="text-sm opacity-70 truncate">
                            {item.description}
                          </p>
                        </div>
                        <ArrowRight className={`w-4 h-4 flex-shrink-0 ${
                          index === selectedIndex ? 'opacity-100' : 'opacity-0'
                        }`} />
                      </motion.button>
                    ))}
                  </div>
                ) : query ? (
                  <div className="p-12 text-center">
                    <p className="text-gray-400 mb-2">No se encontraron resultados</p>
                    <p className="text-sm text-gray-500">
                      Intenta con otros términos de búsqueda
                    </p>
                  </div>
                ) : null}
              </div>

              <div className="flex items-center justify-between px-4 py-3 border-t border-gray-700 bg-charcoal text-xs text-gray-500">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <kbd className="px-2 py-1 bg-slate rounded">↑↓</kbd>
                    Navegar
                  </span>
                  <span className="flex items-center gap-1">
                    <kbd className="px-2 py-1 bg-slate rounded">↵</kbd>
                    Seleccionar
                  </span>
                </div>
                <span>
                  {displayedResults.length} resultado{displayedResults.length !== 1 && 's'}
                </span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
