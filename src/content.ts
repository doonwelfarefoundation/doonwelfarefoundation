import type { FocusKey } from './data'

/**
 * Long-form / editable content for the site.
 *
 * UI chrome (menus, headings, buttons) is translated in `src/i18n/translations.ts`.
 * The items below are authored content — edit them here. If you later want them in
 * Hindi/Punjabi too, duplicate per language or wire up a CMS.
 *
 * NOTE: images are styled placeholder tiles until real photos are supplied.
 */

// Extra detail shown on each cause page (title + short desc come from translations).
export const causeDetails: Record<FocusKey, { points: string[] }> = {
  education: {
    points: [
      'Sponsoring school and tuition fees for children in need',
      'Distributing books, stationery, bags and uniforms',
      'Merit scholarships for promising students',
      'Mentoring and career guidance',
    ],
  },
  marriage: {
    points: [
      'Support towards essential wedding expenses for daughters',
      'Assistance is need-based and follows our internal policy',
      'Handled with privacy and dignity for the family',
    ],
  },
  environment: {
    points: [
      'Tree-plantation drives across villages and schools',
      'Cleanliness and anti-litter campaigns',
      'Water-conservation awareness',
      'Creating and maintaining green spaces',
    ],
  },
  water: {
    points: [
      'Installing drinking-water points at public places',
      'Water coolers/RO units for schools and community areas',
      'Ongoing maintenance and cleaning',
    ],
  },
  animal: {
    points: [
      'Food and shelter for stray and abandoned animals',
      'Treatment and vaccination support',
      'Rescue of injured and distressed animals',
      'Awareness on kindness to animals',
    ],
  },
  relief: {
    points: [
      'Ration, essentials and clothing for families in need',
      'Support during emergencies and difficult times',
      'Other community-development activities',
    ],
  },
}

export type Campaign = {
  slug: string
  title: string
  blurb: string
  goal: number
  raised: number
  cause: FocusKey
  // AI-generated image lives at /campaigns/<slug>.jpg (see prompt used below).
}

export const campaigns: Campaign[] = [
  {
    slug: 'winter-relief',
    title: 'Winter Relief Drive',
    blurb: 'Blankets, warm clothes and essentials for families through the cold Himalayan winter.',
    goal: 700000,
    raised: 0,
    cause: 'relief',
  },
  {
    slug: 'feed-the-strays',
    title: 'Feed the Strays',
    blurb: 'Daily meals and treatment support for stray and abandoned animals in Barotiwala.',
    goal: 600000,
    raised: 0,
    cause: 'animal',
  },
  {
    slug: 'free-books-ews',
    title: 'Free Books for EWS',
    blurb: 'Free books, uniforms and school supplies for children from the Economically Weaker Section (EWS) so no child misses out on education.',
    goal: 800000,
    raised: 0,
    cause: 'education',
  },
  {
    slug: 'green-doon',
    title: 'Green Doon',
    blurb: 'Planting and nurturing 5,000 trees across villages and schools this year.',
    goal: 550000,
    raised: 0,
    cause: 'environment',
  },
  {
    slug: 'daughter-marriage',
    title: 'Daughter Marriage Support',
    blurb: 'Helping families who cannot afford essential wedding expenses give their daughters a dignified marriage.',
    goal: 1000000,
    raised: 0,
    cause: 'marriage',
  },
]

// Prompts used to generate /campaigns/<slug>.jpg (keyed by slug), for regeneration.
export const campaignImagePrompts: Record<string, string> = {
  'winter-relief':
    'volunteers distributing warm blankets and winter clothes to poor families in cold Himalayan India, documentary photograph',
  'feed-the-strays':
    'kind volunteer feeding a group of stray dogs and a cow on an Indian street, documentary photograph',
  'free-books-ews':
    'children in a rural Indian school receiving free books and uniforms, happy, documentary photograph',
  'green-doon':
    'volunteers planting many tree saplings on a green hillside in Himachal India, documentary photograph',
  'daughter-marriage':
    'simple traditional Indian wedding ceremony supported by the community, warm respectful documentary photograph',
}

export type EventItem = {
  title: string
  date: string // ISO date
  location: string
  blurb: string
}

