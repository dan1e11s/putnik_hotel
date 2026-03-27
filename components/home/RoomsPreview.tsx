'use client'

import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getFeaturedRooms } from '@/lib/data/rooms'
import RoomCard from '@/components/shared/RoomCard'
import SectionTitle from '@/components/shared/SectionTitle'

export default function RoomsPreview() {
  const t = useTranslations()
  const locale = useLocale()
  const rooms = getFeaturedRooms()

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <SectionTitle
          title={t('rooms.title')}
          subtitle={t('rooms.subtitle')}
          className="mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
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

        <div className="text-center">
          <Link
            href={`/${locale}/rooms`}
            className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-8 py-4 rounded-xl hover:bg-primary-dark transition-all hover:-translate-y-0.5 shadow-button hover:shadow-card-hover"
          >
            {t('rooms.view_all')}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
