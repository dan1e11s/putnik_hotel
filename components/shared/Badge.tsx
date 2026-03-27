import { cn } from '@/lib/utils/cn'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'primary' | 'accent' | 'success' | 'warning' | 'gray'
  size?: 'sm' | 'md'
  className?: string
}

export default function Badge({
  children,
  variant = 'primary',
  size = 'md',
  className,
}: BadgeProps) {
  const variants = {
    primary: 'bg-primary/10 text-primary border border-primary/20',
    accent: 'bg-accent/10 text-accent border border-accent/20',
    success: 'bg-green-50 text-green-700 border border-green-200',
    warning: 'bg-amber-50 text-amber-700 border border-amber-200',
    gray: 'bg-gray-100 text-gray-600 border border-gray-200',
  }

  const sizes = {
    sm: 'text-xs px-2 py-0.5 rounded-md',
    md: 'text-sm px-3 py-1 rounded-lg',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center font-medium',
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </span>
  )
}
