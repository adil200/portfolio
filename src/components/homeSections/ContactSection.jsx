// src/components/homeSections/ContactSection.jsx
import React from 'react';

const ContactSection = () => {
  return (
    <section className="contact section bd-grid" id="contact">
      <h2 className="section-title">Contact</h2>

      <div className="contact__container">
        {/* The form action and method are for Pageclip */}
        <form 
          action="https://send.pageclip.co/VaeZaBvIWhBhOko2bqEJnNP8KY4Rr1tX/contact-form" 
          className="contact__form pageclip-form" // Added pageclip-form class for their JS
          method="POST"
        >
          {/* You can add hidden inputs here if Pageclip requires them, e.g., for subject */}
          <input 
            type="text" 
            placeholder="Name" 
            name="Name" // Ensure name attributes match what Pageclip expects
            className="contact__input" 
            required 
          />
          <input 
            type="email" // Changed from "mail" to "email" for correct input type
            placeholder="Email" 
            name="Email"
            className="contact__input" 
            required 
          />
          <textarea 
            placeholder="Message..." 
            name="Message" 
            className="contact__textarea" // Use .contact__textarea for specific styling
            rows="7" // Adjusted rows from 10 for a more typical look
            required
          ></textarea>
          <button type="submit" className="button contact__button"> {/* Changed input to button */}
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;