export const events: EventItem[] = [
  {
    title: 'Free Health & Animal Care Camp',
    date: '2026-10-12',
    location: 'Community Ground, Johranpur',
    blurb: 'A day of check-ups and care for both people and animals, with volunteers and local vets.',
  },
  {
    title: 'Tree Plantation Morning',
    date: '2026-11-02',
    location: 'Govt. School, Barotiwala',
    blurb: 'Join us to plant 500 saplings with students and volunteers.',
  },
  {
    title: 'Winter Blanket Distribution',
    date: '2026-12-20',
    location: 'Barotiwala & nearby villages',
    blurb: 'Distributing blankets and warm clothing to families in need.',
  },
  {
    title: 'Annual Volunteer Meet',
    date: '2026-10-10',
    location: 'Foundation Office',
    blurb: 'Celebrating our volunteers and planning the year ahead.',
  },
]

export type GalleryItem = { caption: string; cause: FocusKey; prompt: string }

// `prompt` drives the AI-generated image (see galleryImageUrl below).
// Replace with real photos when available.
export const gallery: GalleryItem[] = [
  {
    caption: 'Books & uniforms distribution',
    cause: 'education',
    prompt: 'volunteers giving school books and uniforms to smiling children in rural India, warm documentary photography',
  },
  {
    caption: 'Feeding stray dogs',
    cause: 'animal',
    prompt: 'kind volunteer feeding stray dogs on an Indian street, documentary photograph, soft daylight',
  },
  {
    caption: 'Plantation drive',
    cause: 'environment',
    prompt: 'group of Indian volunteers planting tree saplings in a village on a sunny day, documentary photograph',
  },
  {
    caption: 'Drinking-water point',
    cause: 'water',
    prompt: 'public drinking water tap station in an Indian village, people filling water, documentary photograph',
  },
  {
    caption: 'Ration kits for families',
    cause: 'relief',
    prompt: 'volunteers distributing food ration kits to needy families in India, documentary photograph',
  },
  {
    caption: 'Daughter marriage support',
    cause: 'marriage',
    prompt: 'simple traditional Indian wedding ceremony supported by community, warm respectful documentary photograph',
  },
  {
    caption: 'Animal care camp',
    cause: 'animal',
    prompt: 'veterinary health camp caring for animals in rural India with volunteers, documentary photograph',
  },
  {
    caption: 'Cleanliness campaign',
    cause: 'environment',
    prompt: 'volunteers cleaning up litter in an Indian village with gloves and bags, documentary photograph',
  },
]

// Builds a stable AI-generated image URL for a gallery item (Pollinations).
// Swap this for local `/gallery/*.jpg` files once you have real photos.
export const galleryImageUrl = (prompt: string, seed: number, size = 600) =>
  `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=${size}&height=${size}&seed=${seed}&nologo=true`

export type Post = {
  slug: string
  title: string
  date: string
  excerpt: string
  body: string[]
}

export const posts: Post[] = [
  {
    slug: 'why-we-started',
    title: 'Why we started Doon Welfare Foundation',
    date: '2026-07-01',
    excerpt: 'A short note on the belief that brought a few neighbours together to help people, animals and nature.',
    body: [
      'Doon Welfare Foundation began with a simple idea — that small, sincere acts of kindness, done consistently, can change a community.',
      'What started as a handful of volunteers feeding strays and helping children with school supplies has grown into work across six focus areas.',
      'This blog is where we will share updates, stories and the impact your support makes. Thank you for being part of the journey.',
    ],
  },
  {
    slug: 'winter-relief-2026',
    title: 'Winter Relief 2026: how you can help',
    date: '2026-11-15',
    excerpt: 'As the cold sets in, families and animals need our support. Here is how the winter drive works.',
    body: [
      'Every winter, the Himalayan cold hits vulnerable families and street animals the hardest.',
      'Our Winter Relief Drive distributes blankets, warm clothing and essentials — and warm meals for strays.',
      'You can help by donating or volunteering. Reach out on WhatsApp to get involved.',
    ],
  },
]

export type TeamMember = { name: string; role: string }

// Placeholder — replace with the foundation's real founders / team.
export const team: TeamMember[] = [
  { name: 'Founder Name', role: 'Founder & President' },
  { name: 'Co-founder Name', role: 'Secretary' },
  { name: 'Member Name', role: 'Treasurer' },
  { name: 'Member Name', role: 'Volunteer Coordinator' },
]

// Placeholder donation details — REPLACE with the foundation's real bank/UPI info.
export const donation = {
  upiId: 'doonwelfarefoundation@upi',
  accountName: 'Doon Welfare Foundation',
  accountNumber: 'XXXXXXXXXXXX',
  ifsc: 'XXXX0000000',
  bankName: 'Bank name',
  branch: 'Barotiwala',
}

export const inr = (n: number) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(n)
