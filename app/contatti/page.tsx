import { Metadata } from 'next'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Hero } from '@/components/sections/hero'
import { Contact } from '@/components/sections/contact'
import { Testimonials } from '@/components/sections/testimonials'

export const metadata: Metadata = {
  title: 'Contatti & Prenotazioni | Futurya – Science of Human Movement',
  description: 'Contatta Futurya a Taranto: Piazza Medaglie D\'Oro, 10. Tel +39 327 0689095, email info@futurya.it. Prenota test diagnostico, prova EMS o tour wellness.',
  openGraph: {
    title: 'Contatti | Futurya',
    description: 'Prenota il tuo test diagnostico gratuito a Taranto.',
  },
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen" id="main-content">
        <Hero />
        <Contact />
        <Testimonials />
      </main>
      <Footer />
    </>
  )
}