const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h3>Gutjahr<span className="text-gold">Design</span></h3>
                        <p>Zeitlose Eleganz für unvergessliche Momente.</p>
                    </div>

                    <div className="footer-links">
                        <h4>Menu</h4>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#moodboards">Welten</a></li>
                            <li><a href="#services">Leistungen</a></li>
                            <li><a href="#about">Über Uns</a></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h4>Kontakt</h4>
                        <p>Email: info@gutjahr-design.de</p>
                        <p>Phone: +49 123 456789</p>
                        <p>Instagram: @gutjahr.dekodesign</p>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Gutjahr Deko Design. All rights reserved.</p>
                    <div>
                        <a href="/impressum">Impressum</a>
                        <a href="/datenschutz">Datenschutz</a>
                    </div>
                </div>
            </div>

            <style>{`
        .footer {
          background-color: var(--color-text-dark);
          color: var(--color-white);
          padding: 4rem 0 1rem;
        }

        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 3rem;
          margin-bottom: 3rem;
        }

        .footer h3 {
          color: var(--color-white);
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .footer h4 {
          color: var(--color-gold);
          font-size: 1.1rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 1.5rem;
        }

        .footer p, .footer a {
          color: #ccc;
          font-size: 0.95rem;
          margin-bottom: 0.5rem;
          display: block;
        }

        .footer a:hover {
          color: var(--color-gold);
        }

        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.1);
          padding-top: 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .footer-bottom div {
          display: flex;
          gap: 1.5rem;
        }
      `}</style>
        </footer>
    );
};

export default Footer;
