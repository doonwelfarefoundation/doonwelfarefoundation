'use client'

import About from '@/components/About'
import PageHero from '@/components/PageHero'
import { team } from '@/content'
import { useLanguage } from '@/i18n/LanguageProvider'

export default function AboutView() {
  const { t } = useLanguage()
  return (
    <>
      <PageHero title={t.pages.about.title} subtitle={t.pages.about.subtitle} />
      <About />
      <section className="mx-auto max-w-6xl px-5 pb-20 md:pb-28">
        <h2 className="text-center font-display text-3xl font-bold text-ink sm:text-4xl">
          {t.common.team}
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m, i) => (
            <div
              key={i}
              className="rounded-3xl border border-line bg-card p-6 text-center shadow-sm"
            >
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-brand-green to-brand-green-light text-2xl font-bold text-white">
                {m.name.charAt(0)}
              </div>
              <p className="mt-4 font-display font-semibold text-ink">{m.name}</p>
              <p className="mt-1 text-sm text-muted">{m.role}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
