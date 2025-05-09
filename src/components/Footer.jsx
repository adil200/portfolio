// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer"> {/* Uses .footer class from App.css */}
      <div className="footer__social">
        <a href="https://www.facebook.com/profile.php?id=100025051991647" target="_blank" rel="noopener noreferrer" className="footer__social-icon">
          <i className='bx bxl-facebook'></i>
        </a>
        <a href="https://www.instagram.com/_adil.naib_/" target="_blank" rel="noopener noreferrer" className="footer__social-icon">
          <i className='bx bxl-instagram'></i>
        </a>
        <a href="https://twitter.com/AdilNaib" target="_blank" rel="noopener noreferrer" className="footer__social-icon">
          <i className='bx bxl-twitter'></i>
        </a>
      </div>
      <p className="footer__copy">
        © {new Date().getFullYear()} Adil Naib <br />
        All rights reserved
      </p>
    </footer>
  );
};

export default Footer;