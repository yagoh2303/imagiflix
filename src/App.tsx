import React, { useState, useEffect } from 'react';
import CONST from './data/constants';

import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Footer from './components/Footer'

import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

const App = () =>  {

  const { URL, APIKEY } = CONST;
  

  const [movies, setMovies] = useState();
  const [series, setSeries] = useState();

    useEffect (() => {
      const fetchData = async () => {

        const movies = await fetch (`${URL}/discover/movie?api_key=${APIKEY}&language=pt-BR&sort_by=popularity.desc`);

        const moviesData = await movies.json();

      setMovies(moviesData);

        const series = await fetch (`${URL}/discover/tv?api_key=${APIKEY}&language=pt-BR&sort_by=popularity .desc`);

        const seriesData = await series.json();

      setSeries(seriesData);
    }

    fetchData();
  }, []);

   // useEffect(() => movies && console.log(movies), [ movies ]);
  
  
    return (
      <div className='m-auto antialised font-sans bg-black text-white'>
        <Hero {...movies?.results[0]} />
        <Navbar />
        <Carousel title="Filmes populares na Imagiflix" data={movies?.results}/>
        <Carousel title="Séries populares na Imagiflix"  data={series?.results}/>
        <Carousel title="Placeholder"/>
        <Footer />
      </div>
    );

}



export default App;
