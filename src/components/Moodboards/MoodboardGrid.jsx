import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const moods = [
    { id: 1, title: 'Elegant & Blush', color: '#F4E4E4', image: '/images/04_Hochzeiten/IMG_1005.jpg' },
    { id: 2, title: 'All White', color: '#FFFFFF', image: '/images/04_Hochzeiten/IMG_1006.jpg' },
    { id: 3, title: 'Classic Gold', color: '#FCECE6', image: '/images/04_Hochzeiten/IMG_1008.jpg' },
    { id: 4, title: 'Blue Romance', color: '#E3EBF4', image: '/images/04_Hochzeiten/IMG_1010.jpg' },
    { id: 5, title: 'Summer Pastels', color: '#F9F7F2', image: '/images/04_Hochzeiten/IMG_1012.jpg' },
    { id: 6, title: 'Winter Wedding', color: '#F0F0F0', image: '/images/04_Hochzeiten/IMG_1015.jpg' },
];

const MoodboardGrid = () => {
    return (
        <section id="moodboards" className="moodboard-section">
            <div className="container">
                <div className="section-header">
                    <h2>Unsere Stimmungswelten</h2>
                    <p>Finden Sie den Stil, der Ihre Geschichte erzählt.</p>
                </div>

                <div className="grid">
                    {moods.map((mood, index) => (
                        <Link to={`/moodboard/${mood.id}`} key={mood.id}>
                            <motion.div
                                className="mood-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div
                                    className="mood-image-placeholder"
                                    style={{ backgroundColor: mood.color }}
                                >
                                    <img
                                        src={mood.image}
                                        alt={mood.title}
                                        className="mood-image"
                                        loading="lazy"
                                    />
                                    <span className="mood-overlay-text">View Mood</span>
                                </div>
                                <h3>{mood.title}</h3>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>

            <style>{`
        .moodboard-section {
          padding: var(--spacing-section) 0;
          background-color: var(--color-white);
        }

        .section-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .section-header p {
          color: var(--color-text-muted);
          font-size: 1.1rem;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
        }

        .grid a {
          text-decoration: none;
          color: inherit;
        }

        .mood-card {
          cursor: pointer;
        }

        .mood-image-placeholder {
          width: 100%;
          aspect-ratio: 3/4;
          background-color: var(--color-cream);
          margin-bottom: 1rem;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(0,0,0,0.05); /* Subtle border for white cards */
        }

        .mood-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .mood-overlay-text {
          opacity: 0;
          transition: opacity 0.3s ease;
          color: var(--color-text-dark);
          font-family: var(--font-heading);
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .mood-card:hover .mood-overlay-text {
          opacity: 1;
        }

        .mood-card:hover .mood-image {
          transform: scale(1.05);
        }

        .mood-card h3 {
          font-size: 1.25rem;
          text-align: center;
          margin-bottom: 0;
        }
      `}</style>
        </section>
    );
};

export default MoodboardGrid;
