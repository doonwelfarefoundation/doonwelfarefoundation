'use client'

import Image from 'next/image'
import { org } from '@/data'
import { useLanguage } from '@/i18n/LanguageProvider'

export default function Footer() {
  const { t } = useLanguage()

  const links = [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.whatWeDo, href: '#focus' },
    { label: t.nav.getInvolved, href: '#involved' },
    { label: t.nav.contact, href: '#contact' },
  ]

  return (
    <footer className="bg-brand-green-dark text-white/80">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <Image src="/logo.svg" alt="Doon Welfare Foundation logo" width={48} height={48} />
              <span className="font-display text-lg font-bold text-white">
                Doon Welfare
                <span className="block text-xs font-medium opacity-70">
                  Foundation
                </span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              {t.hero.intro.split('.')[0]}.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white">
              {t.footer.explore}
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="transition hover:text-brand-gold-light">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white">
              {t.footer.reachUs}
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>
                <a href={org.phoneHref} className="transition hover:text-brand-gold-light">
                  {org.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${org.email}`}
                  className="break-all transition hover:text-brand-gold-light"
                >
                  {org.email}
                </a>
              </li>
              <li className="pt-1 leading-relaxed">
                {org.address.line1}, {org.address.line2}
                <br />
                {org.address.cityState} — {org.address.pin}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-white/60">
          © {new Date().getFullYear()} {org.name}. {t.footer.madeWith}
        </div>
      </div>
    </footer>
  )
}
