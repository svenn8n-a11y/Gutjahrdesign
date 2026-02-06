import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        question: "Wie plane ich eine Hochzeit mit euch?",
        answer: "Unser Team von Gutjahr Deko Design steht Ihnen bei jedem Schritt zur Seite. Kontaktieren Sie uns, um ein erstes Beratungsgespräch zu vereinbaren!"
    },
    {
        question: "Bietet ihr individuelle Dekorationskonzepte an?",
        answer: "Ja, wir gestalten persönliche Dekorationskonzepte, die perfekt auf Ihre Wünsche und Bedürfnisse abgestimmt sind."
    },
    {
        question: "Sind Beratungsgespräche kostenpflichtig?",
        answer: "Das erste Beratungsgespräch ist unverbindlich und kostenlos. Wir freuen uns darauf, Sie kennenzulernen!"
    },
    {
        question: "Macht ihr auch die Blumen?",
        answer: "JA! Die Floristik ist das Herzstück unserer Arbeit. Beim Einkauf der Blumen legen wir viel Wert auf eine stimmige Farbauswahl, die perfekt zum jeweiligen Konzept passt."
    },
    {
        question: "Vermietet ihr auch Dekoartikel?",
        answer: "Wir haben einen großen Fundus an Artikeln, die wir für unsere Dekokonzepte verwenden. Wir vermieten diese jedoch nicht einzeln, sondern nur im Rahmen unserer Gesamtkonzepte."
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq-section">
            <div className="container">
                <div className="section-header">
                    <h2>Häufige Fragen</h2>
                    <div className="separator"></div>
                </div>

                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <div key={index} className="faq-item" onClick={() => toggleFAQ(index)}>
                            <div className="faq-question">
                                <h3>{faq.question}</h3>
                                <span className={`icon ${activeIndex === index ? 'open' : ''}`}>+</span>
                            </div>
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="faq-answer"
                                    >
                                        <p>{faq.answer}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        .faq-section {
          padding: var(--spacing-section) 0;
          background-color: var(--color-white);
        }

        .separator {
          width: 60px;
          height: 2px;
          background-color: var(--color-gold);
          margin: 1rem auto;
        }

        .faq-list {
          max-width: 800px;
          margin: 4rem auto 0;
        }

        .faq-item {
          border-bottom: 1px solid rgba(0,0,0,0.1);
          padding: 1.5rem 0;
          cursor: pointer;
        }

        .faq-question {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .faq-question h3 {
          font-size: 1.1rem;
          margin: 0;
          color: var(--color-text-dark);
        }

        .icon {
          font-size: 1.5rem;
          color: var(--color-gold);
          transition: transform 0.3s ease;
        }

        .icon.open {
          transform: rotate(45deg);
        }

        .faq-answer {
          overflow: hidden;
        }

        .faq-answer p {
          padding-top: 1rem;
          color: var(--color-text-muted);
          line-height: 1.6;
        }
      `}</style>
        </section>
    );
};

export default FAQ;
