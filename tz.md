You are a senior full-stack developer, UX/UI designer, and SEO specialist. Your task is to fully generate a complete, production-ready website for a hotel called "Путник" (Putnik) located in Bishkek, Kyrgyzstan.

Generate ALL code, ALL pages, ALL components, ALL styles, and ALL content in a single output as a complete Next.js project. Do not stop until the entire project is complete.

---

## 🏨 PROJECT OVERVIEW

**Hotel name:** Путник (Putnik)
**Type:** Гостевой дом / Guest House with pool, sauna, billiards
**Location:** ул. Худайбергенова, 81Б, Первомайский район, Бишкек, Кыргызстан, 720044
**Phone:** +996 (указать в форме-заглушке)
**WhatsApp:** wa.me/996XXXXXXXXX
**Current problems:** No website, no online booking, no price list, no room photos, clients can't get information online, low trust — must solve ALL of these.

---

## 🎯 GOAL

Create a fast, modern, minimalist, conversion-optimized hotel website that:
- Increases direct bookings by showcasing rooms, prices, and amenities clearly
- Builds trust through reviews, photos, and transparent pricing
- Solves the #1 complaint: "can't find info, can't book online, can't contact"
- Ranks in Google for "гостиница Бишкек", "hotel Bishkek", "гостевой дом Бишкек"

---

## 👥 TARGET AUDIENCE

1. **Local residents** — looking for hourly/nightly stays, sauna, pool
2. **Business travelers** — need invoices, stable WiFi, quiet rooms
3. **Tourists** — need location info, clear pricing, photo proof
4. **Foreign guests** — need English version, map, easy contact
5. **Budget travelers** — price-sensitive, need transparent cost from 2000 KGS/night

---

## 🛠 TECH STACK

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Animations:** Framer Motion (subtle, not excessive)
- **Forms:** React Hook Form + Zod validation
- **Maps:** Google Maps embed (iframe fallback)
- **SEO:** next/metadata, Open Graph, JSON-LD schema (Hotel, LocalBusiness)
- **Performance:** Image optimization with next/image, lazy loading, mobile-first
- **i18n:** next-intl for Russian (primary) + English (secondary)
- **Font:** Inter (Google Fonts, self-hosted)

---

## 🎨 DESIGN SYSTEM

### Color Palette (based on real hotel visual identity from 2GIS photos):
Primary Blue:     #2B4EAD  (logo color — mountain/traveler emblem)
Primary Dark:     #1A3278  (hover states, headings)
Accent:           #4A90D9  (buttons, links, highlights)
Background:       #F8F9FC  (light gray-white, clean)
Surface:          #FFFFFF  (cards, modals)
Text Primary:     #1C1C2E  (dark charcoal)
Text Secondary:   #6B7280  (gray, subtitles)
Border:           #E5E7EB
Stone Gray:       #8B8B8B  (decorative, matching stone wall texture in rooms)
Warm Beige:       #F5F0E8  (room card backgrounds)

### Typography:
- **Headings:** Inter Bold/SemiBold, 700
- **Body:** Inter Regular, 400
- **Price tags:** Inter Bold, accent blue
- **Russian primary, English secondary**

### Design Principles:
- Minimalist, lots of white space ("воздух")
- Stone/concrete texture inspired by actual room walls (use CSS texture or subtle patterns)
- Clean cards with soft shadows
- Rounded corners: 8px cards, 4px buttons
- NO gradients except subtle hero overlay
- Photography-forward layout (large hero, full-bleed room photos)
- Mobile-first, fully responsive

---

## 📁 PROJECT STRUCTURE

/app
/[locale]
/layout.tsx
/page.tsx                    ← Home page
/rooms/page.tsx              ← All rooms
/rooms/[slug]/page.tsx       ← Individual room detail
/booking/page.tsx            ← Booking form
/gallery/page.tsx            ← Photo gallery
/about/page.tsx              ← About page
/contacts/page.tsx           ← Contacts + map
/reviews/page.tsx            ← All reviews
/components
/layout
Header.tsx
Footer.tsx
MobileMenu.tsx
LanguageSwitcher.tsx
/home
HeroSection.tsx
RoomsPreview.tsx
AmenitiesSection.tsx
PricingSection.tsx
ReviewsSection.tsx
MapSection.tsx
BookingCTA.tsx
StatsSection.tsx
/shared
RoomCard.tsx
ReviewCard.tsx
BookingForm.tsx
WhatsAppButton.tsx
PhotoGallery.tsx
SectionTitle.tsx
Button.tsx
Badge.tsx
PriceTag.tsx
/lib
/data
rooms.ts
reviews.ts
amenities.ts
translations.ts
/utils
cn.ts
formatPrice.ts
/public
/images
(placeholder paths with descriptive names)
/messages
ru.json
en.json

