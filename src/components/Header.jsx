// src/components/Header.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link'; // Using HashLink

const reactLogo = '/portfolio/assets/img/favicon.ico'; // Path from public folder

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavLogoImg, setShowNavLogoImg] = useState(false);
  const [activeSectionHash, setActiveSectionHash] = useState('');
  const location = useLocation();
  const headerRef = useRef(null);

  // Helper function to handle clicks on React elements and stop propagation
  const handleReactElementClick = (event, action) => {
    event.stopPropagation(); // Prevent the click from bubbling up to particles.js listeners
    if (action) {
      action(); // Perform the original intended action (e.g., closeMenu, toggleMenu)
    }
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Effect for header shadow and nav logo visibility on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        headerRef.current.style.boxShadow = window.scrollY >= 50 ? '0 1px 4px rgba(146, 161, 176, 0.15)' : 'none';
      }
      const scrollThreshold = window.innerHeight * 0.8;
      setShowNavLogoImg(window.scrollY > scrollThreshold);

      // Active link on scroll for home page sections
      if (location.pathname === '/') {
        const sections = ['home', 'about', 'blogs', 'youtube', 'projects', 'contact'];
        let currentHash = '';
        for (const id of sections) {
          const element = document.getElementById(id);
          if (element) {
            const rect = element.getBoundingClientRect();
            const headerHeight = headerRef.current?.offsetHeight || 70;
            if (rect.top <= headerHeight + 50 && rect.bottom >= headerHeight - 50) {
              currentHash = `#${id}`;
              break;
            }
          }
        }
        if (!currentHash && window.scrollY > 100 && activeSectionHash) {
            // Keep current if nothing new is active and not at top
        } else if (!currentHash && window.scrollY <= 100) {
            currentHash = '#home';
        }
        if (currentHash && activeSectionHash !== currentHash) {
            setActiveSectionHash(currentHash);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname, activeSectionHash]); // Dependency on activeSectionHash to avoid stale closure for it

  // Effect to set active hash on direct navigation with hash or when on home page
  useEffect(() => {
    if (location.pathname === '/') {
      if (location.hash) {
        setActiveSectionHash(location.hash);
        // Smooth scroll handling by HashLink or custom scroll function in Link onClick
        setTimeout(() => {
          const element = document.getElementById(location.hash.substring(1));
          if (element) {
            const headerOffset = headerRef.current?.offsetHeight || 70;
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
          }
        }, 100);
      } else if (window.scrollY < window.innerHeight * 0.5) { // If at top of home page
        setActiveSectionHash("#home");
      }
    }
  }, [location.pathname, location.hash]);


  const navLinks = [
    { id: 'home', label: 'Home', path: '/', type: 'homeSection' },
    { id: 'about', label: 'About', path: '/', type: 'homeSection' }, // Preview on home
    { id: 'blogs', label: 'My Blogs', path: '/blogs', type: 'page' },
    { id: 'certifications', label: 'Certifications', path: '/certifications', type: 'page' },
    { id: 'projects', label: 'My Projects', path: '/projects', type: 'page' },
    { id: 'contact', label: 'Contact', path: '/', type: 'homeSection' },
  ];

  const isLinkActive = (link) => {
    if (link.type === 'homeSection') {
      return location.pathname === '/' && activeSectionHash === `#${link.id}`;
    }
    if (link.type === 'page') {
      return location.pathname === link.path;
    }
    return false;
  };

  // Custom scroll handler for HashLink, considering the fixed header
  const scrollWithOffset = (el) => {
    const headerOffset = headerRef.current?.offsetHeight || 70; // Get dynamic header height or fallback
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = yCoordinate - headerOffset;
    window.scrollTo({ top: yOffset, behavior: 'smooth' });
  };

  return (
    <header ref={headerRef} className="l-header">
      <nav className="nav bd-grid">
        <div>
          <Link
            smooth
            to="/#home" // Always link to home section for logo
            className="nav__logo"
            onClick={(e) => handleReactElementClick(e, closeMenu)} // Stop propagation, then close menu
            scroll={scrollWithOffset} // Apply custom scroll for logo link too
          >
            {showNavLogoImg && (
              <img src={reactLogo} alt="Adil Naib Logo" className="nav__logo-img" />
            )}
            Adil Naib
          </Link>
        </div>

        <div className={`nav__menu ${isMenuOpen ? 'show-menu' : ''}`} id="nav-menu">
          <ul className="nav__list">
            {navLinks.map((linkInfo) => (
              <li className="nav__item" key={linkInfo.id}>
                <Link
                  smooth
                  to={linkInfo.type === 'homeSection' ? `/#${linkInfo.id}` : linkInfo.path}
                  className={`nav__link ${isLinkActive(linkInfo) ? 'active-link' : ''}`}
                  onClick={(e) => handleReactElementClick(e, closeMenu)} // Stop propagation, then close menu
                  scroll={scrollWithOffset} // Custom scroll for all HashLinks
                >
                  {linkInfo.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="nav__toggle"
          id="nav-toggle"
          onClick={(e) => handleReactElementClick(e, toggleMenu)} // Stop propagation, then toggle menu
        >
          <i className='bx bx-menu'></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;