'use client'

import { motion } from 'framer-motion'
import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'
import { ArrowRight, Shield, RotateCcw, Clock, Wifi } from 'lucide-react'
import Button from '@/components/shared/Button'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
}

export default function HeroSection() {
  const t = useTranslations()
  const locale = useLocale()

  const badges = [
    { icon: Shield, label: t('hero.badge_no_prepay') },
    { icon: RotateCcw, label: t('hero.badge_free_cancel') },
    { icon: Clock, label: t('hero.badge_checkin') },
    { icon: Wifi, label: t('hero.badge_wifi') },
  ]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-accent" />

      {/* Decorative circles */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/3 blur-3xl" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative z-10 container mx-auto px-4 max-w-7xl py-32 md:py-40">
        <div className="max-w-3xl">

          {/* Title */}
          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6"
          >
            {t('hero.title')}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-xl"
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Link href={`/${locale}/booking`}>
              <Button variant="white" size="lg" className="font-bold w-full sm:w-auto">
                {t('hero.cta_book')}
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link href={`/${locale}/rooms`}>
              <Button
                variant="ghost"
                size="lg"
                className="text-white border-2 border-white/30 hover:bg-white/10 hover:border-white/50 w-full sm:w-auto"
              >
                {t('hero.cta_rooms')}
              </Button>
            </Link>
          </motion.div>

          {/* Badges */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-3"
          >
            {badges.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm px-3 py-2 rounded-xl"
              >
                <Icon className="w-4 h-4 text-accent-light" />
                <span>{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/50 text-xs uppercase tracking-widest">Прокрутите</span>
        <div className="w-0.5 h-8 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  )
}