---

## 📄 PAGES — FULL CONTENT & STRUCTURE

---

### PAGE 1: HOME (`/`)

#### Block 1 — HERO SECTION
- Full-width background: room photo (stone-textured wall, cozy bed)
- Dark overlay (rgba 0,0,0,0.45)
- Logo top-left: circle with mountains + "ПУТНИК" in blue
- **H1:** "Уютные номера в Бишкеке — от 2 000 сом"
- **Subtitle:** "Гостевой дом «Путник» — ваш дом вдали от дома. Бассейн, сауна, бильярд. Бронируйте онлайн прямо сейчас."
- **CTA Button 1:** "Забронировать номер" (blue, filled) → links to #booking
- **CTA Button 2:** "Смотреть номера" (white outline) → links to /rooms
- **Trust badges row below buttons:** ✓ Без предоплаты | ✓ Отмена бесплатна | ✓ Заезд с 2 часов | ✓ WiFi бесплатно

#### Block 2 — QUICK STATS BAR
Full-width dark blue bar with 4 stats:
- 🏠 **24+** Номера
- ⭐ **170+** Гостей оценили нас
- 🏊 **Бассейн** Открытый и крытый
- 🕐 **24/7** Заезд в любое время

#### Block 3 — ROOMS PREVIEW
Section title: "Наши номера"
Subtitle: "Комфортные номера на любой бюджет и случай"
Show 3 room cards in a grid (3 cols desktop, 1 col mobile):

**Card 1 — Стандартный номер**
- Photo placeholder: standard-room.jpg
- Badge: "Хит"
- Name: Стандартный двухместный
- Description: Уютный номер с двуспальной кроватью, кондиционером, телевизором и отдельным санузлом. Декоративная каменная стена создаёт особую атмосферу.
- Capacity: 👥 1-2 гостя
- Size: 📐 18 м²
- Price: от **2 000 сом** / ночь
- from **1 000 сом** / 2 часа
- Button: "Подробнее"

**Card 2 — Стандартный с отдельными кроватями**
- Photo placeholder: twin-room.jpg
- Badge: "Популярный"
- Name: Стандартный Twin
- Description: Просторный номер с двумя односпальными кроватями. Идеально для коллег в командировке или друзей.
- Capacity: 👥 2 гостя
- Size: 📐 20 м²
- Price: от **2 500 сом** / ночь
- Button: "Подробнее"

**Card 3 — Люкс**
- Photo placeholder: lux-room.jpg
- Badge: "Люкс"
- Name: Номер Люкс
- Description: Просторный люкс с большой двуспальной кроватью, мини-кухней, улучшенным интерьером и всеми удобствами для длительного проживания.
- Capacity: 👥 1-3 гостя
- Size: 📐 28 м²
- Price: от **3 800 сом** / ночь
- Button: "Подробнее"

"Посмотреть все номера" link below cards.

#### Block 4 — AMENITIES / ПРЕИМУЩЕСТВА
Section title: "Почему выбирают Путник"
Grid of 6 feature cards (icon + title + description):

1. 🏊 **Бассейн** — Крытый бассейн с тёплой водой доступен для всех гостей гостиницы.
2. 🧖 **Сауна и спа** — Финская сауна и хаммам для полноценного отдыха и восстановления.
3. 🎱 **Бильярд** — Бильярдный стол в зоне отдыха для приятного досуга.
4. 📶 **Бесплатный WiFi** — Высокоскоростной интернет во всех номерах и общих зонах.
5. 🅿️ **Парковка** — Собственная охраняемая парковка для гостей.
6. 🕐 **Заезд 24/7** — Мы работаем без выходных, заезд и выезд в любое время.

#### Block 5 — PRICING TABLE
Section title: "Прозрачные цены"
Subtitle: "Никаких скрытых платежей — всё включено"
3-column pricing cards:

**Hourly (Почасовой)**
- Min: от 2 часов
- Price: **1 000 сом** / 2 часа
- Includes: WiFi, горячий душ, полотенца
- Button: "Забронировать"

