'use client'

import Image from 'next/image'
import Link from 'next/link'
import { inr, type Campaign } from '@/content'
import { useLanguage } from '@/i18n/LanguageProvider'

export default function CampaignCard({ campaign }: { campaign: Campaign }) {
  const { t } = useLanguage()
  const pct = Math.min(100, Math.round((campaign.raised / campaign.goal) * 100))

  return (
    <div className="flex flex-col overflow-hidden rounded-3xl border border-line bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10">
      <div className="relative h-44 bg-gradient-to-br from-brand-green to-brand-green-light">
        <Image
          src={`/campaigns/${campaign.slug}.jpg`}
          alt={campaign.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
        <span className="absolute left-4 top-4 z-10 rounded-full bg-black/40 px-3 py-1 text-xs font-medium text-white backdrop-blur">
          {t.focus.items[campaign.cause].title}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-semibold text-ink">{campaign.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-body">{campaign.blurb}</p>

        <div className="mt-4">
          <div className="h-2 w-full overflow-hidden rounded-full bg-brand-green/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-brand-gold to-brand-gold-light"
              style={{ width: `${pct}%` }}
            />
          </div>
          <div className="mt-2 flex justify-between text-xs text-muted">
            <span className="font-semibold text-ink">
              {inr(campaign.raised)} <span className="font-normal">{t.common.raised}</span>
            </span>
            <span>
              {t.common.goalLabel} {inr(campaign.goal)}
            </span>
          </div>
        </div>

        <Link
          href="/donate"
          className="mt-5 rounded-full bg-brand-gold px-5 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-brand-gold-light"
        >
          {t.common.support}
        </Link>
      </div>
    </div>
  )
}
