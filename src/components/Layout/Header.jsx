import { useState, useEffect } from 'react';
// Using standard CSS for now as per plan, but inline styles or modules for specific components. 
// Wait, plan said Vanilla CSS. I will stick to classNames.

const Header = () => {
  const [visible, setVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Appear after 8 seconds
    const timer = setTimeout(() => setVisible(true), 8000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''} ${visible ? 'visible' : ''}`}>
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
          padding: 0.8rem 0;
          transition: transform 1.5s ease-out, opacity 1.5s ease-out, background-color 0.5s ease;
          color: var(--color-white);
          transform: translateY(-20px);
          opacity: 0;
          pointer-events: none;
        }

        .header.visible {
            transform: translateY(0);
            opacity: 1;
            pointer-events: auto;
            background: transparent;
            border-bottom: 1px solid rgba(255, 255, 255, 0.5);
        }

        .header.visible .nav-desktop a,
        .header.visible .logo {
            color: #ffffff;
        }

        .header.scrolled {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(12px);
          padding: 1rem 0;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          box-shadow: 0 2px 20px rgba(0,0,0,0.05);
        }

        .header.scrolled .nav-desktop a,
        .header.scrolled .logo {
          color: var(--color-text-dark);
        }

        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-family: var(--font-heading);
          font-size: 1.1rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .nav-desktop ul {
          display: flex;
          gap: 1.5rem;
          align-items: center;
        }

        .nav-desktop a {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 400;
        }

        .btn-contact {
          border: 1px solid rgba(255, 255, 255, 0.5);
          padding: 0.4rem 1.2rem;
          border-radius: 2px;
          color: #ffffff;
        }

        .header.scrolled .btn-contact {
          border-color: var(--color-text-dark);
          color: var(--color-text-dark);
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
