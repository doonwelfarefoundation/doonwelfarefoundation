'use client'

import { org } from '@/data'
import { useLanguage } from '@/i18n/LanguageProvider'

export default function GetInvolved() {
  const { t } = useLanguage()

  const ways = [
    { title: t.involved.volunteerTitle, text: t.involved.volunteerText },
    { title: t.involved.donateTitle, text: t.involved.donateText },
    { title: t.involved.partnerTitle, text: t.involved.partnerText },
  ]

  return (
    <section id="involved" className="mx-auto max-w-6xl px-5 py-20 md:py-24">
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-green-dark via-brand-green to-brand-green-light p-8 shadow-2xl shadow-brand-green/20 sm:p-12">
        <div className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-brand-gold/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 left-10 h-56 w-56 rounded-full bg-white/10 blur-3xl" />

        <div className="relative">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              {t.involved.heading}
            </h2>
            <p className="mt-4 text-lg text-white/85">{t.involved.intro}</p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {ways.map((w) => (
              <div
                key={w.title}
                className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur"
              >
                <h3 className="font-display text-lg font-semibold text-brand-gold-light">
                  {w.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/85">
                  {w.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={`https://wa.me/${org.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-brand-gold px-7 py-3 font-semibold text-white shadow-lg shadow-brand-gold/30 transition hover:-translate-y-0.5 hover:bg-brand-gold-light"
            >
              {t.involved.contactBtn}
            </a>
            <a
              href={org.phoneHref}
              className="rounded-full border border-white/30 bg-white/5 px-7 py-3 font-semibold text-white transition hover:bg-white/15"
            >
              {t.involved.callBtn.replace('{phone}', org.phone)}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
