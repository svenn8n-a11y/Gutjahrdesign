# Changelog

Alle wichtigen Änderungen am GutjahrDesign Projekt.

---

## [2.0.0] - 2025-02-07

### Neue Features

#### Statement-Sektion (`src/components/Statement/Statement.jsx`)
- Neue elegante Statement-Sektion nach dem Hero-Bereich
- Überschrift mit deutschen Anführungszeichen: „Es gibt eine Schönheit, die den Atem raubt – und eine, die das Herz zur Ruhe kommen lässt."
- Fließtext mit goldenem Initial-Buchstaben "W"
- Serifenschrift (Cormorant Garamond)
- Cremefarbener Hintergrund
- Framer Motion fade-in Animation beim Scrollen

#### Hero-Zitat (`src/components/Hero/VideoHero.jsx`)
- Neues Zitat: „Denn wie vortrefflich schön ist es!"
- Deutsche Anführungszeichen mit einheitlichem Stil
- Cremeweiße Schrift mit leichter Transparenz (rgba(255, 253, 245, 0.9))
- Rechts unten positioniert mit Text-Schatten
- Kursive Serifenschrift
- Erscheint nach 9 Sekunden mit Framer Motion Animation

### Änderungen

#### Header/Navigation (`src/components/Layout/Header.jsx`)
- Menu verkleinert und kompakter gestaltet
- Padding reduziert: 1.5rem → 0.8rem
- Logo-Schriftgröße: 1.5rem → 1.1rem
- Nav-Links: 0.9rem → 0.75rem
- Gap zwischen Links: 2rem → 1.5rem
- Kontakt-Button padding reduziert

#### Video-Sequenzierung (`src/components/Hero/VideoHero.jsx`)
- Intro-Video (Logoanimation_header.mp4) spielt einmal ab
- Nahtloser Übergang zum Loop-Video (Hintergrundvideo.mp4)
- Verwendung von React Refs und onEnded Event

#### LandingPage (`src/pages/LandingPage.jsx`)
- Statement-Komponente nach VideoHero eingefügt
- Neue Seitenreihenfolge: VideoHero → Statement → MoodboardGrid → Services → FAQ → Contact

### Styling-Verbesserungen

- Einheitliche deutsche Anführungszeichen „..." überall
- Konsistente Schriftarten (Cormorant Garamond für Überschriften)
- Goldene Akzentfarbe für Initiale und Anführungszeichen
- Responsive Anpassungen für Mobile

---

## [1.1.0] - 2025-02-06

### Video-Optimierung
- Videos komprimiert für GitHub (<100MB Limit)
- Opener.mp4: 202MB → 67MB
- Hintergrundvideo.mp4: 146MB → 35MB
- Logoanimation_header.mp4: 4.3MB (hohe Qualität beibehalten)

### Bug Fixes

#### Header.jsx - Kritischer Bug behoben
- `setScrolled` wurde verwendet aber nie deklariert
- Fix: `const [scrolled, setScrolled] = useState(false);` hinzugefügt
- Navigation funktioniert jetzt korrekt

#### Opener.jsx - Vereinfacht
- Video-Container entfernt (Video ist jetzt nur in VideoHero)
- Nur Text-Zoom-Animation behalten
- Sauberer Übergang zu VideoHero nach 3.5s

---

## [1.0.0] - 2025-02-06

### Initial Release
- Opener Animation mit "GUTJAHR" Text-Zoom
- Video Hero mit Vollbild-Hintergrund
- Responsive Navigation
- Moodboard-Galerie mit 6 Design-Welten
- 4 Service-Kategorien
- Kontakt-Formular
- GitHub Pages Deployment

---

## Dateistruktur

| Datei | Beschreibung |
|-------|-------------|
| `src/components/Layout/Header.jsx` | Kompakte Navigation mit Scroll-Effekt |
| `src/components/Layout/Opener.jsx` | GUTJAHR Zoom-Animation |
| `src/components/Hero/VideoHero.jsx` | Video-Hintergrund mit Zitat |
| `src/components/Statement/Statement.jsx` | Statement-Sektion mit Initial |
| `src/pages/LandingPage.jsx` | Hauptseite mit allen Sektionen |

## Videos

| Video | Größe | Verwendung |
|-------|-------|------------|
| Logoanimation_header.mp4 | 4.3MB | Intro (spielt einmal) |
| Hintergrundvideo.mp4 | 35MB | Loop (nach Intro) |
| Opener.mp4 | 67MB | Opener-Hintergrund |
