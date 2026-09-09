'use client'

import PageHero from '@/components/PageHero'
import { donation } from '@/content'
import { org } from '@/data'
import { useLanguage } from '@/i18n/LanguageProvider'

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-line py-3 last:border-0">
      <span className="text-sm text-muted">{label}</span>
      <span className="font-medium text-ink">{value}</span>
    </div>
  )
}

export default function DonateView() {
  const { t } = useLanguage()
  // UPI deep-link string for the QR (encodes payee id + name).
  const upiString = `upi://pay?pa=${donation.upiId}&pn=${encodeURIComponent(org.name)}&cu=INR`
  const qrSrc = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(upiString)}`

  return (
    <>
      <PageHero title={t.pages.donate.title} subtitle={t.pages.donate.subtitle} />
      <section className="mx-auto max-w-5xl px-5 py-20 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
            {t.donate.heading}
          </h2>
          <p className="mt-4 text-lg text-body">{t.donate.intro}</p>
        </div>

        <p className="mx-auto mt-6 max-w-2xl rounded-xl border border-brand-gold/40 bg-brand-gold/10 px-4 py-3 text-center text-sm text-body">
          {t.donate.comingSoonNote}
        </p>

        {/* UPI + Bank details are hidden/blurred until the real details are ready. */}
        <div className="relative mt-10">
          <div
            aria-hidden="true"
            className="pointer-events-none grid select-none gap-6 blur-md md:grid-cols-2"
          >
            {/* UPI + QR */}
            <div className="flex flex-col items-center rounded-3xl border border-line bg-card p-8 text-center shadow-sm">
              <h3 className="font-display text-xl font-semibold text-ink">{t.donate.upiTitle}</h3>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={qrSrc}
                alt=""
                width={220}
                height={220}
                className="mt-6 rounded-xl border border-line bg-white p-2"
              />
              <p className="mt-4 text-sm text-muted">{t.donate.scanQr}</p>
              <p className="mt-3 rounded-lg bg-brand-green/10 px-4 py-2 font-mono text-sm font-semibold text-brand-green-light">
                {donation.upiId}
              </p>
            </div>

            {/* Bank transfer */}
            <div className="rounded-3xl border border-line bg-card p-8 shadow-sm">
              <h3 className="font-display text-xl font-semibold text-ink">{t.donate.bankTitle}</h3>
              <div className="mt-4">
                <Row label={t.donate.accountName} value={donation.accountName} />
                <Row label={t.donate.accountNumber} value={donation.accountNumber} />
                <Row label={t.donate.ifsc} value={donation.ifsc} />
                <Row label={t.donate.bankName} value={donation.bankName} />
                <Row label={t.donate.branch} value={donation.branch} />
              </div>
            </div>
          </div>

          {/* Overlay message */}
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="flex items-center gap-3 rounded-2xl border border-line bg-card/90 px-6 py-4 text-center shadow-lg backdrop-blur">
              <svg className="h-6 w-6 flex-none text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className="font-display text-sm font-semibold text-ink sm:text-base">
                {t.donate.comingSoon}
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-2xl rounded-3xl bg-gradient-to-br from-brand-green-dark to-brand-green-light p-8 text-center text-white">
          <p className="text-white/90">{t.donate.afterNote}</p>
          <a
            href={`https://wa.me/${org.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#1eb955]"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.5 14.4c-.3-.15-1.7-.84-2-.94-.26-.1-.46-.14-.65.15-.2.29-.75.94-.92 1.13-.17.2-.34.22-.63.08a8.2 8.2 0 0 1-2.4-1.48 9 9 0 0 1-1.67-2.06c-.17-.3 0-.46.13-.6.13-.13.29-.34.43-.5.14-.17.19-.29.29-.48.1-.2.05-.36-.02-.5-.07-.15-.65-1.57-.9-2.15-.23-.56-.47-.48-.65-.49h-.55c-.2 0-.5.07-.76.36-.26.29-1 .98-1 2.4s1.03 2.78 1.17 2.97c.14.2 2.02 3.08 4.9 4.32.68.3 1.22.47 1.63.6.69.22 1.31.19 1.8.12.55-.08 1.7-.7 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.2-.55-.34Z" />
            </svg>
            {t.donate.whatsappCta}
          </a>
        </div>
      </section>
    </>
  )
}
