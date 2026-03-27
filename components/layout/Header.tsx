'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import { Menu, Phone } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils/cn'
import LanguageSwitcher from './LanguageSwitcher'
import MobileMenu from './MobileMenu'

export default function Header() {
  const locale = useLocale()
  const t = useTranslations('nav')
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const phone = process.env.NEXT_PUBLIC_PHONE || '+996 XXX XXX XXX'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = [
    { href: `/${locale}`, label: t('home') },
    { href: `/${locale}/rooms`, label: t('rooms') },
    { href: `/${locale}/gallery`, label: t('gallery') },
    { href: `/${locale}/about`, label: t('about') },
    { href: `/${locale}/reviews`, label: t('reviews') },
    { href: `/${locale}/contacts`, label: t('contacts') },
  ]

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={cn(
          'fixed top-0 left-0 right-0 z-30 transition-all duration-300',
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-soft border-b border-border'
            : 'bg-white/80 backdrop-blur-sm'
        )}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href={`/${locale}`} className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-brand flex items-center justify-center shadow-button group-hover:scale-105 transition-transform">
                <span className="text-white font-bold text-base">П</span>
              </div>
              <div>
                <span className="text-xl font-bold text-primary block leading-tight">Путник</span>
                <span className="text-[10px] text-text-secondary uppercase tracking-wider leading-none">
                  Гостевой дом
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-text-secondary hover:text-primary hover:bg-primary/5 rounded-lg transition-all"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Right side */}
            <div className="hidden lg:flex items-center gap-4">
              <LanguageSwitcher />

              <a
                href={`tel:${phone}`}
                className="flex items-center gap-2 text-sm text-text-secondary hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="font-medium">{phone}</span>
              </a>

              <Link
                href={`/${locale}/booking`}
                className="bg-primary text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-primary-dark transition-all hover:-translate-y-0.5 shadow-button hover:shadow-card-hover"
              >
                {t('book')}
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl text-text-secondary hover:bg-gray-100 hover:text-text-primary transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.header>

      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        navItems={navItems}
      />
    </>
  )
}
