// Contact.js
import React, { useState } from 'react';
import './App.css';

const Contact = () => (
    <div className="contact">
      <h2 className="header">Get in Touch</h2>
      <div className="content">
        <p>Have a scent-related query or need assistance with your order?
             Our friendly customer support team is here to help!</p>
        <p>Reach out to us via email at <strong className="email">
            support@blushbouquet.com</strong> or fill out the form below.
             We'll get back to you as soon as possible.</p>
      </div>
      <form className="form">
        <label htmlFor="name">Your Name:</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" />
  
        <label htmlFor="email">Your Email:</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" />
  
        <label htmlFor="message">Your Query:</label>
        <textarea id="message" name="message" placeholder="Type your query here"></textarea>
  
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
  export default Contact;