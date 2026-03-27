export interface Review {
  id: string
  name: string
  rating: number
  text: string
  textEn: string
  date: string
  source: string
  avatar?: string
}

export const reviews: Review[] = [
  {
    id: '1',
    name: 'Алия М.',
    rating: 5,
    text: 'Отличное место! Чисто, уютно, персонал очень приветливый. Бассейн порадовал — тёплый и чистый. Обязательно вернёмся!',
    textEn: 'Excellent place! Clean, cozy, very friendly staff. The pool was great — warm and clean. We will definitely return!',
    date: '2026-11-15',
    source: '2ГИС',
  },
  {
    id: '2',
    name: 'Бакыт К.',
    rating: 5,
    text: 'Останавливался по работе на неделю. Всё понравилось: тихо, чисто, WiFi хороший. Парковка удобная. Цена адекватная за такой уровень.',
    textEn: 'Stayed for work for a week. Liked everything: quiet, clean, good WiFi. Convenient parking. The price is adequate for this level.',
    date: '2026-10-28',
    source: '2ГИС',
  },
  {
    id: '3',
    name: 'Наталья В.',
    rating: 4,
    text: 'Хорошая гостиница в удобном месте. Номер уютный, кровать удобная. Сауна понравилась. Единственный минус — немного шумно от улицы.',
    textEn: 'Good hotel in a convenient location. The room is cozy, the bed is comfortable. Liked the sauna. The only downside — a bit noisy from the street.',
    date: '2026-10-10',
    source: '2ГИС',
  },
  {
    id: '4',
    name: 'Эрлан Д.',
    rating: 5,
    text: 'Заезжали с семьёй на выходные. Дети были в восторге от бассейна! Персонал очень внимательный, всё объяснили и помогли. Рекомендую!',
    textEn: 'We came with the family for the weekend. The children were delighted with the pool! The staff is very attentive, explained everything and helped. Recommend!',
    date: '2026-09-22',
    source: '2ГИС',
  },
  {
    id: '5',
    name: 'Медина Т.',
    rating: 5,
    text: 'Прекрасное место для отдыха. Заказывала люкс — просторно, красиво, всё новое. Бильярд доступен вечером, что очень удобно.',
    textEn: 'Wonderful place to relax. Booked the deluxe room — spacious, beautiful, everything is new. Billiards available in the evening, which is very convenient.',
    date: '2026-09-05',
    source: '2ГИС',
  },
  {
    id: '6',
    name: 'Сергей Л.',
    rating: 4,
    text: 'Останавливался проездом. Быстро заселили, номер чистый, всё необходимое есть. Душ горячий, напор хороший. За эти деньги — отличный вариант.',
    textEn: 'Stopped by on the way. Checked in quickly, the room is clean, everything you need is there. Hot shower, good pressure. For this price — an excellent option.',
    date: '2026-08-18',
    source: '2ГИС',
  },
  {
    id: '7',
    name: 'Айгуль Р.',
    rating: 5,
    text: 'Уже третий раз останавливаюсь в Путнике. Стабильно хорошее качество, всегда чисто и уютно. Персонал узнаёт и всегда рад видеть. Это дорогого стоит!',
    textEn: 'This is my third time staying at Putnik. Consistently good quality, always clean and cozy. The staff recognize me and are always happy to see me. That is worth a lot!',
    date: '2026-08-02',
    source: '2ГИС',
  },
  {
    id: '8',
    name: 'Джамиля С.',
    rating: 5,
    text: 'Отличная гостиница! Ценник приятный, при этом качество на уровне. Бассейн, сауна — всё работает и содержится в чистоте. Парковка большая. 5 звёзд!',
    textEn: 'Excellent hotel! Nice price, yet quality at a good level. Pool, sauna — everything works and is kept clean. Large parking lot. 5 stars!',
    date: '2026-07-14',
    source: '2ГИС',
  },
]

export function getAverageRating(): number {
  const total = reviews.reduce((sum, review) => sum + review.rating, 0)
  return Math.round((total / reviews.length) * 10) / 10
}

export function getFeaturedReviews(count = 4): Review[] {
  return reviews.slice(0, count)
}
