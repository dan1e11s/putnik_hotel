'use client'

import { MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils/cn'

interface WhatsAppButtonProps {
  phoneNumber?: string
  message?: string
  label?: string
  className?: string
  variant?: 'floating' | 'inline'
  size?: 'sm' | 'md' | 'lg'
}

export default function WhatsAppButton({
  phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '996XXXXXXXXX',
  message = 'Здравствуйте! Хочу забронировать номер.',
  label,
  className,
  variant = 'floating',
  size = 'md',
}: WhatsAppButtonProps) {
  const href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  if (variant === 'floating') {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={cn(
          'fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-xl transition-colors',
          size === 'sm' && 'p-3',
          size === 'md' && 'p-4',
          size === 'lg' && 'px-5 py-4',
          className
        )}
        aria-label="WhatsApp"
      >
        <MessageCircle className={cn('fill-current', size === 'sm' ? 'w-5 h-5' : 'w-6 h-6')} />
        {label && size === 'lg' && (
          <span className="font-semibold text-sm whitespace-nowrap">{label}</span>
        )}
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-30" />
      </motion.a>
    )
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-md hover:shadow-lg',
        size === 'sm' && 'text-sm px-4 py-2',
        size === 'md' && 'text-base px-6 py-3',
        size === 'lg' && 'text-lg px-8 py-4',
        className
      )}
    >
      <MessageCircle className="w-5 h-5 fill-current" />
      {label || 'WhatsApp'}
    </a>
  )
}
