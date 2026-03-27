'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Waves, Flame, Circle, Wifi, ParkingCircle, Clock } from 'lucide-react'
import SectionTitle from '@/components/shared/SectionTitle'

const iconMap: Record<string, React.ElementType> = {
  Waves,
  Flame,
  Circle,
  Wifi,
  ParkingCircle,
  Clock,
}

const amenitiesData = [
  {
    id: 'pool',
    icon: 'Waves',
    titleKey: 'amenities.pool_title',
    descKey: 'amenities.pool_desc',
    gradient: 'from-blue-500 to-cyan-400',
  },
  {
    id: 'sauna',
    icon: 'Flame',
    titleKey: 'amenities.sauna_title',
    descKey: 'amenities.sauna_desc',
    gradient: 'from-orange-500 to-amber-400',
  },
  {
    id: 'billiards',
    icon: 'Circle',
    titleKey: 'amenities.billiards_title',
    descKey: 'amenities.billiards_desc',
    gradient: 'from-green-600 to-emerald-400',
  },
  {
    id: 'wifi',
    icon: 'Wifi',
    titleKey: 'amenities.wifi_title',
    descKey: 'amenities.wifi_desc',
    gradient: 'from-primary to-accent',
  },
  {
    id: 'parking',
    icon: 'ParkingCircle',
    titleKey: 'amenities.parking_title',
    descKey: 'amenities.parking_desc',
    gradient: 'from-violet-600 to-purple-400',
  },
  {
    id: 'checkin',
    icon: 'Clock',
    titleKey: 'amenities.checkin_title',
    descKey: 'amenities.checkin_desc',
    gradient: 'from-primary-dark to-primary',
  },
]

export default function AmenitiesSection() {
  const t = useTranslations()

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <SectionTitle
          title={t('amenities.title')}
          className="mb-14"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenitiesData.map((item, index) => {
            const Icon = iconMap[item.icon] || Wifi

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group p-6 rounded-2xl border border-border hover:border-primary/20 hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-white"
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-primary transition-colors">
                  {t(item.titleKey)}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {t(item.descKey)}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
