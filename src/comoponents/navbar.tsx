


import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/experience', label: 'Experience' },
    { to: '/projects', label: 'Projects' },
    { to: '/certifications', label: 'Certifications' },
  ];

  return (
    <nav className="retro-navbar">
      <div className="retro-navbar-left">
        <Link to="/" className="retro-navbar-brand">
          Hello!<br />I am Charchit
        </Link>
      </div>
      <div className="retro-navbar-right">
        {/* Desktop links */}
        <div className="retro-navbar-links">
          {navLinks.map(link => (
            <Link key={link.to} to={link.to} className="retro-navbar-link">
              {link.label}
            </Link>
          ))}
        </div>
        {/* Hamburger for mobile */}
        <button
          className="retro-navbar-hamburger"
          aria-label="Open navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(m => !m)}
        >
          <span className="retro-navbar-hamburger-bar" />
          <span className="retro-navbar-hamburger-bar" />
          <span className="retro-navbar-hamburger-bar" />
        </button>
        {/* Mobile menu */}
        {menuOpen && (
          <div className="retro-navbar-mobile-menu">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className="retro-navbar-mobile-link"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
      <style>{`
        .retro-navbar {
          width: 100%;
          background: #fff;
          color: #000;
          border-bottom: 1px solid #000;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          padding: 0 1.5rem;
          height: 64px;
          position: relative;
          font-family: 'IBM Plex Mono', 'Fira Mono', 'Consolas', 'Liberation Mono', 'Menlo', 'monospace', 'Arial', 'sans-serif';
          z-index: 100;
        }
        .retro-navbar-left {
          display: flex;
          align-items: center;
          height: 100%;
        }
        .retro-navbar-brand {
          font-size: 1.4rem;
          font-weight: bold;
          color: #000;
          text-decoration: none;
          line-height: 1.1;
          padding: 0.7rem 0 0.7rem 0;
        }
        .retro-navbar-right {
          display: flex;
          align-items: center;
          height: 100%;
          position: relative;
        }
        .retro-navbar-links {
          display: flex;
          gap: 1.5rem;
        }
        .retro-navbar-link {
          color: #000;
          text-decoration: none;
          font-size: 1rem;
          font-weight: normal;
          border: none;
          background: none;
          padding: 0.7rem 0.2rem;
          border-bottom: 1px solid transparent;
          transition: border-bottom 0.15s, color 0.15s;
        }
        .retro-navbar-link:hover, .retro-navbar-link:focus {
          border-bottom: 1px solid #000;
          color: #000;
          text-decoration: underline;
        }
        .retro-navbar-hamburger {
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 40px;
          height: 40px;
          background: #fff;
          border: 1px solid #000;
          border-radius: 0;
          cursor: pointer;
          margin-left: 1.2rem;
          padding: 0;
        }
        .retro-navbar-hamburger-bar {
          width: 22px;
          height: 2px;
          background: #000;
          margin: 3px 0;
          display: block;
        }
        /* Mobile menu styles */
        .retro-navbar-mobile-menu {
          position: absolute;
          top: 64px;
          right: 0;
          width: 100vw;
          max-width: 320px;
          background: #fff;
          border: 1px solid #000;
          border-radius: 0;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          z-index: 200;
        }
        .retro-navbar-mobile-link {
          color: #000;
          text-decoration: none;
          font-size: 1.1rem;
          font-weight: normal;
          padding: 1.1rem 1.5rem;
          border-bottom: 1px solid #000;
          background: #fff;
          border-radius: 0;
          text-align: left;
          transition: background 0.15s, color 0.15s, text-decoration 0.15s;
        }
        .retro-navbar-mobile-link:last-child {
          border-bottom: none;
        }
        .retro-navbar-mobile-link:hover, .retro-navbar-mobile-link:focus {
          background: #000;
          color: #fff;
          text-decoration: underline;
        }
        /* Responsive styles */
        @media (max-width: 800px) {
          .retro-navbar-links {
            display: none;
          }
          .retro-navbar-hamburger {
            display: flex;
          }
        }
        @media (min-width: 801px) {
          .retro-navbar-mobile-menu {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
