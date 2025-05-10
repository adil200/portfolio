// src/pages/AboutPage.jsx
import React, { useState } from 'react';
import GitHubCalendarComponent from '../components/GitHubCalendar';

// Assume images are in public folder
const aboutHeroImage = '/assets/img/about.jpg'; // Your main about image
const techStackShields = [
  "https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white",
  "https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white",
  "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",
  "https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white",
  "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
  "https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white",
  "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54",
  "https://img.shields.io/badge/r-%23276DC3.svg?style=for-the-badge&logo=r&logoColor=white",
  "https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white",
  "https://img.shields.io/badge/azure-%230072C6.svg?style=for-the-badge&logo=microsoftazure&logoColor=white",
  "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
  "https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white",
  "https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white",
  "https://img.shields.io/badge/Keras-%23D00000.svg?style=for-the-badge&logo=Keras&logoColor=white",
  "https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white",
  "https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white",
  "https://img.shields.io/badge/scikit--learn-%23F7931E.svg?style=for-the-badge&logo=scikit-learn&logoColor=white",
  "https://img.shields.io/badge/SciPy-%230C55A5.svg?style=for-the-badge&logo=scipy&logoColor=%white",
  "https://img.shields.io/badge/TensorFlow-%23FF6F00.svg?style=for-the-badge&logo=TensorFlow&logoColor=white",
  "https://img.shields.io/badge/opencv-%23white.svg?style=for-the-badge&logo=opencv&logoColor=black", // Adjusted color for visibility
  "https://img.shields.io/badge/Matplotlib-%23ffffff.svg?style=for-the-badge&logo=Matplotlib&logoColor=black",
  "https://img.shields.io/badge/Plotly-%233F4F75.svg?style=for-the-badge&logo=plotly&logoColor=white",
  "https://img.shields.io/badge/Notion-%23000000.svg?style=for-the-badge&logo=notion&logoColor=white",
];

const educationData = [
  { title: 'High School', subtitle: 'V.M.E.H.S (CBSE)', date: '', details: '' },
  { title: 'Intermediate, MPC', subtitle: 'Narayana Junior College, Kadapa', date: 'Jun 2018 - Mar 2020', details: 'CGPA: 9.13/10.00' },
  { title: 'Computer Science and Engineering (Data Science)', subtitle: 'Presidency University Bangalore', date: 'Aug 2020 - Jun 2024', details: 'CGPA: 8.53/10.00' },
];

const workData = [
  { title: 'AI Content Writer (Internship)', subtitle: 'GeeksForGeeks', date: 'Mar 2024 - Jun 2024', details: '' },
  { title: 'Analyst', subtitle: 'Capgemini', date: 'Oct 2024 - Present', details: '' },
];


