'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Camera } from 'lucide-react'
import PhotoGallery from '@/components/shared/PhotoGallery'

const galleryItems = [
  // Rooms
  { id: '1', src: '/images/gallery/room-1.jpg', alt: 'Стандартный номер', category: 'rooms' },
  { id: '2', src: '/images/gallery/room-2.jpg', alt: 'Twin номер', category: 'rooms' },
  { id: '3', src: '/images/gallery/room-3.jpg', alt: 'Номер люкс', category: 'rooms' },
  { id: '4', src: '/images/gallery/room-4.jpg', alt: 'Семейный номер', category: 'rooms' },
  { id: '5', src: '/images/gallery/room-5.jpg', alt: 'Ванная комната', category: 'rooms' },
  { id: '6', src: '/images/gallery/room-6.jpg', alt: 'Интерьер номера', category: 'rooms' },
  // Pool
  { id: '7', src: '/images/gallery/pool-1.jpg', alt: 'Крытый бассейн', category: 'pool' },
  { id: '8', src: '/images/gallery/pool-2.jpg', alt: 'Бассейн вид сверху', category: 'pool' },
  { id: '9', src: '/images/gallery/pool-3.jpg', alt: 'Зона у бассейна', category: 'pool' },
  // Sauna
  { id: '10', src: '/images/gallery/sauna-1.jpg', alt: 'Финская сауна', category: 'sauna' },
  { id: '11', src: '/images/gallery/sauna-2.jpg', alt: 'Хаммам', category: 'sauna' },
  // Common areas
  { id: '12', src: '/images/gallery/common-1.jpg', alt: 'Ресепшн', category: 'common' },
  { id: '13', src: '/images/gallery/common-2.jpg', alt: 'Коридор', category: 'common' },
  { id: '14', src: '/images/gallery/common-3.jpg', alt: 'Зона отдыха', category: 'common' },
  { id: '15', src: '/images/gallery/common-4.jpg', alt: 'Бильярдный зал', category: 'common' },
  { id: '16', src: '/images/gallery/common-5.jpg', alt: 'Парковка', category: 'common' },
]

export default function GalleryPage() {
  const t = useTranslations('gallery')

  const categories = [
    { value: 'rooms', label: t('rooms') },
    { value: 'pool', label: t('pool') },
    { value: 'sauna', label: t('sauna') },
    { value: 'common', label: t('common') },
  ]

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-dark to-primary py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
            backgroundSize: '28px 28px',
          }}
        />
        <div className="relative z-10 container mx-auto px-4 max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-sm px-4 py-2 rounded-full mb-6">
              <Camera className="w-4 h-4" />
              {galleryItems.length} фотографий
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t('title')}</h1>
            <p className="text-xl text-white/80">
              Гостиница «Путник» — номера, бассейн, сауна и общие зоны
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <PhotoGallery
            items={galleryItems}
            categories={categories}
            allLabel={t('all')}
          />
        </div>
      </section>
    </div>
  )
}
