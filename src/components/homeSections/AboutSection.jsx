// src/components/homeSections/AboutSection.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // For "Learn More" button

// Assuming images are in public/assets/img/
const aboutImage = '/assets/img/mega-creator.png';
const resumeFile = '/assets/pdf/Adil_Naib_Resume.pdf'; // Assuming PDF is in public/assets/pdf/



const AboutSection = () => {
  const handleInteractionClick = (event) => {
    event.stopPropagation();
  };

  return (
    <section className="about section bd-grid" id="about">
      <h2 className="section-title">About</h2>

      <div className="about__container"> {/* This will be a grid (text & image) on larger screens */}
        <div className="about__img-container">
          <img src={aboutImage} alt="Adil Naib illustration" />
        </div>
        
        <div className="about__content"> {/* Wrapper for text content */}
          <h3 className="about__subtitle">I'am Adil Naib</h3>
          <p className="about__text">
            A passionate data science enthusiast, and Kaggle Notebooks Expert.
            <br /><br />
            🖋 I've written and published informative data science blogs on Analytics Vidhya, and GeeksForGeeks.
            <br /><br />
            📹 I've created and published educational videos on YouTube.
          </p>
          <div className="about__buttons">
            <a href={resumeFile} download="Adil_Naib_Resume.pdf" className="button" target="_blank" rel="noopener noreferrer" onClick={handleInteractionClick}>
              Download Resume
            </a>
            <Link to="/about" className="button" onClick={handleInteractionClick}> {/* Links to the full AboutPage */}
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;