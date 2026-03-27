'use client'

import { useLocale } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'
import { Globe } from 'lucide-react'
import { cn } from '@/lib/utils/cn'

interface LanguageSwitcherProps {
  className?: string
  light?: boolean
}

export default function LanguageSwitcher({ className, light = false }: LanguageSwitcherProps) {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const switchLocale = (newLocale: string) => {
    // Replace the locale segment in the pathname
    const segments = pathname.split('/')
    segments[1] = newLocale
    router.push(segments.join('/'))
  }

  return (
    <div className={cn('flex items-center gap-1', className)}>
      <Globe className={cn('w-4 h-4', light ? 'text-white/70' : 'text-text-secondary')} />
      <button
        onClick={() => switchLocale('ru')}
        className={cn(
          'text-sm font-medium px-2 py-1 rounded-md transition-all',
          locale === 'ru'
            ? light
              ? 'text-white font-bold'
              : 'text-primary font-bold bg-primary/10'
            : light
            ? 'text-white/60 hover:text-white'
            : 'text-text-secondary hover:text-text-primary'
        )}
      >
        RU
      </button>
      <span className={cn('text-xs', light ? 'text-white/30' : 'text-border')}>|</span>
      <button
        onClick={() => switchLocale('en')}
        className={cn(
          'text-sm font-medium px-2 py-1 rounded-md transition-all',
          locale === 'en'
            ? light
              ? 'text-white font-bold'
              : 'text-primary font-bold bg-primary/10'
            : light
            ? 'text-white/60 hover:text-white'
            : 'text-text-secondary hover:text-text-primary'
        )}
      >
        EN
      </button>
    </div>
  )
}
