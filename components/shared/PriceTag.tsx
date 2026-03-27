import { cn } from '@/lib/utils/cn'

interface PriceTagProps {
  price: number
  period?: string
  currency?: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
  prefix?: string
}

export default function PriceTag({
  price,
  period,
  currency = 'сом',
  size = 'md',
  className,
  prefix,
}: PriceTagProps) {
  const sizes = {
    sm: { price: 'text-xl font-bold', period: 'text-xs', prefix: 'text-sm' },
    md: { price: 'text-2xl font-bold', period: 'text-sm', prefix: 'text-base' },
    lg: { price: 'text-3xl font-bold', period: 'text-base', prefix: 'text-lg' },
  }

  return (
    <div className={cn('flex items-baseline gap-1', className)}>
      {prefix && (
        <span className={cn('text-text-secondary', sizes[size].prefix)}>{prefix}</span>
      )}
      <span className={cn('text-primary', sizes[size].price)}>
        {price.toLocaleString('ru-RU')}
      </span>
      <span className={cn('text-text-secondary font-normal', sizes[size].period)}>
        {currency}
        {period && ` ${period}`}
      </span>
    </div>
  )
}
