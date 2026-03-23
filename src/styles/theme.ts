// Product Manuals — Design Tokens
// Aligned with the UMS Portal (ums-portal-vue) PrimeVue TokenWorks theme.
// These CSS custom properties use the same --p-* naming convention so that
// components written here can be dropped into the portal with zero token renaming.
//
// Source of truth: ums-portal-vue/src/styles/theme.ts (PrimeVue definePreset)

export const tokens = {

  // Primary (green) — brand accent, CTAs, pass states
  'p-primary-25': '#F2FDF9',
  'p-primary-50': '#E5FBF2',
  'p-primary-100': '#CFF7E8',
  'p-primary-200': '#B9F3DD',
  'p-primary-300': '#92ECCA',
  'p-primary-400': '#74E7BB',
  'p-primary-500': '#4AE0A7',
  'p-primary-600': '#22C889',
  'p-primary-650': '#1CA571',
  'p-primary-700': '#199465',
  'p-primary-800': '#13714E',
  'p-primary-900': '#0E5339',

  // Gray — neutrals, borders, muted text
  'p-gray-25': '#FDFDFD',
  'p-gray-50': '#F7F7F7',
  'p-gray-100': '#F3F3F3',
  'p-gray-200': '#E7E8E8',
  'p-gray-300': '#D6D8D9',
  'p-gray-350': '#BDC0C2',
  'p-gray-400': '#929597',
  'p-gray-500': '#717579',
  'p-gray-600': '#585B5D',
  'p-gray-700': '#47494B',
  'p-gray-800': '#2D2E2F',
  'p-gray-900': '#16161C',

  // Blue — info, links, accents
  'p-blue-50': '#ECF5FF',
  'p-blue-100': '#D2E7FF',
  'p-blue-200': '#AFD4FF',
  'p-blue-300': '#89C0FF',
  'p-blue-400': '#69AFFF',
  'p-blue-500': '#479CFE',
  'p-blue-600': '#1D81F3',
  'p-blue-700': '#0460C9',
  'p-blue-800': '#004798',
  'p-blue-900': '#003572',

  // Orange — warnings
  'p-orange-50': '#FFFAEB',
  'p-orange-100': '#FEF0C7',
  'p-orange-200': '#FEDF89',
  'p-orange-300': '#FEC84B',
  'p-orange-400': '#FDB022',
  'p-orange-500': '#F79009',
  'p-orange-600': '#DC6803',
  'p-orange-700': '#B54708',
  'p-orange-800': '#93370D',
  'p-orange-900': '#7A2E0E',

  // Red — fail, reject, danger
  'p-red-50': '#FFF5F5',
  'p-red-100': '#FFD7D7',
  'p-red-500': '#FF0000',

  // Semantic surface colors (mirrors portal colorScheme.light.surface)
  'p-surface-0': '#FDFDFD',
  'p-surface-25': '#FDFDFD',
  'p-surface-50': '#F7F7F7',
  'p-surface-100': '#F3F3F3',
  'p-surface-200': '#E7E8E8',
  'p-surface-300': '#D6D8D9',
  'p-surface-400': '#929597',
  'p-surface-500': '#717579',
  'p-surface-600': '#585B5D',
  'p-surface-700': '#47494B',
  'p-surface-800': '#2D2E2F',
  'p-surface-900': '#16161C',

  // Semantic text colors
  'p-text-color': '#16161C',
  'p-text-muted-color': '#717579',
  'p-text-hover-color': '#69AFFF',

} as const

// Inject tokens as CSS custom properties on :root
export function injectTheme() {
  const root = document.documentElement.style
  for (const [key, value] of Object.entries(tokens)) {
    root.setProperty(`--${key}`, value)
  }
  // Font shorthand
  root.setProperty('--font', "'Inter', sans-serif")
}