**Ночной (Night)**
- Badge: "Выгодно"
- Day/Night: **2 000 сом** / ночь (с 22:00 до 10:00)
- Includes: WiFi, завтрак опционально, полотенца, парковка
- Button: "Забронировать"

**Суточный (Full Day)**
- Highlighted card (blue border)
- Suites: **3 500 сом** / сутки (Стандарт)
- Lux: **3 800 сом** / сутки (Люкс)
- Includes: Всё включено + бассейн + сауна
- Button: "Забронировать"

Small note: "Скидки при длительном проживании. Уточняйте у администратора."

#### Block 6 — BOOKING FORM (Anchor: #booking)
Section title: "Забронировать номер"
Subtitle: "Заполните форму — мы свяжемся с вами в течение 15 минут"
Form fields:
- Имя (text, required)
- Телефон (tel, required, with KG +996 prefix)
- Тип номера (select: Стандартный / Twin / Люкс)
- Дата заезда (date picker)
- Дата выезда (date picker)
- Количество гостей (select: 1 / 2 / 3)
- Комментарий (textarea, optional)
- Checkbox: "Согласен с политикой конфиденциальности"
- Submit button: "Отправить заявку" (full-width, blue)
- Below form: OR divider + WhatsApp button "Написать в WhatsApp" (green)

#### Block 7 — REVIEWS
Section title: "Отзывы гостей"
Subtitle: "Реальные отзывы с 2ГИС"
Show 4 review cards horizontally scrollable on mobile:

Review 1:
- Name: Здравствуйте,позавчера отдыхали компанией
- Stars: ⭐⭐⭐⭐⭐
- Text: "Очень понравилось, бассейн чистый, парилка хорошая, все было очень классно, хозяйка очень добрая и вежливая, обязательно придем ещё 😊"
- Source: 2ГИС

Review 2:
- Name: Гость
- Stars: ⭐⭐⭐⭐
- Text: "Цена соответствует качеству, провели хорошо время. Номер чистый, всё необходимое есть."
- Source: 2ГИС

Review 3:
- Name: Постоянный гость
- Stars: ⭐⭐⭐⭐⭐
- Text: "Останавливаемся регулярно, когда приезжаем в Бишкек. Удобное расположение, тихо, хорошая цена за такой уровень сервиса."
- Source: 2ГИС

Review 4:
- Name: Командировочный
- Stars: ⭐⭐⭐⭐
- Text: "Брал номер на несколько дней в командировку. WiFi работает нормально, кровать удобная, персонал помогает. Буду рекомендовать коллегам."
- Source: 2ГИС

"Читать все отзывы" link.

#### Block 8 — MAP SECTION
Section title: "Как нас найти"
Left side: Google Maps embed iframe (ул. Худайбергенова, 81Б, Бишкек)
Right side:
- Address: 📍 ул. Худайбергенова, 81Б, Первомайский район, Бишкек
- Phone: 📞 +996 XXX XXX XXX
- WhatsApp: 💬 Написать в WhatsApp
- Hours: 🕐 Круглосуточно, 7 дней в неделю
- Nearest landmarks: Рядом с центром города, 10 мин до аэропорта Бишкек

---

### PAGE 2: ROOMS (`/rooms`)

- Page title: "Номера — Гостиница Путник Бишкек"
- Filter tabs: Все | Стандартные | Люкс | Почасовые
- Full room cards grid (6 rooms total, detailed)
- Each card: photo, name, description, amenities list, capacity, price, "Подробнее" button

---

### PAGE 3: INDIVIDUAL ROOM (`/rooms/[slug]`)

Layout for each room page:
- Large hero image of room
- Breadcrumb: Главная > Номера > [Room Name]
- Left column (60%): photo carousel (4-5 images), room description, amenities checklist
- Right column (40%): sticky booking widget with price + form
- Below: similar rooms carousel
- Meta: unique title/description per room

---

### PAGE 4: GALLERY (`/gallery`)

- Masonry grid layout
- Filter buttons: Все фото | Номера | Бассейн | Сауна | Общие зоны
- Click to open lightbox
- 24 image placeholders with descriptive alt text in Russian and English

---

### PAGE 5: BOOKING (`/booking`)

- Full-page booking form (expanded version)
- Step indicator: 1. Выбор номера → 2. Данные → 3. Подтверждение
- Room type selector with photo thumbnails
- Date range picker
- Guest count selector
- Price calculator (live: shows total based on selected dates)
- Contact form
- Confirmation page after submit with booking summary

---

### PAGE 6: ABOUT (`/about`)

