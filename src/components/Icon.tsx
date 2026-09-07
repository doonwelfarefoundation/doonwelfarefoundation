import type { FocusKey } from '@/data'

type IconProps = {
  name: FocusKey
  className?: string
}

const paths: Record<FocusKey, React.ReactNode> = {
  education: (
    <path d="M12 3 1 9l11 6 9-4.91V17h2V9L12 3Zm0 13.72L5 12.9v3.2l7 3.82 7-3.82v-3.2l-7 3.82Z" />
  ),
  marriage: (
    <>
      <path d="M8.5 2.5 6.7 4.6h3.6L8.5 2.5Zm7 0L13.7 4.6h3.6L15.5 2.5Z" />
      <circle cx="9" cy="14.5" r="5" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="15" cy="14.5" r="5" fill="none" stroke="currentColor" strokeWidth="1.7" />
    </>
  ),
  environment: (
    <path d="M6.05 8.05a7 7 0 0 0-.02 9.88c.4-3.15 1.6-6.17 4.97-8.93-2.28 3-3.4 6.03-3.5 9.53a7 7 0 0 0 9.5-6.5V3s-8.05-.5-10.95 5.05Z" />
  ),
  water: (
    <path d="M12 2.7s6.5 7 6.5 11.6a6.5 6.5 0 0 1-13 0C5.5 9.7 12 2.7 12 2.7Zm-2.6 9.1c-.4 0-.7.3-.7.7 0 1.9 1.5 3.6 3.5 3.9.4.05.7-.2.7-.6 0-.35-.25-.6-.6-.68-1.3-.25-2.3-1.4-2.3-2.63 0-.4-.3-.7-.6-.7Z" />
  ),
  animal: (
    <>
      <ellipse cx="12" cy="15.5" rx="4.2" ry="3.3" />
      <circle cx="6.3" cy="11" r="1.8" />
      <circle cx="17.7" cy="11" r="1.8" />
      <circle cx="9.4" cy="7.2" r="1.7" />
      <circle cx="14.6" cy="7.2" r="1.7" />
    </>
  ),
  relief: (
    <path d="M12 2 3 6v6c0 5 3.8 9.2 9 10 5.2-.8 9-5 9-10V6l-9-4Zm0 5a2.5 2.5 0 0 1 2.5 2.5c0 1.9-2.5 4.5-2.5 4.5s-2.5-2.6-2.5-4.5A2.5 2.5 0 0 1 12 7Z" />
  ),
}

export default function Icon({ name, className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}
