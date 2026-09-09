import type { Metadata } from 'next'
import CampaignsView from '@/components/pages/CampaignsView'

export const metadata: Metadata = {
  title: 'Campaigns',
  description:
    'Support focused fundraising drives from Doon Welfare Foundation — winter relief, feeding strays, education, tree plantation and more.',
  alternates: { canonical: '/campaigns' },
}

export default function Page() {
  return <CampaignsView />
}
