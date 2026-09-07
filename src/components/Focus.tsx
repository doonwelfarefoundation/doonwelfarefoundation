'use client'

import { focusAreas } from '@/data'
import { useLanguage } from '@/i18n/LanguageProvider'
import Icon from './Icon'

export default function Focus() {
  const { t } = useLanguage()
  return (
    <section
      id="focus"
      className="relative bg-gradient-to-b from-card to-surface py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-brand-gold">
            {t.focus.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
            {t.focus.heading}
          </h2>
          <p className="mt-4 text-lg text-body">{t.focus.subtitle}</p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {focusAreas.map((f) => (
            <div
              key={f.key}
              className="group rounded-3xl border border-line bg-card p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand-gold/40 hover:shadow-xl hover:shadow-black/10"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-green to-brand-green-light text-white shadow-lg shadow-brand-green/20 transition group-hover:from-brand-gold group-hover:to-brand-gold-light">
                <Icon name={f.icon} className="h-7 w-7" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                {t.focus.items[f.key].title}
              </h3>
              <p className="mt-2 leading-relaxed text-body">
                {t.focus.items[f.key].desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
