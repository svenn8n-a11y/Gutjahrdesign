import { useState, useEffect } from 'react';
// Using standard CSS for now as per plan, but inline styles or modules for specific components. 
// Wait, plan said Vanilla CSS. I will stick to classNames.

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container header-content">
                <a href="/" className="logo">
                    Gutjahr<span className="text-gold">Design</span>
                </a>

                <nav className="nav-desktop">
                    <ul>
                        <li><a href="#moodboards">Welten</a></li>
                        <li><a href="#services">Leistungen</a></li>
                        <li><a href="#about">Über Uns</a></li>
                        <li><a href="#contact" className="btn-contact">Kontakt</a></li>
                    </ul>
                </nav>

                <button className="mobile-menu-btn">
                    Menu
                </button>
            </div>

            <style>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 1.5rem 0;
          transition: all var(--transition-fast);
          color: var(--color-white);
        }
        
        .header.scrolled {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          padding: 1rem 0;
          color: var(--color-text-dark);
          box-shadow: 0 2px 20px rgba(0,0,0,0.05);
        }

        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .nav-desktop ul {
          display: flex;
          gap: 2rem;
          align-items: center;
        }

        .nav-desktop a {
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 400;
        }

        .btn-contact {
          border: 1px solid currentColor;
          padding: 0.5rem 1.5rem;
          border-radius: 2px;
        }

        .mobile-menu-btn {
          display: none; /* TODO: Implement mobile menu */
        }

        @media (max-width: 768px) {
          .nav-desktop { display: none; }
          .mobile-menu-btn { display: block; }
        }
      `}</style>
        </header>
    );
};

export default Header;
