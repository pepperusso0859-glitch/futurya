'use client'

import { motion } from 'framer-motion'
import { Dumbbell, MapPin, Phone, Mail, Clock, ArrowRight, CheckCircle2, Zap, HeartPulse, Users, ChevronRight, MessageSquare } from 'lucide-react'
import Link from 'next/link'
import { cn, scrollToSection } from '@/lib/utils'
import { Button } from '@/components/ui/button'

const footerLinks = {
  metodo: [
    { label: 'La nostra filosofia', href: '#metodo' },
    { label: 'Perché le palestre falliscono', href: '#metodo' },
    { label: 'I 4 pilastri Futurya', href: '#metodo' },
    { label: 'Approccio evidence-based', href: '#metodo' },
  ],
  servizi: [
    { label: 'Personal Training', href: '#attivita' },
    { label: 'Allenamento Funzionale', href: '#attivita' },
    { label: 'EMS Elettrostimolazione', href: '#attivita' },
    { label: 'Area Wellness & Recupero', href: '#wellness' },
  ],
  percorsi: [
    { label: 'Test Diagnostico Uomo', href: '#test' },
    { label: 'Test Diagnostico Donna', href: '#test' },
    { label: 'Coaching Nutrizionale', href: '#test' },
    { label: 'Monitoraggio HRV', href: '#test' },
  ],
  contatti: [
    { label: 'Prenota una visita', href: '#contatti' },
    { label: 'Prova EMS gratuita', href: '#contatti' },
    { label: 'Tour area wellness', href: '#contatti' },
    { label: 'Domande frequenti', href: '#contatti' },
  ],
}