Content:
- H1: "О гостевом доме Путник"
- History paragraph: "Гостевой дом «Путник» — уютное место для отдыха и проживания в Бишкеке. Мы принимаем гостей круглосуточно и создаём домашнюю атмосферу для каждого постояльца."
- Our values: 3 pillars (Чистота | Комфорт | Доступные цены)
- What we offer: rooms, pool, sauna, billiards
- Team photo placeholder
- CTA to booking

---

### PAGE 7: CONTACTS (`/contacts`)

- Full-width map (Google Maps iframe)
- Contact card with all details
- How to find us: written directions
- Parking info
- Separate WhatsApp CTA button
- FAQ accordion (5 common questions):
  1. Есть ли у вас парковка? — Да, собственная охраняемая парковка для гостей.
  2. Можно ли заехать ночью? — Да, мы работаем 24/7, заезд в любое время.
  3. Есть ли бассейн? — Да, крытый бассейн доступен всем гостям гостиницы.
  4. Какой минимальный срок аренды? — Минимум 2 часа.
  5. Можно ли забронировать онлайн? — Да, заполните форму на сайте, и мы свяжемся в течение 15 минут.

---

### PAGE 8: REVIEWS (`/reviews`)

- All reviews from 2GIS displayed
- Sort: По дате | По рейтингу
- Rating summary widget (3.7 average, 170 reviews, breakdown by stars)
- CTA: "Оставить отзыв на 2ГИС" (external link)

---

## 🧩 COMPONENTS — DETAILED SPECIFICATIONS

### Header (`Header.tsx`)
- Sticky, transparent on hero, white with shadow on scroll
- Logo: SVG circle logo with mountains + "ПУТНИК" text
- Navigation: Главная | Номера | Галерея | Цены | Контакты
- CTA button: "Забронировать" (blue, pill shape)
- Language switcher: RU | EN
- Mobile: hamburger → full-screen overlay menu

