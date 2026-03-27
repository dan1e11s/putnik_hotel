'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'

interface GalleryItem {
  id: string
  src: string
  alt: string
  category: string
}

interface PhotoGalleryProps {
  items: GalleryItem[]
  categories?: { value: string; label: string }[]
  allLabel?: string
}

export default function PhotoGallery({ items, categories = [], allLabel = 'All' }: PhotoGalleryProps) {
  const [activeCategory, setActiveCategory] = useState('all')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filtered =
    activeCategory === 'all' ? items : items.filter((item) => item.category === activeCategory)

  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)

  const prevImage = () => {
    if (lightboxIndex === null) return
    setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length)
  }

  const nextImage = () => {
    if (lightboxIndex === null) return
    setLightboxIndex((lightboxIndex + 1) % filtered.length)
  }

  return (
    <>
      {/* Filter tabs */}
      {categories.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              activeCategory === 'all'
                ? 'bg-primary text-white shadow-button'
                : 'bg-surface text-text-secondary border border-border hover:border-primary hover:text-primary'
            }`}
          >
            {allLabel}
          </button>
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                activeCategory === cat.value
                  ? 'bg-primary text-white shadow-button'
                  : 'bg-surface text-text-secondary border border-border hover:border-primary hover:text-primary'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      )}

      {/* Grid */}
      <motion.div
        layout
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        <AnimatePresence>
          {filtered.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group bg-gradient-to-br from-primary/10 to-accent/10"
              onClick={() => openLightbox(index)}
            >
              {/* Placeholder visual */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                    <ZoomIn className="w-6 h-6 text-primary/60" />
                  </div>
                  <p className="text-xs text-primary/50 mt-2 px-2">{item.alt}</p>
                </div>
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <ZoomIn className="w-8 h-8 text-white" />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white/80 hover:text-white w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); prevImage() }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-3xl max-h-[80vh] w-full rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 aspect-video flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center text-white">
                <ZoomIn className="w-16 h-16 mx-auto mb-3 opacity-40" />
                <p className="text-white/60">{filtered[lightboxIndex]?.alt}</p>
              </div>
            </motion.div>

            <button
              onClick={(e) => { e.stopPropagation(); nextImage() }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
              {lightboxIndex + 1} / {filtered.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
