import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/shared/WhatsAppButton'
import ScrollToTop from '@/components/shared/ScrollToTop'
import '@/app/globals.css'

const locales = ['ru', 'en']

export const metadata: Metadata = {
  title: {
    template: '%s | Путник — Гостиница Бишкек',
    default: 'Путник — Уютная гостиница в Бишкеке',
  },
  description:
    'Гостевой дом «Путник» в Бишкеке. Номера от 2000 сом. Бассейн, сауна, бильярд. Работаем 24/7. Заезд без предоплаты. Бронируйте онлайн!',
  keywords: [
    'гостиница Бишкек',
    'гостевой дом Бишкек',
    'номера Бишкек',
    'путник гостиница',
    'hotel Bishkek',
    'бассейн сауна Бишкек',
  ],
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    alternateLocale: 'en_US',
    title: 'Путник — Уютная гостиница в Бишкеке',
    description: 'Гостевой дом «Путник». Номера от 2000 сом. Бассейн, сауна, бильярд.',
    siteName: 'Путник',
  },
}

interface LocaleLayoutProps {
  children: React.ReactNode
  params: { locale: string }
}

export default async function LocaleLayout({ children, params: { locale } }: LocaleLayoutProps) {
  if (!locales.includes(locale)) notFound()

  const messages = await getMessages()

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-inter bg-background text-text-primary antialiased">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <WhatsAppButton variant="floating" />
          <ScrollToTop />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
