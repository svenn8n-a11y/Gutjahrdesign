# Changelog

Alle wichtigen Änderungen am GutjahrDesign Projekt - eine vollständige Dokumentation der Entwicklungsreise.

---

## Inhaltsverzeichnis

- [Version 3.0.0 - Dokumentation](#300---2025-02-08)
- [Version 2.1.0 - Audio & Optimierungen](#210---2025-02-08)
- [Version 2.0.0 - Statement & Video](#200---2025-02-07)
- [Version 1.1.0 - Video-Optimierung](#110---2025-02-06)
- [Version 1.0.0 - Initial Release](#100---2025-02-06)
- [Entscheidungshistorie](#entscheidungshistorie)
- [Gelöste Probleme](#gelöste-probleme)
- [Learnings](#learnings)

---

## [3.0.0] - 2025-02-08

### Dokumentation & Royal Concierge Popup

Umfassende Dokumentation des Projekts gemäß Konzeptdateien.

#### README komplett überarbeitet

| Sektion | Inhalt |
|---------|--------|
| Vision & Philosophie | "Light & Airy" Design-Stil, Inspirationen |
| Farbpalette | Hex-Codes, CSS Variables, Verwendung |
| 7 Geschäftsbereiche | Hochzeiten bis Trauerfloristik |
| Website-Sektionen | Tabellarisch mit Timing, Technik, Warum |
| Technologie-Stack | React 19, Vite 7, Framer Motion |
| Animations-Flow | ASCII-Diagramm der Timeline |
| Projektstruktur | Vollständige Dateiübersicht |
| Biblische Inspiration | Psalm 65,12, Sacharja 9,17 |

#### Royal Concierge Popup (Vorherige Implementierung)

| Feature | Beschreibung |
|---------|-------------|
| **7 Kategorien** | Hochzeit, Private Feier, Firmenevent, Hotellerie, Studio, Signature, Trauerfloristik |
| **Custom SVG Icons** | Gold (#c9a962) → Grün (#4a7c59) bei Hover |
| **3-Schritt-Formular** | Auswahl → Kontakt → Danke + Download |
| **Scroll-Trigger** | IntersectionObserver bei 70% Statement |
| **localStorage** | Einmalige Anzeige pro Browser |

#### Design-Entscheidungen dokumentiert

| Thema | Entscheidung | Grund |
|-------|--------------|-------|
| 5 → 7 Kategorien | Studio + Signature hinzugefügt | Vollständiges Angebot |
| Emojis → SVG | Custom SVG Icons | Eleganter, konsistente Farben |
| Checkbox → Auto | Guide automatisch anzeigen | Bessere UX |

---

## [2.1.0] - 2025-02-08

### Audio & Atmosphäre

- **Hintergrundmusik**: Implementiert mit Autoplay-Logik (startet nach Opener, fade-in 0.5s)
- **Mute-Button**: Im Header hinzugefügt (Lautsprecher-Icon), um Musik an/aus zu schalten
- **Autoplay-Fix**: Robuste Logik für Safari/Chrome Autoplay-Policies (User-Interaction beim Opener schaltet Audio frei)

### Kontakt & Leads

- **Sofort-Download**: Zwischenschritt ("Möchten Sie Leitfaden?") entfernt
- **Erfolgsmeldung**: Jetzt direkt mit Text "Geschenk... in Ihrem Postfach" und Download-Button
- **Popup-Optimierung**: Emojis durch SVG-Icons ersetzt, Texte angepasst
- **Neue Kategorien**: Ordner für `trauer` und `privatfest` hinzugefügt und verknüpft

### Design & Content

- **Header**: Menüpunkte dauerhaft in Gold (`var(--color-gold)`)
- **Statement**: Fehlenden Punkt ergänzt ("...gemeinsam zu gestalten.")
- **Video-Hero**: Anführungszeichen beim Zitat angepasst (gleiche Größe, inline)
- **Service-Bilder**: Icons durch hochwertige Bilder ersetzt (Leistungen)

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

| Element | Vorher | Nachher |
|---------|--------|---------|
| Padding | 1.5rem | 0.8rem |
| Logo-Größe | 1.5rem | 1.1rem |
| Nav-Links | 0.9rem | 0.75rem |
| Gap | 2rem | 1.5rem |

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

| Video | Vorher | Nachher | Reduktion |
|-------|--------|---------|-----------|
| Opener.mp4 | 202MB | 67MB | -67% |
| Hintergrundvideo.mp4 | 146MB | 35MB | -76% |
| Logoanimation_header.mp4 | 4.3MB | 4.3MB | beibehalten |

**FFmpeg-Befehl:**
```bash
ffmpeg -i input.mp4 -c:v libx264 -b:v 20M output.mp4
```

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

## Entscheidungshistorie

Eine chronologische Dokumentation wichtiger Architektur- und Design-Entscheidungen.

### Technologie-Entscheidungen

| Entscheidung | Gewählt | Alternativen | Grund |
|--------------|---------|--------------|-------|
| Framework | React 19 | Next.js, Vue | Einfachheit, schneller Start |
| Build Tool | Vite 7 | CRA, Webpack | Schnelles HMR, moderne DX |
| Routing | HashRouter | BrowserRouter | GitHub Pages Kompatibilität |
| Animation | Framer Motion | GSAP, CSS | Deklarativ, React-native |
| Styling | Vanilla CSS | Tailwind, SCSS | Volle Kontrolle, kein Overhead |
| Hosting | GitHub Pages | Vercel, Netlify | Kostenlos, einfaches Deploy |

### Design-Entscheidungen

| Datum | Entscheidung | Kontext | Ergebnis |
|-------|--------------|---------|----------|
| 06.02 | "Light & Airy" Stil | Premium-Positionierung | Hell, traumhaft, elegant |
| 07.02 | Header nach 8s | Video soll wirken | Besserer erster Eindruck |
| 07.02 | Video-Sequenzierung | Intro hat Ende | Nahtloser Loop-Übergang |
| 08.02 | SVG statt Emojis | Inkonsistente Darstellung | Elegante Gold/Grün Icons |
| 08.02 | 7 Geschäftsbereiche | Vollständiges Angebot | Alle Services abgedeckt |

---

## Gelöste Probleme

### Technische Probleme

| Problem | Symptom | Ursache | Lösung |
|---------|---------|---------|--------|
| Header-Bug | Seite lädt nicht | `setScrolled` undefined | useState hinzugefügt |
| Video >100MB | Push schlägt fehl | GitHub Limit | FFmpeg Komprimierung |
| Popup unsichtbar | Erscheint nie | localStorage Flag | `localStorage.removeItem()` |
| HashRouter 404 | Seiten fehlen | Falsche Base-URL | `basename="/Gutjahrdesign/"` |

### UX-Probleme

| Problem | Symptom | Lösung |
|---------|---------|--------|
| Header überlappte Video | Ablenkung | 8s Verzögerung |
| Emojis unelegant | Inkonsistent | Custom SVG Icons |
| Guide nicht geladen | Kein Download | Korrekter BASE_URL Pfad |

### Browser-Konsole

**Problem:** localStorage-Befehl einfügen nicht möglich.

**Lösung:** `Einfügen erlauben` (mit großem E) eingeben.

---

## Learnings

### React & Vite

| Learning | Anwendung |
|----------|-----------|
| `useRef` für DOM | `videoRef.current.play()` |
| `onEnded` Event | Video-Sequenzierung |
| `IntersectionObserver` | Popup-Trigger |
| `localStorage` | Einmaliges Popup |
| `import.meta.env.BASE_URL` | GitHub Pages Pfade |

### Framer Motion

| Feature | Anwendung |
|---------|-----------|
| `whileInView` | Scroll-Animationen |
| `AnimatePresence` | Exit-Animationen |
| `transition.delay` | Zeitversetztes Erscheinen |

### CSS Techniken

| Technik | Vorteil |
|---------|---------|
| CSS Variables | Konsistente Farben |
| `clamp()` | Responsive ohne Media Queries |
| `object-fit: cover` | Keine Video-Verzerrung |
| `backdrop-filter: blur()` | Elegantes Modal-Overlay |

---

## Dateistruktur

### Komponenten

| Datei | Beschreibung |
|-------|-------------|
| `Layout/Header.jsx` | Navigation, 8s Verzögerung, Mute-Button |
| `Layout/Opener.jsx` | GUTJAHR 3D-Zoom Animation |
| `Hero/VideoHero.jsx` | Video-Sequenz + Zitat |
| `Statement/Statement.jsx` | Goldener Initial "W" |
| `Popup/ConciergPopup.jsx` | 7 Kategorien, SVG Icons |
| `Moodboards/MoodboardGrid.jsx` | 6 Design-Welten |
| `Services/Services.jsx` | 4 Leistungskategorien |
| `FAQ/FAQ.jsx` | Akkordeon |
| `Contact/ContactSection.jsx` | Kontaktformular |

### Videos

| Video | Größe | Verwendung |
|-------|-------|------------|
| Logoanimation_header.mp4 | 4.3MB | Intro (1x) |
| Hintergrundvideo.mp4 | 35MB | Loop |
| Opener.mp4 | 67MB | Opener-Hintergrund |

### Downloads

| PDF | Kategorie |
|-----|-----------|
| hochzeit.pdf | Hochzeiten |
| firmenevent.pdf | B2B |
| signature.pdf | Signature Design |

---

## Nächste Schritte

- [ ] EmailJS Integration (geeinsam@gmail.com)
- [ ] Mobile Menu implementieren
- [ ] Moodboard-Detailseiten
- [ ] Performance (Lazy Loading)
- [ ] SEO (Meta-Tags)

---

*Dokumentiert mit Claude Code - Anthropic's CLI for Claude*
