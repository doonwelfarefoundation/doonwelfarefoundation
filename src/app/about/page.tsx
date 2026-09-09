import type { Metadata } from 'next'
import AboutView from '@/components/pages/AboutView'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Doon Welfare Foundation — who we are, our mission and vision, and the team working for people, animals and the environment in Barotiwala, Himachal Pradesh.',
  alternates: { canonical: '/about' },
}

export default function Page() {
  return <AboutView />
}
