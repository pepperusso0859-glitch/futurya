'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  MessageSquare,
  Zap,
  HeartPulse,
  Dumbbell,
} from 'lucide-react'
import { cn, scrollToSection } from '@/lib/utils'
import { Button } from '@/components/ui/button'

const contactInfo = [
  {
    icon: MapPin,
    title: 'Indirizzo',
    details: ['Piazza Medaglie D\'Oro, 10', '74121 Taranto (TA)', 'Parcheggio convenzionato 50m'],
    color: 'text-amber-400',
    bgColor: 'bg-amber-500/10',
  },
  {
    icon: Phone,
    title: 'Telefono & WhatsApp',
    details: ['+39 327 0689095', 'Lun–Sab 07:30–20:30', 'Risposta entro 2h lavorative'],
    color: 'text-green-400',
    bgColor: 'bg-green-500/10',
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['info@futurya.it', 'Per info generali e amministrazione', 'Risposta entro 24h'],
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
  },
  {
    icon: Clock,
    title: 'Orari Apertura',
    details: ['Lunedì–Venerdì: 07:30–20:30', 'Sabato: 08:00–14:00', 'Domenica: Chiuso (su appuntamento)'],
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
  },
]

const quickActions = [
  { icon: MessageSquare, label: 'WhatsApp Direct', desc: 'Chat immediata col coach', href: 'https://wa.me/393270689095', external: true },
  { icon: Zap, label: 'Prova EMS Gratuita', desc: 'Sessione demo 20 min', href: '#contatti', scroll: 'test' },
  { icon: HeartPulse, label: 'Tour Wellness', desc: 'Visita guidata sauna/hammam', href: '#contatti', scroll: 'wellness' },
  { icon: Dumbbell, label: 'Test Diagnostico', desc: 'Analisi completa in sede', href: '#test', scroll: 'test' },
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'info',
    message: '',
    privacy: false,
  })
  const [errors, setErrors] = useState<Partial<typeof formData>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const updateField = (field: keyof typeof formData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: Partial<typeof formData> = {}
    if (!formData.name.trim()) newErrors.name = true
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = true
    if (!formData.phone.trim()) newErrors.phone = true
    if (!formData.message.trim()) newErrors.message = true
    if (!formData.privacy) newErrors.privacy = true
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)
    setSubmitStatus('idle')

    await new Promise(resolve => setTimeout(resolve, 1500))

    setSubmitStatus('success')
    setIsSubmitting(false)
    setFormData({ name: '', email: '', phone: '', subject: 'info', message: '', privacy: false })
  }

  const handleQuickAction = (action: typeof quickActions[0]) => {
    if (action.external && action.href) {
      window.open(action.href, '_blank', 'noopener,noreferrer')
    } else if (action.scroll) {
      scrollToSection(action.scroll)
    }
  }

  return (
    <section id="contatti" className="section relative overflow-hidden" aria-labelledby="contact-title">
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
            CONTATTI & PRENOTAZIONI
          </span>
          <h2 id="contact-title" className="section-title">
            Inizia ora.<br />
            <span className="text-gradient">Basta un messaggio.</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Nessuna pressione, nessun impegno. Solo una conversazione per capire se Futurya è il posto giusto per te.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16">
          {/* Left: Contact Info & Quick Actions */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            >
              <div className="grid grid-cols-2 gap-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    className="p-5 rounded-2xl bg-surface-card border border-surface-cardHover hover:border-accent-amber/30 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1, ease: 'easeOut' }}
                    whileHover={{ y: -2 }}
                  >
                    <div className={cn('h-10 w-10 rounded-xl flex items-center justify-center mb-3', info.bgColor)}>
                      <info.icon className={cn('h-5 w-5', info.color)} aria-hidden="true" />
                    </div>
                    <h3 className="font-medium text-brand-50 mb-2">{info.title}</h3>
                    <ul className="space-y-1 text-sm text-brand-400" role="list">
                      {info.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            >
              <h3 className="font-display text-xl font-bold text-brand-50 mb-4">Azioni rapide</h3>
              <div className="grid grid-cols-2 gap-3">
                {quickActions.map((action, index) => (
                  <motion.button
                    key={action.label}
                    type="button"
                    onClick={() => handleQuickAction(action)}
                    className="relative p-4 rounded-xl bg-surface-card border border-surface-cardHover hover:border-accent-amber/30 hover:bg-surface-cardHover transition-all duration-300 flex flex-col items-start gap-2 group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1, ease: 'easeOut' }}
                    whileHover={{ y: -2, x: 4 }}
                  >
                    <div className="h-9 w-9 rounded-lg bg-accent-amber/10 flex items-center justify-center group-hover:bg-accent-amber group-hover:text-surface-darker transition-colors">
                      <action.icon className="h-5 w-5 text-accent-amber" aria-hidden="true" />
                    </div>
                    <div>
                      <span className="font-medium text-brand-50 text-sm">{action.label}</span>
                      <p className="text-xs text-brand-400">{action.desc}</p>
                    </div>
                    <motion.span
                      className="absolute bottom-3 right-3 text-accent-amber font-medium group-hover:translate-x-1 transition-transform"
                    >
                      →
                    </motion.span>
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Map placeholder */}
            <motion.div
              className="aspect-video rounded-2xl bg-surface-card border border-surface-cardHover overflow-hidden relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="h-12 w-12 text-accent-amber/30 mx-auto mb-4" aria-hidden="true" />
                  <p className="text-brand-400 mb-2">Mappa interattiva</p>
                  <p className="text-sm text-brand-600">Piazza Medaglie D'Oro, 10 · Taranto</p>
                  <a
                    href="https://maps.google.com/?q=Piazza+Medaglie+D%27Oro+10+Taranto"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-accent-amber hover:text-accent-amberHover font-medium text-sm"
                  >
                    Apri in Google Maps
                    <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                      →
                    </motion.span>
                  </a>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-surface-darker/50 to-transparent" aria-hidden="true" />
            </motion.div>
          </div>

          {/* Right: Contact Form */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          >
            <div className="bg-surface-card rounded-2xl border border-surface-cardHover p-6 sm:p-8 sticky top-24">
              {/* Success State */}
              <AnimatePresence mode="wait">
                {submitStatus === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -20 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className="text-center py-12"
                  >
                    <motion.div
                      className="inline-flex h-16 w-16 rounded-full bg-green-500/20 flex items-center justify-center mb-6"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.2 }}
                    >
                      <CheckCircle2 className="h-8 w-8 text-green-400" />
                    </motion.div>
                    <h3 className="font-display text-2xl font-bold text-brand-50 mb-2">Messaggio inviato!</h3>
                    <p className="text-brand-400 mb-6 max-w-sm mx-auto">
                      Il tuo messaggio è arrivato. Il coach ti risponderà su WhatsApp entro 2 ore lavorative per fissare il tuo test diagnostico.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => setSubmitStatus('idle')}
                      className="w-full sm:w-auto"
                    >
                      Invia un altro messaggio
                    </Button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    noValidate
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-brand-300 mb-1.5">
                          Nome <span className="text-accent-amber" aria-hidden="true">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={(e) => updateField('name', e.target.value)}
                          className={cn(
                            'w-full px-4 py-3 rounded-xl bg-surface-darker border transition-all duration-200',
                            errors.name ? 'border-red-500/50 focus:border-red-500' : 'border-surface-cardHover focus:border-accent-amber'
                          )}
                          placeholder="Mario Rossi"
                          aria-invalid={errors.name ? 'true' : 'false'}
                          aria-describedby={errors.name ? 'name-error' : undefined}
                          autoComplete="name"
                          disabled={isSubmitting}
                        />
                        {errors.name && (
                          <p id="name-error" className="mt-1.5 text-sm text-red-400 flex items-center gap-1">
                            <AlertCircle className="h-3.5 w-3.5" /> Inserisci il tuo nome
                          </p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-brand-300 mb-1.5">
                          Email <span className="text-accent-amber" aria-hidden="true">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={(e) => updateField('email', e.target.value)}
                          className={cn(
                            'w-full px-4 py-3 rounded-xl bg-surface-darker border transition-all duration-200',
                            errors.email ? 'border-red-500/50 focus:border-red-500' : 'border-surface-cardHover focus:border-accent-amber'
                          )}
                          placeholder="mario@email.com"
                          aria-invalid={errors.email ? 'true' : 'false'}
                          aria-describedby={errors.email ? 'email-error' : undefined}
                          autoComplete="email"
                          disabled={isSubmitting}
                        />
                        {errors.email && (
                          <p id="email-error" className="mt-1.5 text-sm text-red-400 flex items-center gap-1">
                            <AlertCircle className="h-3.5 w-3.5" /> Email non valida
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-brand-300 mb-1.5">
                        Telefono (WhatsApp) <span className="text-accent-amber" aria-hidden="true">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={(e) => updateField('phone', e.target.value)}
                        className={cn(
                          'w-full px-4 py-3 rounded-xl bg-surface-darker border transition-all duration-200',
                          errors.phone ? 'border-red-500/50 focus:border-red-500' : 'border-surface-cardHover focus:border-accent-amber'
                        )}
                        placeholder="+39 3XX XXXXXXX"
                        aria-invalid={errors.phone ? 'true' : 'false'}
                        aria-describedby={errors.phone ? 'phone-error' : undefined}
                        autoComplete="tel"
                        disabled={isSubmitting}
                      />
                      {errors.phone && (
                        <p id="phone-error" className="mt-1.5 text-sm text-red-400 flex items-center gap-1">
                          <AlertCircle className="h-3.5 w-3.5" /> Inserisci il tuo numero
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-brand-300 mb-1.5">
                        Oggetto
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={(e) => updateField('subject', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-surface-darker border border-surface-cardHover focus:border-accent-amber transition-all duration-200 appearance-none"
                        disabled={isSubmitting}
                      >
                        <option value="info">Informazioni generali</option>
                        <option value="test">Prenotare test diagnostico</option>
                        <option value="ems">Prova EMS gratuita</option>
                        <option value="wellness">Tour area wellness</option>
                        <option value="personal">Personal training</option>
                        <option value="other">Altro</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-brand-300 mb-1.5">
                        Messaggio <span className="text-accent-amber" aria-hidden="true">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={(e) => updateField('message', e.target.value)}
                        rows={5}
                        className={cn(
                          'w-full px-4 py-3 rounded-xl bg-surface-darker border transition-all duration-200 resize-none',
                          errors.message ? 'border-red-500/50 focus:border-red-500' : 'border-surface-cardHover focus:border-accent-amber'
                        )}
                        placeholder="Raccontaci i tuoi obiettivi, dubbi, orari preferiti... Più dettagli dai, meglio ti possiamo guidare."
                        aria-invalid={errors.message ? 'true' : 'false'}
                        aria-describedby={errors.message ? 'message-error' : undefined}
                        disabled={isSubmitting}
                      />
                      {errors.message && (
                        <p id="message-error" className="mt-1.5 text-sm text-red-400 flex items-center gap-1">
                          <AlertCircle className="h-3.5 w-3.5" /> Scrivi un messaggio
                        </p>
                      )}
                    </div>

                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="privacy"
                        name="privacy"
                        checked={formData.privacy}
                        onChange={(e) => updateField('privacy', e.target.checked)}
                        className="mt-1 h-4 w-4 rounded border-surface-cardHover bg-surface-darker text-accent-amber focus:ring-accent-amber focus:ring-2 appearance-none cursor-pointer"
                        aria-invalid={errors.privacy ? 'true' : 'false'}
                        disabled={isSubmitting}
                      />
                      <label htmlFor="privacy" className="text-sm text-brand-300 leading-relaxed mt-1 cursor-pointer">
                        Accetto l'<a href="/privacy" className="text-accent-amber hover:underline" target="_blank" rel="noopener">informativa privacy</a> e acconsento al trattamento dei dati per essere ricontattato.
                        <span className="text-accent-amber" aria-hidden="true">*</span>
                      </label>
                    </div>
                    {errors.privacy && (
                      <p className="ml-7 text-sm text-red-400 flex items-center gap-1">
                        <AlertCircle className="h-3.5 w-3.5" /> Consenso obbligatorio
                      </p>
                    )}

                    <Button type="submit" className="w-full" size="lg" loading={isSubmitting}>
                      {isSubmitting ? 'Invio in corso...' : 'Invia messaggio'}
                      <Send className="h-5 w-5" aria-hidden="true" />
                    </Button>

                    <p className="text-center text-xs text-brand-500/60">
                      Rispondiamo su WhatsApp entro 2h lavorative. Nessuno spam, dati al sicuro.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}