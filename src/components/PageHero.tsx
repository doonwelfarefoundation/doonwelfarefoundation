export default function PageHero({
  title,
  subtitle,
}: {
  title: string
  subtitle?: string
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-green-dark via-brand-green to-brand-green-light">
      <div className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-brand-gold/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-brand-green-light/40 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_45%)]" />

      <div className="relative mx-auto max-w-6xl px-5 pb-14 pt-32 sm:pb-16 md:pt-36">
        <h1 className="font-display text-4xl font-extrabold text-white sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 max-w-2xl text-lg text-white/85">{subtitle}</p>
        )}
      </div>

      <div className="relative">
        <svg
          className="block w-full text-surface"
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path fill="currentColor" d="M0 30c240 30 480 30 720 10s480-30 720-10v30H0Z" />
        </svg>
      </div>
    </section>
  )
}
