# GutjahrDesign

**Premium Event-Design & Floristik | Hochzeiten · Events · Hotellerie**

> „Es gibt eine Schönheit, die den Atem raubt – und eine, die das Herz zur Ruhe kommen lässt."

Eine elegante Webseite für Gutjahr Design - zwei Schwestern, die mit Hingabe und Liebe zum Detail unvergessliche Momente kreieren.

---

## Inhaltsverzeichnis

- [Vision & Design-Philosophie](#vision--design-philosophie)
- [Farbpalette & Ästhetik](#farbpalette--ästhetik)
- [Geschäftsbereiche](#geschäftsbereiche)
- [Website-Sektionen](#website-sektionen)
- [Technologie-Stack](#technologie-stack)
- [Animations-Flow](#animations-flow)
- [Projektstruktur](#projektstruktur)
- [Installation & Development](#installation--development)
- [Live Demo](#live-demo)

---

## Vision & Design-Philosophie

| Aspekt | Beschreibung |
|--------|-------------|
| **Stil** | "Light & Airy" - zeitlos elegant, minimalistisch, aber warm |
| **Bildsprache** | High-Key, hell, schattenarm, traumhafter Look |
| **Komposition** | Wechsel zwischen Makro-Aufnahmen (Details) und Weitwinkel (Gesamtbild) |
| **Vibe** | Zeitlose Romantik, klassische Floristik - kein Boho-Chic |
| **Inspirationen** | bureaubetak.com, joyproctor.com, galialahav.com, sinclairandmoore.com |

### Kernbotschaft

> „Wahre Schönheit ist kein Zufall, sie ist eine Haltung. Gewachsen aus einer Kindheit voller Kreativität, verstehen wir unsere Arbeit nicht als Pflicht, sondern als Privileg."

---

## Farbpalette & Ästhetik

| Farbe | Hex | CSS Variable | Verwendung |
|-------|-----|--------------|------------|
| **Cream** | `#faf8f5` | `--color-cream` | Hintergründe, Statement-Section |
| **Gold** | `#c9a962` | `--color-gold` | Akzente, Buttons, Initiale, Icons |
| **White** | `#ffffff` | `--color-white` | Text auf dunklem Hintergrund |
| **Text Dark** | `#1a1a1a` | `--color-text-dark` | Fließtext, Überschriften |
| **Blush** | `#f8e8e0` | - | Soft Akzente |
| **Soft Peach** | `#fce4d6` | - | Warme Akzente |
| **Zartblau** | `#d4e5ed` | - | "Blue Romance" Design-Stil |

### Typografie

| Schriftart | Verwendung |
|------------|------------|
| **Cormorant Garamond** | Überschriften, Zitate, elegante Texte |
| **System Sans-Serif** | Body-Text, Navigation |

---

## Geschäftsbereiche

| Bereich | Zielgruppe | Services | Icon |
|---------|-----------|----------|------|
| **Hochzeiten** | Brautpaare | Full-Service Dekoration & Floristik | Ringe |
| **Private Feiern** | Privatpersonen | Jubiläen, Geburtstage, Taufen | Champagner |
| **Firmenevent & B2B** | Unternehmen | Corporate Events, Galas, Konferenzen | Gebäude |
| **Hotellerie & Gastronomie** | Hotels, Restaurants | Abo-Modelle, saisonale Dekoration | Besteck |
| **Studio & Rental** | Content Creator, Fotografen | Showroom-Vermietung für Shootings | Kamera |
| **Signature Design** | Privatvillen, Gästehäuser | Exklusive Konzepte mit Pflege-Service | Stern |
| **Trauerfloristik** | Trauernde Familien | Würdevolle Arrangements | Taube |

### B2B-Fokus: Hotellerie & Gastronomie

> „Sie verkaufen ein Gefühl – wir gestalten den passenden Rahmen."

- Subskriptionsmodelle für planbaren Cashflow
- Saisonale und event-basierte Dekoration
- Full-Service von Atrium bis Zimmer

---

## Website-Sektionen

| Nr | Sektion | Beschreibung | Erscheint | Technische Umsetzung | Warum |
|----|---------|--------------|-----------|---------------------|-------|
| 1 | **Opener** | "GUTJAHR" Text-Zoom-Animation | Sofort | CSS 3D Transforms, perspective | Dramatischer Einstieg, Markenprägung |
| 2 | **Hero Video** | Vollbild-Video + Zitat | Nach 3.5s | React Refs, onEnded Event | Emotion transportieren, Premium-Feeling |
| 3 | **Header** | Kompakte Navigation | Nach 8s | CSS Animation, Scroll-Event | Nicht vom Video ablenken |
| 4 | **Statement** | Goldener Initial "W", Philosophie | Beim Scrollen | Framer Motion whileInView | Werte kommunizieren, Vertrauen aufbauen |
| 5 | **Concierge Popup** | Lead-Formular, 7 Kategorien | 70% Statement | IntersectionObserver, localStorage | Lead-Generierung, Segmentierung |
| 6 | **Moodboards** | 6 Design-Welten | Beim Scrollen | CSS Grid, hover-Effekte | Inspiration, Stil-Navigation |
| 7 | **Services** | 4 Haupt-Kategorien | Beim Scrollen | Karten mit Detail-Links | Angebot strukturieren |
| 8 | **FAQ** | Akkordeon mit Fragen | Beim Scrollen | AnimatePresence | Einwände behandeln |
| 9 | **Kontakt** | Formular mit Validierung | Beim Scrollen | React State | Finaler Call-to-Action |

### Royal Concierge Popup

Ein elegantes, mehrstufiges Lead-Formular:

**Schritt 1:** Anlass-Auswahl mit 7 Kategorien (Custom SVG Icons in Gold/Grün)

**Schritt 2:** Kontaktformular mit Nachricht, Name, E-Mail

**Schritt 3:** Danke-Screen mit automatischem Guide-Download

| Feature | Beschreibung |
|---------|-------------|
| Trigger | IntersectionObserver bei 70% Statement-Sichtbarkeit |
| Einmalig | localStorage Flag `gutjahr_popup_shown` |
| Animation | Framer Motion fade + scale |
| E-Mail | Vorbereitet für EmailJS (geeinsam@gmail.com) |

---

## Technologie-Stack

| Technologie | Version | Verwendung |
|-------------|---------|------------|
| **React** | 19 | UI Framework, Hooks-basiert |
| **Vite** | 7.3 | Build Tool, Dev Server, HMR |
| **React Router** | 7 | HashRouter für GitHub Pages |
| **Framer Motion** | 12 | Animationen (whileInView, AnimatePresence) |
| **Vanilla CSS** | Modern | Variables, Flexbox, Grid |
| **GitHub Pages** | - | Hosting, CI/CD via gh-pages |
| **EmailJS** | (geplant) | E-Mail-Versand |

### Warum diese Technologien?

- **React 19**: Modernste Features, großes Ökosystem
- **Vite**: Blitzschnelles HMR, optimierte Builds
- **Framer Motion**: Flüssige Animationen ohne GSAP-Komplexität
- **Vanilla CSS**: Volle Kontrolle, keine Tailwind-Überladung

---

## Animations-Flow

```
┌──────────────────────────────────────────────────────────────────────────┐
│                           ANIMATIONS-TIMELINE                             │
├──────────────────────────────────────────────────────────────────────────┤
│                                                                           │
│  0s        3.5s       8s         9s              Scroll                  │
│  │          │          │          │                │                      │
│  ▼          ▼          ▼          ▼                ▼                      │
│                                                                           │
│  [OPENER]                                                                 │
│  "GUTJAHR" Text erscheint                                                 │
│  Entry-Button wird sichtbar                                               │
│       │                                                                   │
│       │ Click                                                             │
│       ▼                                                                   │
│  3D Zoom-Through Animation (perspective, translateZ, scale)              │
│       │                                                                   │
│       └──────────────────────────────────────────────────────────────┐   │
│                                                                       │   │
│  [VIDEO HERO]                                                         │   │
│  ├── Intro-Video: Logoanimation_header.mp4 (spielt 1x)               │   │
│  │        │                                                           │   │
│  │        │ onEnded Event                                             │   │
│  │        ▼                                                           │   │
│  ├── Loop-Video: Hintergrundvideo.mp4 (Endlosschleife)               │   │
│  │                                                                    │   │
│  ├── Nach 8s: Header fährt von oben ein (opacity + translateY)       │   │
│  │                                                                    │   │
│  └── Nach 9s: Zitat erscheint (Framer Motion fade-in von rechts)     │   │
│                                                                       │   │
│  [STATEMENT SECTION]                                                  │   │
│  ├── whileInView: Fade-in + translateY Animation                     │   │
│  │                                                                    │   │
│  └── Bei 70% Sichtbarkeit: Concierge Popup erscheint                 │   │
│              │                                                        │   │
│              ▼                                                        │   │
│  [CONCIERGE POPUP]                                                    │   │
│  ├── Backdrop: blur(8px) + rgba(0,0,0,0.3)                           │   │
│  ├── Modal: scale 0.95 → 1, opacity 0 → 1                            │   │
│  ├── Schritt 1 → 2: Slide-left Animation                             │   │
│  └── Nach Submit: Guide-Download + Auto-Close nach 5s                │   │
│                                                                       │   │
└───────────────────────────────────────────────────────────────────────┘
```

---

## Projektstruktur

```
src/
├── components/
│   ├── Layout/
│   │   ├── Header.jsx          # Navigation (8s verzögert, Scroll-Effekt)
│   │   ├── Footer.jsx          # Footer mit Social Links
│   │   └── Opener.jsx          # GUTJAHR 3D-Zoom Animation
│   ├── Hero/
│   │   └── VideoHero.jsx       # Video-Sequenz (Intro → Loop) + Zitat
│   ├── Statement/
│   │   └── Statement.jsx       # Goldener Initial "W", Philosophie-Text
│   ├── Popup/
│   │   └── ConciergPopup.jsx   # Lead-Formular (7 Kategorien, Custom SVG Icons)
│   ├── Moodboards/
│   │   ├── MoodboardGrid.jsx   # Grid mit 6 Design-Welten
│   │   └── MoodboardCard.jsx   # Einzelne Stimmungswelt-Karte
│   ├── Services/
│   │   └── Services.jsx        # 4 Service-Kategorien
│   ├── Contact/
│   │   └── ContactSection.jsx  # Kontaktformular
│   └── FAQ/
│       └── FAQ.jsx             # Akkordeon-FAQ
├── pages/
│   ├── LandingPage.jsx         # Hauptseite, orchestriert alle Sektionen
│   ├── MoodboardDetail.jsx     # Detail-Ansicht einer Stimmungswelt
│   └── ServiceDetail.jsx       # Detail-Ansicht einer Leistung
└── App.jsx                      # Router-Setup (HashRouter)

public/
├── images/
│   ├── 00_General/             # Logo, Icons
│   ├── 01_hero/                # Hero-Bilder
│   ├── 03_Gartenhaus/          # Gartenhaus/Showroom
│   ├── 04_Hochzeiten/          # Hochzeitsbilder
│   └── Leistungen/             # Service-Bilder
├── videos/
│   ├── Logoanimation_header.mp4  # Intro-Video (4.3MB)
│   ├── Hintergrundvideo.mp4      # Loop-Video (35MB, komprimiert)
│   └── Opener.mp4                # Opener-Hintergrund (67MB, komprimiert)
└── downloads/
    └── leitfaden/
        ├── hochzeit.pdf          # Guide für Hochzeiten
        ├── firmenevent.pdf       # Guide für B2B
        └── signature.pdf         # Guide für Signature Design
```

---

## Installation & Development

### Voraussetzungen

- Node.js 18+
- npm oder yarn

### Installation

```bash
git clone https://github.com/svenn8n-a11y/Gutjahrdesign.git
cd Gutjahrdesign
npm install
```

### Development Server

```bash
npm run dev
```

Öffnet auf http://localhost:5173/Gutjahrdesign/

### Build & Deploy

```bash
npm run build
npm run deploy
```

Deployed automatisch auf GitHub Pages.

### Lokales Testing

Um das Popup erneut zu testen (nach einmaligem Erscheinen):

```javascript
// In der Browser-Konsole eingeben:
localStorage.removeItem('gutjahr_popup_shown')
```

---

## Design-Stile (Moodboards)

| Stil | Farbpalette | Stimmung |
|------|-------------|----------|
| **Elegant & Blush** | Blush, Gold, Creme | Zeitlos romantisch |
| **All White** | Weiß, Creme, Silber | Puristisch, modern |
| **Classic Gold & Pastel** | Gold, Rosé, Peach | Klassisch elegant |
| **Blue Romance** | Zartblau, Weiß, Silber | Kühl romantisch |
| **Fields of Summer** | Pastelltöne, Grün | Sommerlich, natürlich |
| **Cozy Winter Wedding** | Warmweiß, Gold, Grün | Winterlich gemütlich |

---

## FAQ (Häufige Fragen)

| Frage | Antwort |
|-------|---------|
| **Wie plane ich eine Hochzeit mit euch?** | Kontaktieren Sie uns für ein erstes, kostenloses Beratungsgespräch. |
| **Bietet ihr individuelle Konzepte an?** | Ja, jedes Konzept ist einzigartig und auf Ihre Wünsche abgestimmt. |
| **Macht ihr auch die Blumen?** | JA! Die Floristik ist das Herzstück unserer Arbeit. |
| **Vermietet ihr auch Dekoartikel?** | Nein, wir verwenden unseren Fundus nur für eigene Konzepte. |

---

## Biblische Inspiration

Der Name "Gutjahr" trägt eine biblische Verheißung in sich:

> „Du krönst das Jahr mit deinem Gut, und deine Spuren triefen von Fett."
> — Psalm 65,12

Weitere inspirierende Verse:
- **Sacharja 9,17**: „Denn wie vortrefflich und wie schön ist es!"
- **Hohelied 2,12**: „Die Blumen zeigen sich auf dem Land..."
- **2. Mose 28,2**: „...zur Ehre und zur Zierde."

---

## Live Demo

[https://svenn8n-a11y.github.io/Gutjahrdesign/](https://svenn8n-a11y.github.io/Gutjahrdesign/)

---

## Kontakt

**Gutjahr Deko Design**
- Website: [gutjahrdekodesign.de](https://gutjahrdekodesign.de)
- E-Mail: geeinsam@gmail.com

---

*Mit Liebe zum Detail entwickelt.*
