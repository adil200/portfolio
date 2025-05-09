// src/components/GitHubCalendar.jsx
import React, { useEffect, useRef } from 'react';

const GitHubCalendarComponent = ({ username }) => {
  const calendarRef = useRef(null);

  useEffect(() => {
    // Ensure the GitHubCalendar function is available (loaded from public/index.html or via script tag)
    if (window.GitHubCalendar && calendarRef.current) {
      // Clear previous calendar if component re-renders with different username (optional)
      calendarRef.current.innerHTML = '';
      try {
        window.GitHubCalendar(calendarRef.current, username, {
          responsive: true,
          // tooltips: true, // You can enable tooltips if the library supports it
        });
      } catch (error) {
        console.error("Error initializing GitHub Calendar:", error);
        if (calendarRef.current) {
            calendarRef.current.innerHTML = 'Failed to load GitHub Activity Calendar.';
        }
      }
    } else if (calendarRef.current && !window.GitHubCalendar) {
        calendarRef.current.innerHTML = 'GitHub Calendar script not loaded. Please ensure it\'s in your public/index.html.';
    }
  }, [username]); // Re-run if username changes

  return (
    <div className="calendar-container bd-grid"> {/* Added a wrapper for better layout control */}
        <h3 className="section-title" style={{marginBottom: 'var(--mb-2)'}}>GitHub Activity</h3>
        <div ref={calendarRef} className="calendar">
            Loading GitHub Activity...
        </div>
    </div>
  );
};

export default GitHubCalendarComponent;