import type { Metadata } from 'next'
import BlogView from '@/components/pages/BlogView'

export const metadata: Metadata = {
  title: 'Blog & Stories',
  description:
    'Updates, stories and news from Doon Welfare Foundation.',
  alternates: { canonical: '/blog' },
}

export default function Page() {
  return <BlogView />
}
