'use client'

import { motion } from 'framer-motion'
import { Star, Quote, MapPin, Dumbbell, HeartPulse, Zap, Shield } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

const testimonials = [
  {
    id: 1,
    name: 'Marco R.',
    age: 34,
    role: 'Imprenditore',
    avatar: 'MR',
    gender: 'male',
    duration: '8 mesi',
    goal: 'Dimagrimento + Forza',
    result: '-12kg grasso, +4kg muscolo, squat 140kg',
    text: 'Avevo provato di tutto: palestre low-cost, app, diete fai-da-te. Sempre stesso ciclo: entusiasmo, stallo, abbandono. Qui è diverso: il test iniziale ha rivelato asimmetrie che nessuno aveva mai notato. Il programma è cucito su me, non copiato. L\'EMS ha accelerato il recupero infortunio alla spalla. Ora mi alleno 3x/settimana con piacere, non per dovere.',
    highlights: ['Test diagnostico completo', 'Programmazione periodizzata', 'EMS per recupero spalla', 'Coaching costante'],
  },
  {
    id: 2,
    name: 'Giulia M.',
    age: 29,
    role: 'Fisioterapista',
    avatar: 'GM',
    gender: 'female',
    duration: '6 mesi',
    goal: 'Postura + Mobilità',
    result: 'Risoluzione cervicalgia cronica, mobilità anca +40%',
    text: 'Lavorando in ospedale vedo quotidianamente i danni dell\'approccio "macchine a caso". Cercavo un posto che ragionasse per catene cinetiche, non isolamento. L\'ho trovato. Il coach ha integrato il mio background clinico nel programming. Sauna e bagno turco post-seduta sono il mio reset mentale. Non è una palestra, è un laboratorio movimento.',
    highlights: ['Approccio catene cinetiche', 'Integrazione background clinico', 'Wellness post-allenamento', 'Niente macchine isolate'],
  },
  {
    id: 3,
    name: 'Antonio L.',
    age: 52,
    role: 'Dirigente',
    avatar: 'AL',
    gender: 'male',
    duration: '12 mesi',
    goal: 'Longevità + Energia',
    result: 'VO2max +15%, HRV ottimizzata, sonno profondo +35min',
    text: 'A 50 anni non cerco estetica, cerco funzionalità per i prossimi 30 anni. Il test BIA iniziale ha mostrato sarcopenia incipiente: intervento mirato con EMS + forza. La flessibilità alimentare mi ha permesso di mantenere vita sociale e viaggi lavoro senza sensi di colpa. Il monitoraggio HRV settimanale previene overtraining. Investimento su me stesso, non spesa.',
    highlights: ['Focus longevità/sarcopenia', 'EMS + forza mirata', 'Nutrizione flessibile', 'Monitoraggio HRV'],
  },
  {
    id: 4,
    name: 'Sara P.',
    age: 26,
    role: 'Studentessa Medicina',
    avatar: 'SP',
    gender: 'female',
    duration: '4 mesi',
    goal: 'Performance corsa',
    result: '10km -8min, zero infortuni, gestione carichi esami',
    text: 'Studio medicina, so cosa significa evidence-based. Qui lo applicano davvero: test, dati, progressione logica. Il coach adatta il volume alle settimane d\'esame (deload programmato), non mi fa saltare tutto. L\'area wellness è il mio "ufficio" per recuperare tra turni. Finalmente un posto dove la scienza non è marketing.',
    highlights: ['Evidence-based reale', 'Deload su impegni studio', 'Wellness per recupero turni', 'Coaching adattivo'],
  },
]

const spaceImages = [
  {
    id: 1,
    title: 'Zona Personal Training',
    desc: 'Attrezzatura selezionata per funzionalità, non estetica. Bilancieri, kettlebell, anelli, slitte, pneumatici.',
    accent: 'from-amber-500/20 to-amber-900/5',
    border: 'border-amber-500/20',
  },
  {
    id: 2,
    title: 'Area EMS Dedica',
    desc: 'Tecnologia miha bodytec II, postazione privata, coach certificato 1:1. Igiene e sicurezza protocolli medicali.',
    accent: 'from-purple-500/20 to-purple-900/5',
    border: 'border-purple-500/20',
  },
  {
    id: 3,
    title: 'Wellness: Sauna & Hammam',
    desc: 'Sauna svedese 90°C, bagno turco 45°C 100% umidità, doccia emozionale cromoterapia, area relax tisaneria.',
    accent: 'from-orange-500/20 to-orange-900/5',
    border: 'border-orange-500/20',
  },
  {
    id: 4,
    title: 'Spogliatoi & Reception',
    desc: 'Armadietti personali, docce premium, prodotti cura pelle, accoglienza discreta. Il tuo tempo inizia qui.',
    accent: 'from-blue-500/20 to-blue-900/5',
    border: 'border-blue-500/20',
  },
]

