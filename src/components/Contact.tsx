'use client'

import { useState } from 'react'
import { org } from '@/data'
import { useLanguage } from '@/i18n/LanguageProvider'

function ContactCard({
  label,
  value,
  href,
  children,
}: {
  label: string
  value: React.ReactNode
  href?: string
  children: React.ReactNode
}) {
  const inner = (
    <div className="flex items-start gap-4 rounded-2xl border border-line bg-card p-5 shadow-sm transition hover:border-brand-gold/40 hover:shadow-md">
      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-brand-green/10 text-brand-green-light">
        {children}
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-brand-gold">
          {label}
        </p>
        <div className="mt-0.5 font-medium text-ink">{value}</div>
      </div>
    </div>
  )
  return href ? (
    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="block">
      {inner}
    </a>
  ) : (
    inner
  )
}

export default function Contact() {
  const { t } = useLanguage()
  const [sent, setSent] = useState(false)
  const { address } = org

  const mapQuery = encodeURIComponent(
    `${address.line1}, ${address.line2}, ${address.cityState} ${address.pin}`,
  )

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const message = [
      `*${t.contact.waTitle} — ${org.name}*`,
      '',
      `*${t.contact.waName}:* ${data.get('name')}`,
      `*${t.contact.waEmail}:* ${data.get('email')}`,
      `*${t.contact.waMessage}:* ${data.get('message')}`,
    ].join('\n')
    // Open WhatsApp chat with the foundation, pre-filled with the enquiry.
    window.open(
      `https://wa.me/${org.whatsapp}?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer',
    )
    setSent(true)
  }

  return (
    <section id="contact" className="relative py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* details + map */}
          <div className="space-y-4">
            <ContactCard
              label={t.contact.cardWhatsapp}
              value={org.phone}
              href={`https://wa.me/${org.whatsapp}`}
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.5 14.4c-.3-.15-1.7-.84-2-.94-.26-.1-.46-.14-.65.15-.2.29-.75.94-.92 1.13-.17.2-.34.22-.63.08a8.2 8.2 0 0 1-2.4-1.48 9 9 0 0 1-1.67-2.06c-.17-.3 0-.46.13-.6.13-.13.29-.34.43-.5.14-.17.19-.29.29-.48.1-.2.05-.36-.02-.5-.07-.15-.65-1.57-.9-2.15-.23-.56-.47-.48-.65-.49h-.55c-.2 0-.5.07-.76.36-.26.29-1 .98-1 2.4s1.03 2.78 1.17 2.97c.14.2 2.02 3.08 4.9 4.32.68.3 1.22.47 1.63.6.69.22 1.31.19 1.8.12.55-.08 1.7-.7 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.2-.55-.34ZM12 2a10 10 0 0 0-8.53 15.26L2 22l4.85-1.27A10 10 0 1 0 12 2Z" />
              </svg>
            </ContactCard>

            <ContactCard
              label={t.contact.cardEmail}
              value={org.email}
              href={`mailto:${org.email}`}
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm8 7L4 6.2V6l8 5 8-5v.2L12 11Z" />
              </svg>
            </ContactCard>

            <ContactCard
              label={t.contact.cardAddress}
              value={
                <span className="block leading-relaxed">
                  {address.line1}
                  <br />
                  {address.line2}
                  <br />
                  {address.cityState} — {address.pin}
                  <br />
                  <span className="text-sm font-normal text-muted">
                    {t.contact.landmark}
                  </span>
                </span>
              }
              href={`https://maps.google.com/?q=${mapQuery}`}
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
              </svg>
            </ContactCard>

            <div className="overflow-hidden rounded-2xl border border-line shadow-sm">
              <iframe
                title="Map to Doon Welfare Foundation"
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://maps.google.com/maps?q=${mapQuery}&z=13&output=embed`}
              />
            </div>
          </div>

          {/* form */}
          <div className="rounded-3xl border border-line bg-card p-7 shadow-lg shadow-black/5 sm:p-9">
            {sent ? (
              <div className="flex h-full flex-col items-center justify-center py-10 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                  {t.contact.successTitle}
                </h3>
                <p className="mt-2 text-body">{t.contact.successText}</p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-6 text-sm font-semibold text-brand-gold hover:underline"
                >
                  {t.contact.sendAnother}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-semibold text-ink"
                  >
                    {t.contact.formName}
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-xl border border-line bg-surface px-4 py-3 text-ink outline-none transition focus:border-brand-green focus:ring-2 focus:ring-brand-green/20"
                    placeholder={t.contact.formNamePlaceholder}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-semibold text-ink"
                  >
                    {t.contact.formEmail}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-xl border border-line bg-surface px-4 py-3 text-ink outline-none transition focus:border-brand-green focus:ring-2 focus:ring-brand-green/20"
                    placeholder={t.contact.formEmailPlaceholder}
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-semibold text-ink"
                  >
                    {t.contact.formMessage}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full resize-none rounded-xl border border-line bg-surface px-4 py-3 text-ink outline-none transition focus:border-brand-green focus:ring-2 focus:ring-brand-green/20"
                    placeholder={t.contact.formMessagePlaceholder}
                  />
                </div>
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3.5 font-semibold text-white shadow-lg shadow-green-500/20 transition hover:-translate-y-0.5 hover:bg-[#1eb955] hover:shadow-xl"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.5 14.4c-.3-.15-1.7-.84-2-.94-.26-.1-.46-.14-.65.15-.2.29-.75.94-.92 1.13-.17.2-.34.22-.63.08a8.2 8.2 0 0 1-2.4-1.48 9 9 0 0 1-1.67-2.06c-.17-.3 0-.46.13-.6.13-.13.29-.34.43-.5.14-.17.19-.29.29-.48.1-.2.05-.36-.02-.5-.07-.15-.65-1.57-.9-2.15-.23-.56-.47-.48-.65-.49h-.55c-.2 0-.5.07-.76.36-.26.29-1 .98-1 2.4s1.03 2.78 1.17 2.97c.14.2 2.02 3.08 4.9 4.32.68.3 1.22.47 1.63.6.69.22 1.31.19 1.8.12.55-.08 1.7-.7 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.2-.55-.34Z" />
                  </svg>
                  {t.contact.submit}
                </button>
                <p className="text-center text-xs text-muted">
                  {t.contact.preferEmail}{' '}
                  <a
                    href={`mailto:${org.email}`}
                    className="font-semibold text-brand-green-light hover:underline"
                  >
                    {org.email}
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
