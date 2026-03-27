'use client'

import { motion } from 'framer-motion'
import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'
import { Heart, Sparkles, DollarSign, ArrowRight, Waves, Flame, Wifi } from 'lucide-react'

const values = [
  {
    icon: Heart,
    titleKey: 'about.value1_title',
    descKey: 'about.value1_desc',
    color: 'text-red-500',
    bg: 'bg-red-50',
  },
  {
    icon: Sparkles,
    titleKey: 'about.value2_title',
    descKey: 'about.value2_desc',
    color: 'text-primary',
    bg: 'bg-primary/5',
  },
  {
    icon: DollarSign,
    titleKey: 'about.value3_title',
    descKey: 'about.value3_desc',
    color: 'text-green-600',
    bg: 'bg-green-50',
  },
]

const features = [
  { icon: Waves, label: 'Крытый бассейн', sub: 'Тёплая вода' },
  { icon: Flame, label: 'Сауна и хаммам', sub: 'Финская сауна' },
  { icon: Wifi, label: 'Бесплатный WiFi', sub: 'Высокая скорость' },
]

export default function AboutPage() {
  const t = useTranslations()
  const locale = useLocale()

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-dark to-primary py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
            backgroundSize: '28px 28px',
          }}
        />
        <div className="relative z-10 container mx-auto px-4 max-w-7xl">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block bg-white/10 border border-white/20 text-white/90 text-sm px-4 py-2 rounded-full mb-6">
                Гостевой дом · Бишкек, Кыргызстан
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {t('about.title')}
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                {t('about.history')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {values.map((value, index) => (
              <motion.div
                key={value.titleKey}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-card text-center"
              >
                <div
                  className={`w-16 h-16 ${value.bg} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                >
                  <value.icon className={`w-8 h-8 ${value.color}`} />
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-3">{t(value.titleKey)}</h3>
                <p className="text-text-secondary leading-relaxed">{t(value.descKey)}</p>
              </motion.div>
            ))}
          </div>

          {/* Story section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-text-primary mb-6">
                Наша история
              </h2>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  Гостевой дом «Путник» был основан с одной простой идеей — создать место, где каждый
                  гость чувствует себя как дома. Мы верим, что путешествие должно быть комфортным,
                  а проживание — доступным.
                </p>
                <p>
                  Расположенный в Первомайском районе Бишкека, наш гостевой дом удобно добраться
                  из любой точки города. Мы предлагаем широкий выбор номеров для одиноких
                  путешественников, пар и семей.
                </p>
                <p>
                  Ключевое отличие «Путника» — это искренняя забота о каждом госте. Наш персонал
                  работает круглосуточно, чтобы ваше пребывание было максимально комфортным.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              {features.map(({ icon: Icon, label, sub }) => (
                <div key={label} className="bg-white rounded-2xl p-5 text-center shadow-card">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="font-semibold text-text-primary text-sm">{label}</p>
                  <p className="text-text-secondary text-xs mt-1">{sub}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 md:p-12 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Готовы к незабываемому отдыху?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              Забронируйте номер прямо сейчас и откройте для себя лучший гостевой дом Бишкека.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/booking`}
                className="inline-flex items-center gap-2 bg-white text-primary font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all hover:-translate-y-0.5 shadow-xl"
              >
                Забронировать номер
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href={`/${locale}/rooms`}
                className="inline-flex items-center gap-2 border-2 border-white/40 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-all"
              >
                Смотреть номера
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