### Footer (`Footer.tsx`)
- Dark background (#1C1C2E)
- Column 1: Logo + short description + social links (WhatsApp, Instagram placeholder)
- Column 2: Навигация links
- Column 3: Контакты (address, phone, WhatsApp)
- Column 4: Режим работы + quick booking link
- Bottom bar: © 2024 Путник | Политика конфиденциальности | Разработка сайта

### WhatsApp Floating Button (`WhatsAppButton.tsx`)
- Fixed bottom-right corner
- Green circle button with WhatsApp icon
- Pulse animation ring
- Tooltip on hover: "Написать в WhatsApp"
- Opens wa.me link in new tab

### Booking Form (`BookingForm.tsx`)
- React Hook Form
- Zod validation schema
- Loading state with spinner
- Success state with confirmation message
- Error handling with user-friendly messages
- All labels in Russian

### Room Card (`RoomCard.tsx`)
- Image with next/image (lazy loading)
- Badge component (hot/popular/lux)
- Amenity icons row
- Price display (per night + per hour)
- Hover effect: slight scale + shadow
- "Подробнее" link button

---

## 🔍 SEO CONFIGURATION

### `/app/[locale]/layout.tsx` — Root Metadata:
```typescript
export const metadata: Metadata = {
  title: {
    template: '%s | Путник — Гостиница Бишкек',
    default: 'Путник — Гостиница в Бишкеке | Номера от 2000 сом',
  },
  description: 'Гостевой дом Путник в Бишкеке. Комфортные номера от 2000 сом/ночь. Бассейн, сауна, бильярд. Онлайн бронирование. Заезд 24/7. ул. Худайбергенова, 81Б.',
  keywords: ['гостиница Бишкек', 'отель Бишкек', 'hotel Bishkek', 'гостевой дом Бишкек', 'путник гостиница', 'номера Бишкек', 'снять номер Бишкек', 'дешёвая гостиница Бишкек', 'бассейн сауна Бишкек'],
  openGraph: {
    type: 'website',
    locale: 'ru_KG',
    siteName: 'Путник — Гостиница Бишкек',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://putnik-bishkek.kg' },
}
```

### JSON-LD Schema (in layout):
```json
{
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  "name": "Путник",
  "alternateName": "Putnik Guest House",
  "description": "Гостевой дом в Бишкеке с бассейном, сауной и бильярдом",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "ул. Худайбергенова, 81Б",
    "addressLocality": "Бишкек",
    "addressCountry": "KG",
    "postalCode": "720044"
  },
  "priceRange": "2000-3800 KGS",
  "amenityFeature": ["Бассейн", "Сауна", "Бильярд", "WiFi", "Парковка"],
  "openingHours": "Mo-Su 00:00-24:00",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "3.7",
    "reviewCount": "170"
  }
}
```

---

## 🌐 INTERNATIONALIZATION

### `/messages/ru.json`:
All UI text in Russian (nav, buttons, form labels, placeholders, error messages, success messages)

### `/messages/en.json`:
Full English translation (same structure):
- Nav: Home | Rooms | Gallery | Prices | Contacts
- CTA: "Book a Room"
- Hero: "Cozy Rooms in Bishkek — from 2,000 KGS"
- etc.

---

## ✅ CHECKLIST — GENERATE ALL OF THESE

Generate every single file listed below with complete, working code:

**Config files:**
- [ ] `package.json` (with all dependencies)
- [ ] `tsconfig.json`
- [ ] `tailwind.config.ts` (with custom colors and fonts)
- [ ] `next.config.js`
- [ ] `.env.example`

**App files:**
- [ ] `app/[locale]/layout.tsx`
- [ ] `app/[locale]/page.tsx`
- [ ] `app/[locale]/rooms/page.tsx`
- [ ] `app/[locale]/rooms/[slug]/page.tsx`
- [ ] `app/[locale]/gallery/page.tsx`
- [ ] `app/[locale]/booking/page.tsx`
- [ ] `app/[locale]/about/page.tsx`
- [ ] `app/[locale]/contacts/page.tsx`
- [ ] `app/[locale]/reviews/page.tsx`

**Components (all):**
- [ ] `components/layout/Header.tsx`
- [ ] `components/layout/Footer.tsx`
- [ ] `components/layout/MobileMenu.tsx`
- [ ] `components/layout/LanguageSwitcher.tsx`
- [ ] `components/home/HeroSection.tsx`
- [ ] `components/home/RoomsPreview.tsx`
- [ ] `components/home/AmenitiesSection.tsx`
- [ ] `components/home/PricingSection.tsx`
- [ ] `components/home/ReviewsSection.tsx`
- [ ] `components/home/MapSection.tsx`
- [ ] `components/home/BookingCTA.tsx`
- [ ] `components/home/StatsSection.tsx`
- [ ] `components/shared/RoomCard.tsx`
- [ ] `components/shared/ReviewCard.tsx`
- [ ] `components/shared/BookingForm.tsx`
- [ ] `components/shared/WhatsAppButton.tsx`
- [ ] `components/shared/PhotoGallery.tsx`
- [ ] `components/shared/SectionTitle.tsx`
- [ ] `components/shared/Button.tsx`
- [ ] `components/shared/Badge.tsx`
- [ ] `components/shared/PriceTag.tsx`

**Data files:**
- [ ] `lib/data/rooms.ts`
- [ ] `lib/data/reviews.ts`
- [ ] `lib/data/amenities.ts`
- [ ] `lib/utils/cn.ts`
- [ ] `lib/utils/formatPrice.ts`
- [ ] `messages/ru.json`
- [ ] `messages/en.json`

---

## 📝 IMPORTANT IMPLEMENTATION NOTES

1. Use `next/image` for ALL images with proper `alt` attributes in Russian + English
2. All image `src` should use descriptive placeholder paths like `/images/rooms/standard-room-1.jpg`
3. Every page must have unique `metadata` export
4. The booking form must show a success toast/message after submission (no actual backend needed — just UI state)
5. WhatsApp button must be visible on ALL pages (fixed position)
6. All phone numbers shown as clickable `tel:` links
7. Footer must include sitemap links for SEO
8. Use `cn()` utility (clsx + tailwind-merge) for all className merging
9. Framer Motion animations: fade-in on scroll for section titles, stagger for card grids
10. The design must feel warm and trustworthy — NOT cheap or low-budget — even though prices are affordable
11. Color scheme must match the actual hotel: blue logo color (#2B4EAD), stone-gray walls, warm wood tones
12. Mobile menu must be smooth and fully accessible
13. All form inputs must have proper ARIA labels
14. Add a "Scroll to top" button that appears after scrolling down

---

## 🚀 START COMMAND

Begin by generating:
1. `package.json`
2. `tailwind.config.ts`
3. `app/[locale]/layout.tsx`
4. `app/[locale]/page.tsx` (full home page with ALL blocks)
5. Then continue with all remaining files in order

Do NOT stop. Generate everything. Output each file with its full path as a code block header comment.