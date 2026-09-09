import type { MetadataRoute } from 'next'
import { posts } from '@/content'
import { org, focusAreas } from '@/data'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = org.siteUrl
  const now = new Date()

  const staticPaths = [
    '',
    '/about',
    '/what-we-do',
    '/campaigns',
    '/events',
    '/gallery',
    '/blog',
    '/donate',
    '/contact',
  ]

  const causePaths = focusAreas.map((f) => `/what-we-do/${f.key}`)
  const postPaths = posts.map((p) => `/blog/${p.slug}`)

  return [...staticPaths, ...causePaths, ...postPaths].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : 0.7,
  }))
}
