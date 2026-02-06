import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const services = [
    {
        id: 'weddings',
        title: 'Hochzeiten & Events',
        description: 'Vom Brautstrauß bis zur kompletten Rauminszenierung – wir machen Ihre Träume sichtbar.',
        icon: '🌸' // Placeholder icon
    },
    {
        id: 'b2b',
        title: 'Hotellerie & Gastronomie',
        description: 'Saisonale Dekorationen im Abo-Modell, die Ihre Gäste begeistern.',
        icon: '🏨'
    },
    {
        id: 'signature',
        title: 'Signature Design',
        description: 'Exklusive Konzepte für Privatvillen und Residenzen.',
        icon: '✨'
    },
    {
        id: 'studio',
        title: 'Studio & Rental',
        description: 'Unser Showroom als Location für Ihre Content-Produktionen.',
        icon: '📸'
    }
];

const Services = () => {
    return (
        <section id="services" className="services-section">
            <div className="container">
                <div className="section-header">
                    <h2>Unsere Leistungen</h2>
                    <div className="separator"></div>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            className="service-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <Link to={`/service/${service.id}`} className="service-link">Mehr erfahren &rarr;</Link>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style>{`
        .services-section {
          padding: var(--spacing-section) 0;
          background-color: var(--color-cream);
        }

        .separator {
          width: 60px;
          height: 2px;
          background-color: var(--color-gold);
          margin: 1rem auto;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 3rem;
          margin-top: 4rem;
        }

        .service-card {
          text-align: center;
          padding: 2rem;
          background-color: var(--color-white);
          border-radius: 4px; /* Soft radius */
          box-shadow: 0 5px 15px rgba(0,0,0,0.03);
          transition: transform 0.3s ease;
        }

        .service-card:hover {
          transform: translateY(-5px);
        }

        .service-icon {
          font-size: 3rem;
          margin-bottom: 1.5rem;
          display: block;
        }

        .service-card h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }

        .service-card p {
          color: var(--color-text-muted);
          margin-bottom: 1.5rem;
          font-size: 1rem;
        }

        .service-link {
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--color-gold);
          font-weight: 600;
        }
      `}</style>
        </section>
    );
};

export default Services;
