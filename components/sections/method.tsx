'use client'

import { motion } from 'framer-motion'
import { Brain, Target, Heart, Users, BarChart2, RefreshCw } from 'lucide-react'
import { cn } from '@/lib/utils'

const problems = [
  {
    icon: Brain,
    title: 'Resistenza inconscia al cambiamento',
    description: 'Il cervello percepisce i cambiamenti drastici come minacce, attivando meccanismi di difesa che sabotano i buoni propositi.',
    color: 'from-red-500/20 to-red-900/5',
    borderColor: 'border-red-500/30',
    iconColor: 'text-red-400',
  },
  {
    icon: Target,
    title: 'Obiettivi generici, non tuoi',
    description: 'Programmi standardizzati ignorano la tua storia, i tuoi ritmi, le tue preferenze. Il risultato? Abbandono entro 3 mesi.',
    color: 'from-orange-500/20 to-orange-900/5',
    borderColor: 'border-orange-500/30',
    iconColor: 'text-orange-400',
  },
  {
    icon: Heart,
    title: 'Cultura alimentare restrittiva',
    description: 'Diete rigide creano rapporto conflittuale col cibo. Serve educazione, non privazione. Sostenibilità, non sofferenza.',
    color: 'from-pink-500/20 to-pink-900/5',
    borderColor: 'border-pink-500/30',
    iconColor: 'text-pink-400',
  },
  {
    icon: Users,
    title: 'Allenamento senza contesto',
    description: 'Macchine isolate, serie a caso, nessun percorso. Il corpo funziona come sistema integrato, non a compartimenti stagni.',
    color: 'from-blue-500/20 to-blue-900/5',
    borderColor: 'border-blue-500/30',
    iconColor: 'text-blue-400',
  },
]

const pillars = [
  {
    icon: BarChart2,
    number: '01',
    title: 'Diagnosi precisa, non supposizioni',
    description: 'Test funzionali, analisi composizione corporea, anamnesi completa, screening posturale. Partiamo dai dati, non dall\'intuizione.',
    details: ['Test ingresso Uomo/Donna differenziati', 'Analisi BIA composizione corporea', 'Valutazione mobilità e catene cinetiche', 'Profilazione obiettivi e stile di vita'],
  },
  {
    icon: Target,
    number: '02',
    title: 'Programmazione individuale periodizzata',
    description: 'Ogni seduta ha un perché. Progressione logica, carichi gestiti, varietà funzionale. Niente "allenamento a caso".',
    details: ['Mesocicli da 4-6 settimane', 'Deload programmati', 'Adattamento su feedback settimanale', 'Integrazione EMS dove utile'],
  },
  {
    icon: Heart,
    number: '03',
    title: 'Educazione alimentare flessibile',
    description: 'Niente diete. Principi nutrizionali chiari, gestione pasti sociali, rapporto sereno col cibo. Autonomia, non dipendenza.',
    details: ['Macro-target personalizzati', 'Guida spesa e meal prep', 'Gestione eventi e ristoranti', 'Check-in nutrizionali mensili'],
  },
  {
    icon: RefreshCw,
    number: '04',
    title: 'Recupero come parte dell\'allenamento',
    description: 'Sauna, bagno turco, doccia emozionale, mobilità guidata. Il corpo si adatta quando riposa, non quando lavora.',
    details: ['Accesso area wellness illimitato', 'Protocolli recupero post-seduta', 'Tecniche respirazione e down-regulation', 'Monitoraggio HRV e sonno'],
  },
]

export function Method() {
  return (
    <section id="metodo" className="section relative overflow-hidden" aria-labelledby="method-title">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent-amber/10 text-accent-amber text-sm font-medium mb-4">
            IL NOSTRO METODO
          </span>
          <h2 id="method-title" className="section-title">
            Perché le vecchie palestre<br />
            <span className="text-gradient">falliscono con te</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Non è mancanza di volontà. È mancanza di metodo. Scopri perché l'approccio standardizzato condanna all'effetto yo-yo
            e come il nostro sistema scientifico su misura rompe il ciclo.
          </p>
        </motion.div>

        {/* Problems Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
        >
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-brand-50 text-center mb-12">
            I 4 motivi per cui <span className="text-accent-amber">hai smesso</span> (non è colpa tua)
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {problems.map((problem, index) => (
              <motion.article
                key={problem.title}
                className={cn(
                  'relative p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.02]',
                  problem.color,
                  problem.borderColor
                )}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1, ease: 'easeOut' }}
                whileHover={{ y: -4, boxShadow: '0 20px 40px -20px rgba(0,0,0,0.4)' }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-50" aria-hidden="true" />
                <div className="relative z-10">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 mb-4">
                    <problem.icon className={cn('h-6 w-6', problem.iconColor)} aria-hidden="true" />
                  </div>
                  <h4 className="font-display font-semibold text-brand-50 mb-3">{problem.title}</h4>
                  <p className="text-brand-300 text-sm leading-relaxed">{problem.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="my-20 flex items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-brand-800 to-transparent" />
          <span className="text-brand-500 font-medium uppercase tracking-widest text-sm">ORA IL METODO FUTURYA</span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-brand-800 to-transparent" />
        </motion.div>

        {/* Pillars Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
        >
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-brand-50 text-center mb-12">
            I <span className="text-gradient">4 pilastri</span> del tuo percorso
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, index) => (
              <motion.article
                key={pillar.title}
                className="group relative p-6 rounded-2xl bg-surface-card border border-surface-cardHover hover:border-accent-amber/30 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1, ease: 'easeOut' }}
                whileHover={{ y: -4 }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 relative">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-amber/10 text-accent-amber">
                      <pillar.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <span className="absolute -top-1 -right-1 text-xs font-bold text-accent-amber/50">{pillar.number}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-display font-semibold text-brand-50 mb-2">{pillar.title}</h4>
                    <p className="text-brand-400 text-sm mb-4">{pillar.description}</p>
                    <ul className="space-y-1.5" role="list">
                      {pillar.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-brand-500/80">
                          <span className="flex-shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full bg-accent-amber" aria-hidden="true" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.7, ease: 'easeOut' }}
        >
          <p className="text-brand-400 mb-4">Pronto a scoprire il tuo percorso su misura?</p>
          <a
            href="#test"
            className="inline-flex items-center gap-2 text-accent-amber hover:text-accent-amberHover font-medium transition-colors"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('test')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Inizia il test diagnostico gratuito
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              →
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}