'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Dumbbell, ChevronDown } from 'lucide-react'
import { cn, scrollToSection } from '@/lib/utils'
import { Button } from '@/components/ui/button'

const navLinks = [
  { href: '#metodo', label: 'Il Metodo' },
  { href: '#attivita', label: 'Attività & Servizi' },
  { href: '#wellness', label: 'Area Wellness' },
  { href: '#test', label: 'Test Iniziale' },
  { href: '#contatti', label: 'Contatti' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      scrollToSection(href.slice(1))
    }
    setIsMobileMenuOpen(false)
    setIsDropdownOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-surface-darker/95 backdrop-blur-md border-b border-surface-cardHover shadow-xl shadow-black/20'
          : 'bg-transparent'
      )}
    >
      <nav className="container-custom" aria-label="Navigazione principale">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-display font-bold text-xl sm:text-2xl text-brand-50 hover:text-accent-amber transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-amber focus-visible:ring-offset-2 focus-visible:ring-offset-surface-darker rounded-md"
            aria-label="Futurya - Home"
          >
            <Dumbbell className="h-7 w-7 text-accent-amber" aria-hidden="true" />
            <span className="tracking-tight">FUTURYA</span>
            <span className="hidden sm:inline-block text-xs font-normal text-brand-400 uppercase tracking-widest ml-1">Science of Human Movement</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(link.href)
                }}
                className="px-4 py-2 text-sm font-medium text-brand-300 hover:text-brand-50 transition-colors duration-200 rounded-lg hover:bg-surface-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-amber focus-visible:ring-offset-2 focus-visible:ring-offset-surface-darker"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2">
              <Button variant="ghost" size="sm" onClick={() => handleNavClick('#test')}>
                Fai il Test
              </Button>
              <Button size="sm" onClick={() => handleNavClick('#contatti')}>
                Prenota Ora
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-lg text-brand-300 hover:text-brand-50 hover:bg-surface-card transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-amber focus-visible:ring-offset-2 focus-visible:ring-offset-surface-darker"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? 'Chiudi menu' : 'Apri menu'}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="md:hidden overflow-hidden bg-surface-darker/98 backdrop-blur-md border-t border-surface-cardHover"
            >
              <div className="px-4 py-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(link.href)
                    }}
                    className="block px-4 py-3 text-base font-medium text-brand-300 hover:text-brand-50 hover:bg-surface-card rounded-lg transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-4 border-t border-surface-cardHover flex flex-col gap-3">
                  <Button variant="outline" className="w-full" onClick={() => handleNavClick('#test')}>
                    Fai il Test
                  </Button>
                  <Button className="w-full" onClick={() => handleNavClick('#contatti')}>
                    Prenota Ora
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}