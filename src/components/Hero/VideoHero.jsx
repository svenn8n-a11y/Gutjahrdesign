import { motion } from 'framer-motion';

const VideoHero = () => {
    return (
        <section className="hero-section">
            <div className="video-background">
                {/* Placeholder for video - using a stylish gradient for now which fits the 'Light & Airy' theme */}
                <div className="video-placeholder" />
                <div className="overlay" />
            </div>

            <div className="hero-content container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <h1 className="hero-title">
                        Zeitlose Eleganz <br />
                        <span className="italic">für unvergessliche Momente</span>
                    </h1>

                    <p className="hero-subtitle">
                        Exklusives Dekorationsdesign für Hochzeiten & Events
                    </p>

                    <a href="#contact" className="cta-button">
                        Erstgespräch vereinbaren
                    </a>
                </motion.div>
            </div>

            <style>{`
        .hero-section {
          position: relative;
          height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .video-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: -1;
        }

        .video-placeholder {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, var(--color-blush) 0%, var(--color-cream) 100%);
          /* Can be replaced with <video> tag later */
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(2px);
        }

        .hero-content {
          text-align: center;
          z-index: 1;
          color: var(--color-text-dark);
        }

        .hero-title {
          font-family: var(--font-heading);
          font-size: 3.5rem; /* Fallback */
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          margin-bottom: 1.5rem;
          line-height: 1.1;
        }

        .hero-title .italic {
          font-style: italic;
          font-weight: 300;
          display: block;
          font-size: 0.8em;
          margin-top: 0.5rem;
        }

        .hero-subtitle {
          font-size: 1.1rem;
          margin-bottom: 2.5rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--color-text-muted);
        }

        .cta-button {
          display: inline-block;
          padding: 1rem 2.5rem;
          background-color: var(--color-gold);
          color: white;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          font-size: 0.9rem;
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        .cta-button:hover {
          background-color: var(--color-gold-light);
          transform: translateY(-2px);
          box-shadow: 0 10px 20px -5px rgba(212, 175, 55, 0.3);
        }
      `}</style>
        </section>
    );
};

export default VideoHero;
