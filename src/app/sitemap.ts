import type { MetadataRoute } from 'next'
import { org } from '@/data'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: org.siteUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
