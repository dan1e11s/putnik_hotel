'use client'

import { motion } from 'framer-motion'
import { Users, Maximize2, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useLocale } from 'next-intl'
import { Room } from '@/lib/data/rooms'
import Badge from './Badge'
import PriceTag from './PriceTag'
import { cn } from '@/lib/utils/cn'

interface RoomCardProps {
  room: Room
  perNightLabel: string
  detailsLabel: string
  guestsLabel: string
  sizeLabel: string
  fromLabel: string
  index?: number
}

export default function RoomCard({
  room,
  perNightLabel,
  detailsLabel,
  guestsLabel,
  sizeLabel,
  fromLabel,
  index = 0,
}: RoomCardProps) {
  const locale = useLocale()

  const name = locale === 'ru' ? room.name : room.nameEn
  const description = locale === 'ru' ? room.description : room.descriptionEn
  const badges = locale === 'ru' ? room.badges : room.badgesEn

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-surface rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex flex-col"
    >
      {/* Image placeholder */}
      <div className="relative h-52 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
              <Maximize2 className="w-8 h-8 text-primary" />
            </div>
            <p className="text-primary/60 text-sm font-medium">{room.size} {sizeLabel}</p>
          </div>
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          {badges.slice(0, 2).map((badge) => (
            <span
              key={badge}
              className="bg-primary text-white text-xs font-semibold px-2.5 py-1 rounded-lg"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-primary transition-colors">
          {name}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-1 line-clamp-2">
          {description}
        </p>

        {/* Meta info */}
        <div className="flex items-center gap-4 text-sm text-text-secondary mb-4">
          <div className="flex items-center gap-1.5">
            <Users className="w-4 h-4" />
            <span>
              до {room.maxGuests} {guestsLabel}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <Maximize2 className="w-4 h-4" />
            <span>
              {room.size} {sizeLabel}
            </span>
          </div>
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between">
          <PriceTag
            price={room.price}
            period={perNightLabel}
            prefix={fromLabel}
            size="md"
          />
          <Link
            href={`/${locale}/rooms/${room.slug}`}
            className={cn(
              'inline-flex items-center gap-1.5 text-primary font-semibold text-sm',
              'hover:gap-2.5 transition-all duration-200 group/btn'
            )}
          >
            {detailsLabel}
            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
