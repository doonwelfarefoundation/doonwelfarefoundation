import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import PostView from '@/components/pages/PostView'
import { posts } from '@/content'
import { org } from '@/data'

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)
  if (!post) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    articleBody: post.body.join('\n\n'),
    author: { '@type': 'NGO', name: org.name, url: org.siteUrl },
    publisher: {
      '@type': 'NGO',
      name: org.name,
      logo: { '@type': 'ImageObject', url: `${org.siteUrl}/icons/icon-512.png` },
    },
    mainEntityOfPage: `${org.siteUrl}/blog/${post.slug}`,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PostView post={post} />
    </>
  )
}
