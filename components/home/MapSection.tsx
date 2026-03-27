'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { MapPin, Clock, Navigation, Phone, ExternalLink } from 'lucide-react'

export default function MapSection() {
  const t = useTranslations()
  const phone = process.env.NEXT_PUBLIC_PHONE || '+996 XXX XXX XXX'
  const mapsUrl =
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_URL ||
    'https://maps.google.com/?q=Бишкек+Худайбергенова+81Б'

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-2 rounded-full mb-6">
              <Navigation className="w-4 h-4" />
              {t('map.title')}
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
              {t('map.title')}
            </h2>

            <div className="space-y-5 mb-8">
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-border">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-primary mb-1">Адрес</p>
                  <p className="text-text-secondary text-sm">{t('map.address')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-border">
                <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-primary mb-1">Время работы</p>
                  <p className="text-text-secondary text-sm">{t('map.hours')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-border">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-primary mb-1">Телефон</p>
                  <a href={`tel:${phone}`} className="text-primary font-medium text-sm hover:underline">
                    {phone}
                  </a>
                </div>
              </div>
            </div>

            <p className="text-text-secondary text-sm mb-6">{t('map.landmarks')}</p>

            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-xl hover:bg-primary-dark transition-all hover:-translate-y-0.5 shadow-button"
            >
              <Navigation className="w-4 h-4" />
              Открыть в Google Maps
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Map placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 border border-border aspect-[4/3]">
              {/* Fake map UI */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-4 shadow-button animate-bounce">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-primary font-bold text-lg">Гостиница «Путник»</p>
                  <p className="text-text-secondary text-sm mt-1">ул. Худайбергенова, 81Б</p>
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-primary text-sm font-medium hover:underline"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Открыть карту
                  </a>
                </div>
              </div>

              {/* Grid lines decoration */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `linear-gradient(#2B4EAD 1px, transparent 1px), linear-gradient(90deg, #2B4EAD 1px, transparent 1px)`,
                  backgroundSize: '40px 40px',
                }}
              />
            </div>

            {/* Badge */}
            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-card p-4 border border-border">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-text-secondary">Работаем</p>
                  <p className="text-sm font-bold text-text-primary">24/7</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
