'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useTranslations } from 'next-intl'
import { CheckCircle2, User, Phone, Calendar, Users, MessageSquare } from 'lucide-react'
import Button from './Button'
import WhatsAppButton from './WhatsAppButton'
import { cn } from '@/lib/utils/cn'

const createSchema = (t: (key: string) => string) =>
  z.object({
    name: z.string().min(2, t('errors.name_required')),
    phone: z
      .string()
      .min(9, t('errors.phone_required'))
      .regex(/^[+\d\s\-()]+$/, t('errors.phone_invalid')),
    roomType: z.string().optional(),
    checkin: z.string().min(1, t('errors.checkin_required')),
    checkout: z.string().min(1, t('errors.checkout_required')),
    guests: z.string().optional(),
    comment: z.string().optional(),
    privacy: z.boolean().refine((val) => val === true, t('errors.privacy_required')),
  })

type FormData = {
  name: string
  phone: string
  roomType?: string
  checkin: string
  checkout: string
  guests?: string
  comment?: string
  privacy: boolean
}

interface BookingFormProps {
  preselectedRoom?: string
  compact?: boolean
}

const inputClass =
  'w-full rounded-xl border border-border bg-white px-4 py-3 text-text-primary placeholder:text-text-secondary/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-sm'

const labelClass = 'block text-sm font-medium text-text-primary mb-1.5'

export default function BookingForm({ preselectedRoom, compact = false }: BookingFormProps) {
  const t = useTranslations()
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const schema = createSchema(t)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      roomType: preselectedRoom || '',
      guests: '2',
    },
  })

  const onSubmit = async (data: FormData) => {
    setLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1200))
    console.log('Booking form data:', data)
    setLoading(false)
    setSubmitted(true)
  }

  const today = new Date().toISOString().split('T')[0]

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-text-primary mb-3">{t('booking.success_title')}</h3>
        <p className="text-text-secondary max-w-sm mx-auto">{t('booking.success_msg')}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Name + Phone */}
      <div className={cn('grid gap-4', compact ? 'grid-cols-1' : 'sm:grid-cols-2')}>
        <div>
          <label className={labelClass}>
            {t('booking.name')} <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary" />
            <input
              {...register('name')}
              type="text"
              placeholder="Иван Иванов"
              className={cn(inputClass, 'pl-10', errors.name && 'border-red-400 focus:ring-red-300')}
            />
          </div>
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className={labelClass}>
            {t('booking.phone')} <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary" />
            <input
              {...register('phone')}
              type="tel"
              placeholder="+996 XXX XXX XXX"
              className={cn(inputClass, 'pl-10', errors.phone && 'border-red-400 focus:ring-red-300')}
            />
          </div>
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
          )}
        </div>
      </div>

      {/* Room type + Guests */}
      <div className={cn('grid gap-4', compact ? 'grid-cols-1' : 'sm:grid-cols-2')}>
        <div>
          <label className={labelClass}>{t('booking.room_type')}</label>
          <select {...register('roomType')} className={inputClass}>
            <option value="">{t('booking.standard')}</option>
            <option value="standard">{t('booking.standard')}</option>
            <option value="twin">{t('booking.twin')}</option>
            <option value="lux">{t('booking.lux')}</option>
          </select>
        </div>

        <div>
          <label className={labelClass}>
            <span className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              {t('booking.guests')}
            </span>
          </label>
          <select {...register('guests')} className={inputClass}>
            <option value="1">{t('booking.guest_1')}</option>
            <option value="2">{t('booking.guest_2')}</option>
            <option value="3">{t('booking.guest_3')}</option>
          </select>
        </div>
      </div>

      {/* Check-in + Check-out */}
      <div className={cn('grid gap-4', compact ? 'grid-cols-1' : 'sm:grid-cols-2')}>
        <div>
          <label className={labelClass}>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {t('booking.checkin')} <span className="text-red-500">*</span>
            </span>
          </label>
          <input
            {...register('checkin')}
            type="date"
            min={today}
            className={cn(inputClass, errors.checkin && 'border-red-400 focus:ring-red-300')}
          />
          {errors.checkin && (
            <p className="text-red-500 text-xs mt-1">{errors.checkin.message}</p>
          )}
        </div>

        <div>
          <label className={labelClass}>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {t('booking.checkout')} <span className="text-red-500">*</span>
            </span>
          </label>
          <input
            {...register('checkout')}
            type="date"
            min={today}
            className={cn(inputClass, errors.checkout && 'border-red-400 focus:ring-red-300')}
          />
          {errors.checkout && (
            <p className="text-red-500 text-xs mt-1">{errors.checkout.message}</p>
          )}
        </div>
      </div>

      {/* Comment */}
      {!compact && (
        <div>
          <label className={labelClass}>
            <span className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              {t('booking.comment')}
            </span>
          </label>
          <textarea
            {...register('comment')}
            rows={3}
            placeholder={t('booking.comment_placeholder')}
            className={cn(inputClass, 'resize-none')}
          />
        </div>
      )}

      {/* Privacy */}
      <div className="flex items-start gap-3">
        <input
          {...register('privacy')}
          type="checkbox"
          id="privacy"
          className="mt-0.5 w-4 h-4 rounded border-border text-primary focus:ring-primary"
        />
        <label htmlFor="privacy" className="text-sm text-text-secondary cursor-pointer">
          {t('booking.privacy')}
        </label>
      </div>
      {errors.privacy && (
        <p className="text-red-500 text-xs -mt-2">{errors.privacy.message}</p>
      )}

      {/* Submit */}
      <div className="flex flex-col sm:flex-row gap-3 pt-2">
        <Button type="submit" variant="primary" size="lg" loading={loading} fullWidth>
          {t('booking.submit')}
        </Button>
        <div className="flex items-center gap-3">
          <span className="text-text-secondary text-sm hidden sm:block">{t('booking.or')}</span>
          <WhatsAppButton
            label={t('booking.whatsapp')}
            variant="inline"
            size="lg"
            className="flex-1 sm:flex-none justify-center"
          />
        </div>
      </div>
    </form>
  )
}
