import { useState } from 'react';
import { motion } from 'framer-motion';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        type: 'wedding', // default
        date: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Implement actual form submission (e.g., to an API or email service)
        console.log('Form submitted:', formData);
        alert('Vielen Dank für Ihre Anfrage! Wir melden uns in Kürze.');
    };

    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <div className="contact-wrapper">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>Lassen Sie uns Ihre Vision verwirklichen</h2>
                        <p>
                            Erzählen Sie uns von Ihrem geplanten Event. Je mehr Details Sie uns verraten, desto besser können wir uns auf unser erstes Gespräch vorbereiten.
                        </p>

                        <div className="info-item">
                            <h4>Kontakt</h4>
                            <p>info@gutjahr-design.de</p>
                            <p>+49 123 456789</p>
                        </div>

                        <div className="info-item">
                            <h4>Studio</h4>
                            <p>Musterstraße 123<br />12345 Musterstadt</p>
                            <p className="note">Termine nur nach Vereinbarung.</p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="contact-form-container"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
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

                            <div className="form-group">
                                <label htmlFor="email">E-Mail</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="ihre.email@beispiel.de"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="type">Art des Events</label>
                                <select
                                    id="type"
                                    name="type"
                                    value={formData.type}
                                    onChange={handleChange}
                                >
                                    <option value="wedding">Hochzeit</option>
                                    <option value="corporate">Firmenevent</option>
                                    <option value="private">Privatfeier</option>
                                    <option value="editorial">Fotoshooting / Editorial</option>
                                    <option value="other">Sonstiges</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="date">Datum (Optional)</label>
                                <input
                                    type="date"
                                    id="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group full-width">
                                <label htmlFor="message">Nachricht / Wünsche</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    required
                                    placeholder="Erzählen Sie uns mehr über Ihre Pläne..."
                                ></textarea>
                            </div>

                            <button type="submit" className="submit-btn">Anfrage absenden</button>
                        </form>
                    </motion.div>
                </div>
            </div>

            <style>{`
        .contact-section {
          padding: var(--spacing-section) 0;
          background-color: var(--color-white);
        }

        .contact-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .contact-info h2 {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
        }

        .contact-info p {
          color: var(--color-text-muted);
          margin-bottom: 2.5rem;
          line-height: 1.8;
        }

        .info-item {
          margin-bottom: 2rem;
        }

        .info-item h4 {
          font-family: var(--font-body);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-size: 0.9rem;
          color: var(--color-gold);
          margin-bottom: 0.5rem;
        }

        .info-item .note {
          font-size: 0.85rem;
          font-style: italic;
          margin-top: 0.25rem;
        }

        .contact-form-container {
          background-color: var(--color-cream);
          padding: 3rem;
          border-radius: 4px;
        }

        .contact-form {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .full-width {
          grid-column: span 2;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-group label {
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
          color: var(--color-text-dark);
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          padding: 0.8rem;
          border: 1px solid #ddd;
          border-radius: 2px;
          background-color: var(--color-white);
          font-family: inherit;
          font-size: 1rem;
          transition: border-color 0.3s;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--color-gold);
        }

        .submit-btn {
          grid-column: span 2;
          background-color: var(--color-gold);
          color: white;
          padding: 1rem;
          border: none;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        .submit-btn:hover {
          background-color: var(--color-gold-light);
        }

        @media (max-width: 768px) {
          .contact-wrapper {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .contact-form {
            grid-template-columns: 1fr;
          }

          .full-width {
            grid-column: span 1;
          }

          .submit-btn {
            grid-column: span 1;
          }
        }
      `}</style>
        </section>
    );
};

export default ContactSection;
