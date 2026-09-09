import { org } from '@/data'

type SocialLinksProps = {
  className?: string
  iconClassName?: string
}

const items = [
  {
    label: 'Instagram',
    href: org.social.instagram,
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" />
      </>
    ),
  },
  {
    label: 'Facebook',
    href: org.social.facebook,
    icon: (
      <path
        fill="currentColor"
        d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z"
      />
    ),
  },
]

export default function SocialLinks({ className, iconClassName }: SocialLinksProps) {
  return (
    <div className={`flex items-center gap-3 ${className ?? ''}`}>
      {items.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Follow us on ${s.label}`}
          className={`flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white transition hover:-translate-y-0.5 hover:border-brand-gold hover:bg-brand-gold hover:text-white ${
            iconClassName ?? ''
          }`}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
            {s.icon}
          </svg>
        </a>
      ))}
    </div>
  )
}
