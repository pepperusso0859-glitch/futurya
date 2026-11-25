# Futurya – Science of Human Movement

Centro di personal training, movimento funzionale, allenamento EMS e recupero/benessere a Taranto.

## Stack Tecnologico

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animazioni)
- **Lucide React** (icone)
- **next-themes** (theme switching)
- **clsx + tailwind-merge** (utility classes)

## Struttura del Progetto

```
futurya/
├── app/
│   ├── globals.css          # Stili globali + Tailwind
│   ├── layout.tsx           # Root layout + font + metadata SEO
│   ├── page.tsx             # Landing page principale
│   ├── attivita-e-servizi/  # Pagina attività
│   ├── il-team/             # Pagina team
│   ├── contatti/            # Pagina contatti
│   └── not-found.tsx        # 404 page
├── components/
│   ├── layout/
│   │   ├── navbar.tsx       # Navbar sticky responsive
│   │   └── footer.tsx       # Footer completo
│   ├── sections/
│   │   ├── hero.tsx         # Hero section animata
│   │   ├── method.tsx       # Metodo & 4 pilastri
│   │   ├── activities.tsx   # Attività, EMS, Wellness
│   │   ├── diagnostic-test.tsx  # Quiz interattivo 6 step
│   │   ├── testimonials.tsx # Testimonianze + spazi
│   │   └── contact.tsx      # Form contatti + info
│   ├── ui/
│   │   └── button.tsx       # Button component
│   └── providers.tsx        # Theme provider
├── lib/
│   └── utils.ts             # Utility functions
├── public/
│   ├── manifest.json        # PWA manifest
│   └── (placeholder per immagini)
├── tailwind.config.js       # Config Tailwind + theme custom
├── postcss.config.js        # PostCSS config
├── next.config.js           # Next.js config
├── tsconfig.json            # TypeScript config
└── package.json             # Dipendenze
```

## Installazione

```bash
# Installa dipendenze
npm install

# Avvia development server
npm run dev

# Build produzione
npm run build

# Avvia produzione
npm start

# Type checking
npm run type-check

# Linting
npm run lint
```

## Caratteristiche Principali

### 🎨 Design System
- **Colori**: Palette brand (amber/copper) su superfici dark/antracite
- **Tipografia**: Space Grotesk (display) + DM Sans (body) via next/font
- **Componenti**: Button variants, card system, form styles

### ⚡ Animazioni (Framer Motion)
- Hero reveal orchestrated (stagger su headline, subtitle, CTA)
- Scroll-triggered reveal con `viewport={{ once: true, amount: "some" }}`
- Micro-interazioni su button, card, step quiz
- Transizioni fluide tra step quiz (AnimatePresence + layout)
- Rispetto `prefers-reduced-motion`

### ♿ Accessibilità
- Semantic HTML5
- Focus visible states
- ARIA labels
- Contrasto WCAG AA
- Keyboard navigation
- Reduced motion support

### 📱 Responsive
- Mobile-first (375px+)
- Breakpoints: sm(640), md(768), lg(1024), xl(1280)
- Mobile drawer navbar
- Grid fluid layouts

### 🔍 SEO
- Metadata completo (title, description, OG, Twitter)
- JSON-LD structured data ready
- Sitemap ready
- robots.txt ready

## Pagine

| Rotta | Descrizione |
|-------|-------------|
| `/` | Landing page completa (Hero, Metodo, Attività, Test, Testimonianze, Contatti) |
| `/attivita-e-servizi` | Focus su servizi + testimonianze + contatti |
| `/il-team` | Team 4 coach + valori + CTA test |
| `/contatti` | Hero + form contatti + info + testimonianze |

## Sezioni Landing Page

1. **Navbar** - Sticky, logo, nav links, CTA, mobile drawer
2. **Hero** - Headline forte, dual CTA, feature strip, scroll indicator
3. **Metodo** - 4 problemi palestre + 4 pilastri Futurya
4. **Attività** - Personal Training, Funzionale, EMS + Wellness (4 servizi)
5. **Test Diagnostico** - Quiz 6 step (genere, obiettivo, esperienza, frequenza, orario, contatti) con risultati immediati
6. **Testimonianze** - 4 storie reali + gallery 4 spazi
7. **Contatti** - Info cards, quick actions (WhatsApp, EMS demo, tour, test), form, mappa
8. **Footer** - Brand, nav columns, social, newsletter, copyright

## Dati Reali Integrati

- **Indirizzo**: Piazza Medaglie D'Oro, 10 – 74121 Taranto
- **Orari**: Lun-Ven 07:30–20:30, Sab 08:00–14:00
- **Telefono/WhatsApp**: +39 327 0689095
- **Email**: info@futurya.it

## Note di Sviluppo

Il progetto è pronto per essere eseguito. In questo ambiente l'installazione npm è bloccata da policy di rete/proxy. Per avviare:

1. Copia la cartella `futurya` in un ambiente con accesso a npm registry
2. Esegui `npm install`
3. Esegui `npm run dev`
4. Apri http://localhost:3000

## Placeholder Da Sostituire

- `/public/og-image.jpg` - Immagine OG 1200x630
- `/public/icon-192.png` & `/public/icon-512.png` - PWA icons
- `/public/favicon.ico` - Favicon
- Immagini team/spazi in componenti (attualmente placeholder colorati)

## Licenza

Proprietario - Futurya S.r.l.
