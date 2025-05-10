// src/pages/CertificationsPage.jsx
import React, { useState, useEffect } from 'react';

// Data for certifications
// Assume images are in public/assets/img/
const allCertificationsData = [
  { id: 'c1', title: 'AWS CLF-C02', category: 'exams', imageUrl: '/assets/img/aws.png' },
  { id: 'c2', title: 'Analytics Attax - 2023', subtitle: 'IIT Kanpur', category: 'competitions', imageUrl: '/assets/img/IITK.jpg' },
  { id: 'c3', title: 'Data Science Professional Certificate - IBM', category: 'courses', imageUrl: '/assets/img/Coursera.jpg' },
  { id: 'c4', title: 'Typing Test - Ratatype', category: 'competitions', imageUrl: '/assets/img/Typing.jpg' },
  { id: 'c5', title: 'Data Science Job Simulation - Forage', category: 'courses', imageUrl: '/assets/img/forage.jpg' },
  // Add more certifications if you have them
];

const CertificationsPage = () => {
  const handleInteractionClick = (event) => {
    event.stopPropagation();
  };

  const [filter, setFilter] = useState('exams'); // Default filter
  const [filteredCerts, setFilteredCerts] = useState([]);

  useEffect(() => {
    setFilteredCerts(allCertificationsData.filter(cert => cert.category === filter));
  }, [filter]); // Re-filter when the filter changes

  const categories = [
    { key: 'exams', label: 'Exams' },
    { key: 'competitions', label: 'Competitions' },
    { key: 'courses', label: 'Courses' },
  ];

  return (
    <div className="page-container" style={{ paddingTop: 'var(--header-height)' }}>
      <section className="certifications section bd-grid" id="certifications-page">
        <h1 className="section-title"><span>My Certifications</span></h1>

        <div className="certifications__buttons">
          {categories.map(cat => (
            <button
              key={cat.key}
              className={`certifications__btn ${filter === cat.key ? 'active' : ''}`}
              onClick={e => { setFilter(cat.key); handleInteractionClick(e); }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="certifications__container work__container"> {/* Reusing work__container for grid */}
          {filteredCerts.length > 0 ? (
            filteredCerts.map((cert) => (
              // Using work__card style for individual certificate items
              <div className="certifications__item work__card" key={cert.id} style={{display: 'block'}}> {/* Ensure display is block */}
                <img src={cert.imageUrl} alt={cert.title} className="certifications__img" />
                <h3 className="certifications__item-title work__card-title">{cert.title}</h3>
                {cert.subtitle && <p className="work__card-description" style={{fontSize: 'var(--smaller-font-size)', marginTop: '0.25rem'}}>{cert.subtitle}</p>}
              </div>
            ))
          ) : (
            <p style={{ textAlign: 'center', gridColumn: '1 / -1' }}>No certifications found for this category.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default CertificationsPage;