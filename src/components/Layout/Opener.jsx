import { useState } from 'react';

const Opener = ({ onComplete }) => {
    const [isAnimating, setIsAnimating] = useState(false);

    const startAnimation = () => {
        setIsAnimating(true);

        // Animation duration 3500ms -> Switch to main app
        setTimeout(() => {
            onComplete();
        }, 3500);
    };

    return (
        <div className="opener-wrapper">
            {/* Hero Container */}
            <div className="hero-container">
                <div className="hero-content">
                    <div className="perspective-wrapper">
                        <div className={`text-wrapper ${isAnimating ? 'animate' : ''}`}>
                            <span className="letter">G</span>
                            <span className="letter">U</span>
                            <span className="letter">T</span>
                            <span className="letter letter-j">J</span>
                            <span className="letter">A</span>
                            <span className="letter">H</span>
                            <span className="letter">R</span>
                        </div>
                    </div>
                    <button
                        className={`entry-btn ${isAnimating ? 'hidden' : ''}`}
                        onClick={startAnimation}
                    >
                        Entry
                    </button>
                </div>
            </div>

            <style>{`
        /* Reset and base styles from snippet */
        .opener-wrapper {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            z-index: 9999;
            background-color: #ffffff;
            font-family: 'Cormorant Garamond', serif;
        }

        /* Hero Container - Full viewport */
        .hero-container {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #ffffff;
            z-index: 100;
            transition: opacity 0.5s ease-out;
        }

        /* Hero content */
        .hero-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            gap: 3rem;
        }

        /* Perspective wrapper */
        .perspective-wrapper {
            perspective: 1000px;
            perspective-origin: 50% 50%;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        /* Text wrapper */
        .text-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            transform-style: preserve-3d;
            transform-origin: 47% 50%;
            padding: 0 19.1vw;
            width: 100%;
        }

        .text-wrapper.animate {
            animation: zoomThrough 3.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        /* Letters */
        .letter {
            font-size: 8.2vw;
            font-weight: 300;
            color: #0a0a0a;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            display: inline-block;
            transform-style: preserve-3d;
        }

        .letter:last-child {
            letter-spacing: 0;
        }

        .letter-j {
            position: relative;
        }

        /* Animation Keyframes */
        @keyframes zoomThrough {
            0% {
                transform: translateZ(0) scale(1);
                opacity: 1;
            }
            40% {
                transform: translateZ(200px) scale(1.5);
                opacity: 1;
            }
            70% {
                transform: translateZ(800px) scale(4);
                opacity: 1;
            }
            85% {
                transform: translateZ(2000px) scale(12);
                opacity: 0.8;
            }
            100% {
                transform: translateZ(5000px) scale(50);
                opacity: 0;
            }
        }

        /* Entry Button */
        .entry-btn {
            background: transparent;
            border: 1px solid #0a0a0a;
            color: #0a0a0a;
            padding: 0.8rem 2.5rem;
            font-family: inherit;
            font-size: 0.9rem;
            font-weight: 300;
            letter-spacing: 0.15em;
            text-transform: uppercase;
            cursor: pointer;
            transition: all 0.3s ease;
            z-index: 101; /* Above text */
        }

        .entry-btn:hover {
            background: #0a0a0a;
            color: #ffffff;
        }

        .entry-btn.hidden {
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.5s ease;
        }

        /* Responsive */
        @media (max-width: 768px) {
            .text-wrapper { padding: 0 10vw; }
            .letter { font-size: 10vw; }
        }

        @media (max-width: 480px) {
            .text-wrapper { padding: 0 5vw; }
            .letter { font-size: 12vw; letter-spacing: 0.05em; }
        }
      `}</style>
        </div>
    );
};

export default Opener;
