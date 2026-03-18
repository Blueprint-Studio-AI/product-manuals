// AgeVisor 3 Manual — Design Tokens
// Derived from the Figma manual designs

export const theme = {

  // Core brand colors
  color: {
    charcoal: '#16161C',
    frost: '#F5FAFE',

    // Greens (brand accent — scan, pass, CTA)
    green500: '#4AE0A7',
    green600: '#36BE8A',
    greenLight: '#D4FFEF',

    // Reds (fail / reject states)
    redLight: '#FFD7D7',
    red: '#FF0000',

    // Yellows (tags — VIP, warnings)
    yellowLight: '#FFEDB1',
    yellowBorder: '#C28200',
    yellowText: '#B96600',

    // Blues (info tags, links)
    blueLight: '#CFE5FE',
    blueBorder: '#69AFFF',
    blue500: '#479CFE',
    blue700: '#0460C9',

    // Neutrals
    gray50: '#F7F7F7',
    gray100: '#F1F5F9',
    gray200: '#E7E8E8',
    gray300: '#DEE2E6',
    grayBorder: '#C2CAD0',
    gray400: '#A6A6A6',
    gray500: '#8A8A8A',
    gray600: '#7E7E7E',
    gray700: '#515151',
    gray800: '#363636',
  },

  // Typography — Inter only
  font: {
    family: "'Inter', sans-serif",
  },

} as const

// Inject tokens as CSS custom properties on :root
export function injectTheme() {
  const root = document.documentElement.style

  for (const [key, value] of Object.entries(theme.color)) {
    root.setProperty(`--c-${camelToKebab(key)}`, value)
  }

  root.setProperty('--font', theme.font.family)
}

function camelToKebab(str: string): string {
  return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
}
