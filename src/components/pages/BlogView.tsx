'use client'

import Link from 'next/link'
import PageHero from '@/components/PageHero'
import { posts } from '@/content'
import { useLanguage } from '@/i18n/LanguageProvider'
import { type Lang } from '@/i18n/translations'

const localeFor: Record<Lang, string> = { en: 'en-IN', hi: 'hi-IN', pa: 'pa-IN' }

export default function BlogView() {
  const { t, lang } = useLanguage()
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date))

  return (
    <>
      <PageHero title={t.pages.blog.title} subtitle={t.pages.blog.subtitle} />
      <section className="mx-auto max-w-4xl px-5 py-20 md:py-24">
        <div className="space-y-6">
          {sorted.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="block rounded-3xl border border-line bg-card p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10"
            >
              <p className="text-xs font-medium uppercase tracking-wide text-brand-gold">
                {new Date(p.date).toLocaleDateString(localeFor[lang], {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-ink">{p.title}</h2>
              <p className="mt-2 text-body">{p.excerpt}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-brand-gold">
                {t.common.readMore} →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
