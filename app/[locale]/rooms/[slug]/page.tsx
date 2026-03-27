'use client'

import { notFound } from 'next/navigation'
import { motion } from 'framer-motion'
import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'
import {
  Users,
  Maximize2,
  Check,
  ArrowLeft,
  BedDouble,
  Phone,
  ChevronRight,
} from 'lucide-react'
import { getRoomBySlug, rooms } from '@/lib/data/rooms'
import PriceTag from '@/components/shared/PriceTag'
import Badge from '@/components/shared/Badge'
import WhatsAppButton from '@/components/shared/WhatsAppButton'
import Button from '@/components/shared/Button'

interface PageProps {
  params: { slug: string; locale: string }
}

export default function RoomDetailPage({ params }: PageProps) {
  const t = useTranslations()
  const locale = useLocale()
  const room = getRoomBySlug(params.slug)

  if (!room) notFound()

  const name = locale === 'ru' ? room.name : room.nameEn
  const description = locale === 'ru' ? room.description : room.descriptionEn
  const badges = locale === 'ru' ? room.badges : room.badgesEn
  const amenities = locale === 'ru' ? room.amenities : room.amenitiesEn
  const phone = process.env.NEXT_PUBLIC_PHONE || '+996 XXX XXX XXX'

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-border">
        <div className="container mx-auto px-4 max-w-7xl py-4">
          <div className="flex items-center gap-2 text-sm text-text-secondary">
            <Link href={`/${locale}`} className="hover:text-primary transition-colors">
              {t('nav.home')}
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href={`/${locale}/rooms`} className="hover:text-primary transition-colors">
              {t('nav.rooms')}
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-text-primary font-medium">{name}</span>
          </div>
        </div>
      </div>

      <div className="bg-background py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <Link
            href={`/${locale}/rooms`}
            className="inline-flex items-center gap-2 text-text-secondary hover:text-primary text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t('nav.rooms')}
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2">
              {/* Image placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative h-80 md:h-[420px] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 mb-6"
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                  <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center">
                    <BedDouble className="w-12 h-12 text-primary" />
                  </div>
                  <p className="text-primary/60 text-lg font-medium">{name}</p>
                  <p className="text-primary/40 text-sm">
                    {room.size} {t('rooms.size')}
                  </p>
                </div>

                {/* Badges overlay */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {badges.map((badge) => (
                    <span
                      key={badge}
                      className="bg-primary text-white text-sm font-semibold px-3 py-1.5 rounded-lg shadow-button"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Room info */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl p-6 mb-6 shadow-card"
              >
                <h1 className="text-3xl font-bold text-text-primary mb-4">{name}</h1>

                <div className="flex flex-wrap gap-4 text-sm text-text-secondary mb-5">
                  <div className="flex items-center gap-1.5">
                    <Users className="w-4 h-4" />
                    <span>
                      {room.minGuests}–{room.maxGuests} {t('rooms.guests')}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Maximize2 className="w-4 h-4" />
                    <span>
                      {room.size} {t('rooms.size')}
                    </span>
                  </div>
                </div>

                <p className="text-text-secondary leading-relaxed mb-6">{description}</p>

                {/* Amenities */}
                <h3 className="text-lg font-bold text-text-primary mb-4">Удобства</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {amenities.map((amenity) => (
                    <div key={amenity} className="flex items-center gap-2.5 text-sm text-text-secondary">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      {amenity}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Booking sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-1"
            >
              <div className="bg-white rounded-2xl shadow-card p-6 sticky top-24">
                <h3 className="text-lg font-bold text-text-primary mb-5">Забронировать</h3>

                {/* Prices */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between p-3 bg-primary/5 rounded-xl">
                    <span className="text-sm text-text-secondary">Ночной тариф</span>
                    <PriceTag price={room.price} period={t('rooms.per_night')} size="sm" />
                  </div>
                  {room.priceHourly > 0 && (
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <span className="text-sm text-text-secondary">Почасовой (от 2ч)</span>
                      <PriceTag price={room.priceHourly} period={t('rooms.per_2hours')} size="sm" />
                    </div>
                  )}
                </div>

                {/* CTA */}
                <div className="space-y-3">
                  <Link href={`/${locale}/booking?room=${room.slug}`} className="block">
                    <Button variant="primary" size="lg" fullWidth>
                      {t('nav.book')}
                    </Button>
                  </Link>
                  <WhatsAppButton
                    label={t('booking.whatsapp')}
                    variant="inline"
                    size="md"
                    className="w-full justify-center"
                    message={`Здравствуйте! Хочу забронировать номер «${name}».`}
                  />
                  <a
                    href={`tel:${phone}`}
                    className="flex items-center justify-center gap-2 w-full border-2 border-border text-text-secondary hover:border-primary hover:text-primary font-medium py-3 rounded-xl transition-all text-sm"
                  >
                    <Phone className="w-4 h-4" />
                    {phone}
                  </a>
                </div>

                {/* Includes note */}
                <div className="mt-5 pt-5 border-t border-border">
                  <p className="text-xs text-text-secondary mb-2 font-medium">Включено в стоимость:</p>
                  <div className="space-y-1.5">
                    {['WiFi', 'Полотенца', 'Парковка'].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs text-text-secondary">
                        <Check className="w-3 h-3 text-green-500" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Other rooms */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-text-primary mb-6">Другие номера</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {rooms
                .filter((r) => r.slug !== room.slug)
                .slice(0, 3)
                .map((r) => (
                  <Link
                    key={r.id}
                    href={`/${locale}/rooms/${r.slug}`}
                    className="flex items-center gap-4 p-4 bg-white rounded-xl border border-border hover:border-primary/30 hover:shadow-card transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <BedDouble className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-text-primary text-sm truncate">
                        {locale === 'ru' ? r.name : r.nameEn}
                      </p>
                      <p className="text-primary text-sm font-medium">
                        от {r.price.toLocaleString('ru-RU')} сом
                      </p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-text-secondary flex-shrink-0" />
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
