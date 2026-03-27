'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Phone, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import LanguageSwitcher from './LanguageSwitcher'

interface NavItem {
  href: string
  label: string
}

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  navItems: NavItem[]
}

export default function MobileMenu({ isOpen, onClose, navItems }: MobileMenuProps) {
  const locale = useLocale()
  const t = useTranslations()
  const phone = process.env.NEXT_PUBLIC_PHONE || '+996 XXX XXX XXX'
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '996XXXXXXXXX'

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-80 max-w-full bg-white shadow-2xl flex flex-col lg:hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-border">
              <div>
                <span className="text-xl font-bold text-primary">Путник</span>
                <span className="block text-xs text-text-secondary">Гостевой дом · Бишкек</span>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-xl flex items-center justify-center text-text-secondary hover:bg-gray-100 hover:text-text-primary transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Nav */}
            <nav className="flex-1 overflow-y-auto px-4 py-6">
              <ul className="space-y-1">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl text-text-primary font-medium hover:bg-primary/5 hover:text-primary transition-all"
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* Footer */}
            <div className="px-6 py-5 border-t border-border space-y-4">
              {/* Language */}
              <LanguageSwitcher />

              {/* Book button */}
              <Link
                href={`/${locale}/booking`}
                onClick={onClose}
                className="block w-full bg-primary text-white text-center font-semibold py-3 px-6 rounded-xl hover:bg-primary-dark transition-colors"
              >
                {t('nav.book')}
              </Link>

              {/* Contact links */}
              <div className="flex gap-3">
                <a
                  href={`tel:${phone}`}
                  className="flex-1 flex items-center justify-center gap-2 border border-border text-text-secondary hover:text-primary hover:border-primary rounded-xl py-2.5 text-sm font-medium transition-all"
                >
                  <Phone className="w-4 h-4" />
                  Позвонить
                </a>
                <a
                  href={`https://wa.me/${whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white rounded-xl py-2.5 text-sm font-medium transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
