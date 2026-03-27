'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { BedDouble, Users, Waves, Clock } from 'lucide-react'

const stats = [
  { icon: BedDouble, value: '6+', labelKey: 'stats.rooms', color: 'text-primary' },
  { icon: Users, value: '500+', labelKey: 'stats.guests', color: 'text-accent' },
  { icon: Waves, value: '2', labelKey: 'stats.pool', color: 'text-blue-500' },
  { icon: Clock, value: '24/7', labelKey: 'stats.checkin', color: 'text-green-500' },
]

export default function StatsSection() {
  const t = useTranslations()

  return (
    <section className="bg-white border-b border-border">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.labelKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col items-center py-8 px-4 text-center ${
                index < stats.length - 1 ? 'border-r border-border' : ''
              }`}
            >
              <div className={`w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center mb-3 ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <span className="text-3xl font-bold text-text-primary mb-1">{stat.value}</span>
              <span className="text-sm text-text-secondary text-center leading-tight">
                {t(stat.labelKey)}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
