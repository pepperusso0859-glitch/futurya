'use client'

import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  User,
UserCircle,
  Target,
  Activity,
  Clock,
  Calendar,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ArrowRight,
  UserCheck,
  HeartPulse,
  Dumbbell,
} from 'lucide-react'
import { cn, scrollToSection } from '@/lib/utils'
import { Button } from '@/components/ui/button'

type Gender = 'male' | 'female' | null
type Goal = 'weight-loss' | 'muscle-gain' | 'strength' | 'mobility' | 'wellness' | 'rehab' | 'performance' | null
type Experience = 'none' | 'beginner' | 'intermediate' | 'advanced' | null
type Frequency = '1' | '2' | '3' | '4+' | null
type TimeOfDay = 'morning' | 'lunch' | 'evening' | 'flexible' | null

interface FormData {
  gender: Gender
  goal: Goal
  experience: Experience
  frequency: Frequency
  timeOfDay: TimeOfDay
  name: string
  email: string
  phone: string
  privacy: boolean
  marketing: boolean
}

const STEPS = [
  { id: 'gender', title: 'Profilo', subtitle: 'Come ti identifichi?' },
  { id: 'goal', title: 'Obiettivo', subtitle: 'Qual è la tua priorità principale?' },
  { id: 'experience', title: 'Esperienza', subtitle: 'Il tuo livello attuale' },
  { id: 'frequency', title: 'Frequenza', subtitle: 'Quante volte a settimana puoi allenarti?' },
  { id: 'time', title: 'Disponibilità', subtitle: 'Quando preferisci allenarti?' },
  { id: 'contact', title: 'Contatti', subtitle: 'Dove ti inviamo il piano orientativo?' },
]

const goals: { value: Goal; label: string; desc: string; icon: React.ReactNode }[] = [
  { value: 'weight-loss', label: 'Dimagrimento', desc: 'Perdere grasso, mantenere massa', icon: <Activity className="h-5 w-5" /> },
  { value: 'muscle-gain', label: 'Ipertrofia', desc: 'Costruire massa muscolare', icon: <Dumbbell className="h-5 w-5" /> },
  { value: 'strength', label: 'Forza pura', desc: 'Aumentare carichi massimali', icon: <Target className="h-5 w-5" /> },
  { value: 'mobility', label: 'Mobilità & Postura', desc: 'Muoversi meglio, senza dolore', icon: <HeartPulse className="h-5 w-5" /> },
  { value: 'wellness', label: 'Benessere globale', desc: 'Energia, sonno, longevità', icon: <HeartPulse className="h-5 w-5" /> },
  { value: 'rehab', label: 'Recupero infortuni', desc: 'Ritorno all\'attività in sicurezza', icon: <Activity className="h-5 w-5" /> },
  { value: 'performance', label: 'Performance sportiva', desc: 'Ottimizzare per il tuo sport', icon: <Target className="h-5 w-5" /> },
]

const experiences: { value: Experience; label: string; desc: string }[] = [
  { value: 'none', label: 'Mai allenato', desc: 'Parto da zero, serve guida totale' },
  { value: 'beginner', label: 'Principiante', desc: 'Qualche mese, basi da consolidare' },
  { value: 'intermediate', label: 'Intermedio', desc: '1-3 anni, conosco i fondamentali' },
  { value: 'advanced', label: 'Avanzato', desc: '3+ anni, cerco ottimizzazione' },
]

