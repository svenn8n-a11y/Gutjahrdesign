import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const occasions = [
  { id: 'wedding', label: 'Hochzeit', icon: 'rings', hasGuide: true },
  { id: 'private', label: 'Private Feier & Jubiläum', icon: 'champagne', hasGuide: false },
  { id: 'corporate', label: 'Firmenevent & B2B', icon: 'building', hasGuide: true },
  { id: 'hospitality', label: 'Hotellerie & Gastronomie', icon: 'dining', hasGuide: false },
  { id: 'studio', label: 'Exklusives Studio-Erlebnis', icon: 'studio', hasGuide: false },
  { id: 'signature', label: 'Signature Design', icon: 'signature', hasGuide: true },
  { id: 'memorial', label: 'Trauerfloristik', icon: 'dove', hasGuide: false },
];

const IconComponent = ({ type }) => {
  const icons = {
    rings: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="9" cy="12" r="5" />
        <circle cx="15" cy="12" r="5" />
      </svg>
    ),
    champagne: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 22h8M12 17v5M7 2l2 9h6l2-9M9 11l1.5 6h3L15 11" />
        <circle cx="17" cy="5" r="1" fill="currentColor" />
        <circle cx="19" cy="3" r="0.5" fill="currentColor" />
      </svg>
    ),
    building: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="3" width="16" height="18" rx="1" />
        <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2M9 19v2M15 19v2" />
      </svg>
    ),
    dining: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 3v18M3 12h4c2 0 3-1 3-3V3M21 3v6c0 2-1 3-3 3h-1v9M17 3v6" />
      </svg>
    ),
    studio: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6M9 9h.01M15 9h.01M9 13h.01M15 13h.01" />
      </svg>
    ),
    signature: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 17c3-2 5-6 8-6s4 4 7 4c2 0 3-1 3-1M3 21h18" />
        <path d="M17 3l4 4-10 10H7v-4L17 3z" />
      </svg>
    ),
    dove: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 7c-2-3-6-3-8-1 2 1 3 3 3 5 0 3-2 5-2 8h6c0-2 1-4 3-5 3-1 6 0 8-2-3-1-6-2-7-5h-3z" />
        <circle cx="9" cy="10" r="0.5" fill="currentColor" />
      </svg>
    ),
  };
  return icons[type] || null;
};

