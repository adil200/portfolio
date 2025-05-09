// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ParticleBackground from './components/ParticleBackground';
import Header from './components/Header'; // We'll create/update this
import Footer from './components/Footer'; // We'll create this

// Page Components (We'll create these one by one)
import Home from './pages/Home';
import AboutPage from './pages/AboutPage'; // Renamed to avoid conflict if you have an About section on Home
import BlogsPage from './pages/BlogsPage';
import CertificationsPage from './pages/CertificationsPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactSection from './components/homeSections/ContactSection'; // Contact might be a section or its own page

import './App.css'; // Your main application styles

function App() {
  return (
    <Router>
      <ParticleBackground />
      <Header />
      <main className="l-main"> {/* Added l-main class from static site for consistency */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/certifications" element={<CertificationsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          {/* You might have a dedicated contact page or just a section on Home/Footer */}
          {/* <Route path="/contact" element={<ContactPage />} /> */}
        </Routes>
      </main>
      <Footer /> {/* We'll create this */}
    </Router>
  );
}

export default App;