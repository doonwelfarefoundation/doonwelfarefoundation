import type { MetadataRoute } from 'next'
import { org } from '@/data'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: org.name,
    short_name: 'Doon Welfare',
    description: org.description,
    start_url: '/',
    scope: '/',
    display: 'standalone',
    orientation: 'portrait',
    background_color: '#f8f6f0',
    theme_color: '#1f5f43',
    lang: 'en',
    categories: ['education', 'social', 'lifestyle'],
    icons: [
      { src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'maskable' },
      { src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  }
}
