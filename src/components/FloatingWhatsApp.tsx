import { org } from '@/data'

export default function FloatingWhatsApp() {
  const text = encodeURIComponent(
    `Hello ${org.name}, I'd like to know more about your work.`,
  )
  return (
    <a
      href={`https://wa.me/${org.whatsapp}?text=${text}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-green-600/30 transition hover:-translate-y-0.5 hover:bg-[#1eb955]"
    >
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.5 14.4c-.3-.15-1.7-.84-2-.94-.26-.1-.46-.14-.65.15-.2.29-.75.94-.92 1.13-.17.2-.34.22-.63.08a8.2 8.2 0 0 1-2.4-1.48 9 9 0 0 1-1.67-2.06c-.17-.3 0-.46.13-.6.13-.13.29-.34.43-.5.14-.17.19-.29.29-.48.1-.2.05-.36-.02-.5-.07-.15-.65-1.57-.9-2.15-.23-.56-.47-.48-.65-.49h-.55c-.2 0-.5.07-.76.36-.26.29-1 .98-1 2.4s1.03 2.78 1.17 2.97c.14.2 2.02 3.08 4.9 4.32.68.3 1.22.47 1.63.6.69.22 1.31.19 1.8.12.55-.08 1.7-.7 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.2-.55-.34ZM12 2a10 10 0 0 0-8.53 15.26L2 22l4.85-1.27A10 10 0 1 0 12 2Z" />
      </svg>
    </a>
  )
}
