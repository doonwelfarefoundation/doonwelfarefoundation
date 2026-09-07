import About from '@/components/About'
import Contact from '@/components/Contact'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import Focus from '@/components/Focus'
import Footer from '@/components/Footer'
import GetInvolved from '@/components/GetInvolved'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Focus />
        <GetInvolved />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
