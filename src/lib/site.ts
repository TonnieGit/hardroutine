// Single source of truth for placeholder values from spec.md §0.
// Every value below is a placeholder. Replace before launch.
export const site = {
  name: 'Hard Routine',
  url: 'https://www.hardroutine.com.au',
  phone: '(07) 5555 5555',
  phoneSchema: '+61 7 5555 5555',
  email: 'hello@hardroutine.com.au',
  abn: '00 000 000 000',
  postalAddress: 'PO Box 000, Brisbane QLD 4000',
  addressLocality: 'Brisbane',
  addressRegion: 'QLD',
  postalCode: '4000',
  social: {
    instagram: 'https://www.instagram.com/hardroutine',
    youtube: 'https://www.youtube.com/@hardroutine',
    facebook: 'https://www.facebook.com/hardroutine',
  },
  launchWindow: 'early 2027',
  foundingYear: '2026',
} as const;
