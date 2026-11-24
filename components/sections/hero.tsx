'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Dumbbell, Zap, HeartPulse, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn, scrollToSection } from '@/lib/utils'

const features = [
  { icon: Dumbbell, label: 'Personal Training', desc: 'Coaching 1:1 su misura' },
  { icon: Zap, label: 'Allenamento EMS', desc: 'Tecnologia elettrostimolazione' },
  { icon: HeartPulse, label: 'Area Wellness', desc: 'Sauna, bagno turco, doccia emozionale' },
  { icon: Shield, label: 'Metodo Scientifico', desc: 'Test diagnostico iniziale' },
]

export function Hero() {
  const handleCtaClick = (href: string) => {
    if (href.startsWith('#')) {
      scrollToSection(href.slice(1))
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-accent-amber/10 blur-3xl"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent-copper/10 blur-3xl"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: 'easeOut' }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-accent-amber/20"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 1.5, delay: 0.7, ease: 'easeOut' }}
        />
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-brand-400/50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5, ease: 'easeOut' }}
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-current rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-current" />
        </motion.div>
        <span className="text-xs uppercase tracking-widest font-medium">Scopri di più</span>
      </motion.div>

      <div className="container-custom relative z-10 py-12">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-card/50 backdrop-blur-sm border border-surface-cardHover text-sm font-medium text-brand-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-amber opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-amber" />
            </span>
            Taranto • Piazza Medaglie D'Oro, 10 • Aperto 07:30–20:30
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-brand-50 tracking-tight leading-[1.1] text-balance"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          >
            Il tuo corpo non è una macchina.<br />
            <span className="text-gradient">Merita un metodo.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="mt-6 text-lg sm:text-xl lg:text-2xl text-brand-300 max-w-3xl mx-auto leading-relaxed text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          >
            Supera l'effetto yo-yo con un percorso scientifico su misura: personal training, movimento funzionale,
            <span className="text-accent-amber font-medium"> EMS </span>
            e recupero guidato. Risultati duraturi, non soluzioni temporanee.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
          >
            <Button
              size="lg"
              className="group w-full sm:w-auto min-w-[200px]"
              onClick={() => handleCtaClick('#test')}
            >
              Inizia il Test Diagnostico
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto min-w-[200px]"
              onClick={() => handleCtaClick('#contatti')}
            >
              Prenota una Visita
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-brand-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          >
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-accent-amber" aria-hidden="true" />
              <span>Metodo validato scientificamente</span>
            </div>
            <div className="flex items-center gap-2">
              <HeartPulse className="h-5 w-5 text-accent-amber" aria-hidden="true" />
              <span>Approccio olistico mente-corpo</span>
            </div>
            <div className="flex items-center gap-2">
              <Dumbbell className="h-5 w-5 text-accent-amber" aria-hidden="true" />
              <span>Niente macchine a caso</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Features strip */}
        <motion.div
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: 'easeOut' }}
        >
          {features.map((feature, index) => (
            <motion.article
              key={feature.label}
              className="group relative p-6 rounded-2xl bg-surface-card/50 backdrop-blur-sm border border-surface-cardHover hover:border-accent-amber/30 hover:bg-surface-card transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1, ease: 'easeOut' }}
              whileHover={{ y: -4 }}
            >
              <div className="relative z-10">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-amber/10 text-accent-amber mb-4 group-hover:bg-accent-amber group-hover:text-surface-darker transition-colors duration-300">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="font-display font-semibold text-brand-50 mb-1">{feature.label}</h3>
                <p className="text-sm text-brand-400">{feature.desc}</p>
              </div>
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-t from-accent-amber/10 to-transparent opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 300 }}
              />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}