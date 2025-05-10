// src/components/homeSections/YouTubeSection.jsx
import React, { useState, useEffect } from 'react';

// Access the API key from environment variables
const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const VIDEO_ID = 'oGTbVHpdFGM'; // Your specific video ID
const API_URL = `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${VIDEO_ID}&key=${API_KEY}`;

const YouTubeSection = () => {
  const [views, setViews] = useState('Loading...');
  const [likes, setLikes] = useState('Loading...');
  const [comments, setComments] = useState('Loading...');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideoData = async () => {
      if (!API_KEY) {
        console.error('YouTube API Key is not defined. Please set VITE_YOUTUBE_API_KEY in your .env file.');
        setError('API key missing');
        setViews('N/A');
        setLikes('N/A');
        setComments('N/A');
        return;
      }

      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          // Try to get more specific error from YouTube API response if possible
          const errorData = await response.json().catch(() => null);
          const errorMessage = errorData?.error?.message || `HTTP error! status: ${response.status}`;
          throw new Error(errorMessage);
        }
        const data = await response.json();
        
        if (data.items && data.items.length > 0) {
          const stats = data.items[0].statistics;
          // Format numbers with commas
          setViews(parseInt(stats.viewCount, 10).toLocaleString());
          setLikes(parseInt(stats.likeCount, 10).toLocaleString());
          setComments(parseInt(stats.commentCount, 10).toLocaleString());
          setError(null); // Clear any previous error
        } else {
          throw new Error('No video data found for the given ID.');
        }
      } catch (error) {
        console.error('Error fetching video data:', error);
        setError(error.message);
        setViews('Error');
        setLikes('Error');
        setComments('Error');
      }
    };

    fetchVideoData();

    // Note: If you want this to re-fetch periodically, you'd need to add
    // a timer and clear it in the cleanup function, or trigger re-fetch
    // based on some other condition. For now, it fetches once on mount.

  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <section className="work section bd-grid" id="youtube">
      <h2 className="section-title">YouTube Video</h2>
      
      <div className="youtube__container">
        <div className="youtube__video-wrapper">
          <iframe 
            src={`https://www.youtube.com/embed/${VIDEO_ID}`} // Use VIDEO_ID variable
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
          ></iframe>
        </div>
        
        {error && <p style={{color: 'red', textAlign: 'center'}}>Failed to load video stats: {error}</p>}
        
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