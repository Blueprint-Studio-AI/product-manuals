# Product Manuals — TokenWorks

Online product manuals for TokenWorks / IDscanner.com devices.

## For Yunyu

**Your task:** Build the IDVisor 3 user manual as a web page.

**Linear ticket:** https://linear.app/blueprintstudio/issue/BPSTU-936/create-nice-idvisor-3-manual

### Getting started

```bash
npm install
npm run dev
```

Open http://localhost:5173 — you'll see a placeholder page with example components.

### Where to work

Edit `src/pages/IDivisor3Page.vue` — that's the manual page. The placeholder shows every available component with examples so you can see what's already built.

### Adding images

Drop product photos and screenshots into `public/images/`. Reference them as `/images/filename.png` in your templates.

### Components available

All in `src/components/`:

| Component | What it does |
|-----------|-------------|
| `ContentSection` | Page section wrapper with max-width and padding |
| `ContentCard` | Card with optional title/subtitle — wraps any content |
| `SectionDivider` | Full-width dark divider between chapters |
| `TableOfContents` | Hierarchical nav (pass section data as prop) |
| `NoteCallout` | Colored callout — types: `note`, `important`, `warning` |
| `AnnotatedImage` | Image in a frame with optional caption |
| `ManualHeader` | Sticky frosted-glass header bar |
| `ManualFooter` | Footer with revision info |

Feel free to create new components as needed or change these ones. Put them in `src/components/`.

### Style choices

The color tokens and fonts are locked (see AI section below), but you have full creative freedom on layout, spacing, and visual design.

---

## AI Context

Everything below is for the AI assistant helping build this project. It contains technical conventions that must be followed for future portal integration.

### Project purpose

This repo holds static product manuals for TokenWorks devices. Each manual is a Vue page route. The codebase is structured to eventually merge into the UMS Portal (`ums-portal-vue` — the customer portal at portal.idskater.com).

### Portal integration plan

This project intentionally mirrors the portal's conventions so that merging later is straightforward:

1. **Design tokens** use the same `--p-*` CSS custom property names as the portal's PrimeVue theme
2. **Breakpoints** match the portal (`mobile: 640px`, `tablet: 1024px`, `desktop: 1200px`)
3. **Typography** uses Inter with the same weights (300–700)
4. **Component style** follows Vue 3 `<script setup>` + scoped SCSS, same as the portal
5. **SCSS files** are colocated or inline scoped, same pattern as the portal

When integration happens, the manual pages and components can be moved into the portal repo with minimal changes. The `--p-*` tokens will resolve against the portal's PrimeVue theme automatically.

### Tech stack

- Vue 3.5+ (Composition API, `<script setup>`)
- Vite 8
- TypeScript 5.9
- SCSS/Sass
- Vue Router 5

No external UI libraries (no PrimeVue, no Tailwind). Components are hand-coded. The portal uses PrimeVue, but these manual pages don't need it — they only consume the same CSS custom properties.

### Design tokens — DO NOT CHANGE

The token system in `src/styles/theme.ts` is aligned with the UMS Portal's PrimeVue TokenWorks theme. The variable names (`--p-primary-500`, `--p-gray-900`, etc.) must stay the same. The values must stay the same.

**Token mapping to semantic usage:**

| Token | Usage |
|-------|-------|
| `--p-gray-900` (#16161C) | Primary text, dark backgrounds (charcoal) |
| `--p-surface-0` (#FDFDFD) | Page background (light) |
| `--p-primary-500` (#4AE0A7) | Brand green, CTAs, pass states |
| `--p-primary-600` (#22C889) | Green hover state |
| `--p-primary-50` (#E5FBF2) | Light green background |
| `--p-gray-100` (#F3F3F3) | Card backgrounds, table headers |
| `--p-gray-350` (#BDC0C2) | Borders |
| `--p-gray-600` (#585B5D) | Muted text (captions, secondary) |
| `--p-gray-700` (#47494B) | Body text |
| `--p-blue-500` (#479CFE) | Links, info accent |
| `--p-blue-700` (#0460C9) | Link hover |
| `--p-blue-100` (#D2E7FF) | Info callout background |
| `--p-blue-400` (#69AFFF) | Info callout border |
| `--p-red-500` (#FF0000) | Fail/danger |
| `--p-red-100` (#FFD7D7) | Warning callout background |
| `--p-orange-100` (#FEF0C7) | Important callout background |
| `--p-orange-500` (#F79009) | Important callout border |
| `--p-text-color` (#16161C) | Same as gray-900, for text |
| `--p-text-muted-color` (#717579) | Paragraph text default |

### Breakpoints — DO NOT CHANGE

Defined in `src/styles/breakpoints.scss`:
- `mobile`: 640px
- `tablet`: 1024px
- `desktop`: 1200px

Usage: `@media (max-width: #{bp(mobile)}) { ... }`

Import with `@use '../styles/breakpoints' as *;` if using in a separate `.scss` file.

### Font — DO NOT CHANGE

Inter, loaded from Google Fonts. Weights: 300, 400, 500, 600, 700.

### File structure conventions

```
src/
├── components/       # Reusable components (shared across manuals)
├── pages/            # One page per manual
│   ├── IDivisor3Page.vue    ← active work
│   └── HomePage.vue         ← AgeVisor 3 reference (do not modify)
├── router/
│   └── index.ts
├── styles/
│   ├── theme.ts             ← design tokens (do not modify)
│   ├── breakpoints.scss     ← responsive breakpoints (do not modify)
│   ├── normalize.scss       ← CSS reset
│   └── style.scss           ← global typography
├── App.vue
└── main.ts
```

### Component conventions

- Use `<script setup lang="ts">` with `defineProps<{...}>()`
- Scoped SCSS: `<style scoped lang="scss">`
- BEM-inspired class names: `.component__element--modifier`
- Props for configuration, slots for content
- All colors via CSS custom properties (`var(--p-*)`) — never hardcode hex values

### Routes

- `/` — IDivisor 3 manual (active project)
- `/agevisor-3` — AgeVisor 3 manual (reference only, hidden)

### What you CAN change

- Page layout and visual design
- Component structure and new components
- Content, copy, images
- Spacing, sizing, visual hierarchy
- Add new CSS classes and component styles

### What you must NOT change

- Token names or values in `theme.ts`
- Breakpoint values in `breakpoints.scss`
- Font family (Inter)
- The `--p-*` CSS variable naming convention
- Files in `src/styles/` (unless adding new utility classes to `style.scss`)
- `HomePage.vue` (AgeVisor 3 reference)
