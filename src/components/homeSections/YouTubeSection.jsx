// src/components/homeSections/YouTubeSection.jsx
import React, { useState, useEffect } from 'react';

const YouTubeSection = () => {
  // For dynamic stats, you'd fetch these in useEffect
  // For now, static placeholders or "Loading..."
  const [views, setViews] = useState('Loading...');
  const [likes, setLikes] = useState('Loading...');
  const [comments, setComments] = useState('Loading...');

  // Placeholder: In a real app, fetch this data
  useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => {
      setViews('4535'); // Example static data
      setLikes('130');
      setComments('23');
    }, 1500);
    return () => clearTimeout(timer);
  }, []);


  return (
    <section className="work section bd-grid" id="youtube"> {/* Reusing .work for consistency if styling is similar */}
      <h2 className="section-title">YouTube Video</h2>
      
      <div className="youtube__container">
        <div className="youtube__video-wrapper">
          <iframe 
            src="https://www.youtube.com/embed/oGTbVHpdFGM?si=5Hljd6Sw52I2C5HW" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
          ></iframe>
        </div>
        
        <div className="youtube__stats">
          <div className="youtube__stat-item">
            <span>{views}</span>
            <span>views</span>
          </div>
          <div className="youtube__stat-item">
            <span>{likes}</span>
            <span>likes</span>
          </div>
          <div className="youtube__stat-item">
            <span>{comments}</span>
            <span>comments</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTubeSection;