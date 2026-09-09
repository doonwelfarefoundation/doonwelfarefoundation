'use client'

import Link from 'next/link'
import Icon from '@/components/Icon'
import PageHero from '@/components/PageHero'
import { causeDetails } from '@/content'
import type { FocusKey } from '@/data'
import { useLanguage } from '@/i18n/LanguageProvider'

export default function CauseView({ cause }: { cause: FocusKey }) {
  const { t } = useLanguage()
  const item = t.focus.items[cause]

  return (
    <>
      <PageHero title={item.title} subtitle={item.desc} />
      <section className="mx-auto max-w-4xl px-5 py-20 md:py-24">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 flex-none items-center justify-center rounded-2xl bg-gradient-to-br from-brand-green to-brand-green-light text-white">
            <Icon name={cause} className="h-8 w-8" />
          </div>
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-brand-gold">
            {t.common.howWeHelp}
          </p>
        </div>

        <ul className="mt-8 space-y-4">
          {causeDetails[cause].points.map((p, i) => (
            <li key={i} className="flex items-start gap-3 rounded-2xl border border-line bg-card p-5">
              <svg className="mt-0.5 h-5 w-5 flex-none text-brand-green-light" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-body">{p}</span>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/donate"
            className="rounded-full bg-brand-gold px-7 py-3 font-semibold text-white shadow-lg shadow-brand-gold/30 transition hover:-translate-y-0.5 hover:bg-brand-gold-light"
          >
            {t.common.donateNow}
          </Link>
          <Link
            href="/what-we-do"
            className="rounded-full border border-brand-green/30 px-7 py-3 font-semibold text-brand-green-light transition hover:bg-brand-green/5"
          >
            {t.nav.whatWeDo}
          </Link>
        </div>
      </section>
    </>
  )
}