export function DiagnosticTest() {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState<FormData>({
    gender: null,
    goal: null,
    experience: null,
    frequency: null,
    timeOfDay: null,
    name: '',
    email: '',
    phone: '',
    privacy: false,
    marketing: false,
  })
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [results, setResults] = useState<string | null>(null)

  const updateField = useCallback(<K extends keyof FormData>(field: K, value: FormData[K]) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }, [errors])

  const validateStep = (step: number): boolean => {
    const newErrors: Partial<FormData> = {}
    const stepId = STEPS[step].id

    switch (stepId) {
      case 'gender':
        if (!formData.gender) newErrors.gender = true
        break
      case 'goal':
        if (!formData.goal) newErrors.goal = true
        break
      case 'experience':
        if (!formData.experience) newErrors.experience = true
        break
      case 'frequency':
        if (!formData.frequency) newErrors.frequency = true
        break
      case 'time':
        if (!formData.timeOfDay) newErrors.timeOfDay = true
        break
      case 'contact':
        if (!formData.name.trim()) newErrors.name = true
        if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = true
        if (!formData.phone.trim()) newErrors.phone = true
        if (!formData.privacy) newErrors.privacy = true
        break
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, STEPS.length - 1))
    }
  }

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 0))
  }

  const generateResults = () => {
    const goalLabels: Record<Goal, string> = {
      'weight-loss': 'dimagrimento intelligente',
      'muscle-gain': 'ipertrofia funzionale',
      'strength': 'forza massimale',
      'mobility': 'mobilità e postura',
      'wellness': 'benessere globale',
      'rehab': 'recupero post-infortunio',
      'performance': 'performance sportiva',
      null: 'benessere',
    }

    const expLabels: Record<Experience, string> = {
      none: 'principiante assoluto',
      beginner: 'principiante',
      intermediate: 'intermedio',
      advanced: 'avanzato',
      null: 'da definire',
    }

    const freqLabels: Record<Frequency, string> = {
      '1': '1 sessione/settimana',
      '2': '2 sessioni/settimana',
      '3': '3 sessioni/settimana',
      '4+': '4+ sessioni/settimana',
      null: 'da definire',
    }

    const timeLabels: Record<TimeOfDay, string> = {
      morning: 'mattina presto (07:30-10:00)',
      lunch: 'pausa pranzo (12:00-14:00)',
      evening: 'sera (18:00-20:30)',
      flexible: 'orari flessibili',
      null: 'da concordare',
    }

    return `Percorso orientativo per ${formData.name}:
• Profilo: ${formData.gender === 'male' ? 'Uomo' : 'Donna'}, ${expLabels[formData.experience]}
• Obiettivo primario: ${goalLabels[formData.goal]}
• Frequenza: ${freqLabels[formData.frequency]}
• Orario preferito: ${timeLabels[formData.timeOfDay]}

Il tuo coach ti contatterà entro 24h per definire il test diagnostico completo in sede (analisi BIA, screening posturale, test funzionali) e attivare il tuo piano personalizzato.`
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateStep(currentStep)) return

    setIsSubmitting(true)
    setSubmitStatus('idle')

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))

    const resultText = generateResults()
    setResults(resultText)
    setSubmitStatus('success')
    setIsSubmitting(false)

    // Scroll to results
    setTimeout(() => {
      document.getElementById('test-results')?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  const progress = ((currentStep + 1) / STEPS.length) * 100

  const renderStep = () => {
    const stepId = STEPS[currentStep].id

    switch (stepId) {
      case 'gender':
        return (
          <div className="grid grid-cols-2 gap-4">
            {['male', 'female'].map((g) => (
              <motion.button
                key={g}
                type="button"
                onClick={() => { updateField('gender', g as Gender); nextStep() }}
                className={cn(
                  'relative p-8 rounded-2xl border-2 transition-all duration-300 flex flex-col items-center gap-4',
                  formData.gender === g
                    ? 'border-accent-amber bg-accent-amber/10 shadow-lg shadow-accent-amber/10'
                    : 'border-surface-cardHover hover:border-brand-700 hover:bg-surface-card'
                )}
                whileHover={{ scale: formData.gender !== g ? 1.02 : 1 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className={cn(
                  'h-16 w-16 rounded-full flex items-center justify-center text-2xl transition-all duration-300',
                  formData.gender === g
                    ? 'bg-accent-amber text-surface-darker'
                    : 'bg-surface-cardHover text-brand-400'
                )}>
{g === 'male' ? <User className="h-8 w-8" /> : <UserCircle className="h-8 w-8" />}
                </div>
                <div className="text-center">
                  <span className={cn('font-display font-semibold text-lg', formData.gender === g ? 'text-brand-50' : 'text-brand-300')}>
                    {g === 'male' ? 'Uomo' : 'Donna'}
                  </span>
                  <p className="text-xs text-brand-500/70 mt-1">Percorso {g === 'male' ? 'Uomo' : 'Donna'} dedicato</p>
                </div>
                {formData.gender === g && (
                  <motion.div
                    className="absolute -top-3 -right-3 h-6 w-6 rounded-full bg-accent-amber flex items-center justify-center"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                  >
                    <CheckCircle2 className="h-4 w-4 text-surface-darker" />
                  </motion.div>
                )}
              </motion.button>
            ))}
          </div>
        )

      case 'goal':
        return (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {goals.map((goal) => (
              <motion.button
                key={goal.value}
                type="button"
                onClick={() => updateField('goal', goal.value)}
                className={cn(
                  'relative p-6 rounded-2xl border-2 transition-all duration-300 flex flex-col items-center gap-3 text-center',
                  formData.goal === goal.value
                    ? 'border-accent-amber bg-accent-amber/10 shadow-lg shadow-accent-amber/10'
                    : 'border-surface-cardHover hover:border-brand-700 hover:bg-surface-card'
                )}
                whileHover={{ scale: formData.goal !== goal.value ? 1.02 : 1 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className={cn(
                  'h-12 w-12 rounded-xl flex items-center justify-center transition-all duration-300',
                  formData.goal === goal.value
                    ? 'bg-accent-amber text-surface-darker'
                    : 'bg-surface-cardHover text-brand-400'
                )}>
                  {goal.icon}
                </div>
                <div>
                  <span className={cn('font-medium text-sm', formData.goal === goal.value ? 'text-brand-50' : 'text-brand-300')}>
                    {goal.label}
                  </span>
                  <p className="text-xs text-brand-500/70 mt-0.5 line-clamp-1">{goal.desc}</p>
                </div>
                {formData.goal === goal.value && (
                  <motion.div
                    className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-accent-amber flex items-center justify-center"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                  >
                    <CheckCircle2 className="h-3 w-3 text-surface-darker" />
                  </motion.div>
                )}
              </motion.button>
            ))}
          </div>
        )

      case 'experience':
        return (
          <div className="space-y-3">
            {experiences.map((exp) => (
              <motion.button
                key={exp.value}
                type="button"
                onClick={() => updateField('experience', exp.value)}
                className={cn(
                  'relative w-full p-5 rounded-xl border-2 transition-all duration-300 flex items-center gap-4 text-left',
                  formData.experience === exp.value
                    ? 'border-accent-amber bg-accent-amber/10'
                    : 'border-surface-cardHover hover:border-brand-700 hover:bg-surface-card'
                )}
                whileHover={{ x: formData.experience !== exp.value ? 4 : 0 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className={cn(
                  'h-10 w-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300',
                  formData.experience === exp.value
                    ? 'bg-accent-amber text-surface-darker'
                    : 'bg-surface-cardHover text-brand-400'
                )}>
                  <span className="font-display font-bold text-lg">
                    {exp.value === 'none' ? '0' : exp.value === 'beginner' ? '1' : exp.value === 'intermediate' ? '2' : '3+'}
                  </span>
                </div>
                <div className="flex-1">
                  <span className={cn('font-medium', formData.experience === exp.value ? 'text-brand-50' : 'text-brand-300')}>
                    {exp.label}
                  </span>
                  <p className="text-sm text-brand-500/70 mt-0.5">{exp.desc}</p>
                </div>
                {formData.experience === exp.value && (
                  <motion.div
                    className="h-5 w-5 rounded-full bg-accent-amber flex items-center justify-center"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                  >
                    <CheckCircle2 className="h-3 w-3 text-surface-darker" />
                  </motion.div>
                )}
              </motion.button>
            ))}
          </div>
        )

      case 'frequency':
        return (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['1', '2', '3', '4+'].map((freq) => (
              <motion.button
                key={freq}
                type="button"
                onClick={() => { updateField('frequency', freq as Frequency); nextStep() }}
                className={cn(
                  'relative p-6 rounded-2xl border-2 transition-all duration-300 flex flex-col items-center gap-2 text-center',
                  formData.frequency === freq
                    ? 'border-accent-amber bg-accent-amber/10 shadow-lg shadow-accent-amber/10'
                    : 'border-surface-cardHover hover:border-brand-700 hover:bg-surface-card'
                )}
                whileHover={{ scale: formData.frequency !== freq ? 1.02 : 1 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className={cn(
                  'h-14 w-14 rounded-xl flex items-center justify-center font-display font-bold text-2xl transition-all duration-300',
                  formData.frequency === freq
                    ? 'bg-accent-amber text-surface-darker'
                    : 'bg-surface-cardHover text-brand-400'
                )}>
                  {freq}
                </div>
                <span className={cn('font-medium', formData.frequency === freq ? 'text-brand-50' : 'text-brand-300')}>
                  {freq === '4+' ? '4+ volte' : `${freq} volta${freq !== '1' ? 'e' : ''}`}
                </span>
                <span className="text-xs text-brand-500/70">/ settimana</span>
                {formData.frequency === freq && (
                  <motion.div
                    className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-accent-amber flex items-center justify-center"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                  >
                    <CheckCircle2 className="h-3 w-3 text-surface-darker" />
                  </motion.div>
                )}
              </motion.button>
            ))}
          </div>
        )

      case 'time':
        const times: { value: TimeOfDay; label: string; desc: string; icon: React.ReactNode }[] = [
          { value: 'morning', label: 'Mattina presto', desc: '07:30 – 10:00', icon: <Calendar className="h-5 w-5" /> },
          { value: 'lunch', label: 'Pausa pranzo', desc: '12:00 – 14:00', icon: <Clock className="h-5 w-5" /> },
          { value: 'evening', label: 'Sera', desc: '18:00 – 20:30', icon: <Clock className="h-5 w-5" /> },
          { value: 'flexible', label: 'Flessibile', desc: 'Mi adatto agli orari liberi', icon: <Activity className="h-5 w-5" /> },
        ]
        return (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {times.map((t) => (
              <motion.button
                key={t.value}
                type="button"
                onClick={() => { updateField('timeOfDay', t.value); nextStep() }}
                className={cn(
                  'relative p-5 rounded-2xl border-2 transition-all duration-300 flex flex-col items-center gap-3 text-center',
                  formData.timeOfDay === t.value
                    ? 'border-accent-amber bg-accent-amber/10 shadow-lg shadow-accent-amber/10'
                    : 'border-surface-cardHover hover:border-brand-700 hover:bg-surface-card'
                )}
                whileHover={{ scale: formData.timeOfDay !== t.value ? 1.02 : 1 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className={cn(
                  'h-12 w-12 rounded-xl flex items-center justify-center transition-all duration-300',
                  formData.timeOfDay === t.value
                    ? 'bg-accent-amber text-surface-darker'
                    : 'bg-surface-cardHover text-brand-400'
                )}>
                  {t.icon}
                </div>
                <div>
                  <span className={cn('font-medium text-sm', formData.timeOfDay === t.value ? 'text-brand-50' : 'text-brand-300')}>
                    {t.label}
                  </span>
                  <p className="text-xs text-brand-500/70 mt-0.5">{t.desc}</p>
                </div>
                {formData.timeOfDay === t.value && (
                  <motion.div
                    className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-accent-amber flex items-center justify-center"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                  >
                    <CheckCircle2 className="h-3 w-3 text-surface-darker" />
                  </motion.div>
                )}
              </motion.button>
            ))}
          </div>
        )

      case 'contact':
        return (
          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-brand-300 mb-1.5">
                  Nome completo <span className="text-accent-amber" aria-hidden="true">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={(e) => updateField('name', e.target.value)}
                  className={cn(
                    'w-full px-4 py-3 rounded-xl bg-surface-card border transition-all duration-200',
                    errors.name ? 'border-red-500/50 focus:border-red-500' : 'border-surface-cardHover focus:border-accent-amber'
                  )}
                  placeholder="Mario Rossi"
                  aria-invalid={errors.name ? 'true' : 'false'}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  autoComplete="name"
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
                    'w-full px-4 py-3 rounded-xl bg-surface-card border transition-all duration-200',
                    errors.email ? 'border-red-500/50 focus:border-red-500' : 'border-surface-cardHover focus:border-accent-amber'
                  )}
                  placeholder="mario@email.com"
                  aria-invalid={errors.email ? 'true' : 'false'}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  autoComplete="email"
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
                  'w-full px-4 py-3 rounded-xl bg-surface-card border transition-all duration-200',
                  errors.phone ? 'border-red-500/50 focus:border-red-500' : 'border-surface-cardHover focus:border-accent-amber'
                )}
                placeholder="+39 3XX XXXXXXX"
                aria-invalid={errors.phone ? 'true' : 'false'}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
                autoComplete="tel"
              />
              {errors.phone && (
                <p id="phone-error" className="mt-1.5 text-sm text-red-400 flex items-center gap-1">
                  <AlertCircle className="h-3.5 w-3.5" /> Inserisci il tuo numero
                </p>
              )}
            </div>

            <div className="space-y-3 pt-2">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.privacy}
                  onChange={(e) => updateField('privacy', e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-surface-cardHover bg-surface-card text-accent-amber focus:ring-accent-amber focus:ring-2 appearance-none cursor-pointer"
                  aria-invalid={errors.privacy ? 'true' : 'false'}
                />
                <div className="text-sm text-brand-300 leading-relaxed">
                  Accetto l'<a href="/privacy" className="text-accent-amber hover:underline" target="_blank" rel="noopener">informativa privacy</a> e acconsento al trattamento dei dati per essere ricontattato dal coach.
                  <span className="text-accent-amber" aria-hidden="true">*</span>
                </div>
              </label>
              {errors.privacy && (
                <p className="ml-7 text-sm text-red-400 flex items-center gap-1">
                  <AlertCircle className="h-3.5 w-3.5" /> Consenso obbligatorio
                </p>
              )}

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.marketing}
                  onChange={(e) => updateField('marketing', e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-surface-cardHover bg-surface-card text-accent-amber focus:ring-accent-amber focus:ring-2 appearance-none cursor-pointer"
                />
                <span className="text-sm text-brand-400 mt-1">Vorrei ricevere aggiornamenti su metodologia, nutrizione e offerte (facoltativo)</span>
              </label>
            </div>

            <Button type="submit" className="w-full" size="lg" loading={isSubmitting}>
              {isSubmitting ? 'Invio in corso...' : 'Ricevi il tuo piano orientativo'}
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Button>

            <p className="text-center text-xs text-brand-500/60">
              Nessuno spam. I tuoi dati sono al sicuro. Puoi cancellarti in qualsiasi momento.
            </p>
          </form>
        )

      default:
        return null
    }
  }

  return (
    <section id="test" className="section relative overflow-hidden" aria-labelledby="test-title">
      <div className="container-custom">
        <div className="grid lg:grid-cols-[1fr_420px] gap-12 lg:gap-16 items-start">
          {/* Left: Info & Results */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent-amber/10 text-accent-amber text-sm font-medium mb-4">
                TEST DIAGNOSTICO INIZIALE
              </span>
              <h2 id="test-title" className="section-title">
                Il tuo percorso inizia<br />
                <span className="text-gradient">da qui.</span>
              </h2>
              <p className="section-subtitle">
                6 step guidati, 2 minuti. Ricevi subito un piano orientativo gratuito e la chiamata del tuo coach entro 24h.
              </p>

              {/* Benefits */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { icon: UserCheck, title: 'Gratuito e senza impegno', desc: 'Solo info utili, niente vendita' },
                  { icon: HeartPulse, title: 'Percorsi Uomo / Donna', desc: 'Metodologia differenziata per fisiologia' },
                  { icon: Target, title: 'Piano orientativo immediato', desc: 'Frequenza, focus, orari, primi step' },
                  { icon: Dumbbell, title: 'Chiamata coach in 24h', desc: 'Per fissare il test completo in sede' },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    className="flex items-start gap-3 p-4 rounded-xl bg-surface-card border border-surface-cardHover"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  >
                    <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-accent-amber/10 flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-accent-amber" />
                    </div>
                    <div>
                      <p className="font-medium text-brand-50">{item.title}</p>
                      <p className="text-sm text-brand-400">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Results */}
            <AnimatePresence mode="wait">
              {submitStatus === 'success' && results && (
                <motion.div
                  id="test-results"
                  initial={{ opacity: 0, y: 20, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: 'auto' }}
                  exit={{ opacity: 0, y: -20, height: 0 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="relative p-6 rounded-2xl bg-gradient-to-br from-accent-amber/10 via-surface-card to-surface-card border border-accent-amber/30"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-accent-amber flex items-center justify-center">
                      <UserCheck className="h-6 w-6 text-surface-darker" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-bold text-brand-50 mb-3">Piano orientativo generato</h3>
                      <pre className="whitespace-pre-wrap text-sm text-brand-300 bg-surface-darker/50 p-4 rounded-xl font-mono text-base leading-relaxed">
                        {results}
                      </pre>
                      <div className="mt-4 flex flex-wrap gap-3">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            setSubmitStatus('idle')
                            setCurrentStep(0)
                            setFormData({
                              gender: null,
                              goal: null,
                              experience: null,
                              frequency: null,
                              timeOfDay: null,
                              name: '',
                              email: '',
                              phone: '',
                              privacy: false,
                              marketing: false,
                            })
                            setResults(null)
                          }}
                        >
                          Rifai il test
                        </Button>
                        <Button size="sm" onClick={() => scrollToSection('contatti')}>
                          Prenota ora il test in sede
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right: Quiz Form */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          >
            {/* Progress Bar */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-brand-300">
                  Step {currentStep + 1} di {STEPS.length}
                </span>
                <span className="text-sm font-display font-bold text-accent-amber">
                  {Math.round(progress)}%
                </span>
              </div>
              <div className="h-2 bg-surface-card rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-accent-amber rounded-full"
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                />
              </div>
              <div className="flex justify-between mt-2 text-xs text-brand-500/60">
                {STEPS.map((step, i) => (
                  <span
                    key={step.id}
                    className={cn(
                      'font-medium uppercase tracking-wider',
                      i <= currentStep ? 'text-accent-amber' : 'text-brand-600'
                    )}
                  >
                    {step.title}
                  </span>
                ))}
              </div>
            </div>

            {/* Quiz Card */}
            <div className="bg-surface-card rounded-2xl border border-surface-cardHover p-6 sm:p-8 sticky top-24">
              <div className="mb-6">
                <h3 className="font-display text-xl font-bold text-brand-50 mb-1">{STEPS[currentStep].title}</h3>
                <p className="text-sm text-brand-400">{STEPS[currentStep].subtitle}</p>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  {renderStep()}
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="mt-8 flex items-center justify-between pt-6 border-t border-surface-cardHover">
                <Button
                  variant="ghost"
                  onClick={prevStep}
                  disabled={currentStep === 0}
                  className="gap-2"
                >
                  <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                  Indietro
                </Button>

                {currentStep < STEPS.length - 1 ? (
                  <Button
                    onClick={nextStep}
                    disabled={
                      (currentStep === 0 && !formData.gender) ||
                      (currentStep === 1 && !formData.goal) ||
                      (currentStep === 2 && !formData.experience) ||
                      (currentStep === 3 && !formData.frequency) ||
                      (currentStep === 4 && !formData.timeOfDay)
                    }
                    className="ml-auto gap-2"
                  >
                    Avanti
                    <ChevronRight className="h-4 w-4" aria-hidden="true" />
                  </Button>
                ) : null}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