export function Testimonials() {
  return (
    <section id="testimonianze" className="section relative overflow-hidden" aria-labelledby="testimonials-title">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent-amber/10 text-accent-amber text-sm font-medium mb-4">
            TESTIMONIANZE & SPAZI
          </span>
          <h2 id="testimonials-title" className="section-title">
            Storie reali.<br />
            <span className="text-gradient">Spazi pensati.</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Persone vere, percorsi veri, risultati misurabili. E l'ambiente dove tutto accade: Piazza Medaglie D'Oro, 10, Taranto.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {testimonials.map((testimonial, index) => (
              <motion.article
                key={testimonial.id}
                className="group relative p-6 rounded-2xl bg-surface-card border border-surface-cardHover hover:border-accent-amber/30 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1, ease: 'easeOut' }}
                whileHover={{ y: -4 }}
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-xl bg-accent-amber/10 flex items-center justify-center font-display font-bold text-xl text-accent-amber">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-medium text-brand-50">{testimonial.name}</p>
                    <p className="text-sm text-brand-400">{testimonial.age} anni · {testimonial.role}</p>
                  </div>
                </div>

                {/* Quote */}
                <Quote className="h-8 w-8 text-accent-amber/20 mb-2" aria-hidden="true" />
                <p className="text-brand-300 text-sm leading-relaxed mb-6 line-clamp-4">{testimonial.text}</p>

                {/* Stats */}
                <div className="flex items-center gap-4 text-xs text-brand-500/80 mb-4">
                  <span className="flex items-center gap-1">
                    <Dumbbell className="h-3.5 w-3.5" aria-hidden="true" />
                    {testimonial.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Target className="h-3.5 w-3.5" aria-hidden="true" />
                    {testimonial.goal}
                  </span>
                </div>

                {/* Result highlight */}
                <div className="p-3 rounded-xl bg-accent-amber/5 border border-accent-amber/10 mb-4">
                  <p className="text-sm font-medium text-accent-amber">{testimonial.result}</p>
                </div>

                {/* Highlights tags */}
                <div className="flex flex-wrap gap-1.5">
                  {testimonial.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 text-xs font-medium rounded bg-white/5 text-brand-500/70 border border-white/10"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Space Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
        >
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-brand-50 text-center mb-12">
            Il tuo <span className="text-gradient">laboratorio movimento</span> a Taranto
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {spaceImages.map((space, index) => (
              <motion.article
                key={space.id}
                className={cn(
                  'relative overflow-hidden p-8 rounded-2xl border transition-all duration-300 group',
                  space.accent,
                  space.border
                )}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1, ease: 'easeOut' }}
                whileHover={{ y: -4 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-30" aria-hidden="true" />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="h-5 w-5 text-accent-amber" aria-hidden="true" />
                    <span className="text-sm font-medium text-brand-400">Piazza Medaglie D'Oro, 10</span>
                  </div>
                  <h4 className="font-display text-xl font-bold text-brand-50 mb-2">{space.title}</h4>
                  <p className="text-brand-400 text-sm leading-relaxed flex-1">{space.desc}</p>
                  <div className="mt-4 flex items-center gap-2 text-sm text-accent-amber font-medium group-hover:gap-3 transition-gap">
                    Scopri di più
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      →
                    </motion.span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Location CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.6, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-surface-card border border-surface-cardHover mb-4">
            <MapPin className="h-6 w-6 text-accent-amber" aria-hidden="true" />
            <div className="text-left">
              <p className="font-medium text-brand-50">Futurya – Science of Human Movement</p>
              <p className="text-sm text-brand-400">Piazza Medaglie D'Oro, 10 · 74121 Taranto</p>
            </div>
          </div>
          <p className="text-brand-500/80 text-sm max-w-xl mx-auto mb-6">
            Facilmente raggiungibile dal centro e dalla stazione. Parcheggio convenzionato a 50m.
            Vieni a vedere di persona, senza impegno.
          </p>
          <Button variant="outline" size="lg" onClick={() => document.getElementById('contatti')?.scrollIntoView({ behavior: 'smooth' })}>
            Prenota una visita guidata
            <Zap className="h-5 w-5" aria-hidden="true" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}