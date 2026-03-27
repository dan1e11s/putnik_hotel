'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import {
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  ChevronDown,
  ChevronUp,
  ParkingCircle,
  Navigation,
  ExternalLink,
} from 'lucide-react'

const faqKeys = [
  { q: 'contacts.faq1_q', a: 'contacts.faq1_a' },
  { q: 'contacts.faq2_q', a: 'contacts.faq2_a' },
  { q: 'contacts.faq3_q', a: 'contacts.faq3_a' },
  { q: 'contacts.faq4_q', a: 'contacts.faq4_a' },
  { q: 'contacts.faq5_q', a: 'contacts.faq5_a' },
]

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-medium text-text-primary">{question}</span>
        {open ? (
          <ChevronUp className="w-5 h-5 text-text-secondary flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-text-secondary flex-shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-5 pb-4 text-text-secondary border-t border-border bg-gray-50">
          <p className="pt-3">{answer}</p>
        </div>
      )}
    </div>
  )
}

export default function ContactsPage() {
  const t = useTranslations()
  const phone = process.env.NEXT_PUBLIC_PHONE || '+996 XXX XXX XXX'
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '996XXXXXXXXX'
  const mapsUrl =
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_URL ||
    'https://maps.google.com/?q=Бишкек+Худайбергенова+81Б'

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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('contacts.title')}
            </h1>
            <p className="text-xl text-white/80">Мы всегда рады помочь вам</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact cards */}
            <div className="lg:col-span-1 space-y-4">
              {/* Phone */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-card"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-text-primary mb-2">Телефон</h3>
                <a
                  href={`tel:${phone}`}
                  className="text-primary font-semibold text-lg hover:text-primary-dark transition-colors"
                >
                  {phone}
                </a>
                <p className="text-text-secondary text-sm mt-1">Звоните 24/7</p>
              </motion.div>

              {/* WhatsApp */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl p-6 shadow-card"
              >
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-bold text-text-primary mb-2">WhatsApp</h3>
                <a
                  href={`https://wa.me/${whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-medium px-4 py-2 rounded-xl transition-colors text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  Написать
                </a>
              </motion.div>

              {/* Address */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-2xl p-6 shadow-card"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-bold text-text-primary mb-2">Адрес</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {t('map.address')}
                </p>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-primary text-sm font-medium mt-3 hover:underline"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  Маршрут
                  <ExternalLink className="w-3 h-3" />
                </a>
              </motion.div>

              {/* Hours */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-2xl p-6 shadow-card"
              >
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-bold text-text-primary mb-2">Режим работы</h3>
                <p className="text-green-600 font-semibold">{t('footer.hours_value')}</p>
              </motion.div>
            </div>

            {/* Map + FAQ */}
            <div className="lg:col-span-2 space-y-8">
              {/* Map */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl shadow-card overflow-hidden"
              >
                <div className="relative h-64 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mx-auto mb-3 shadow-button animate-bounce">
                      <MapPin className="w-7 h-7 text-white" />
                    </div>
                    <p className="text-primary font-bold">Гостиница «Путник»</p>
                    <p className="text-text-secondary text-sm mt-1">{t('map.address')}</p>
                  </div>
                  <div
                    className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{
                      backgroundImage: `linear-gradient(#2B4EAD 1px, transparent 1px), linear-gradient(90deg, #2B4EAD 1px, transparent 1px)`,
                      backgroundSize: '40px 40px',
                    }}
                  />
                </div>

                <div className="p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-text-primary">{t('contacts.how_to_find')}</h3>
                    <p className="text-text-secondary text-sm mt-1">{t('contacts.directions')}</p>
                  </div>
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 inline-flex items-center gap-2 bg-primary text-white font-medium px-5 py-2.5 rounded-xl hover:bg-primary-dark transition-all text-sm"
                  >
                    <Navigation className="w-4 h-4" />
                    Открыть карту
                  </a>
                </div>
              </motion.div>

              {/* Parking info */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-2xl p-6 shadow-card"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <ParkingCircle className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-text-primary mb-1">{t('contacts.parking_info')}</h3>
                    <p className="text-text-secondary text-sm">{t('contacts.parking_desc')}</p>
                  </div>
                </div>
              </motion.div>

              {/* FAQ */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-2xl p-6 shadow-card"
              >
                <h2 className="text-xl font-bold text-text-primary mb-5">
                  {t('contacts.faq_title')}
                </h2>
                <div className="space-y-3">
                  {faqKeys.map(({ q, a }) => (
                    <FaqItem key={q} question={t(q)} answer={t(a)} />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
