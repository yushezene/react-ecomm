// Products.js
import img1 from './1.png'
import img2 from './2.png'
import img3 from './3.png'
import img4 from './4.png'
import img5 from './5.png'
import img6 from './6.png'
import React, { useState } from 'react';
import './App.css';

const Products = () => {
    return (
      <div>
        <h2>Our Latest Fragrances</h2>
        <div className='contain'>
        <div className="product">
          <img src={img1} alt="Product 1" height={450} width={250} />
          <p>Hibiscus</p>
          <p>$49.99</p>
          <button >Add to Cart</button>
        </div>
        <div className="product">
          <img src={img2} alt="Product 2" height={450} width={250} />
          <p>Orange Honey</p>
          <p>$70.0</p>
          <button >Add to Cart</button>
        </div>
        <div className="product">
          <img src={img5} alt="Product 3" height={450} width={250} />
          <p>Ruby Syrup</p>
          <p>$60.0</p>
          <button >Add to Cart</button>
        </div>
        <div className="product">
          <img src={img4} alt="Product 4" height={660} width={260} />
          <p>Nude Bouquet</p>
          <p>$87.0</p>
          <button >Add to Cart</button>
        </div>
        <div className="product">
          <img src={img3} alt="Product 5" height={650} width={230} />
          <p>Gardenia</p>
          <p>$90.0</p>
          <button >Add to Cart</button>
        </div>
        <div className="product">
          <img src={img6} alt="Product 6" height={655} width={240} />
          <p>Orchid</p>
          <p>$110.0</p>
          <button >Add to Cart</button>
        </div>
        </div>
        </div>
    );
 }
 export default Products;