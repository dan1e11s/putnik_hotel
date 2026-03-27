'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { rooms } from '@/lib/data/rooms'
import RoomCard from '@/components/shared/RoomCard'
import SectionTitle from '@/components/shared/SectionTitle'
import { BedDouble } from 'lucide-react'

export default function RoomsPage() {
  const t = useTranslations()

  return (
    <div className="pt-20">
      {/* Hero banner */}
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
              <BedDouble className="w-4 h-4" />
              {rooms.length} номеров в наличии
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('rooms.title')}
            </h1>
            <p className="text-xl text-white/80 max-w-xl mx-auto">
              {t('rooms.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Rooms grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rooms.map((room, index) => (
              <RoomCard
                key={room.id}
                room={room}
                perNightLabel={t('rooms.per_night')}
                detailsLabel={t('rooms.details')}
                guestsLabel={t('rooms.guests')}
                sizeLabel={t('rooms.size')}
                fromLabel={t('rooms.from')}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
