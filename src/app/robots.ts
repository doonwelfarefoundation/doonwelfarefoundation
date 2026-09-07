import type { MetadataRoute } from 'next'
import { org } from '@/data'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${org.siteUrl}/sitemap.xml`,
  }
}
