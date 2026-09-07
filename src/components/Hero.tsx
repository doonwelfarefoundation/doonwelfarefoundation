'use client'

import Image from 'next/image'
import { useLanguage } from '@/i18n/LanguageProvider'

export default function Hero() {
  const { t } = useLanguage()
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-brand-green-dark via-brand-green to-brand-green-light"
    >
      {/* decorative gradient blobs */}
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand-gold/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-brand-green-light/40 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_45%)]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 pb-24 pt-32 md:grid-cols-2 md:pb-32 md:pt-40">
        <div className="animate-fade-up">
          <h1 className="font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            {t.hero.titleBefore}
            <span className="bg-gradient-to-r from-brand-gold-light to-brand-gold bg-clip-text text-transparent">
              {t.hero.titleHighlight}
            </span>
            {t.hero.titleAfter}
          </h1>

          <p className="mt-6 max-w-md text-lg leading-relaxed text-white/85">
            {t.hero.intro}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#involved"
              className="rounded-full bg-brand-gold px-7 py-3 font-semibold text-white shadow-xl shadow-brand-gold/30 transition hover:-translate-y-0.5 hover:bg-brand-gold-light"
            >
              {t.hero.getInvolved}
            </a>
            <a
              href="#about"
              className="rounded-full border border-white/30 bg-white/5 px-7 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/15"
            >
              {t.hero.learnMore}
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="animate-float-slow relative">
            <div className="absolute inset-0 scale-110 rounded-full bg-white/10 blur-2xl" />
            <div className="relative flex h-64 w-64 items-center justify-center rounded-full bg-white/95 shadow-2xl ring-8 ring-white/20 sm:h-80 sm:w-80">
              <Image
                src="/logo.svg"
                alt="Doon Welfare Foundation logo"
                width={240}
                height={240}
                priority
                className="h-48 w-48 sm:h-60 sm:w-60"
              />
            </div>
          </div>
        </div>
      </div>

      {/* wave divider — matches the surface colour of the section below */}
      <div className="relative">
        <svg
          className="block w-full text-surface"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M0 40c240 40 480 40 720 20s480-40 720-20v40H0Z"
          />
        </svg>
      </div>
    </section>
  )
}
