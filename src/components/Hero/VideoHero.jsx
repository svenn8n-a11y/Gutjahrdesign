import { motion } from 'framer-motion';

const VideoHero = () => {
  return (
    <section className="hero-section">
      <div className="video-background">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          poster={`${import.meta.env.BASE_URL}images/01_hero/Hintergrundbild_weiss.png`}
        >
          <source src={`${import.meta.env.BASE_URL}videos/Opener.mp4`} type="video/mp4" />
        </video>
        <div className="overlay" />
      </div>

      <div className="hero-content container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 9 }}
        >
          <h1 className="hero-title">
            Zeitlose Eleganz <br />
            <span className="italic">für unvergessliche Momente</span>
          </h1>


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

        .hero-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.1);
          /* Removed blur for clearer video */
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


      `}</style>
    </section>
  );
};

export default VideoHero;
