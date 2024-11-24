// home page
import React, { useState } from 'react';
import './App.css';

const Home = () => (
    <div className="home-container">
      <div className="home-header">
        <h2>Welcome to Our Fragrance Haven</h2>
        <p className="subtitle">Where Scents Ignite Emotions</p>
      </div>
      <div className="home-content">
        <p>Embark on a sensory journey through our exquisitely 
            crafted collection of captivating fragrances.</p>
        <p>At Scent Symphony, we believe that every perfume evokes
             a unique experience. Discover our signature scents and
             immerse yourself in the essence of luxury and sophistication.</p>
      </div>
      <div className="home-cta">
        <p className="highlight"> Get ready to Indulge Your Senses</p>
        <button >Explore Fragrances</button>
      </div>
    </div>
  );

  export default Home;