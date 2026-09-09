'use client'

import PageHero from '@/components/PageHero'
import { events } from '@/content'
import { useLanguage } from '@/i18n/LanguageProvider'
import { langNames, type Lang } from '@/i18n/translations'

const localeFor: Record<Lang, string> = { en: 'en-IN', hi: 'hi-IN', pa: 'pa-IN' }

export default function EventsView() {
  const { t, lang } = useLanguage()
  const today = new Date().toISOString().slice(0, 10)
  const sorted = [...events].sort((a, b) => a.date.localeCompare(b.date))
  const upcoming = sorted.filter((e) => e.date >= today)
  const past = sorted.filter((e) => e.date < today).reverse()

  const fmt = (iso: string) =>
    new Date(iso).toLocaleDateString(localeFor[lang], {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })

  const List = ({ items }: { items: typeof events }) => (
    <div className="space-y-4">
      {items.map((e, i) => (
        <div
          key={i}
          className="flex flex-col gap-3 rounded-3xl border border-line bg-card p-6 sm:flex-row sm:items-center sm:gap-6"
        >
          <div className="flex-none rounded-2xl bg-brand-green/10 px-5 py-4 text-center">
            <p className="font-display text-2xl font-bold text-brand-green-light">
              {new Date(e.date).getDate()}
            </p>
            <p className="text-xs font-medium uppercase text-muted">
              {new Date(e.date).toLocaleDateString(localeFor[lang], { month: 'short' })}
            </p>
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold text-ink">{e.title}</h3>
            <p className="mt-1 text-sm text-body">{e.blurb}</p>
            <p className="mt-2 text-xs text-muted">
              {fmt(e.date)} · {e.location}
            </p>
          </div>
        </div>
      ))}
    </div>
  )

  return (
    <>
      <PageHero title={t.pages.events.title} subtitle={t.pages.events.subtitle} />
      <section className="mx-auto max-w-4xl px-5 py-20 md:py-24" aria-label={langNames[lang]}>
        {upcoming.length > 0 && (
          <>
            <h2 className="font-display text-2xl font-bold text-ink">{t.common.upcoming}</h2>
            <div className="mt-6">
              <List items={upcoming} />
            </div>
          </>
        )}
        {past.length > 0 && (
          <>
            <h2 className="mt-14 font-display text-2xl font-bold text-ink">{t.common.past}</h2>
            <div className="mt-6 opacity-80">
              <List items={past} />
            </div>
          </>
        )}
      </section>
    </>
  )
}
