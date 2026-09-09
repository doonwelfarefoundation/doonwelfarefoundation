import type { Metadata } from 'next'
import WhatWeDoView from '@/components/pages/WhatWeDoView'

export const metadata: Metadata = {
  title: 'What We Do',
  description:
    'Our six focus areas: education support, daughter/marriage support, environment & plantation, public drinking water, animal welfare, and general relief.',
  alternates: { canonical: '/what-we-do' },
}

export default function Page() {
  return <WhatWeDoView />
}
