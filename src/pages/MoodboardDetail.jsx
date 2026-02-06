import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const moodData = {
    1: { title: 'Elegant & Blush', description: 'Ein Traum in Zartrosa und Creme. Perfekt für romantische Schloss-Hochzeiten.', color: '#F4E4E4' },
    2: { title: 'All White', description: 'Reinheit, Eleganz und moderne Ästhetik. White-on-White Konzepte.', color: '#FFFFFF' },
    3: { title: 'Classic Gold', description: 'Zeitloser Glamour mit goldenen Akzenten und warmen Tönen.', color: '#FCECE6' },
    4: { title: 'Blue Romance', description: 'Himmelblaue Leichtigkeit trifft auf festliche Eleganz.', color: '#E3EBF4' },
    5: { title: 'Summer Pastels', description: 'Die Farben des Sommers eingefangen in leichter Floristik.', color: '#F9F7F2' },
    6: { title: 'Winter Wedding', description: 'Gemütliche Winterstimmung mit Kerzenschein und kühlen Tönen.', color: '#F0F0F0' },
};

const MoodboardDetail = () => {
    const { id } = useParams();
    const mood = moodData[id];

    if (!mood) return <div className="container" style={{ paddingTop: '100px' }}>Moodboard not found</div>;

    return (
        <div className="moodboard-detail">
            <div
                className="mood-hero"
                style={{ backgroundColor: mood.color }}
            >
                <div className="container">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        {mood.title}
                    </motion.h1>
                </div>
            </div>

            <div className="container content">
                <p className="description">{mood.description}</p>

                <div className="gallery-grid">
                    {[1, 2, 3, 4].map(i => (
                        <div key={i} className="gallery-item" />
                    ))}
                </div>

                <div className="cta-section">
                    <h3>Gefällt Ihnen dieser Stil?</h3>
                    <button className="btn-request">Anfrage stellen</button>
                </div>
            </div>

            <style>{`
        .mood-hero {
          height: 50vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          margin-bottom: 4rem;
        }

        .mood-hero h1 {
          font-size: 4rem;
        }

        .content {
          max-width: 800px;
        }

        .description {
          font-size: 1.2rem;
          color: var(--color-text-muted);
          text-align: center;
          margin-bottom: 4rem;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          margin-bottom: 4rem;
        }

        .gallery-item {
          aspect-ratio: 4/5;
          background-color: #eee;
        }

        .cta-section {
          text-align: center;
          padding: 4rem;
          background-color: var(--color-cream);
          border-radius: 4px;
        }

        .btn-request {
          margin-top: 1.5rem;
          padding: 1rem 2rem;
          background-color: var(--color-text-dark);
          color: white;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
      `}</style>
        </div>
    );
};

export default MoodboardDetail;
