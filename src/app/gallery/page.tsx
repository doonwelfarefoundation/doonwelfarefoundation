import type { Metadata } from 'next'
import GalleryView from '@/components/pages/GalleryView'

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Photos from Doon Welfare Foundation’s work across education, animal welfare, environment, water, and relief in Barotiwala, Himachal Pradesh.',
  alternates: { canonical: '/gallery' },
}

export default function Page() {
  return <GalleryView />
}
