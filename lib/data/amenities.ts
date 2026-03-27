export interface Amenity {
  id: string
  icon: string
  titleKey: string
  descKey: string
  color: string
  bgColor: string
}

export const amenities: Amenity[] = [
  {
    id: 'pool',
    icon: 'Waves',
    titleKey: 'amenities.pool_title',
    descKey: 'amenities.pool_desc',
    color: 'text-accent',
    bgColor: 'bg-accent/10',
  },
  {
    id: 'sauna',
    icon: 'Flame',
    titleKey: 'amenities.sauna_title',
    descKey: 'amenities.sauna_desc',
    color: 'text-orange-500',
    bgColor: 'bg-orange-50',
  },
  {
    id: 'billiards',
    icon: 'Circle',
    titleKey: 'amenities.billiards_title',
    descKey: 'amenities.billiards_desc',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
  {
    id: 'wifi',
    icon: 'Wifi',
    titleKey: 'amenities.wifi_title',
    descKey: 'amenities.wifi_desc',
    color: 'text-primary',
    bgColor: 'bg-primary/10',
  },
  {
    id: 'parking',
    icon: 'ParkingCircle',
    titleKey: 'amenities.parking_title',
    descKey: 'amenities.parking_desc',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    id: 'checkin',
    icon: 'Clock',
    titleKey: 'amenities.checkin_title',
    descKey: 'amenities.checkin_desc',
    color: 'text-primary-dark',
    bgColor: 'bg-primary/10',
  },
]
