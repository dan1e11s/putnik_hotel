# Images Directory

This folder contains all images for the Путник Hotel website.

## Directory Structure

```
public/images/
├── rooms/
│   ├── standard-room.jpg         — Стандартный номер (основное фото)
│   ├── standard-room-2.jpg       — Стандартный номер (второе фото)
│   ├── standard-bathroom.jpg     — Ванная стандартного номера
│   ├── twin-room.jpg             — Twin номер (основное фото)
│   ├── twin-room-2.jpg           — Twin номер (второе фото)
│   ├── twin-bathroom.jpg         — Ванная Twin номера
│   ├── lux-room.jpg              — Люкс (основное фото)
│   ├── lux-room-2.jpg            — Люкс (второе фото)
│   ├── lux-bathroom.jpg          — Ванная люкса
│   ├── standard-plus-room.jpg    — Стандартный улучшенный
│   ├── standard-plus-room-2.jpg  — Стандартный улучшенный (2)
│   ├── standard-plus-bathroom.jpg
│   ├── junior-suite-room.jpg     — Junior Suite
│   ├── junior-suite-room-2.jpg   — Junior Suite (2)
│   ├── junior-suite-bathroom.jpg
│   ├── family-room.jpg           — Семейный номер
│   ├── family-room-2.jpg         — Семейный номер (2)
│   └── family-bathroom.jpg       — Ванная семейного номера
│
└── gallery/
    ├── room-1.jpg                — Галерея: стандартный номер
    ├── room-2.jpg                — Галерея: twin номер
    ├── room-3.jpg                — Галерея: люкс
    ├── room-4.jpg                — Галерея: семейный номер
    ├── room-5.jpg                — Галерея: ванная
    ├── room-6.jpg                — Галерея: интерьер
    ├── pool-1.jpg                — Галерея: бассейн
    ├── pool-2.jpg                — Галерея: бассейн вид
    ├── pool-3.jpg                — Галерея: зона у бассейна
    ├── sauna-1.jpg               — Галерея: сауна
    ├── sauna-2.jpg               — Галерея: хаммам
    ├── common-1.jpg              — Галерея: ресепшн
    ├── common-2.jpg              — Галерея: коридор
    ├── common-3.jpg              — Галерея: зона отдыха
    ├── common-4.jpg              — Галерея: бильярд
    └── common-5.jpg              — Галерея: парковка
```

## Recommended Image Specifications

- **Rooms**: 800×600px minimum, JPG format, quality 85%
- **Gallery thumbnails**: 400×400px, square aspect ratio
- **Hero**: 1920×1080px minimum

## Notes

- Images are currently using gradient placeholder backgrounds in the UI
- Replace the placeholder `<div>` elements in RoomCard.tsx and room detail pages with `<Image>` components from `next/image` once actual photos are added
- All image paths are already configured in `/lib/data/rooms.ts`
