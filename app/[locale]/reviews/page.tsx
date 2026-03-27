'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Star, ExternalLink } from 'lucide-react'
import { reviews, getAverageRating } from '@/lib/data/reviews'
import ReviewCard from '@/components/shared/ReviewCard'

export default function ReviewsPage() {
  const t = useTranslations()
  const avgRating = getAverageRating()

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
              {t('reviews.title')}
            </h1>
            <p className="text-xl text-white/80 mb-8">{t('reviews.subtitle')}</p>

            {/* Rating summary */}
            <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-4">
              <div className="text-5xl font-bold text-white">{avgRating}</div>
              <div className="text-left">
                <div className="flex gap-1 mb-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(avgRating)
                          ? 'fill-amber-400 text-amber-400'
                          : 'fill-white/20 text-white/20'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-white/80 text-sm">
                  {reviews.length} {t('reviews.total_reviews')} · {t('reviews.source')}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {reviews.map((review, index) => (
              <ReviewCard
                key={review.id}
                review={review}
                index={index}
                sourceLabel={t('reviews.source')}
              />
            ))}
          </div>

          {/* 2GIS link */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex flex-col items-center gap-4 bg-white rounded-2xl shadow-card px-8 py-6">
              <p className="text-text-secondary">Читайте больше отзывов на</p>
              <a
                href="https://2gis.kg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-xl hover:bg-primary-dark transition-all hover:-translate-y-0.5"
              >
                <ExternalLink className="w-4 h-4" />
                {t('reviews.view_all')} на 2ГИС
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
