'use client'

import { motion } from 'framer-motion'
import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import WhatsAppButton from '@/components/shared/WhatsAppButton'

export default function BookingCTA() {
  const t = useTranslations()
  const locale = useLocale()
  const phone = process.env.NEXT_PUBLIC_PHONE || '+996 XXX XXX XXX'

  return (
    <section className="py-20 bg-gradient-to-br from-primary-dark via-primary to-accent relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/5 blur-2xl" />
      <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-white/5 blur-2xl" />
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative z-10 container mx-auto px-4 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-white/10 border border-white/20 text-white/90 text-sm font-medium px-4 py-2 rounded-full mb-6">
            Бронирование онлайн · Ответим за 15 минут
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('booking.title')}
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-xl mx-auto">
            {t('booking.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={`/${locale}/booking`}
              className="inline-flex items-center gap-2 bg-white text-primary font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all hover:-translate-y-0.5 shadow-xl text-lg"
            >
              {t('hero.cta_book')}
              <ArrowRight className="w-5 h-5" />
            </Link>

            <WhatsAppButton
              label={t('booking.whatsapp')}
              variant="inline"
              size="lg"
            />
          </div>

          <div className="mt-10 flex items-center justify-center gap-2 text-white/70">
            <Phone className="w-4 h-4" />
            <span className="text-sm">
              Или позвоните: {' '}
              <a href={`tel:${phone}`} className="text-white font-semibold hover:underline">
                {phone}
              </a>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
