// src/pages/Home.jsx
import React, { useEffect, useRef } from 'react'; // useRef is kept if HeroSection still uses forwardRef
import useScrollReveal from '../hooks/useScrollReveal';

// Import section components
import HeroSection from '../components/homeSections/HeroSection';
import AboutSection from '../components/homeSections/AboutSection';
import BlogsPreviewSection from '../components/homeSections/BlogsPreviewSection';
import YouTubeSection from '../components/homeSections/YouTubeSection';
import ProjectsPreviewSection from '../components/homeSections/ProjectsPreviewSection';
import ContactSection from '../components/homeSections/ContactSection';

const Home = () => {
  const reveal = useScrollReveal();
  const heroSectionRef = useRef(null); // This ref is passed to HeroSection

  useEffect(() => {
    // ScrollReveal calls
    reveal('.home__data', { origin: 'bottom' });
    reveal('.home__img-container', { origin: 'bottom', delay: 200 });
    reveal('.home__social a', { origin: 'left', interval: 150, delay: 400 });

    reveal('#about .about__img-container', { origin: 'left' }); // Target within #about section
    reveal('#about .about__content', { origin: 'right', delay: 200 }); // Target within #about section

    reveal('#blogs .work__card', { interval: 100, origin: 'bottom' });
    reveal('#blogs .button', { origin: 'bottom', delay: 300 }); // "See More Blogs" button

    reveal('#youtube .youtube__video-wrapper', { origin: 'bottom' });
    reveal('#youtube .youtube__stats', { origin: 'bottom', delay: 200 });

    reveal('#projects .work__card', { interval: 100, origin: 'bottom' });
    reveal('#projects .button', { origin: 'bottom', delay: 300 }); // "See More Projects" button

    reveal('#contact .contact__input', { origin: 'bottom', interval: 100, delay: 100 });
    reveal('#contact .contact__textarea', { origin: 'bottom', delay: 250 });
    reveal('#contact .contact__button', { origin: 'bottom', delay: 350 });
  }, [reveal]);

  return (
    <>
      <HeroSection ref={heroSectionRef} /> {/* Pass the ref here */}
      <AboutSection />
      <BlogsPreviewSection />
      <YouTubeSection />
      <ProjectsPreviewSection />
      <ContactSection />
    </>
  );
};

export default Home;