const socialLinks = [
  { icon: Users, label: 'Instagram', href: 'https://instagram.com/futurya.taranto', color: 'text-pink-400 hover:text-pink-300' },
  { icon: MessageSquare, label: 'WhatsApp', href: 'https://wa.me/393270689095', color: 'text-green-400 hover:text-green-300' },
  { icon: Mail, label: 'Email', href: 'mailto:info@futurya.it', color: 'text-blue-400 hover:text-blue-300' },
  { icon: MapPin, label: 'Google Maps', href: 'https://maps.google.com/?q=Piazza+Medaglie+D%27Oro+10+Taranto', color: 'text-red-400 hover:text-red-300' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden border-t border-surface-cardHover" aria-labelledby="footer-title">
      <div className="absolute inset-0 bg-gradient-to-t from-surface-darker via-surface-card/20 to-transparent" aria-hidden="true" />

      <div className="container-custom relative py-16 lg:py-24">
        {/* Main Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-16">
          {/* Brand Column */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <Link href="/" className="flex items-center gap-2 font-display font-bold text-xl lg:text-2xl text-brand-50 mb-6" aria-label="Futurya - Home">
              <Dumbbell className="h-7 w-7 text-accent-amber" aria-hidden="true" />
              <span className="tracking-tight">FUTURYA</span>
            </Link>
            <p className="text-brand-400 text-sm leading-relaxed mb-6 max-w-xs">
              Science of Human Movement. Centro di personal training, movimento funzionale, EMS e wellness a Taranto. Metodo scientifico su misura per risultati duraturi.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent-amber flex-shrink-0 mt-0.5" aria-hidden="true" />
                <address className="not-italic text-brand-400 leading-relaxed">
                  Piazza Medaglie D'Oro, 10<br />
                  74121 Taranto (TA)
                </address>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent-amber flex-shrink-0" aria-hidden="true" />
                <a href="tel:+393270689095" className="text-brand-400 hover:text-accent-amber transition-colors">+39 327 0689095</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent-amber flex-shrink-0" aria-hidden="true" />
                <a href="mailto:info@futurya.it" className="text-brand-400 hover:text-accent-amber transition-colors">info@futurya.it</a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-accent-amber flex-shrink-0" aria-hidden="true" />
                <span className="text-brand-400">Lun–Ven 07:30–20:30 · Sab 08:00–14:00</span>
              </div>
            </div>
          </motion.div>

          {/* Navigation Columns */}
          {Object.entries(footerLinks).map(([key, links], colIndex) => (
            <motion.nav
              key={key}
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 + colIndex * 0.05, ease: 'easeOut' }}
              aria-label={key.charAt(0).toUpperCase() + key.slice(1)}
            >
              <h3 className="font-display font-semibold text-brand-50 mb-4">
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </h3>
              <ul className="space-y-3" role="list">
                {links.map((link, linkIndex) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.4, delay: 0.15 + colIndex * 0.05 + linkIndex * 0.03, ease: 'easeOut' }}
                  >
                    <Link
                      href={link.href}
                      onClick={(e) => {
                        if (link.href.startsWith('#')) {
                          e.preventDefault()
                          scrollToSection(link.href.slice(1))
                        }
                      }}
                      className="text-sm text-brand-400 hover:text-accent-amber transition-colors duration-200 flex items-center gap-2 group"
                    >
                      {link.label}
                      <ChevronRight className="h-3.5 w-3.5 text-brand-600 group-hover:text-accent-amber group-hover:translate-x-1 transition-all duration-200" aria-hidden="true" />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          className="relative h-px bg-gradient-to-r from-transparent via-brand-800 to-transparent mb-10"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        />

        {/* Bottom Section */}
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          >
            <p className="font-medium text-brand-50 mb-3">Seguici & Contattaci</p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-surface-card border border-surface-cardHover hover:border-accent-amber/30 transition-all duration-200 text-sm font-medium',
                    social.color
                  )}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: 0.45 + index * 0.05, ease: 'easeOut' }}
                  whileHover={{ y: -2 }}
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" aria-hidden="true" />
                  <span>{social.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
          >
            <div className="bg-surface-card rounded-2xl border border-surface-cardHover p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 rounded-xl bg-accent-amber/10 flex items-center justify-center">
                      <Zap className="h-5 w-5 text-accent-amber" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-brand-50">Newsletter Futurya</h3>
                      <p className="text-sm text-brand-400">Metodologia, nutrizione, recupero. Una email a settimana. Niente spam.</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 ml-13">
                    {[
                      { icon: CheckCircle2, text: 'Evidence-based only' },
                      { icon: HeartPulse, text: 'Nutrizione flessibile' },
                      { icon: Users, text: 'Community riservata' },
                    ].map((item, i) => (
                      <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 text-xs font-medium text-brand-500/80 border border-white/10">
                        <item.icon className="h-3.5 w-3.5" aria-hidden="true" />
                        {item.text}
                      </span>
                    ))}
                  </div>
                </div>
                <form className="w-full md:w-80" onSubmit={(e) => { e.preventDefault(); alert('Funzionalità demo - integrazione con provider email necessaria') }}>
                  <div className="flex gap-2">
                    <input
                      type="email"
                      placeholder="la@tuaemail.com"
                      className="flex-1 px-4 py-3 rounded-xl bg-surface-darker border border-surface-cardHover focus:border-accent-amber transition-all duration-200 text-sm"
                      aria-label="Email per newsletter"
                      required
                    />
                    <Button type="submit" size="md" className="whitespace-nowrap">
                      Iscriviti
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Button>
                  </div>
                  <p className="text-xs text-brand-600 mt-2 text-center">Puoi cancellarti in un click. <a href="/privacy" className="text-accent-amber hover:underline">Privacy</a></p>
                </form>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          className="mt-12 pt-8 border-t border-surface-cardHover flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.7, ease: 'easeOut' }}
        >
          <p className="text-sm text-brand-500/60 text-center md:text-left">
            © {currentYear} Futurya – Science of Human Movement. Tutti i diritti riservati.
            <br />
            P.IVA 01234567890 · REA TA-123456 · Sede: Piazza Medaglie D'Oro, 10 – 74121 Taranto
          </p>
          <div className="flex items-center gap-6 text-xs text-brand-500/60 text-center md:text-right">
            <a href="/privacy" className="hover:text-accent-amber transition-colors">Privacy Policy</a>
            <span aria-hidden="true">·</span>
            <a href="/terms" className="hover:text-accent-amber transition-colors">Termini e Condizioni</a>
            <span aria-hidden="true">·</span>
            <a href="/cookies" className="hover:text-accent-amber transition-colors">Cookie Policy</a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}