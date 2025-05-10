// src/pages/ProjectsPage.jsx
import React from 'react';

// Data for projects
// Ensure image paths are correct (e.g., placed in public/assets/img/)
const allProjectsData = [
  { id: 'p1', title: 'AI Recipe Generator', imageUrl: '/assets/img/recipe.jpg', link: 'https://github.com/adil200/AI-Recipe-Generator' },
  { id: 'p2', title: 'DL based Medical Diagnoser', imageUrl: '/assets/img/md.png', link: 'https://github.com/adil200/Medical-Diagnoser' },
  { id: 'p3', title: 'Generative AI based Script Generator', imageUrl: '/assets/img/ai-movie-script-generator-thumbnail.png', link: 'https://www.kaggle.com/code/adilmohammed/script-generator' },
  { id: 'p4', title: 'DL based Lyrics Generator', imageUrl: '/assets/img/lyric.jpg', link: 'https://www.kaggle.com/code/adilmohammed/lyrics-generator' },
  { id: 'p5', title: 'Farmer Support ChatBot', imageUrl: '/assets/img/chatbot.jpg', link: 'https://github.com/adil200/Farmer-Support-ChatBot' },
  { id: 'p6', title: 'Spaceship Transport Prediction', imageUrl: '/assets/img/project6.jpg', link: 'https://www.kaggle.com/code/adilmohammed/spaceship-transport-prediction' },
  // Add any other projects
];

const ProjectsPage = () => {
  return (
    <div className="page-container" style={{ paddingTop: 'var(--header-height)' }}>
      <section className="work section bd-grid" id="projects-page"> {/* id specific for this page */}
        <h1 className="section-title"><span>My Projects</span></h1>

        <div className="work__container"> {/* Reusing .work__container for grid */}
          {allProjectsData.map((project) => (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="work__card" // Reusing .work__card for styling
              key={project.id}
            >
              <img src={project.imageUrl} alt={project.title} />
              <h3 className="work__card-title">{project.title}</h3>
              {/* Optionally add a brief description or technologies used */}
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;