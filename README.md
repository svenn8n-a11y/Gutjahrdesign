# GutjahrDesign

Eine elegante Webseite für Gutjahr Design - Hochzeits- und Event-Design Studio.

## Features

- **Opener Animation**: Elegante "GUTJAHR" Text-Zoom-Animation mit 3D-Perspektive
- **Video Hero**: Fullscreen Video-Hintergrund mit Video-Sequenzierung (Intro → Loop)
- **Hero Quote**: Elegantes Zitat mit deutschen Anführungszeichen, cremeweiß, rechts positioniert
- **Statement Section**: Edles Statement mit Initial-Buchstabe und Serifenschrift
- **Responsive Navigation**: Kompaktes weißes Menu mit transparentem Hintergrund, erscheint nach 8 Sekunden
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
│   │   ├── Header.jsx      # Navigation (kompakt, transparent)
│   │   ├── Footer.jsx      # Footer
│   │   └── Opener.jsx      # Intro-Animation (GUTJAHR Zoom)
│   ├── Hero/
│   │   └── VideoHero.jsx   # Video-Hintergrund mit Zitat
│   ├── Statement/
│   │   └── Statement.jsx   # Statement-Sektion mit Initial
│   ├── Moodboards/
│   ├── Services/
│   ├── Contact/
│   └── Info/
├── pages/
│   ├── LandingPage.jsx
│   ├── MoodboardDetail.jsx
│   └── ServiceDetail.jsx
└── App.jsx

public/
├── images/               # Alle Bilder
│   ├── 00_General/       # Logo und allgemeine Assets
│   ├── 01_hero/          # Hero-Hintergrundbilder
│   ├── 03_Gartenhaus/    # Gartenhaus-Bilder
│   ├── 04_Hochzeiten/    # Hochzeitsbilder
│   └── Leistungen/       # Service-Bilder
└── videos/               # Alle Videos
    ├── Logoanimation_header.mp4   # Intro-Video (4.3MB)
    ├── Hintergrundvideo.mp4       # Loop-Video (35MB)
    └── Opener.mp4                 # Opener-Video (67MB)
```

## Animation Flow

1. **Opener**: "GUTJAHR" + Entry Button erscheint
2. **Klick Entry**: 3D Zoom-Through Animation (3.5s)
3. **VideoHero**: Intro-Video spielt einmal ab (Logoanimation_header.mp4)
4. **Video-Übergang**: Nahtloser Wechsel zum Loop-Video (Hintergrundvideo.mp4)
5. **Nach 9s**: Hero-Zitat erscheint (Framer Motion fade-in)
6. **Nach 8s**: Navigation fährt herunter (weiß, transparent)
7. **Scrollen**: Statement-Sektion → Moodboards → Services → FAQ → Kontakt

## Live Demo

[https://svenn8n-a11y.github.io/Gutjahrdesign/](https://svenn8n-a11y.github.io/Gutjahrdesign/)
