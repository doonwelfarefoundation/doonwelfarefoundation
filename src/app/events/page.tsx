import type { Metadata } from 'next'
import EventsView from '@/components/pages/EventsView'
import { events } from '@/content'
import { org } from '@/data'

export const metadata: Metadata = {
  title: 'Events',
  description:
    'Upcoming and past events from Doon Welfare Foundation — health and animal-care camps, plantation drives, and community gatherings.',
  alternates: { canonical: '/events' },
}

const jsonLd = events.map((e) => ({
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: e.title,
  startDate: e.date,
  description: e.blurb,
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  location: {
    '@type': 'Place',
    name: e.location,
    address: `${e.location}, Barotiwala, Himachal Pradesh`,
  },
  organizer: { '@type': 'NGO', name: org.name, url: org.siteUrl },
}))

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <EventsView />
    </>
  )
}
