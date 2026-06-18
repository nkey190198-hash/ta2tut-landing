# ТАТУ ТУТ — Landing

Премиум-минималистичный одностраничный сайт для Telegram-бота `@ta2_blockbot`.

## Файлы

```
ТАТУ ТУТ/
├── landing.html              ← главный файл, самодостаточный (все стили + JS inline)
├── README.md                 ← этот файл
└── assets/
    ├── tatu-tut-mark-lime.svg            знак на лаймовом фоне
    ├── tatu-tut-mark-transparent.svg     знак без фона
    ├── tatu-tut-mark-dark.svg            знак на тёмном фоне
    ├── tatu-tut-horizontal-transparent.svg   горизонтальный лого
    ├── preview-mark-lime.png             og:image (1200×630)
    └── icon-512.png                      favicon
```

## Открыть локально

Открой `landing.html` в любом современном браузере — всё уже встроено
(шрифты через Google Fonts CDN, иконки inline SVG, никаких зависимостей).

## Что внутри

5 секций single-page scroll:

1. **Hero** — orbital композиция: 5 функций вращаются вокруг
   центрального знака. Каждая иконка кликабельна и ведёт в бот.
   Заголовок: «ТАТУ? ТУТ.» крупно, с лаймовыми знаками препинания.
2. **Проблема** — статистика «40+ часов в месяц» (count-up при скролле)
   + 4 карточки breakdown.
3. **Возможности** — 5 функций (Трансфер / Примерка / Эскиз из тату /
   Улучшить фото (NEW) / Видео-примерка). Каждая карточка → линк в бот.
4. **Тарифы** — 4 плана. Мастер Pro приподнят с lime-glow + бейдж
   «Хит · −23%».
5. **CTA** — большая лаймовая кнопка + полоса с лимитами Trial.

## Технические детали

- **Палитра:** `#0E1A14` фон, `#16291F` карточки, `#C4F000` лайм-акцент,
  `#F4F4F0` текст.
- **Шрифты:** Oswald (заголовки) + Inter (body) с Google Fonts.
- **Иконки:** Lucide-style inline SVG в `<defs>`.
- **Анимации:** CSS `@keyframes` для вращения орбит и пульса логотипа,
  `IntersectionObserver` для reveal-on-scroll и count-up.
- **Адаптив:** desktop 1440+ / tablet 980+ / mobile 360+.
- **Лого:** SVG из бренд-папки, отрисован напрямую в HTML (`<symbol id="brand-mark">`).

## Все CTA → @ta2_blockbot

Каждая кнопка/иконка/карточка → `https://t.me/ta2_blockbot?start=…`
с уникальным deeplink-параметром для атрибуции:

| Что               | start-параметр |
|-------------------|----------------|
| Главные CTA       | (без параметра) |
| Трансфер          | `?start=transfer` |
| Примерка          | `?start=tryon` |
| Эскиз из тату     | `?start=sketch` |
| Улучшить фото     | `?start=retouch` |
| Видео-примерка    | `?start=video` |
| Lite              | `?start=lite` |
| Мастер Pro        | `?start=pro` |
| Pro Plus          | `?start=studio` |
| Премиум           | `?start=premium` |

## Деплой

Любой статик-хостинг:

- **GitHub Pages:** залить файлы в репо → Settings → Pages → main branch.
- **Cloudflare Pages:** drag-and-drop папку.
- **Vercel:** `vercel deploy` из папки.
- **Netlify:** drag-and-drop папку на netlify.com/drop.

Файл `landing.html` лучше переименовать в `index.html` при деплое,
чтобы он открывался по корневому URL.

## Слоган

**«ТАТУ? ТУТ.»** — знаки препинания всегда лаймом.
