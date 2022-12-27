import React from 'react';

import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';

import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

const App = () =>  
 (
    <div className="m-auto antialised font-sans bg-gray-900 text-white">
      <Hero />
      <Navbar /> 
      <Carousel />
      <Carousel />
      <Carousel />
    </div>
  );


export default App;
