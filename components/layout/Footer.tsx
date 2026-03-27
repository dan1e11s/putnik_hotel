import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import { Phone, MapPin, Clock, MessageCircle } from 'lucide-react'

export default function Footer() {
  const locale = useLocale()
  const t = useTranslations()
  const phone = process.env.NEXT_PUBLIC_PHONE || '+996 XXX XXX XXX'
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '996XXXXXXXXX'

  const navLinks = [
    { href: `/${locale}`, label: t('nav.home') },
    { href: `/${locale}/rooms`, label: t('nav.rooms') },
    { href: `/${locale}/gallery`, label: t('nav.gallery') },
    { href: `/${locale}/about`, label: t('nav.about') },
    { href: `/${locale}/reviews`, label: t('nav.reviews') },
    { href: `/${locale}/contacts`, label: t('nav.contacts') },
    { href: `/${locale}/booking`, label: t('nav.book') },
  ]

  return (
    <footer className="bg-primary-dark text-white">
      {/* Main footer */}
      <div className="container mx-auto px-4 max-w-7xl py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <span className="text-white font-bold text-lg">П</span>
              </div>
              <div>
                <span className="text-xl font-bold block">Путник</span>
                <span className="text-white/60 text-xs uppercase tracking-wider">Гостевой дом</span>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-5">
              {t('footer.description')}
            </p>
            <a
              href={`https://wa.me/${whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-medium px-4 py-2.5 rounded-xl transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-4">
              {t('footer.nav_title')}
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white text-sm transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-4">
              {t('footer.contacts_title')}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-white/70 text-sm">
                  ул. Худайбергенова, 81Б,<br />
                  Первомайский р-н, Бишкек, 720044
                </span>
              </li>
              <li>
                <a
                  href={`tel:${phone}`}
                  className="flex items-center gap-3 text-white/70 hover:text-white text-sm transition-colors"
                >
                  <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                  {phone}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/70 hover:text-white text-sm transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Working hours */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-4">
              {t('footer.hours_title')}
            </h3>
            <div className="flex items-start gap-3">
              <Clock className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
              <p className="text-white/70 text-sm">{t('footer.hours_value')}</p>
            </div>
            <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
              <p className="text-white/90 text-sm font-medium mb-1">Нужна помощь?</p>
              <p className="text-white/60 text-xs">Звоните или пишите — мы всегда на связи.</p>
              <a
                href={`tel:${phone}`}
                className="mt-3 block text-accent font-semibold text-sm hover:text-accent-light transition-colors"
              >
                {phone}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 max-w-7xl py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/50 text-sm">{t('footer.copyright')}</p>
          <div className="flex items-center gap-4">
            <Link
              href={`/${locale}/privacy`}
              className="text-white/50 hover:text-white/70 text-sm transition-colors"
            >
              {t('footer.privacy')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
