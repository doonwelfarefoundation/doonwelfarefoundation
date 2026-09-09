import type { Metadata } from 'next'
import EventsView from '@/components/pages/EventsView'

export const metadata: Metadata = {
  title: 'Events',
  description:
    'Upcoming and past events from Doon Welfare Foundation — health and animal-care camps, plantation drives, and community gatherings.',
  alternates: { canonical: '/events' },
}

export default function Page() {
  return <EventsView />
}
