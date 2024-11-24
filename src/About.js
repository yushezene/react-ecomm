//About.js
import React, { useState } from 'react';
import './App.css';

const About = () => (
    <div className="about-container">
      <h2 className="about-header">Our Story</h2>
      <div className="about-content">
  <p>Welcome to the enchanting world of Blush Bouquet, where each fragrance unfolds
     a captivating tale, and elegance blossoms with every spritz!</p>
  <p>Nestled in the heart of olfactory sophistication, our brand is more 
    than just perfumes; it's a symphony of scents that celebrates individuality, 
    creativity, and the pleasure of embracing your unique essence.</p>
  <p>At Blush Bouquet, we believe in the enchanting power of scents. Each perfume is
     meticulously crafted to evoke emotions, inspire memories, and add a delightful touch
      of sophistication to your olfactory journey.</p>
</div>

      <div className="about-values">
        <h3>Our Values</h3>
        <ul>
          <li className="value-item">Creativity</li>
          <li className="value-item">Quality Craftsmanship</li>
          <li className="value-item">Inclusivity</li>
          <li className="value-item">Sustainability</li>
        </ul>
      </div>
    </div>
  );
  export default About;