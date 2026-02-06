import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Opener = ({ onComplete }) => {
    const [stage, setStage] = useState('text'); // 'text' | 'video'

    const handleEnter = () => {
        setStage('transitioning');
        setTimeout(() => {
            setStage('video');
            // Optional: auto-complete after some time or let user click to enter site
            // setTimeout(onComplete, 5000); 
        }, 800);
    };

    return (
        <AnimatePresence mode="wait">
            {stage === 'text' && (
                <motion.div
                    className="opener-text-stage"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
                    transition={{ duration: 0.8 }}
                    key="text-stage"
                    onClick={handleEnter}
                >
                    <div className="center-content">
                        <h1 className="opener-title">
                            <span className="font-light">GUT</span>
                            <span className="font-bold">JAHR</span>
                        </h1>
                        <motion.div
                            className="enter-text"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 1 }}
                        >
                            ENTER
                        </motion.div>
                    </div>
                </motion.div>
            )}

            {stage === 'video' && (
                <motion.div
                    className="opener-video-stage"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    key="video-stage"
                >
                    <div className="video-background">
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="opener-video"
                        >
                            <source src="/videos/Logoanimation2.mp4" type="video/mp4" />
                        </video>
                        {/* Gradient overlay to ensure text readability */}
                        <div className="video-overlay-gradient"></div>
                    </div>

                    <div className="content-overlay">
                        <motion.div
                            className="logo-container"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                        >
                            {/* Using the moved logo */}
                            <img src="/images/00_General/Logo.jpeg" alt="Gutjahr Logo" className="opener-logo" />
                        </motion.div>

                        <motion.button
                            className="enter-site-btn"
                            onClick={onComplete}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2 }}
                        >
                            ZUR WEBSITE
                        </motion.button>
                    </div>
                </motion.div>
            )}

            <style>{`
        .opener-text-stage {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          cursor: pointer;
        }

        .opener-title {
          font-family: var(--font-heading); /* Or a specific sans-serif if preferred like reference */
          font-size: 5rem;
          color: #000;
          letter-spacing: 0.2em;
          margin: 0;
          line-height: 1;
        }

        .font-light { font-weight: 300; }
        .font-bold { font-weight: 700; }

        .enter-text {
          margin-top: 2rem;
          font-size: 0.9rem;
          letter-spacing: 0.3em;
          text-align: center;
          color: #999;
        }

        .opener-video-stage {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: #000; /* Dark background for video stage */
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .video-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0.6;
        }

        .video-placeholder-gradient {
            display: none;
        }

        .opener-video {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .video-overlay-gradient {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.4); /* Slight darken for contrast */
        }

        .content-overlay {
            position: relative;
            z-index: 10;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 3rem;
        }

        .opener-logo {
            max-width: 300px;
            filter: invert(1) brightness(2); /* Make logo white if it's black on transparent/white */
            mix-blend-mode: screen; /* Helps integrate if not transparent png */
        }

        .enter-site-btn {
            color: white;
            border: 1px solid rgba(255,255,255,0.3);
            padding: 1rem 2rem;
            text-transform: uppercase;
            letter-spacing: 0.2em;
            font-size: 0.8rem;
            background: transparent;
            transition: all 0.3s;
        }

        .enter-site-btn:hover {
            background: white;
            color: black;
        }
      `}</style>
        </AnimatePresence>
    );
};

export default Opener;
