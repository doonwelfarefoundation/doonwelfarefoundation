import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import PostView from '@/components/pages/PostView'
import { posts } from '@/content'

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
  return <PostView post={post} />
}
