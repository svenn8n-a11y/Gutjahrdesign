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

      <div className="hero-content">
        <motion.div
          className="hero-quote-wrapper"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 9 }}
        >
          <blockquote className="hero-quote">
            <span className="quote-mark">„</span><span className="quote-text">Denn wie<br />
              vortrefflich<br />
              schön ist es!</span><span className="quote-mark">"</span>
          </blockquote>
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
          position: absolute;
          right: 0;
          bottom: 15%;
          z-index: 1;
          padding-right: 5vw;
        }

        .hero-quote-wrapper {
          text-align: right;
        }

        .hero-quote {
          font-family: var(--font-heading);
          color: rgba(255, 253, 245, 0.9);
          text-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
          position: relative;
          display: inline-block;
        }

        .quote-text {
          font-size: clamp(2rem, 4vw, 3.5rem);
          font-weight: 300;
          font-style: italic;
          line-height: 1.2;
          display: block;
          letter-spacing: 0.02em;
        }

        .quote-mark {
          font-family: var(--font-heading);
          font-size: 1.2em;
          font-weight: 300;
          font-style: italic;
          opacity: 0.8;
        }
      `}</style>
    </section>
  );
};

export default VideoHero;
