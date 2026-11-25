import { Metadata } from 'next'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Hero } from '@/components/sections/hero'
import { Activities } from '@/components/sections/activities'
import { Testimonials } from '@/components/sections/testimonials'
import { Contact } from '@/components/sections/contact'

export const metadata: Metadata = {
  title: 'Attività & Servizi | Futurya – Science of Human Movement',
  description: 'Personal training, allenamento funzionale, EMS e area wellness a Taranto. Scopri tutti i servizi del centro Futurya in Piazza Medaglie D\'Oro, 10.',
  openGraph: {
    title: 'Attività & Servizi | Futurya',
    description: 'Personal training, funzionale, EMS e wellness a Taranto.',
  },
}

export default function ActivitiesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen" id="main-content">
        <Hero />
        <Activities />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}