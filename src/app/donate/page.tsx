import type { Metadata } from 'next'
import DonateView from '@/components/pages/DonateView'

export const metadata: Metadata = {
  title: 'Donate',
  description:
    'Donate to Doon Welfare Foundation via UPI or bank transfer. Your contribution funds education, water, animal care and relief.',
  alternates: { canonical: '/donate' },
}

export default function Page() {
  return <DonateView />
}
