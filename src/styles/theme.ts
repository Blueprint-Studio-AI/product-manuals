// IDVisor 3 Manual — Design Tokens
// Derived from TokenWorks design system (ums-portal-vue)

export const theme = {

  color: {
    // Core brand
    charcoal: '#16161C',
    frost: '#F5FAFE',

    // Primary (green)
    primary25: '#F2FDF9',
    primary50: '#E5FBF2',
    primary100: '#CFF7E8',
    primary200: '#B9F3DD',
    primary300: '#92ECCA',
    primary400: '#74E7BB',
    primary500: '#4AE0A7',
    primary600: '#22C889',
    primary650: '#1CA571',
    primary700: '#199465',
    primary800: '#13714E',
    primary900: '#0E5339',

    // Gray
    gray25: '#FDFDFD',
    gray50: '#F7F7F7',
    gray100: '#F3F3F3',
    gray200: '#E7E8E8',
    gray300: '#D6D8D9',
    gray350: '#BDC0C2',
    gray400: '#929597',
    gray500: '#717579',
    gray600: '#585B5D',
    gray700: '#47494B',
    gray800: '#2D2E2F',
    gray900: '#16161C',

    // Blue
    blue50: '#ECF5FF',
    blue100: '#D2E7FF',
    blue200: '#AFD4FF',
    blue300: '#89C0FF',
    blue400: '#69AFFF',
    blue500: '#479CFE',
    blue600: '#1D81F3',
    blue700: '#0460C9',
    blue800: '#004798',
    blue900: '#003572',

    // Orange
    orange50: '#FFFAEB',
    orange100: '#FEF0C7',
    orange200: '#FEDF89',
    orange300: '#FEC84B',
    orange400: '#FDB022',
    orange500: '#F79009',
    orange600: '#DC6803',
    orange700: '#B54708',
    orange800: '#93370D',
    orange900: '#7A2E0E',

    // Semantic
    textPrimary: '#16161C',
    textMuted: '#737578',
    textOnDark: '#F5FAFE',
    borderLight: 'rgba(245, 250, 254, 0.2)',
    borderDark: '#E7E8E8',
  },

  font: {
    family: "'Inter', sans-serif",
    heading: "'P22 Mackinac W01 Bold', 'Inter', sans-serif",
  },

} as const

export function injectTheme() {
  const root = document.documentElement.style

  for (const [key, value] of Object.entries(theme.color)) {
    root.setProperty(`--c-${camelToKebab(key)}`, value)
  }

  root.setProperty('--font', theme.font.family)
  root.setProperty('--font-heading', theme.font.heading)
}

function camelToKebab(str: string): string {
  return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
}
