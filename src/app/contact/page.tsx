import type { Metadata } from 'next'
import ContactView from '@/components/pages/ContactView'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Doon Welfare Foundation — WhatsApp, phone, email, and our address in Barotiwala, Himachal Pradesh.',
  alternates: { canonical: '/contact' },
}

export default function Page() {
  return <ContactView />
}
