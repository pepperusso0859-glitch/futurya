import { Metadata } from 'next'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Hero } from '@/components/sections/hero'
import { Testimonials } from '@/components/sections/testimonials'
import { Contact } from '@/components/sections/contact'

export const metadata: Metadata = {
  title: 'Il Team | Futurya – Science of Human Movement',
  description: 'Conosci i coach certificati di Futurya a Taranto. Esperti in personal training, EMS, movimento funzionale e recupero. Piazza Medaglie D\'Oro, 10.',
  openGraph: {
    title: 'Il Team | Futurya',
    description: 'Coach certificati per il tuo percorso su misura a Taranto.',
  },
}

const team = [
  {
    name: 'Dott. Marco Ferrara',
    role: 'Founder & Head Coach',
    credentials: ['Laurea Scienze Motorie', 'Cert. NSCA-CSCS', 'Cert. EMS miha bodytec', 'Master Posturologia'],
    specialties: ['Programmazione periodizzata', 'Recupero infortuni', 'Performance atletica', 'Posturologia clinica'],
    bio: 'Ex atleta nazionale di sollevamento pesi, ha trasformato la passione per la biomeccanica in una missione: portare l\'evidence-based nel fitness italiano. 15+ anni esperienza, 500+ atleti seguiti.',
    avatar: 'MF',
    color: 'from-amber-500/20 to-amber-900/5',
    border: 'border-amber-500/20',
  },
  {
    name: 'Dott.ssa Giulia Romano',
    role: 'Coach Funzionale & Mobilità',
    credentials: ['Laurea Fisioterapia', 'Cert. FMS Level 2', 'Cert. DNS Exercise', 'Specialista Pilates Clinico'],
    specialties: ['Catene cinetiche', 'Mobilità articolare', 'Riabilitazione sportiva', 'Core stability'],
    bio: 'Fisioterapista ospedaliera e coach: unisce rigore clinico e performance. Il suo approccio "movement first" ha risolto dolori cronici dove altri avevano fallito. Ricercatrice su motor control.',
    avatar: 'GR',
    color: 'from-blue-500/20 to-blue-900/5',
    border: 'border-blue-500/20',
  },
  {
    name: 'Dott. Antonio De Luca',
    role: 'EMS Specialist & Strength Coach',
    credentials: ['Laurea Scienze Motorie', 'Cert. EMS Master Trainer', 'Cert. Westside Barbell', 'Cert. Nutrizione Sportiva ISSN'],
    specialties: ['Elettrostimolazione avanzata', 'Forza massimale', 'Ipertrofia funzionale', 'Nutrizione flessibile'],
    bio: 'Pioniere EMS in Puglia: primo centro certificato miha bodytec II. Ha sviluppato protocolli EMS per sarcopenia, post-chirurgico, elite performance. Autore "EMS Evidence-Based".',
    avatar: 'AD',
    color: 'from-purple-500/20 to-purple-900/5',
    border: 'border-purple-500/20',
  },
  {
    name: 'Dott.ssa Sara Conte',
    role: 'Nutrizionista & Wellness Coach',
    credentials: ['Laurea Dietistica', 'Master Nutrizione Sportiva', 'Cert. Intuitive Eating', 'Cert. Mindful Eating'],
    specialties: ['Educazione alimentare', 'Composizione corporea', 'Rapporto col cibo', 'Integrazione HRV/sonno'],
    bio: 'Anti-dieta per vocazione. Insegna autonomia, non regole. Il suo protocollo "Nutrizione Senza Sforzo" ha aiutato 200+ persone a smettere di contare calorie e iniziare a nutrirsi. Speaker nazionale.',
    avatar: 'SC',
    color: 'from-pink-500/20 to-pink-900/5',
    border: 'border-pink-500/20',
  },
]

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen" id="main-content">
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-16">
          <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-accent-amber/10 blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent-copper/10 blur-3xl" />
          </div>
          <div className="container-custom relative z-10 py-12 text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent-amber/10 text-accent-amber text-sm font-medium mb-6">
              IL NOSTRO TEAM
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-50 tracking-tight mb-6">
              Esperti che <span className="text-gradient">camminano accanto a te</span>
            </h1>
            <p className="text-lg sm:text-xl text-brand-300 max-w-3xl mx-auto leading-relaxed">
              Quattro professionisti, una visione condivisa: il movimento come medicina, la scienza come bussola, la persona al centro.
              Nessun "istruttore di sala". Solo coach certificati con formazione accademica e esperienza sul campo.
            </p>
          </div>
        </section>

        {/* Team Grid */}
        <section className="section" aria-labelledby="team-title">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 id="team-title" className="section-title">Il team <span className="text-gradient">Futurya</span></h2>
              <p className="section-subtitle mx-auto">
                Competenze complementari, metodo unico. Ogni coach porta la sua specializzazione nel tuo percorso.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <article
                  key={member.name}
                  className={`relative overflow-hidden p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.02] ${member.color} ${member.border}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br opacity-30" aria-hidden="true" />
                  <div className="relative z-10 space-y-5">
                    {/* Avatar */}
                    <div className="flex items-center gap-4">
                      <div className="h-16 w-16 rounded-xl bg-accent-amber/10 flex items-center justify-center font-display font-bold text-2xl text-accent-amber">
                        {member.avatar}
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-brand-50">{member.name}</h3>
                        <p className="text-sm text-accent-amber font-medium">{member.role}</p>
                      </div>
                    </div>

                    {/* Credentials */}
                    <div className="flex flex-wrap gap-1.5">
                      {member.credentials.map((cred, i) => (
                        <span key={i} className="px-2 py-0.5 text-xs font-medium rounded bg-white/5 text-brand-500/70 border border-white/10">
                          {cred}
                        </span>
                      ))}
                    </div>

                    {/* Specialties */}
                    <div>
                      <p className="text-xs font-medium text-brand-500/70 uppercase tracking-wider mb-2">Specializzazioni</p>
                      <ul className="space-y-1" role="list">
                        {member.specialties.map((spec, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-brand-400">
                            <span className="h-1.5 w-1.5 rounded-full bg-accent-amber/50" aria-hidden="true" />
                            {spec}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Bio */}
                    <p className="text-sm text-brand-300 leading-relaxed pt-4 border-t border-white/10">
                      {member.bio}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section bg-surface-card/30" aria-labelledby="values-title">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 id="values-title" className="section-title">I nostri <span className="text-gradient">principi</span></h2>
              <p className="section-subtitle mx-auto">Cosa guida ogni decisione, ogni programmazione, ogni interazione.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: '🎯', title: 'Evidence over Ego', desc: 'Niente "si è sempre fatto così". Letteratura scientifica, dati oggettivi, outcome misurabili. Se non funziona, si cambia.' },
                { icon: '🤝', title: 'Coaching, non istruzione', desc: 'Non contiamo le ripetizioni. Educhiamo all\'autonomia. L\'obiettivo: non servirti più tra 12 mesi.' },
                { icon: '🧠', title: 'Sistema, non parti', desc: 'Il corpo non lavora a compartimenti. Catene cinetiche, sistema nervoso, contesto vita. Tutto connesso.' },
              ].map((value, index) => (
                <article key={value.title} className="p-6 rounded-2xl bg-surface-card border border-surface-cardHover hover:border-accent-amber/30 transition-all duration-300">
                  <span className="text-3xl mb-4 block">{value.icon}</span>
                  <h3 className="font-display font-semibold text-brand-50 mb-2">{value.title}</h3>
                  <p className="text-brand-400 text-sm leading-relaxed">{value.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section" aria-labelledby="team-cta-title">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 id="team-cta-title" className="section-title">Vuoi conoscere il tuo coach?</h2>
              <p className="section-subtitle mx-auto mb-8">
                Il test diagnostico include il match con il coach più adatto ai tuoi obiettivi. Gratuito, senza impegno.
              </p>
              <a
                href="#test"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent-amber text-surface-darker font-medium hover:bg-accent-amberHover transition-colors"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('test')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Fai il test diagnostico
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  )
}