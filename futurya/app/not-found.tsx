import Link from 'next/link'
import { motion } from 'framer-motion'
import { Home, Search, Dumbbell } from 'lucide-react'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-[70vh] flex items-center justify-center pt-16">
        <div className="container-custom text-center py-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <Dumbbell className="h-16 w-16 text-accent-amber/30 mx-auto mb-6" aria-hidden="true" />
            <h1 className="font-display text-6xl sm:text-8xl font-bold text-brand-50 mb-4">404</h1>
            <p className="text-xl sm:text-2xl text-brand-300 mb-8 max-w-md mx-auto">
              Questa pagina non esiste.<br />
              <span className="text-accent-amber">Ma il tuo percorso sì.</span>
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg rounded-xl bg-accent-amber text-surface-darker font-medium hover:bg-accent-amberHover transition-colors"
              >
                Torna alla Home
              </Link>
              <Link
                href="/#test"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg rounded-xl border-2 border-accent-amber text-accent-amber font-medium hover:bg-accent-amber/10 transition-colors"
              >
                Fai il Test
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  )
}