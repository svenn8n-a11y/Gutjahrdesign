import { motion } from 'framer-motion';

const Statement = () => {
  return (
    <section className="statement-section">
      <div className="container">
        <motion.div
          className="statement-content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h2 className="statement-heading">
            <span className="big-quote">„</span>Es gibt eine Schönheit, die den Atem raubt – und eine, die das Herz zur Ruhe kommen lässt.<span className="big-quote">"</span>
          </h2>
          <p className="statement-text">
            <span className="initial">W</span>ahre Schönheit ist kein Zufall, sie ist eine Haltung. Gewachsen aus einer Kindheit voller Kreativität, verstehen wir unsere Arbeit nicht als Pflicht, sondern als Privileg: Leben und Schaffen sind für uns untrennbar. Als Schwestern und Designerinnen teilen wir eine intuitive Sprache der Exzellenz und den tiefen Wunsch, gemeinsam zu gestalten.
          </p>
          <p className="statement-text continuation">
            Dabei geben wir uns nicht mit dem Gewöhnlichen zufrieden. Wir glauben, dass jedes Fest eine eigene Würde besitzt, die sichtbar gemacht werden will. Alles, was wir erschaffen, trägt deshalb unsere ganz persönliche Handschrift – authentisch, detailverliebt und mit viel Herz. Wir dekorieren nicht nur Räume – wir krönen Ihren Moment.
          </p>
        </motion.div>
      </div>

      <style>{`
        .statement-section {
          background: var(--color-cream, #faf8f5);
          padding: 8rem 0;
          position: relative;
        }

        .statement-content {
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
        }

        .statement-heading {
          font-family: var(--font-heading);
          font-size: clamp(1.4rem, 3vw, 2.2rem);
          font-weight: 300;
          font-style: italic;
          line-height: 1.5;
          color: var(--color-text-dark, #1a1a1a);
          margin-bottom: 3rem;
          position: relative;
          padding: 0 2rem;
        }

        .big-quote {
          font-family: var(--font-heading);
          font-size: 1.3em;
          color: var(--color-gold, #c9a962);
          font-style: italic;
          line-height: 1;
        }

        .statement-text {
          font-family: var(--font-heading);
          font-size: clamp(1rem, 1.8vw, 1.25rem);
          line-height: 1.9;
          color: var(--color-text-dark, #1a1a1a);
          font-weight: 300;
          letter-spacing: 0.01em;
          text-align: left;
          margin-bottom: 1.5rem;
        }

        .statement-text.continuation {
          text-indent: 0;
        }

        .initial {
          font-size: 4em;
          float: left;
          line-height: 0.75;
          margin-right: 0.08em;
          margin-top: 0.05em;
          font-weight: 400;
          color: var(--color-gold, #c9a962);
        }

        @media (max-width: 768px) {
          .statement-section {
            padding: 5rem 0;
          }

          .statement-heading {
            padding: 0 1rem;
          }

          .initial {
            font-size: 3em;
          }
        }
      `}</style>
    </section>
  );
};

export default Statement;
