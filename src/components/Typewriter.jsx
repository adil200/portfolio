// src/components/Typewriter.jsx
import React, { useState, useEffect, useRef } from 'react';

const Typewriter = ({ words, wait = 2000, typingSpeed = 150, eraseSpeed = 75 }) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const typingTimeoutRef = useRef(null);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const type = () => {
      if (isDeleting) {
        setText(currentWord.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else {
        setText(currentWord.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }
    };

    if (!isDeleting && charIndex === currentWord.length) {
      // Pause at end of word
      typingTimeoutRef.current = setTimeout(() => setIsDeleting(true), wait);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    } else {
      const speed = isDeleting ? eraseSpeed : typingSpeed;
      typingTimeoutRef.current = setTimeout(type, speed);
    }

    return () => clearTimeout(typingTimeoutRef.current);
  }, [charIndex, isDeleting, wordIndex, words, typingSpeed, eraseSpeed, wait]);

  return <span className="home__subtitle-text">{text}</span>;
};

export default Typewriter;