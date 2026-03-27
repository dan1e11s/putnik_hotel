export function formatPrice(price: number, currency = 'сом'): string {
  return `${price.toLocaleString('ru-RU')} ${currency}`
}

export function formatPriceEn(price: number, currency = 'som'): string {
  return `${price.toLocaleString('en-US')} ${currency}`
}
