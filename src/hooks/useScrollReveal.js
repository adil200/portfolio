// src/hooks/useScrollReveal.js
import { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';

const useScrollReveal = (configOverrides = {}) => {
  const sr = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') { // Ensure it runs only in the browser
      sr.current = ScrollReveal({
        origin: 'top',
        distance: '60px',
        duration: 800, // Slightly increased duration for smoother feel
        delay: 100,
        easing: 'ease-in-out', // Smoother easing
        reset: false, // Animations run once
        viewFactor: 0.2, // Element visible when 20% in viewport
        ...configOverrides, // Allow overriding default config
      });
    }
  }, [configOverrides]);

  const reveal = (selector, options = {}, interval = 0) => {
    if (sr.current && typeof window !== 'undefined') {
      sr.current.reveal(selector, { ...options, interval });
    }
  };

  return reveal;
};

export default useScrollReveal;