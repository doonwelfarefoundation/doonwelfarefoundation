import About from '@/components/About'
import CampaignsPreview from '@/components/CampaignsPreview'
import Focus from '@/components/Focus'
import GetInvolved from '@/components/GetInvolved'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Focus />
      <CampaignsPreview />
      <GetInvolved />
    </>
  )
}
