import { Metadata } from 'next'
import HeroSection from '@/components/home/HeroSection'
import StatsSection from '@/components/home/StatsSection'
import RoomsPreview from '@/components/home/RoomsPreview'
import AmenitiesSection from '@/components/home/AmenitiesSection'
import PricingSection from '@/components/home/PricingSection'
import ReviewsSection from '@/components/home/ReviewsSection'
import BookingCTA from '@/components/home/BookingCTA'
import MapSection from '@/components/home/MapSection'

export const metadata: Metadata = {
  title: 'Главная',
  description:
    'Путник — уютная гостиница в Бишкеке. Номера от 2000 сом/ночь. Бассейн, сауна, бильярд. Без предоплаты. Работаем 24/7.',
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <RoomsPreview />
      <AmenitiesSection />
      <PricingSection />
      <ReviewsSection />
      <BookingCTA />
      <MapSection />
    </>
  )
}
