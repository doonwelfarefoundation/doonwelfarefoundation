export const org = {
  name: 'Doon Welfare Foundation',
  tagline: 'Compassion in action for every life we touch.',
  description:
    'Doon Welfare Foundation is a volunteer-driven non-profit in Barotiwala, Himachal Pradesh, working across education support, daughter/marriage support, environment and plantation, public drinking water, animal welfare and general relief.',
  // Override in production by setting NEXT_PUBLIC_SITE_URL in Vercel project settings.
  siteUrl: (
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://doonwelfarefoundation.org'
  ).replace(/\/$/, ''),
  email: 'doonwelfarefoundation@gmail.com',
  phone: '9716186777',
  phoneHref: 'tel:+919716186777',
  whatsapp: '919716186777',
  address: {
    line1: 'House Number 192',
    line2: 'Village Johranpur, PO Barotiwala',
    landmark: 'Landmark: IJ Industries',
    cityState: 'Barotiwala, Himachal Pradesh',
    pin: '174103',
  },
} as const

export type FocusKey =
  | 'education'
  | 'marriage'
  | 'environment'
  | 'water'
  | 'animal'
  | 'relief'

// Text lives in the translation dictionaries; keyed by `key`.
export const focusAreas: { key: FocusKey; icon: FocusKey }[] = [
  { key: 'education', icon: 'education' },
  { key: 'marriage', icon: 'marriage' },
  { key: 'environment', icon: 'environment' },
  { key: 'water', icon: 'water' },
  { key: 'animal', icon: 'animal' },
  { key: 'relief', icon: 'relief' },
]

export type StatKey = 'lives' | 'drives' | 'areas' | 'volunteer'

export const stats: { key: StatKey; value: string }[] = [
  { key: 'lives', value: '1000+' },
  { key: 'drives', value: '25+' },
  { key: 'areas', value: '6' },
  { key: 'volunteer', value: '100%' },
]
