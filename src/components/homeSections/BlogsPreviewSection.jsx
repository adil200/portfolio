// src/components/homeSections/BlogsPreviewSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';

// Added a 6th blog entry
const previewBlogs = [
  {
    id: 1,
    title: 'How to Build a Food Quality Detector?',
    platform: 'Analytics Vidhya',
    platformLogo: '/portfolio/assets/img/av.png',
    imageUrl: '/portfolio/assets/img/work1.jpg',
    link: 'https://www.analyticsvidhya.com/blog/2024/03/food-quality-detector/',
  },
  {
    id: 2,
    title: 'Build DL based Medical Diagnoser',
    platform: 'GeeksForGeeks',
    platformLogo: '/portfolio/assets/img/gfg.png',
    imageUrl: '/portfolio/assets/img/work2.jpg',
    link: 'https://www.geeksforgeeks.org/build-a-deep-learning-based-medical-diagnoser/',
  },
  {
    id: 3,
    title: 'Advanced guide for NLP',
    platform: 'Analytics Vidhya',
    platformLogo: '/portfolio/assets/img/av.png',
    imageUrl: '/portfolio/assets/img/nlp.jpg',
    link: 'https://www.analyticsvidhya.com/blog/2023/09/advanced-natural-language-processing-nlp/',
  },
  {
    id: 4,
    title: 'Build DL based Lyrics Generator',
    platform: 'GeeksForGeeks',
    platformLogo: '/portfolio/assets/img/gfg.png',
    imageUrl: '/portfolio/assets/img/work6.jpg',
    link: 'https://www.geeksforgeeks.org/how-to-build-a-deep-learning-based-lyrics-generator/',
  },
  {
    id: 5,
    title: 'Build Script Generator using Gen AI',
    platform: 'Analytics Vidhya',
    platformLogo: '/portfolio/assets/img/av.png',
    imageUrl: '/portfolio/assets/img/script.jpg',
    link: 'https://www.analyticsvidhya.com/blog/2024/05/script-generator-using-generative-ai/',
  },
  { // New 6th blog post for the preview
    id: 6,
    title: 'Data Cleaning with PyJanitor', // Example from your full list
    platform: 'GeeksForGeeks',
    platformLogo: '/portfolio/assets/img/gfg.png',
    imageUrl: '/portfolio/assets/img/pyjanitor.png', // Ensure this image exists in public/assets/img
    link: 'https://www.geeksforgeeks.org/streamlining-data-cleaning-with-pyjanitor-a-comprehensive-guide/',
  },
];

const BlogsPreviewSection = () => {
  return (
    <section className="work section bd-grid" id="blogs">
      <h2 className="section-title">My Blogs</h2>

      <div className="work__container">
        {previewBlogs.map((blog) => (
          <a href={blog.link} target="_blank" rel="noopener noreferrer" className="work__card" key={blog.id}>
            <img src={blog.imageUrl} alt={blog.title} />
            <h3 className="work__card-title">{blog.title}</h3>
            <p className="work__card-description">
              <img src={blog.platformLogo} alt={blog.platform} />
              {blog.platform}
            </p>
          </a>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: 'var(--mb-4)' }}>
        <Link to="/blogs" className="button">
          See More Blogs
        </Link>
      </div>
    </section>
  );
};

export default BlogsPreviewSection;