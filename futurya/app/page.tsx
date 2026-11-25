import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Hero } from '@/components/sections/hero'
import { Method } from '@/components/sections/method'
import { Activities } from '@/components/sections/activities'
import { DiagnosticTest } from '@/components/sections/diagnostic-test'
import { Testimonials } from '@/components/sections/testimonials'
import { Contact } from '@/components/sections/contact'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen" id="main-content">
        <Hero />
        <Method />
        <Activities />
        <DiagnosticTest />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}