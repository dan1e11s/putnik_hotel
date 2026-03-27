'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { CalendarCheck, Shield, Clock, Phone } from 'lucide-react'
import BookingForm from '@/components/shared/BookingForm'
import { useSearchParams } from 'next/navigation'

export default function BookingPage() {
  const t = useTranslations()
  const searchParams = useSearchParams()
  const preselectedRoom = searchParams.get('room') || undefined
  const phone = process.env.NEXT_PUBLIC_PHONE || '+996 XXX XXX XXX'

  const benefits = [
    { icon: Shield, text: t('hero.badge_no_prepay') },
    { icon: Clock, text: '15 минут — время ответа' },
    { icon: Phone, text: 'Поддержка 24/7' },
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
              <CalendarCheck className="w-4 h-4" />
              Онлайн бронирование
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('booking.title')}
            </h1>
            <p className="text-xl text-white/80 max-w-xl mx-auto">
              {t('booking.subtitle')}
            </p>

            {/* Benefits */}
            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              {benefits.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-sm px-4 py-2 rounded-xl"
                >
                  <Icon className="w-4 h-4 text-accent-light" />
                  {text}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Form section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-card p-6 md:p-8"
          >
            <h2 className="text-2xl font-bold text-text-primary mb-2">Ваши данные</h2>
            <p className="text-text-secondary mb-8">{t('booking.subtitle')}</p>
            <BookingForm preselectedRoom={preselectedRoom} />
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 bg-primary/5 border border-primary/10 rounded-2xl p-6 text-center"
          >
            <p className="text-text-secondary mb-2">Предпочитаете позвонить?</p>
            <a
              href={`tel:${phone}`}
              className="text-2xl font-bold text-primary hover:text-primary-dark transition-colors"
            >
              {phone}
            </a>
            <p className="text-sm text-text-secondary mt-2">Работаем круглосуточно, 7 дней в неделю</p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
