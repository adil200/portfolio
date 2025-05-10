// src/components/homeSections/HeroSection.jsx
import React, { forwardRef } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Typewriter from '../Typewriter';

const profileImage = '/portfolio/assets/img/perfil.png';

const HeroSection = forwardRef((props, ref) => {
  const typewriterWords = ["Data Scientist", "Kaggle Expert", "AI Blogger"];

  return (
    <section className="home section bd-grid" id="home" ref={ref}>
      <div className="home__container">
        <div className="home__left-content">
          {/* Social icons are NOT here anymore for the primary text-left, image-right layout.
              They will be part of home__data now for simpler flow.
              If you wanted the vertical social icons on the FAR left of text, the previous
              structure was okay, but CSS needed more complex grid-area definitions.
              This change simplifies the CSS.
          */}

          <div className="home__data">
            <h1 className="home__title">
              Hello,<br />
              This is <span className="home__title-color">Adil Naib</span>
              <br />
              <Typewriter words={typewriterWords} />
            </h1>
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              offset={-70} // Adjust if your header height changed
              duration={500}
              className="button"
              href="#contact"
            >
              Contact
            </ScrollLink>

            {/* MOVED .home__social INSIDE .home__data */}
            <div className="home__social" style={{ marginTop: 'var(--mb-4)' }}> {/* Added inline margin for spacing */}
              <a href="https://www.linkedin.com/in/adilnaib/" target="_blank" rel="noopener noreferrer" className="home__social-icon">
                <i className='bx bxl-linkedin'></i>
              </a>
              <a href="https://www.kaggle.com/adilmohammed" target="_blank" rel="noopener noreferrer" className="home__social-icon">
                <i className="bx bxl-kickstarter"></i>
              </a>
              <a href="https://github.com/adil200" target="_blank" rel="noopener noreferrer" className="home__social-icon">
                <i className='bx bxl-github'></i>
              </a>
            </div>
          </div>
        </div> {/* End of home__left-content */}

        <div className="home__img-container">
          {/* SVG content */}
          <svg className="home__blob" viewBox="0 0 479 467" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <mask id="mask0" mask-type="alpha">
              <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
            </mask>
            <g mask="url(#mask0)">
              <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
              <image className="home__blob-img" x="30" y="-15" width="500" height="610" href={profileImage} />
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
});

export default HeroSection;