'use client'

import CampaignCard from '@/components/CampaignCard'
import PageHero from '@/components/PageHero'
import { campaigns } from '@/content'
import { useLanguage } from '@/i18n/LanguageProvider'

export default function CampaignsView() {
  const { t } = useLanguage()
  return (
    <>
      <PageHero title={t.pages.campaigns.title} subtitle={t.pages.campaigns.subtitle} />
      <section className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {campaigns.map((c) => (
            <CampaignCard key={c.slug} campaign={c} />
          ))}
        </div>
      </section>
    </>
  )
}
