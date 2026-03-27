export interface Room {
  id: string
  slug: string
  name: string
  nameEn: string
  description: string
  descriptionEn: string
  price: number
  priceHourly: number
  size: number
  maxGuests: number
  minGuests: number
  badges: string[]
  badgesEn: string[]
  amenities: string[]
  amenitiesEn: string[]
  images: string[]
  featured: boolean
}

export const rooms: Room[] = [
  {
    id: '1',
    slug: 'standard',
    name: 'Стандартный двухместный',
    nameEn: 'Standard Double',
    description:
      'Уютный номер с двуспальной кроватью, оснащён всем необходимым для комфортного проживания. Идеален для пар и одиноких путешественников.',
    descriptionEn:
      'Cozy room with a double bed, equipped with everything necessary for comfortable accommodation. Ideal for couples and solo travelers.',
    price: 2000,
    priceHourly: 1000,
    size: 18,
    maxGuests: 2,
    minGuests: 1,
    badges: ['Популярный', 'Почасовой'],
    badgesEn: ['Popular', 'Hourly'],
    amenities: [
      'Двуспальная кровать',
      'Кондиционер',
      'Телевизор',
      'Холодильник',
      'Собственный санузел',
      'WiFi',
      'Полотенца',
    ],
    amenitiesEn: [
      'Double bed',
      'Air conditioning',
      'TV',
      'Refrigerator',
      'Private bathroom',
      'WiFi',
      'Towels',
    ],
    images: [
      '/images/rooms/standard-room.jpg',
      '/images/rooms/standard-room-2.jpg',
      '/images/rooms/standard-bathroom.jpg',
    ],
    featured: true,
  },
  {
    id: '2',
    slug: 'twin',
    name: 'Стандартный Twin',
    nameEn: 'Standard Twin',
    description:
      'Номер с двумя раздельными кроватями — отличный выбор для двух друзей или коллег. Просторный и светлый.',
    descriptionEn:
      'Room with two separate beds — an excellent choice for two friends or colleagues. Spacious and bright.',
    price: 2500,
    priceHourly: 1200,
    size: 18,
    maxGuests: 2,
    minGuests: 2,
    badges: ['Для двоих'],
    badgesEn: ['For Two'],
    amenities: [
      'Две односпальные кровати',
      'Кондиционер',
      'Телевизор',
      'Холодильник',
      'Собственный санузел',
      'WiFi',
      'Полотенца',
    ],
    amenitiesEn: [
      'Two single beds',
      'Air conditioning',
      'TV',
      'Refrigerator',
      'Private bathroom',
      'WiFi',
      'Towels',
    ],
    images: [
      '/images/rooms/twin-room.jpg',
      '/images/rooms/twin-room-2.jpg',
      '/images/rooms/twin-bathroom.jpg',
    ],
    featured: true,
  },
  {
    id: '3',
    slug: 'lux',
    name: 'Номер Люкс',
    nameEn: 'Deluxe Room',
    description:
      'Просторный номер люкс с улучшенным интерьером, большой кроватью и всеми удобствами для максимального комфорта. Для тех, кто ценит роскошь.',
    descriptionEn:
      'Spacious deluxe room with upgraded interior, large bed and all amenities for maximum comfort. For those who appreciate luxury.',
    price: 3800,
    priceHourly: 1800,
    size: 28,
    maxGuests: 3,
    minGuests: 1,
    badges: ['Люкс', 'Лучший выбор'],
    badgesEn: ['Deluxe', 'Best Choice'],
    amenities: [
      'Кровать King Size',
      'Кондиционер',
      'Smart TV',
      'Мини-бар',
      'Собственный санузел',
      'Ванна',
      'WiFi',
      'Халат и тапочки',
      'Полотенца',
      'Сейф',
    ],
    amenitiesEn: [
      'King Size bed',
      'Air conditioning',
      'Smart TV',
      'Mini bar',
      'Private bathroom',
      'Bathtub',
      'WiFi',
      'Robe and slippers',
      'Towels',
      'Safe',
    ],
    images: [
      '/images/rooms/lux-room.jpg',
      '/images/rooms/lux-room-2.jpg',
      '/images/rooms/lux-bathroom.jpg',
    ],
    featured: true,
  },
  {
    id: '4',
    slug: 'standard-plus',
    name: 'Стандартный улучшенный',
    nameEn: 'Standard Plus',
    description:
      'Улучшенная версия стандартного номера с более просторной площадью и дополнительными удобствами.',
    descriptionEn:
      'Enhanced version of the standard room with more spacious area and additional amenities.',
    price: 2800,
    priceHourly: 1400,
    size: 22,
    maxGuests: 2,
    minGuests: 1,
    badges: ['Улучшенный'],
    badgesEn: ['Enhanced'],
    amenities: [
      'Двуспальная кровать',
      'Кондиционер',
      'Телевизор',
      'Холодильник',
      'Микроволновка',
      'Собственный санузел',
      'WiFi',
      'Полотенца',
    ],
    amenitiesEn: [
      'Double bed',
      'Air conditioning',
      'TV',
      'Refrigerator',
      'Microwave',
      'Private bathroom',
      'WiFi',
      'Towels',
    ],
    images: [
      '/images/rooms/standard-plus-room.jpg',
      '/images/rooms/standard-plus-room-2.jpg',
      '/images/rooms/standard-plus-bathroom.jpg',
    ],
    featured: false,
  },
  {
    id: '5',
    slug: 'junior-suite',
    name: 'Junior Suite',
    nameEn: 'Junior Suite',
    description:
      'Апартаменты с отдельной гостиной зоной и спальней. Идеальный вариант для длительного проживания или бизнес-поездок.',
    descriptionEn:
      'Apartment with separate living area and bedroom. Ideal option for long-term stays or business trips.',
    price: 3200,
    priceHourly: 1600,
    size: 25,
    maxGuests: 3,
    minGuests: 2,
    badges: ['Бизнес', 'Просторный'],
    badgesEn: ['Business', 'Spacious'],
    amenities: [
      'Двуспальная кровать',
      'Гостиная зона',
      'Кондиционер',
      'Smart TV',
      'Холодильник',
      'Мини-кухня',
      'Собственный санузел',
      'WiFi',
      'Рабочий стол',
      'Полотенца',
    ],
    amenitiesEn: [
      'Double bed',
      'Living area',
      'Air conditioning',
      'Smart TV',
      'Refrigerator',
      'Mini kitchen',
      'Private bathroom',
      'WiFi',
      'Work desk',
      'Towels',
    ],
    images: [
      '/images/rooms/junior-suite-room.jpg',
      '/images/rooms/junior-suite-room-2.jpg',
      '/images/rooms/junior-suite-bathroom.jpg',
    ],
    featured: false,
  },
  {
    id: '6',
    slug: 'family',
    name: 'Семейный номер',
    nameEn: 'Family Room',
    description:
      'Большой семейный номер с двуспальной кроватью и дополнительными спальными местами. Идеально для семей с детьми.',
    descriptionEn:
      'Large family room with a double bed and additional sleeping places. Ideal for families with children.',
    price: 4200,
    priceHourly: 2000,
    size: 35,
    maxGuests: 4,
    minGuests: 2,
    badges: ['Семейный', 'Большой'],
    badgesEn: ['Family', 'Large'],
    amenities: [
      'Двуспальная кровать',
      'Дополнительные кровати',
      'Кондиционер',
      'Телевизор',
      'Холодильник',
      'Собственный санузел',
      'WiFi',
      'Детская кроватка (по запросу)',
      'Полотенца',
    ],
    amenitiesEn: [
      'Double bed',
      'Additional beds',
      'Air conditioning',
      'TV',
      'Refrigerator',
      'Private bathroom',
      'WiFi',
      'Baby cot (on request)',
      'Towels',
    ],
    images: [
      '/images/rooms/family-room.jpg',
      '/images/rooms/family-room-2.jpg',
      '/images/rooms/family-bathroom.jpg',
    ],
    featured: false,
  },
]

export function getRoomBySlug(slug: string): Room | undefined {
  return rooms.find((room) => room.slug === slug)
}

export function getFeaturedRooms(): Room[] {
  return rooms.filter((room) => room.featured)
}
