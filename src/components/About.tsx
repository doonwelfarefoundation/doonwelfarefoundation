'use client'

import { stats } from '@/data'
import { useLanguage } from '@/i18n/LanguageProvider'

export default function About() {
  const { t } = useLanguage()
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-brand-gold">
            {t.about.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
            {t.about.heading}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-body">{t.about.p1}</p>
          <p className="mt-4 text-lg leading-relaxed text-body">{t.about.p2}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <div className="rounded-2xl bg-brand-green/5 px-5 py-4">
              <p className="font-display font-semibold text-brand-green-light">
                {t.about.missionLabel}
              </p>
              <p className="mt-1 text-sm text-body">{t.about.missionText}</p>
            </div>
            <div className="rounded-2xl bg-brand-gold/10 px-5 py-4">
              <p className="font-display font-semibold text-brand-gold">
                {t.about.visionLabel}
              </p>
              <p className="mt-1 text-sm text-body">{t.about.visionText}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5">
          {stats.map((s) => (
            <div
              key={s.key}
              className="rounded-3xl border border-line bg-card p-7 text-center shadow-lg shadow-black/5"
            >
              <p className="bg-gradient-to-br from-brand-green to-brand-green-light bg-clip-text font-display text-4xl font-extrabold text-transparent">
                {s.value}
              </p>
              <p className="mt-2 text-sm font-medium text-muted">
                {t.stats[s.key]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
