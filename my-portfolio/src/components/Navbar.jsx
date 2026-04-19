import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const button = document.querySelector('.hamburger');
    if (button) {
      button.classList.toggle('active', isMenuOpen);
    }
  }, [isMenuOpen]);

  const navLinks = [
    { id: 'home', label: 'Home', to: '/' },
    { id: 'about', label: 'About', to: '/about' },
    { id: 'projects', label: 'Projects', to: '/projects' },
    { id: 'skills', label: 'Skills', to: '/skills' },
    { id: 'contact', label: 'Contact', to: '/contact' },
  ];

  return (
    <nav className="navbar">
      <Link to="/" className="brand" onClick={() => setIsMenuOpen(false)}>
        PAYAL KUMARI
      </Link>
      <button className="hamburger" onClick={toggleMenu} aria-label="Toggle navigation menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <Link
            key={link.id}
            to={link.to}
            className={
              link.id === 'home' && location.pathname === '/'
                ? 'active'
                : link.id === 'about' && location.pathname === '/about'
                  ? 'active'
                : link.id === 'projects' && location.pathname === '/projects'
                  ? 'active'
                  : link.id === 'skills' && location.pathname === '/skills'
                    ? 'active'
                  : link.id === 'contact' && location.pathname === '/contact'
                    ? 'active'
                    : ''
            }
            onClick={() => setIsMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <a href="/Payal_Kumari_CV.pdf" download="Payal_Kumari_CV.pdf" className="download-btn">Download CV</a>
      </div>
    </nav>
  );
}

export default Navbar;