const AboutPage = () => {
  const [activeTab, setActiveTab] = useState('education'); // 'education' or 'work'

  const renderQualificationData = (data) => {
    return data.map((item, index) => (
      <div className="qualification__data" key={index}>
        {index % 2 === 0 ? ( // Text on left, rounder/line on right for first item in pair
          <>
            <div>
              <h3 className="qualification__title">{item.title}</h3>
              <span className="qualification__subtitle">{item.subtitle}</span>
              {item.date && <div className="qualification__calendar"><i className='bx bx-calendar'></i> {item.date}</div>}
              {item.details && <p className="qualification__details">{item.details}</p>}
            </div>
            <div>
              <span className="qualification__rounder"></span>
              {index < data.length -1 && <span className="qualification__line"></span>}
            </div>
          </>
        ) : ( // Text on right, rounder/line on left for second item in pair (or single item in its own row)
          <>
            <div></div> {/* Empty div for left spacing */}
            <div>
              <span className="qualification__rounder"></span>
              {index < data.length -1 && <span className="qualification__line"></span>}
            </div>
            <div>
              <h3 className="qualification__title">{item.title}</h3>
              <span className="qualification__subtitle">{item.subtitle}</span>
              {item.date && <div className="qualification__calendar"><i className='bx bx-calendar'></i> {item.date}</div>}
              {item.details && <p className="qualification__details">{item.details}</p>}
            </div>
          </>
        )}
      </div>
    ));
  };


  return (
    <div className="page-container" style={{paddingTop: 'var(--header-height)'}}> {/* Add padding for fixed header */}
      <section className="about-page section bd-grid"> {/* Specific class for this page */}
        <div style={{ textAlign: 'center', marginBottom: 'var(--mb-4)' }}>
          <img src={aboutHeroImage} alt="Adil Naib Profile" className="rounded-img" />
        </div>
        
        <h1 className="section-title" id="about-me">
          <i className='bx bx-male' style={{ marginRight: '0.5rem' }}></i>About Me
        </h1>
        <div className="about-page__text-content" style={{ marginBottom: 'var(--mb-6)'}}>
          <p>
            👋 Hello! I'm Adil Naib, a passionate data science enthusiast and Kaggle Notebooks Expert, having graduated with a degree in Data Science from Presidency University. Through courses and independent projects, I've acquired expertise in Exploratory Data Analysis, Data Visualization, and Predictive Modelling.
          </p>
          <br />
          <p>
            🖋 I've written and published informative data science blogs on Analytics Vidhya and GeeksforGeeks. As I continue my journey in the data science world, I aim to create more valuable content that provides insights, tips, and solutions to complex data-related challenges.
          </p>
          <br />
          <p>
            💼 I'm excited to use my knowledge and talents in the real world and acquire first-hand experience through internships or other opportunities. I eventually want to work in data science and contribute significantly.
          </p>
          <br/>
          <p>In my free time, I enjoy writing Data Science blogs and sharing my knowledge with the community.</p>
        </div>

        {/* My Journey (Qualification) Section */}
        <section className="qualification section">
          <h2 className="section-title">My Journey</h2>
          <div className="qualification__container">
            <div className="qualification__tabs">
              <button
                className={`qualification__button ${activeTab === 'education' ? 'qualification__active' : ''}`}
                onClick={() => setActiveTab('education')}
              >
                <i className="bx bxs-graduation qualification__icon"></i> Education
              </button>
              <button
                className={`qualification__button ${activeTab === 'work' ? 'qualification__active' : ''}`}
                onClick={() => setActiveTab('work')}
              >
                <i className="bx bxs-briefcase-alt-2 qualification__icon"></i> Work
              </button>
            </div>

            <div className="qualification__sections">
              {activeTab === 'education' && (
                <div className="qualification__content qualification__content-active">
                  {renderQualificationData(educationData)}
                </div>
              )}
              {activeTab === 'work' && (
                <div className="qualification__content qualification__content-active">
                  {renderQualificationData(workData)}
                </div>
              )}
            </div>
          </div>
        </section>


        <h2 className="section-title" id="tech-stack">
          <i className='bx bx-laptop' style={{ marginRight: '0.5rem' }}></i>Tech Stack
        </h2>
        <div className="skills__list" style={{ marginBottom: 'var(--mb-6)'}}>
          {techStackShields.map((shieldUrl, index) => (
            <img src={shieldUrl} alt="Tech skill" key={index} />
          ))}
        </div>

        <h2 className="section-title" id="github-stats">
          <i className='bx bxs-bar-chart-alt-2' style={{ marginRight: '0.5rem' }}></i>GitHub Stats
        </h2>
        <div style={{ textAlign: 'center', marginBottom: 'var(--mb-2)' }}>
          <img 
            style={{ width: '100%', maxWidth: '400px', marginBottom: '1rem' }} 
            src="https://github-readme-streak-stats.herokuapp.com/?user=adil200&theme=react&hide_border=false" 
            alt="GitHub Streak Stats"
          />
          <br />
          <img 
            style={{ width: '100%', maxWidth: '400px' }}
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=adil200&theme=react&hide_border=false&include_all_commits=false&count_private=false&layout=compact" 
            alt="Top Languages"
          />
        </div>
        <div style={{ textAlign: 'center', margin: 'var(--mb-4) 0' }}>
          <a href="https://visitcount.itsvg.in" target="_blank" rel="noopener noreferrer">
            <img src="https://visitcount.itsvg.in/api?id=adil200&icon=0&color=0" alt="Profile Visit Count" />
          </a>
        </div>
        
        <GitHubCalendarComponent username="adil200" />

      </section>
    </div>
  );
};

export default AboutPage;