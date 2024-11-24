//Navigation.js

import React, { useState } from 'react';
 import './App.css';
const Navigation = ({ setPage }) => (
    <nav className="navigation">
      <ul>
        <li><button onClick={() => setPage('home')}>Home</button></li>
        <li><button onClick={() => setPage('products')}>Products</button></li>
        <li><button onClick={() => setPage('about')}>About</button></li>
        <li><button onClick={() => setPage('contact')}>Contact</button></li>
      </ul>
    </nav>
  );
  export default Navigation; 