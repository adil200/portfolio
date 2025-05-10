// src/components/homeSections/ProjectsPreviewSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';

// Added a 6th project entry
const previewProjects = [
  {
    id: 1,
    title: 'AI Recipe Generator',
    imageUrl: '/assets/img/recipe.jpg',
    link: 'https://github.com/adil200/AI-Recipe-Generator',
  },
  {
    id: 2,
    title: 'DL based Medical Diagnoser',
    imageUrl: '/assets/img/md.png',
    link: 'https://github.com/adil200/Medical-Diagnoser',
  },
  {
    id: 3,
    title: 'Generative AI based Script Generator',
    imageUrl: '/assets/img/ai-movie-script-generator-thumbnail.png',
    link: 'https://www.kaggle.com/code/adilmohammed/script-generator',
  },
  {
    id: 4,
    title: 'DL based Lyrics Generator',
    imageUrl: '/assets/img/lyric.jpg',
    link: 'https://www.kaggle.com/code/adilmohammed/lyrics-generator',
  },
  {
    id: 5,
    title: 'Farmer Support ChatBot',
    imageUrl: '/assets/img/chatbot.jpg',
    link: 'https://github.com/adil200/Farmer-Support-ChatBot',
  },
  { // New 6th project for the preview
    id: 6,
    title: 'Spaceship Transport Prediction',
    imageUrl: '/assets/img/project6.jpg', // Ensure this image exists in public/assets/img
    link: 'https://www.kaggle.com/code/adilmohammed/spaceship-transport-prediction',
  },
];

const ProjectsPreviewSection = () => {
  const handleInteractionClick = (event) => {
    event.stopPropagation();
  };
  return (
    <section className="work section bd-grid" id="projects">
      <h2 className="section-title">My Projects</h2>

      <div className="work__container">
        {previewProjects.map((project) => (
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="work__card" key={project.id}>
            <img src={project.imageUrl} alt={project.title} />
            <h3 className="work__card-title">{project.title}</h3>
          </a>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: 'var(--mb-4)' }}>
        <Link to="/projects" className="button" onClick={handleInteractionClick}>
          See More Projects
        </Link>
      </div>
    </section>
  );
};

export default ProjectsPreviewSection;