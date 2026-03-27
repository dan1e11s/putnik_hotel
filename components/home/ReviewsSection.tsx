'use client'

import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'
import { Star, ArrowRight } from 'lucide-react'
import { getFeaturedReviews, getAverageRating } from '@/lib/data/reviews'
import ReviewCard from '@/components/shared/ReviewCard'
import SectionTitle from '@/components/shared/SectionTitle'

export default function ReviewsSection() {
  const t = useTranslations()
  const locale = useLocale()
  const reviews = getFeaturedReviews(4)
  const avgRating = getAverageRating()

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header with rating */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
          <SectionTitle
            title={t('reviews.title')}
            subtitle={t('reviews.subtitle')}
            centered={false}
            className="mb-0"
          />

          {/* Rating summary */}
          <div className="flex-shrink-0 bg-background rounded-2xl p-5 text-center min-w-[160px]">
            <div className="flex items-center justify-center gap-1 mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(avgRating)
                      ? 'fill-amber-400 text-amber-400'
                      : 'fill-gray-200 text-gray-200'
                  }`}
                />
              ))}
            </div>
            <div className="text-4xl font-bold text-text-primary">{avgRating}</div>
            <div className="text-text-secondary text-sm mt-1">
              {reviews.length} {t('reviews.total_reviews')}
            </div>
            <div className="text-xs text-text-secondary mt-1">{t('reviews.source')}</div>
          </div>
        </div>

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

        <div className="text-center">
          <Link
            href={`/${locale}/reviews`}
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            {t('reviews.view_all')}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