const ConciergPopup = ({ triggerRef }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [selectedType, setSelectedType] = useState('');
  const [formData, setFormData] = useState({
    message: '',
    name: '',
    email: '',
    newsletter: false,
    guide: false,
    privacy: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const modalRef = useRef(null);

  // Scroll-Trigger mit IntersectionObserver
  useEffect(() => {
    if (localStorage.getItem('gutjahr_popup_shown')) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.7) {
          setTimeout(() => setIsOpen(true), 800);
          localStorage.setItem('gutjahr_popup_shown', 'true');
          observer.disconnect();
        }
      },
      { threshold: 0.7 }
    );

    if (triggerRef?.current) {
      observer.observe(triggerRef.current);
    }

    return () => observer.disconnect();
  }, [triggerRef]);

  // ESC-Taste schließt Modal
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Focus trap
  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.focus();
    }
  }, [isOpen]);

  const handleOccasionSelect = (occasionId) => {
    setSelectedType(occasionId);
    setStep(2);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.privacy) {
      alert('Bitte stimmen Sie der Datenschutzerklärung zu.');
      return;
    }

    const submitData = {
      type: selectedType,
      typeName: occasions.find((o) => o.id === selectedType)?.label,
      ...formData,
      timestamp: new Date().toISOString(),
    };

    console.log('Lead submitted:', submitData);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsOpen(false);
      // Reset after close
      setTimeout(() => {
        setStep(1);
        setSelectedType('');
        setFormData({
          message: '',
          name: '',
          email: '',
          newsletter: false,
          guide: false,
          privacy: false,
        });
        setIsSubmitted(false);
      }, 500);
    }, 3000);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="popup-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleBackdropClick}
          >
            <motion.div
              ref={modalRef}
              className="popup-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="popup-title"
              tabIndex={-1}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <button
                className="popup-close"
                onClick={handleClose}
                aria-label="Schließen"
              >
                ×
              </button>

              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    className="popup-success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    <div className="success-icon">✓</div>
                    <h2>Vielen Dank!</h2>
                    <p>
                      Wir haben Ihre Anfrage erhalten und melden uns innerhalb
                      von 24 Stunden persönlich bei Ihnen.
                    </p>
                  </motion.div>
                ) : step === 1 ? (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 id="popup-title" className="popup-heading">
                      „Bei welchem Anlass dürfen wir Ihnen dienen?"
                    </h2>
                    <div className="occasion-grid">
                      {occasions.map((occasion) => (
                        <button
                          key={occasion.id}
                          className="occasion-tile"
                          onClick={() => handleOccasionSelect(occasion.id)}
                        >
                          <span className="occasion-icon">
                            <IconComponent type={occasion.icon} />
                          </span>
                          <span className="occasion-label">
                            {occasion.label}
                          </span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.3 }}
                  >
                    <button
                      className="popup-back"
                      onClick={() => setStep(1)}
                      aria-label="Zurück"
                    >
                      ← Zurück
                    </button>
                    <h2 className="popup-heading">
                      „Eine wunderbare Wahl. Verraten Sie uns ein wenig mehr?"
                    </h2>
                    <p className="popup-selected">
                      Ausgewählt:{' '}
                      <strong>
                        {occasions.find((o) => o.id === selectedType)?.label}
                      </strong>
                    </p>

                    <form onSubmit={handleSubmit} className="popup-form">
                      <div className="form-field">
                        <label htmlFor="message">
                          Was schwebt Ihnen vor? (Datum, Ort, Stil...)
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          placeholder="Erzählen Sie uns von Ihrer Vision..."
                        />
                      </div>

                      <div className="form-row">
                        <div className="form-field">
                          <label htmlFor="name">
                            Wie dürfen wir Sie ansprechen?
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Ihr Name"
                          />
                        </div>
                        <div className="form-field">
                          <label htmlFor="email">
                            Wohin dürfen wir unsere Antwort senden?
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="ihre@email.de"
                          />
                        </div>
                      </div>

                      <div className="form-checkboxes">
                        {occasions.find((o) => o.id === selectedType)?.hasGuide && (
                          <label className="checkbox-label guide-option">
                            <input
                              type="checkbox"
                              name="guide"
                              checked={formData.guide}
                              onChange={handleChange}
                            />
                            <span>
                              Ja, ich möchte den kostenlosen Planungsleitfaden als PDF erhalten.
                            </span>
                          </label>
                        )}
                        <label className="checkbox-label">
                          <input
                            type="checkbox"
                            name="newsletter"
                            checked={formData.newsletter}
                            onChange={handleChange}
                          />
                          <span>
                            Ja, ich möchte den exklusiven Gutjahr-Newsletter mit
                            Inspirationen erhalten.
                          </span>
                        </label>
                        <label className="checkbox-label">
                          <input
                            type="checkbox"
                            name="privacy"
                            checked={formData.privacy}
                            onChange={handleChange}
                            required
                          />
                          <span>
                            Ich stimme der Verarbeitung meiner Daten gemäß der{' '}
                            <a href="/datenschutz" target="_blank">
                              Datenschutzerklärung
                            </a>{' '}
                            zu. *
                          </span>
                        </label>
                      </div>

                      <button type="submit" className="submit-btn">
                        Beratung anfragen
                      </button>

                      <p className="popup-disclaimer">
                        Wir melden uns in der Regel innerhalb von 24 Stunden
                        persönlich bei Ihnen.
                      </p>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .popup-overlay {
          position: fixed;
          inset: 0;
          z-index: 9000;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 0, 0, 0.35);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          padding: 1rem;
        }

        .popup-modal {
          background: #fff;
          max-width: 580px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          border-radius: 4px;
          padding: 2.5rem 3rem;
          position: relative;
          outline: none;
        }

        .popup-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: none;
          border: none;
          font-size: 1.8rem;
          color: var(--color-text-muted, #666);
          cursor: pointer;
          line-height: 1;
          padding: 0.5rem;
          transition: color 0.2s ease;
        }

        .popup-close:hover {
          color: var(--color-text-dark, #2C2C2C);
        }

        .popup-back {
          background: none;
          border: none;
          font-family: var(--font-body, 'Lato', sans-serif);
          font-size: 0.85rem;
          color: var(--color-text-muted, #666);
          cursor: pointer;
          padding: 0;
          margin-bottom: 1rem;
          transition: color 0.2s ease;
        }

        .popup-back:hover {
          color: var(--color-gold, #D4AF37);
        }

        .popup-heading {
          font-family: var(--font-heading, 'Playfair Display', serif);
          font-size: clamp(1.3rem, 3vw, 1.6rem);
          font-weight: 400;
          font-style: italic;
          color: var(--color-text-dark, #2C2C2C);
          text-align: center;
          margin-bottom: 2rem;
          line-height: 1.4;
        }

        .popup-selected {
          text-align: center;
          font-size: 0.9rem;
          color: var(--color-text-muted, #666);
          margin-bottom: 1.5rem;
        }

        .popup-selected strong {
          color: var(--color-gold, #D4AF37);
        }

        /* Occasion Grid - Step 1 */
        .occasion-grid {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .occasion-tile {
          padding: 0.9rem 1.5rem;
          border: 1px solid #e8e8e8;
          background: #fff;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 1rem;
          text-align: left;
        }

        .occasion-tile:hover {
          border-color: var(--color-gold, #D4AF37);
          background: var(--color-cream, #F9F7F2);
        }

        .occasion-tile:hover .occasion-icon {
          color: #2d5a3d;
        }

        .occasion-icon {
          width: 28px;
          height: 28px;
          flex-shrink: 0;
          color: var(--color-gold, #D4AF37);
          transition: color 0.3s ease;
        }

        .occasion-icon svg {
          width: 100%;
          height: 100%;
        }

        .occasion-label {
          font-family: var(--font-heading, 'Playfair Display', serif);
          font-size: 0.95rem;
          color: var(--color-text-dark, #2C2C2C);
          letter-spacing: 0.02em;
        }

        /* Form - Step 2 */
        .popup-form {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-field {
          margin-bottom: 1rem;
        }

        .form-field label {
          font-family: var(--font-heading, 'Playfair Display', serif);
          font-size: 0.9rem;
          color: var(--color-text-dark, #2C2C2C);
          margin-bottom: 0.4rem;
          display: block;
        }

        .form-field input,
        .form-field textarea {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #e0e0e0;
          font-family: var(--font-body, 'Lato', sans-serif);
          font-size: 0.95rem;
          background: #fff;
          transition: border-color 0.2s ease;
        }

        .form-field input:focus,
        .form-field textarea:focus {
          outline: none;
          border-color: var(--color-gold, #D4AF37);
        }

        .form-field textarea {
          resize: vertical;
          min-height: 100px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .form-checkboxes {
          margin: 1rem 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .checkbox-label {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          font-size: 0.85rem;
          color: var(--color-text-muted, #666);
          cursor: pointer;
        }

        .checkbox-label input {
          margin-top: 0.2rem;
          accent-color: var(--color-gold, #D4AF37);
        }

        .checkbox-label a {
          color: var(--color-gold, #D4AF37);
          text-decoration: underline;
        }

        .checkbox-label.guide-option {
          background: linear-gradient(135deg, var(--color-cream, #F9F7F2) 0%, #fff 100%);
          padding: 0.75rem 1rem;
          border: 1px solid var(--color-gold, #D4AF37);
          border-radius: 2px;
          margin-bottom: 0.5rem;
        }

        .checkbox-label.guide-option span {
          color: var(--color-text-dark, #2C2C2C);
          font-weight: 400;
        }

        .submit-btn {
          background: var(--color-gold, #D4AF37);
          color: #fff;
          padding: 1rem 2rem;
          border: none;
          width: 100%;
          font-family: var(--font-heading, 'Playfair Display', serif);
          font-size: 1rem;
          letter-spacing: 0.05em;
          cursor: pointer;
          transition: background 0.3s ease;
          margin-top: 0.5rem;
        }

        .submit-btn:hover {
          background: var(--color-gold-light, #E5C568);
        }

        .popup-disclaimer {
          text-align: center;
          font-size: 0.8rem;
          color: var(--color-text-muted, #666);
          margin-top: 1rem;
        }

        /* Success State */
        .popup-success {
          text-align: center;
          padding: 2rem 0;
        }

        .success-icon {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: var(--color-gold, #D4AF37);
          color: #fff;
          font-size: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
        }

        .popup-success h2 {
          font-family: var(--font-heading, 'Playfair Display', serif);
          font-size: 1.5rem;
          color: var(--color-text-dark, #2C2C2C);
          margin-bottom: 1rem;
        }

        .popup-success p {
          color: var(--color-text-muted, #666);
          line-height: 1.6;
        }

        /* Responsive */
        @media (max-width: 600px) {
          .popup-modal {
            padding: 2rem 1.5rem;
          }

          .occasion-grid {
            grid-template-columns: 1fr;
          }

          .occasion-tile:last-child:nth-child(odd) {
            max-width: 100%;
          }

          .form-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
};

export default ConciergPopup;
