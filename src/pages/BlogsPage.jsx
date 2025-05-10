// src/pages/BlogsPage.jsx
import React from 'react';

// This data should ideally come from a CMS, API, or a separate data file
// For now, it's a direct copy/adaptation from your blogs.html
// Ensure image paths are correct (e.g., placed in public/assets/img/)
const allBlogsData = [
  { id: 'b1', title: 'Morphology Exploration in NLP using word_forms: A Deep Dive', platform: 'GeeksForGeeks', platformLogo: '/assets/img/gfg.png', date: 'Jul 2, 2024', imageUrl: '/assets/img/word_forms.png', link: 'https://www.geeksforgeeks.org/morphology-exploration-in-nlp-using-wordforms-a-deep-dive/' },
  { id: 'b2', title: 'Creating Interactive 3D Visualizations using PyVista', platform: 'GeeksForGeeks', platformLogo: '/assets/img/gfg.png', date: 'Jul 1, 2024', imageUrl: '/assets/img/pyvista.png', link: 'https://www.geeksforgeeks.org/creating-interactive-3d-visualizations-using-pyvista/' },
  { id: 'b3', title: 'Visualizing Data with Python’s Leather Library', platform: 'GeeksForGeeks', platformLogo: '/assets/img/gfg.png', date: 'Jun 26, 2024', imageUrl: '/assets/img/leather.png', link: 'https://www.geeksforgeeks.org/visualizing-data-with-pythons-leather-library/' },
  { id: 'b4', title: 'Introduction to pyNLPl: Streamlining NLP Workflows with Python', platform: 'GeeksForGeeks', platformLogo: '/assets/img/gfg.png', date: 'Jun 27, 2024', imageUrl: '/assets/img/pynlpl.jpg', link: 'https://www.geeksforgeeks.org/introduction-to-pynlpl-streamlining-nlp-workflows-with-python/' },
  { id: 'b5', title: 'Geospatial Data Visualization Using Pydeck', platform: 'Analytics Vidhya', platformLogo: '/assets/img/av.png', date: 'Jun 24, 2024', imageUrl: '/assets/img/PyDeck.png', link: 'https://www.analyticsvidhya.com/blog/2024/06/geospatial-data-visualization-using-pydeck/' },
  { id: 'b6', title: 'Advanced Guide for NLP', platform: 'Analytics Vidhya', platformLogo: '/assets/img/av.png', date: 'Jun 5, 2024', imageUrl: '/assets/img/nlp.jpg', link: 'https://www.analyticsvidhya.com/blog/2023/09/advanced-natural-language-processing-nlp/' },
  { id: 'b7', title: 'Data Cleaning with PyJanitor', platform: 'GeeksForGeeks', platformLogo: '/assets/img/gfg.png', date: 'Jun 3, 2024', imageUrl: '/assets/img/pyjanitor.png', link: 'https://www.geeksforgeeks.org/streamlining-data-cleaning-with-pyjanitor-a-comprehensive-guide/' },
  { id: 'b8', title: 'Build Script Generator using Gen AI', platform: 'Analytics Vidhya', platformLogo: '/assets/img/av.png', date: 'May 26, 2024', imageUrl: '/assets/img/script.jpg', link: 'https://www.analyticsvidhya.com/blog/2024/05/script-generator-using-generative-ai/' },
  { id: 'b9', title: '3D Visualization with Mayavi in Python', platform: 'GeeksForGeeks', platformLogo: '/assets/img/gfg.png', date: 'May 22, 2024', imageUrl: '/assets/img/mayavi.jpeg', link: 'https://www.geeksforgeeks.org/exploring-3d-data-visualization-with-mayavi-in-python/' },
  { id: 'b10', title: 'Flight Delay Prediction using DL', platform: 'GeeksForGeeks', platformLogo: '/assets/img/gfg.png', date: 'May 22, 2024', imageUrl: '/assets/img/flight delay.jpg', link: 'https://www.geeksforgeeks.org/flight-delay-prediction-using-deep-learning/' },
  { id: 'b11', title: 'Build DL based Lyrics Generator', platform: 'GeeksForGeeks', platformLogo: '/assets/img/gfg.png', date: 'Apr 23, 2024', imageUrl: '/assets/img/lyric.jpg', link: 'https://www.geeksforgeeks.org/how-to-build-a-deep-learning-based-lyrics-generator/' },
  { id: 'b12', title: 'Build DL based Medical Diagnoser', platform: 'GeeksForGeeks', platformLogo: '/assets/img/gfg.png', date: 'Mar 25, 2024', imageUrl: '/assets/img/work2.jpg', link: 'https://www.geeksforgeeks.org/build-a-deep-learning-based-medical-diagnoser/' },
  { id: 'b13', title: 'How to Build a Food Quality Detector?', platform: 'Analytics Vidhya', platformLogo: '/assets/img/av.png', date: 'Mar 19, 2024', imageUrl: '/assets/img/work1.jpg', link: 'https://www.analyticsvidhya.com/blog/2024/03/food-quality-detector/' },
  { id: 'b14', title: 'Deep Learning in Agriculture', platform: 'Analytics Vidhya', platformLogo: '/assets/img/av.png', date: 'Mar 3, 2024', imageUrl: '/assets/img/agriculture.jpg', link: 'https://www.analyticsvidhya.com/blog/2024/01/deep-learning-in-agriculture-improving-soil-crop-yields/' },
  { id: 'b15', title: 'Revolutionizing Agriculture with Generative Chatbots (Research Paper)', platform: 'IRJMETS', platformLogo: '/assets/img/irjmets_logo.png', date: 'Jan 1, 2024', imageUrl: '/assets/img/chatbot.jpg', link: 'https://www.irjmets.com/uploadedfiles/paper//issue_1_january_2024/48247/final/fin_irjmets1704989069.pdf' }, // Add irjmets logo if you have one
  { id: 'b16', title: 'Generative AI in Recipe Generation', platform: 'Analytics Vidhya', platformLogo: '/assets/img/av.png', date: 'Sep 29, 2023', imageUrl: '/assets/img/recipe.jpg', link: 'https://www.analyticsvidhya.com/blog/2023/09/generative-ai-in-recipe-generation-and-culinary-arts/' },
  { id: 'b17', title: 'Generative AI in Film and Entertainment', platform: 'Analytics Vidhya', platformLogo: '/assets/img/av.png', date: 'Sep 4, 2023', imageUrl: '/assets/img/work5.jpg', link: 'https://www.analyticsvidhya.com/blog/2023/08/generative-ai-in-film-and-entertainment/' },
  { id: 'b18', title: 'How to Deal with Sparse Datasets?', platform: 'Analytics Vidhya', platformLogo: '/assets/img/av.png', date: 'Jul 27, 2023', imageUrl: '/assets/img/work4.jpg', link: 'https://www.analyticsvidhya.com/blog/2023/07/how-to-deal-with-sparse-datasets/' },
  { id: 'b19', title: 'Anomaly Detection on Google Stock Data 2014-2022', platform: 'Analytics Vidhya', platformLogo: '/assets/img/av.png', date: 'Feb 25, 2023', imageUrl: '/assets/img/anomaly.png', link: 'https://www.analyticsvidhya.com/blog/2023/02/anomaly-detection-on-google-stock-data-2014-2022/' },
  { id: 'b20', title: 'How to Build a Real Estate Price Prediction Model?', platform: 'Analytics Vidhya', platformLogo: '/assets/img/av.png', date: 'Feb 4, 2023', imageUrl: '/assets/img/house.png', link: 'https://www.analyticsvidhya.com/blog/2023/02/how-to-build-a-real-estate-price-prediction-model/' },
];


const BlogsPage = () => {
  return (
    <div className="page-container" style={{paddingTop: 'var(--header-height)'}}>
      <section className="work section bd-grid" id="blogs-page"> {/* id specific for this page */}
        <h1 className="section-title"><span>My Blogs</span></h1>

        <div className="work__container"> {/* Reusing .work__container for grid */}
          {allBlogsData.map((blog) => (
            <a href={blog.link} target="_blank" rel="noopener noreferrer" className="work__card" key={blog.id}>
              <img src={blog.imageUrl} alt={blog.title} />
              <h3 className="work__card-title">{blog.title}</h3>
              <p className="work__card-description">
                {blog.platformLogo && <img src={blog.platformLogo} alt={blog.platform} />}
                {blog.platform} {blog.date && `· ${blog.date}`}
              </p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogsPage;