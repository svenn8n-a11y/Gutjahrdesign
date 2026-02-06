# GutjahrDesign

Eine elegante Webseite für Gutjahr Design - Hochzeits- und Event-Design Studio.

## Features

- **Opener Animation**: Elegante "GUTJAHR" Text-Zoom-Animation mit 3D-Perspektive
- **Video Hero**: Fullscreen Video-Hintergrund nach der Opener-Animation
- **Responsive Navigation**: Weisses Menu mit transparentem Hintergrund, erscheint nach 8 Sekunden
- **Moodboards**: Galerie mit 6 verschiedenen Design-Welten
- **Services**: 4 Service-Kategorien mit Detail-Seiten
- **Kontakt-Formular**: Integriertes Kontaktformular

## Tech Stack

- **React 19** - UI Framework
- **Vite 7** - Build Tool
- **React Router 7** - Routing
- **Framer Motion** - Animationen
- **GitHub Pages** - Hosting

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

## Build & Deploy

```bash
npm run build
npm run deploy
```

## Projektstruktur

```
src/
├── components/
│   ├── Layout/
│   │   ├── Header.jsx      # Navigation
│   │   ├── Footer.jsx      # Footer
│   │   └── Opener.jsx      # Intro-Animation
│   ├── Hero/
│   │   └── VideoHero.jsx   # Video-Hintergrund
│   ├── Moodboards/
│   ├── Services/
│   ├── Contact/
│   └── Info/
├── pages/
│   ├── LandingPage.jsx
│   ├── MoodboardDetail.jsx
│   └── ServiceDetail.jsx
└── App.jsx
```

## Animation Flow

1. **Opener**: "GUTJAHR" + Entry Button erscheint
2. **Klick Entry**: 3D Zoom-Through Animation (3.5s)
3. **VideoHero**: Video im Vollbild-Modus
4. **Nach 8s**: Navigation fährt herunter
5. **Scrollen**: Voller Zugriff auf alle Sektionen

## Live Demo

[https://svenn8n-a11y.github.io/Gutjahrdesign/](https://svenn8n-a11y.github.io/Gutjahrdesign/)
