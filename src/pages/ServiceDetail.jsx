import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const serviceData = {
    weddings: {
        title: 'Hochzeiten & Events',
        subtitle: 'Vom Konzept bis zur Umsetzung',
        content: 'Wir begleiten Sie von der ersten Idee bis zum großen Tag. Unser Full-Service-Ansatz beinhaltet Floristik, Dekoration, Mobiliar und die komplette logistische Abwicklung.'
    },
    b2b: {
        title: 'Hotellerie & Gastronomie',
        subtitle: 'Atmosphäre, die Gäste bindet',
        content: 'Regelmäßige Wechsel der Dekoration passend zur Saison. Wir bieten flexible Abo-Modelle für Hotels, Restaurants und Boutiquen, damit Ihr Ambiente immer frisch und einladend wirkt.'
    },
    signature: {
        title: 'Signature Design',
        subtitle: 'Exklusivität für Ihr Zuhause',
        content: 'Maßgeschneiderte Konzepte für Privatvillen. Wir kuratieren Interior-Elemente und florale Installationen, die Ihre Persönlichkeit unterstreichen.'
    },
    studio: {
        title: 'Studio & Rental',
        subtitle: 'Raum für Kreativität',
        content: 'Unser gut ausgestattetes Studio steht für Fotoproduktionen und Content Creation zur Verfügung. Nutzen Sie unseren Fundus an einzigartigen Requisiten.'
    },
};

const ServiceDetail = () => {
    const { id } = useParams();
    const service = serviceData[id];

    if (!service) return <div className="container" style={{ paddingTop: '100px' }}>Service not found</div>;

    return (
        <div className="service-detail">
            <div className="container header-spacing">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <span className="subtitle">{service.subtitle}</span>
                    <h1>{service.title}</h1>
                    <div className="separator-left" />

                    <div className="content-grid">
                        <div className="text-col">
                            <p className="main-text">{service.content}</p>

                            <ul className="feature-list">
                                <li>Persönliche Beratung</li>
                                <li>Individuelles Konzept</li>
                                <li>Professionelle Umsetzung</li>
                            </ul>

                            <button className="btn-book">Beratungstermin vereinbaren</button>
                        </div>
                        <div className="image-col">
                            <div className="placeholder-image" />
                        </div>
                    </div>
                </motion.div>
            </div>

            <style>{`
        .header-spacing {
          padding-top: 150px;
          padding-bottom: 5rem;
        }

        .subtitle {
          color: var(--color-gold);
          text-transform: uppercase;
          letter-spacing: 0.15em;
          font-size: 0.9rem;
          display: block;
          margin-bottom: 1rem;
        }

        .separator-left {
          width: 80px;
          height: 3px;
          background-color: var(--color-gold);
          margin-bottom: 3rem;
        }

        .content-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
        }

        .main-text {
          font-size: 1.1rem;
          margin-bottom: 2rem;
          line-height: 1.8;
        }

        .feature-list {
          margin-bottom: 3rem;
        }

        .feature-list li {
          margin-bottom: 0.5rem;
          padding-left: 1.5rem;
          position: relative;
        }

        .feature-list li::before {
          content: '•';
          color: var(--color-gold);
          position: absolute;
          left: 0;
        }

        .btn-book {
          background-color: var(--color-gold);
          color: white;
          padding: 1rem 2rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-size: 0.9rem;
        }

        .placeholder-image {
          width: 100%;
          height: 100%;
          min-height: 400px;
          background-color: var(--color-cream);
        }

        @media (max-width: 768px) {
          .content-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </div>
    );
};

export default ServiceDetail;
