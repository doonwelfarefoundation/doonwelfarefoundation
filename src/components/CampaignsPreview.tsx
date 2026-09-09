'use client'

import Link from 'next/link'
import { campaigns } from '@/content'
import { useLanguage } from '@/i18n/LanguageProvider'
import CampaignCard from './CampaignCard'

export default function CampaignsPreview() {
  const { t } = useLanguage()
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:py-24">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="max-w-xl">
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-brand-gold">
            {t.nav.campaigns}
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
            {t.pages.campaigns.title}
          </h2>
          <p className="mt-3 text-lg text-body">{t.pages.campaigns.subtitle}</p>
        </div>
        <Link
          href="/campaigns"
          className="rounded-full border border-brand-green/30 px-5 py-2.5 text-sm font-semibold text-brand-green-light transition hover:bg-brand-green/5"
        >
          {t.common.viewAll}
        </Link>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {campaigns.slice(0, 3).map((c) => (
          <CampaignCard key={c.slug} campaign={c} />
        ))}
      </div>
    </section>
  )
}
