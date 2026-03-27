'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { Review } from '@/lib/data/reviews'
import { useLocale } from 'next-intl'
import { cn } from '@/lib/utils/cn'

interface ReviewCardProps {
  review: Review
  index?: number
  sourceLabel?: string
}

export default function ReviewCard({
  review,
  index = 0,
  sourceLabel,
}: ReviewCardProps) {
  const locale = useLocale()
  const text = locale === 'ru' ? review.text : review.textEn

  const formattedDate = new Date(review.date).toLocaleDateString(
    locale === 'ru' ? 'ru-RU' : 'en-US',
    { year: 'numeric', month: 'long' }
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-surface rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col"
    >
      {/* Quote icon */}
      <div className="mb-4">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Quote className="w-5 h-5 text-primary" />
        </div>
      </div>

      {/* Stars */}
      <div className="flex gap-0.5 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              'w-4 h-4',
              i < review.rating
                ? 'fill-amber-400 text-amber-400'
                : 'fill-gray-200 text-gray-200'
            )}
          />
        ))}
      </div>

      {/* Text */}
      <p className="text-text-secondary text-sm leading-relaxed flex-1 mb-4">
        {text}
      </p>

      {/* Author */}
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-sm font-bold">
            {review.name.charAt(0)}
          </div>
          <div>
            <p className="text-text-primary font-semibold text-sm">{review.name}</p>
            <p className="text-text-secondary text-xs">{formattedDate}</p>
          </div>
        </div>
        <span className="text-xs text-text-secondary bg-gray-100 px-2 py-1 rounded-md">
          {sourceLabel || review.source}
        </span>
      </div>
    </motion.div>
  )
}
