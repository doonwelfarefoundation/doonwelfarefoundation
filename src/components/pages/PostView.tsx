'use client'

import Link from 'next/link'
import PageHero from '@/components/PageHero'
import type { Post } from '@/content'
import { useLanguage } from '@/i18n/LanguageProvider'
import { type Lang } from '@/i18n/translations'

const localeFor: Record<Lang, string> = { en: 'en-IN', hi: 'hi-IN', pa: 'pa-IN' }

export default function PostView({ post }: { post: Post }) {
  const { t, lang } = useLanguage()
  return (
    <>
      <PageHero
        title={post.title}
        subtitle={new Date(post.date).toLocaleDateString(localeFor[lang], {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        })}
      />
      <article className="mx-auto max-w-3xl px-5 py-20 md:py-24">
        <div className="space-y-5 text-lg leading-relaxed text-body">
          {post.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
        <Link
          href="/blog"
          className="mt-10 inline-block text-sm font-semibold text-brand-gold hover:underline"
        >
          ← {t.nav.blog}
        </Link>
      </article>
    </>
  )
}
