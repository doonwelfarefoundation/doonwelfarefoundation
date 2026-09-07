'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useLanguage } from '@/i18n/LanguageProvider'
import { langNames, langOrder, type Lang } from '@/i18n/translations'
import { useTheme } from '@/theme/ThemeProvider'

function LanguageSelect({ onDark }: { onDark: boolean }) {
  const { lang, setLang, t } = useLanguage()
  return (
    <div className="relative inline-flex items-center">
      <svg
        className={`pointer-events-none absolute left-2.5 h-4 w-4 ${
          onDark ? 'text-white/80' : 'text-ink'
        }`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
      </svg>
      <select
        value={lang}
        onChange={(e) => setLang(e.target.value as Lang)}
        aria-label={t.a11y.selectLanguage}
        className={`cursor-pointer appearance-none rounded-full border bg-transparent py-1.5 pl-8 pr-7 text-sm font-medium outline-none transition ${
          onDark
            ? 'border-white/30 text-white'
            : 'border-line text-ink'
        }`}
      >
        {langOrder.map((l) => (
          <option key={l} value={l} className="text-ink">
            {langNames[l]}
          </option>
        ))}
      </select>
      <svg
        className={`pointer-events-none absolute right-2.5 h-3.5 w-3.5 ${
          onDark ? 'text-white/80' : 'text-ink'
        }`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  )
}

function ThemeToggle({ onDark }: { onDark: boolean }) {
  const { theme, toggle } = useTheme()
  const { t } = useLanguage()
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={t.a11y.toggleTheme}
      className={`flex h-9 w-9 items-center justify-center rounded-full border transition ${
        onDark
          ? 'border-white/30 text-white hover:bg-white/10'
          : 'border-line text-ink hover:bg-brand-green/5'
      }`}
    >
      {theme === 'dark' ? (
        // Sun — shown in dark mode (click to go light)
        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      ) : (
        // Moon — shown in light mode (click to go dark)
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
        </svg>
      )}
    </button>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { t } = useLanguage()

  const links = [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.whatWeDo, href: '#focus' },
    { label: t.nav.getInvolved, href: '#involved' },
    { label: t.nav.contact, href: '#contact' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-surface/90 shadow-md shadow-black/5 backdrop-blur'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a href="#home" className="flex items-center gap-3" aria-label={t.a11y.home}>
          <Image src="/logo.svg" alt="Doon Welfare Foundation logo" width={44} height={44} priority />
          <span
            className={`font-display text-lg font-bold leading-tight tracking-tight transition-colors ${
              scrolled ? 'text-ink' : 'text-white'
            }`}
          >
            Doon Welfare
            <span className="block text-xs font-medium tracking-wide opacity-80">
              Foundation
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors hover:text-brand-gold ${
                scrolled ? 'text-ink' : 'text-white/90'
              }`}
            >
              {l.label}
            </a>
          ))}
          <LanguageSelect onDark={!scrolled} />
          <ThemeToggle onDark={!scrolled} />
          <a
            href="#contact"
            className="rounded-full bg-brand-gold px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-brand-gold/30 transition hover:bg-brand-gold-light"
          >
            {t.nav.donate}
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle onDark={!scrolled} />
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className={scrolled ? 'text-ink' : 'text-white'}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-line bg-surface px-5 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-ink"
              >
                {l.label}
              </a>
            ))}
            <div className="pt-1">
              <LanguageSelect onDark={false} />
            </div>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-full bg-brand-gold px-5 py-2 text-center text-sm font-semibold text-white"
            >
              {t.nav.donate}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
