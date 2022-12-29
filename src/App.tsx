import React, { useState, useEffect } from 'react';
import CONST from './data/constants';

import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';

import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

const App = () =>  {

  const { URL, APIKEY } = CONST;
  

  const [movies, setMovies] = useState();

    useEffect (() => {
      const fetchData = async () => {

        const response = await fetch (`${URL}/discover/movie?api_key=${APIKEY}&language=pt-BR&sort_by=popularity.desc`);

        const data = await response.json();

        setMovies(data);
      }
        fetchData(); 
      
    }, []);

    useEffect(() => movies && console.log(movies), [ movies ]);
  
  
  return(
    <div className="m-auto antialised font-sans bg-gray-900 text-white">
      <Hero {...movies?.results[0]} />
      <Navbar /> 
      <Carousel />
      <Carousel />
      <Carousel />
    </div>
  );

}



export default App;
