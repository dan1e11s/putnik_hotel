'use client'

import { motion } from 'framer-motion'
import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'
import { Check, Zap, Moon, Sun, Star } from 'lucide-react'
import SectionTitle from '@/components/shared/SectionTitle'

const plans = [
  {
    id: 'hourly',
    icon: Zap,
    titleKey: 'pricing.hourly_title',
    price: 1000,
    priceNote: '/ 2 ч',
    badgeKey: null,
    minKey: 'pricing.hourly_min',
    includes: [
      'pricing.includes_wifi',
      'pricing.includes_shower',
      'pricing.includes_towels',
    ],
    featured: false,
    gradient: 'from-gray-700 to-gray-900',
  },
  {
    id: 'night',
    icon: Moon,
    titleKey: 'pricing.night_title',
    price: 1500,
    priceNote: '/ ночь',
    badgeKey: 'pricing.night_badge',
    minKey: 'pricing.night_hours',
    includes: [
      'pricing.includes_wifi',
      'pricing.includes_shower',
      'pricing.includes_towels',
      'pricing.includes_parking',
    ],
    featured: true,
    gradient: 'from-primary to-primary-dark',
  },
  {
    id: 'daily',
    icon: Sun,
    titleKey: 'pricing.daily_title',
    price: 2000,
    priceNote: '/ сутки',
    badgeKey: null,
    minKey: null,
    includes: [
      'pricing.includes_wifi',
      'pricing.includes_shower',
      'pricing.includes_towels',
      'pricing.includes_parking',
      'pricing.includes_pool',
      'pricing.includes_sauna',
    ],
    featured: false,
    gradient: 'from-accent to-primary',
  },
]

export default function PricingSection() {
  const t = useTranslations()
  const locale = useLocale()

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <SectionTitle
          title={t('pricing.title')}
          subtitle={t('pricing.subtitle')}
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className={`relative rounded-2xl overflow-hidden ${
                plan.featured
                  ? 'ring-2 ring-primary shadow-card-hover scale-105'
                  : 'shadow-card'
              }`}
            >
              {/* Header */}
              <div className={`bg-gradient-to-br ${plan.gradient} p-6 text-white`}>
                {plan.badgeKey && (
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-2.5 py-1 rounded-full">
                    <Star className="w-3 h-3 fill-current" />
                    {t(plan.badgeKey)}
                  </div>
                )}
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                  <plan.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-3">{t(plan.titleKey)}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">от {plan.price.toLocaleString('ru-RU')}</span>
                  <span className="text-white/70 text-sm">{plan.priceNote}</span>
                </div>
                {plan.minKey && (
                  <p className="text-white/70 text-xs mt-2">{t(plan.minKey)}</p>
                )}
              </div>

              {/* Includes */}
              <div className="bg-white p-6">
                <ul className="space-y-3 mb-6">
                  {plan.includes.map((key) => (
                    <li key={key} className="flex items-center gap-3 text-sm text-text-secondary">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      {t(key)}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/${locale}/booking`}
                  className={`block w-full text-center font-semibold py-3 rounded-xl transition-all ${
                    plan.featured
                      ? 'bg-primary text-white hover:bg-primary-dark shadow-button'
                      : 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
                  }`}
                >
                  {t('pricing.book_btn')}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-text-secondary text-sm"
        >
          {t('pricing.discount_note')}
        </motion.p>
      </div>
    </section>
  )
}
