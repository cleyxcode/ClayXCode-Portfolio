# Design System: CleyXCode Portfolio
**Project ID:** Local portfolio project (no Stitch project connected)

## 1. Visual Theme & Atmosphere

The portfolio uses a midnight creative-tech atmosphere: deep slate and violet
surfaces, star-field decoration, luminous blue-purple accents, and soft glass
layers. The visual direction should feel personal, experimental, and modern
without sacrificing readability on small screens.

The interface favors generous breathing room, clear centered hero content, and
short readable project descriptions. Motion is used as a quiet layer of
personality, never as a substitute for hierarchy or usable navigation.

## 2. Color Palette & Roles

- **Midnight Slate** (`#1E293B`): the cool dark foundation for the application.
- **Deep Violet** (`#4C1D95`): the atmospheric lower gradient and creative accent.
- **Electric Blue** (`#60A5FA`): primary links, highlighted words, and active focus.
- **Soft Lavender** (`#C4B5FD`): secondary emphasis and gentle interactive surfaces.
- **Cloud White** (`#F8FAFC`): primary text on dark backgrounds.
- **Muted Slate** (`#CBD5E1`): supporting text and metadata.
- **Ink Black** (`#0F172A`): strong button surfaces and high-contrast controls.
- **Warm Form Tint** (`#FFF7F7`): the contact form surface, kept soft against the dark page.

## 3. Typography Rules

Use the offline system stack `"Avenir Next", "SF Pro Display", Inter, system-ui,
-apple-system, "Segoe UI", sans-serif`. Avenir Next and SF Pro Display provide a
polished geometric appearance on Apple devices; the remaining fallbacks keep
the design consistent on Windows and Android without remote font requests.

- **Display headings:** bold, tight tracking (`-0.035em`), short line lengths.
- **Body copy:** regular or medium weight, relaxed line height, maximum readable
  width rather than oversized text.
- **Labels and metadata:** medium weight, compact size, muted slate color.
- **Buttons:** medium or semibold weight with clear contrast and no all-caps requirement.
- Use antialiasing and optical text rendering globally so small mobile text stays crisp.

## 4. Component Stylings

* **Buttons:** Pill-shaped controls with compact horizontal padding, dark ink for
  primary actions, translucent white or blue-violet surfaces for secondary
  actions. On mobile, controls may wrap onto multiple lines and must remain inside
  the viewport.
* **Cards/Containers:** Subtly to generously rounded corners (`rounded-lg` to
  `rounded-xl`), translucent white overlays on dark backgrounds, thin white
  borders, and soft shadows instead of heavy elevation.
* **Inputs/Forms:** Warm near-white form surface, dark readable text, simple
  black bottom strokes, generous vertical spacing, and full-width controls on
  narrow screens.
* **Images:** Preserve the source aspect ratio, use `object-cover` for project
  thumbnails, and never allow decorative images to create horizontal overflow.

## 5. Layout Principles

Use a mobile-first single-column flow below `768px`, with content-driven height
instead of forcing every section into one viewport. Desktop may use split layouts
from the `lg` breakpoint upward. Keep horizontal padding between `16px` and
`48px` on small screens, then expand the outer gutter on large screens.

Avoid fixed mobile heights for forms and hero content. Use `min-height` only when
needed, allow vertical scrolling, and keep decorative layers clipped to the
viewport with `overflow-x: hidden`. Cards should use an auto-wrapping grid, and
actions should wrap rather than push content beyond the viewport.
