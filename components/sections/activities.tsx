'use client'

import { motion } from 'framer-motion'
import {
  Dumbbell,
  Zap,
  Flame,
  Wind,
  Droplets,
  HeartPulse,
  Users,
  Clock,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

const activities = [
  {
    id: 'personal-training',
    icon: Dumbbell,
    title: 'Personal Training & Coaching',
    subtitle: 'Il cuore del metodo Futurya',
    description: 'Sessioni 1:1 con coach certificati. Ogni movimento ha uno scopo, ogni progressione è misurata. Nothing random.',
    benefits: [
      'Anamnesi completa e test funzionali iniziali',
      'Programmazione periodizzata su misura',
      'Coaching tecnico costante e correzione real-time',
      'Tracciamento progressi settimanale (app dedicata)',
      'Adattamento su infortuni, limitazioni, obiettivi mutevoli',
    ],
    features: ['45-60 min/sessione', 'Frequenza 1-4x/settimana', 'Coach dedicato', 'App tracking inclusa'],
    cta: 'Richiedi coach',
    iconColor: 'text-amber-400',
    bgColor: 'from-amber-500/10 to-amber-900/5',
    borderColor: 'border-amber-500/20',
  },
  {
    id: 'functional-training',
    icon: Users,
    title: 'Allenamento Funzionale & a Corpo Libero',
    subtitle: 'Il corpo come sistema integrato',
    description: 'Niente macchine isolate. Catene cinetiche, core stability, mobilità, forza trasferibile alla vita reale e allo sport.',
    benefits: [
      'Pattern fondamentali: squat, hinge, push, pull, carry, rotation',
      'Progressioni da bodyweight a carichi esterni (kettlebell, bilanciere, sandbag)',
      'Lavoro unilaterale per correzione asimmetrie',
      'Condizionamento metabolico intelligente (non "cardio a caso")',
      'Integrazione con programma personal training',
    ],
    features: ['Sessioni 45-60 min', 'Piccoli gruppi (max 6)', 'Programmazione periodizzata', 'Adattabile a ogni livello'],
    cta: 'Scopri di più',
    iconColor: 'text-blue-400',
    bgColor: 'from-blue-500/10 to-blue-900/5',
    borderColor: 'border-blue-500/20',
  },
  {
    id: 'ems-training',
    icon: Zap,
    title: 'Allenamento EMS (Elettrostimolazione)',
    subtitle: 'Tecnologia tedesca miha bodytec',
    description: '20 minuti = 90 minuti di allenamento convenzionale. Attivazione fino al 90% delle fibre muscolari simultaneamente. Scientificamente validato.',
    benefits: [
      'Attivazione profonda fibra muscolare (anche quelle "difficili")',
      'Riduzione stress articolare (carichi esterni minimi)',
      'Efficienza temporale: 20 min/settimana per risultati misurabili',
      'Applicazioni: ipertrofia, forza, recupero post-infortunio, prevenzione sarcopenia',
      'Supervisione 1:1 certificata EMS in ogni seduta',
    ],
    features: ['20 min/sessione', '1-2x/settimana', 'Tecnologia miha bodytec', 'Certificazione EMS coach'],
    cta: 'Prova EMS',
    iconColor: 'text-purple-400',
    bgColor: 'from-purple-500/10 to-purple-900/5',
    borderColor: 'border-purple-500/20',
  },
]

const wellnessServices = [
  {
    icon: Flame,
    title: 'Sauna Svedese',
    description: '80-100°C, bassa umidità. Vasodilatazione, detossinazione, recupero neuromuscolare, miglioramento funzione cardiovascolare. Protocollo: 3 cicli da 8-12 min con raffreddamento.',
    benefits: ['Recupero post-allenamento', 'Sistema immunitario', 'Sonno profondo', 'Salute cardiovascolare'],
    iconColor: 'text-orange-400',
  },
  {
    icon: Wind,
    title: 'Bagno Turco (Hammam)',
    description: '40-50°C, 100% umidità. Purificazione pelle, decongestione vie respiratorie, rilassamento profondo, preparazione mentale. Ideale pre-sauna o standalone.',
    benefits: ['Pelle luminosa', 'Vie respiratorie', 'Rilassamento mentale', 'Detox delicato'],
    iconColor: 'text-cyan-400',
  },
  {
    icon: Droplets,
    title: 'Doccia Emozionale',
    description: 'Getto a pioggia, nebbia fredda, aromaterapia, cromoterapia. Shock termico controllato per attivazione circolazione, tonificazione, chiusura pori post-sauna/bagno turco.',
    benefits: ['Attivazione circolazione', 'Tonificazione tessuti', 'Chiusura pori', 'Reset nervoso'],
    iconColor: 'text-teal-400',
  },
  {
    icon: HeartPulse,
    title: 'Area Relax & Tisaneria',
    description: 'Spazio dedicato al down-regulation post-allenamento/wellness. Sedute ergonomiche, luce calda, tisane funzionali (adattogeni, minerali, relax). Tempo per integrare lo stimolo.',
    benefits: ['Integrazione allenamento', 'Idratazione mirata', 'Reset parasimpatico', 'Community'],
    iconColor: 'text-pink-400',
  },
]

export function Activities() {
  return (
    <section id="attivita" className="section relative overflow-hidden" aria-labelledby="activities-title">
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
            ATTIVITÀ & SERVIZI
          </span>
          <h2 id="activities-title" className="section-title">
            Tutto ciò che serve.<br />
            <span className="text-gradient">Niente superfluo.</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Quattro pilastri operativi, un unico obiettivo: la tua autonomia duratura. Scegli il percorso o combinali come serve a te.
          </p>
        </motion.div>

        {/* Main Activities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
        >
          <div className="grid lg:grid-cols-3 gap-6 mb-20">
            {activities.map((activity, index) => (
              <motion.article
                key={activity.id}
                className={cn(
                  'relative overflow-hidden p-8 rounded-2xl border transition-all duration-300 hover:scale-[1.02]',
                  activity.bgColor,
                  activity.borderColor
                )}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1, ease: 'easeOut' }}
                whileHover={{ y: -8, boxShadow: '0 25px 50px -25px rgba(0,0,0,0.5)' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-30" aria-hidden="true" />
                <div className="relative z-10 space-y-6">
                  {/* Header */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-white/5">
                      <activity.icon className={cn('h-7 w-7', activity.iconColor)} aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-brand-50">{activity.title}</h3>
                      <p className="text-sm text-brand-400 mt-0.5">{activity.subtitle}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-brand-300 text-sm leading-relaxed">{activity.description}</p>

                  {/* Benefits */}
                  <ul className="space-y-2" role="list">
                    {activity.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-brand-400">
                        <CheckCircle2 className={cn('flex-shrink-0 h-4 w-4 mt-0.5', activity.iconColor)} aria-hidden="true" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Features tags */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
                    {activity.features.map((feature, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 text-xs font-medium rounded-full bg-white/5 text-brand-400 border border-white/10"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button
                    variant="outline"
                    className="w-full group"
                    onClick={() => document.getElementById('contatti')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    {activity.cta}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Wellness Area */}
        <motion.div
          id="wellness"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
        >
          <div className="text-center mb-12">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-brand-50 mb-4">
              Area <span className="text-gradient">Wellness & Recupero</span>
            </h3>
            <p className="section-subtitle mx-auto max-w-2xl">
              Il recupero non è "riposo passivo". È parte attiva dell'adattamento. Quattro stazioni, un protocollo integrato.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {wellnessServices.map((service, index) => (
              <motion.article
                key={service.title}
                className="group relative p-6 rounded-2xl bg-surface-card border border-surface-cardHover hover:border-accent-amber/30 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1, ease: 'easeOut' }}
                whileHover={{ y: -4 }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/5">
                    <service.icon className={cn('h-6 w-6', service.iconColor)} aria-hidden="true" />
                  </div>
                  <h4 className="font-display font-semibold text-brand-50 mt-1">{service.title}</h4>
                </div>
                <p className="text-brand-400 text-sm leading-relaxed mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.benefits.map((benefit, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-medium rounded bg-white/5 text-brand-500/80 border border-white/10"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Access note */}
        <motion.div
          className="mt-16 p-8 rounded-2xl bg-surface-card border border-surface-cardHover text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.6, ease: 'easeOut' }}
        >
          <div className="flex items-center justify-center gap-3 text-brand-400 mb-4">
            <Clock className="h-6 w-6 text-accent-amber" aria-hidden="true" />
            <span className="font-medium">Orari: 07:30 – 20:30 | Accesso wellness incluso in tutti i percorsi</span>
          </div>
          <p className="text-brand-500/80 text-sm max-w-2xl mx-auto">
            L'area wellness è accessibile liberamente durante l'orario di apertura per tutti gli iscritti.
            Protocolli guidati disponibili su app. Sauna e bagno turco a cicli programmati per sicurezza ed efficacia.
          </p>
        </motion.div>
      </div>
    </section>
  )
}