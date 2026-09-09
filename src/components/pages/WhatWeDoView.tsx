'use client'

import Link from 'next/link'
import Icon from '@/components/Icon'
import PageHero from '@/components/PageHero'
import { focusAreas } from '@/data'
import { useLanguage } from '@/i18n/LanguageProvider'

export default function WhatWeDoView() {
  const { t } = useLanguage()
  return (
    <>
      <PageHero title={t.pages.whatWeDo.title} subtitle={t.pages.whatWeDo.subtitle} />
      <section className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {focusAreas.map((f) => (
            <Link
              key={f.key}
              href={`/what-we-do/${f.key}`}
              className="group flex flex-col rounded-3xl border border-line bg-card p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand-gold/40 hover:shadow-xl hover:shadow-black/10"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-green to-brand-green-light text-white shadow-lg shadow-brand-green/20 transition group-hover:from-brand-gold group-hover:to-brand-gold-light">
                <Icon name={f.icon} className="h-7 w-7" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                {t.focus.items[f.key].title}
              </h3>
              <p className="mt-2 flex-1 leading-relaxed text-body">
                {t.focus.items[f.key].desc}
              </p>
              <span className="mt-4 text-sm font-semibold text-brand-gold">
                {t.common.learnMore} →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
