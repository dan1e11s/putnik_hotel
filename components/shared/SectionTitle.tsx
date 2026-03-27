'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils/cn'

interface SectionTitleProps {
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
  light?: boolean
}

export default function SectionTitle({
  title,
  subtitle,
  centered = true,
  className,
  light = false,
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn(centered ? 'text-center' : 'text-left', className)}
    >
      <h2
        className={cn(
          'text-3xl md:text-4xl font-bold mb-4',
          light ? 'text-white' : 'text-text-primary'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'text-lg max-w-2xl',
            centered && 'mx-auto',
            light ? 'text-white/80' : 'text-text-secondary'
          )}
        >
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          'mt-4 h-1 w-16 rounded-full bg-accent',
          centered && 'mx-auto'
        )}
      />
    </motion.div>
  )
}
