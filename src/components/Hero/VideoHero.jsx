import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const VideoHero = () => {
  const [showLoopVideo, setShowLoopVideo] = useState(false);
  const introVideoRef = useRef(null);
  const loopVideoRef = useRef(null);

  const handleIntroEnded = () => {
    setShowLoopVideo(true);
    if (loopVideoRef.current) {
      loopVideoRef.current.play();
    }
  };

  return (
    <section className="hero-section">
      <div className="video-background">
        {/* Intro Video - plays once */}
        <video
          ref={introVideoRef}
          className={`hero-video ${showLoopVideo ? 'hidden' : ''}`}
          autoPlay
          muted
          playsInline
          onEnded={handleIntroEnded}
        >
          <source src={`${import.meta.env.BASE_URL}videos/Logoanimation_header.mp4`} type="video/mp4" />
        </video>

        {/* Loop Video - plays after intro */}
        <video
          ref={loopVideoRef}
          className={`hero-video ${showLoopVideo ? '' : 'hidden'}`}
          muted
          loop
          playsInline
        >
          <source src={`${import.meta.env.BASE_URL}videos/Hintergrundvideo.mp4`} type="video/mp4" />
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
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: opacity 0.5s ease;
        }

        .hero-video.hidden {
          opacity: 0;
          pointer-events: none;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.1);
        }

        .hero-content {
          text-align: center;
          z-index: 1;
          color: var(--color-text-dark);
        }

        .hero-title {
          font-family: var(--font-heading);
          font-size: 3.5rem;
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
