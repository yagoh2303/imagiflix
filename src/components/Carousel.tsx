import React from 'react';
import Slick from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


import mockData from '../data/mock'
import Poster from './Poster';
import './Carousel.css'

const Carousel = ({title='Filmes em destaque', data = mockData}) => {

    enum Direction {
        left,
        right
    }

    const SlickArrow =({direction, onClick}: {direction: Direction, onClick?: () => void }) => (
        <button 
        type='button'
        className={`absolute w-16 h-full z-10 bg-black bg-opacity-75 top-0 ${direction ? 'right-0' : 'left-0'}`}>
            <FontAwesomeIcon icon={direction ? faChevronRight : faChevronLeft} size='4x'
            onClick={onClick}
            />
        </button>
    )

    const options = {
        infinite: true,
        slidestoScroll:1,
        variableWidth: true,
        prevArrow: <SlickArrow direction={Direction.left}/>,
        nextArrow:<SlickArrow direction={Direction.right}/> 
        
    };

    return (

        <section className='carousel'>
      <h2 className='relative z-10 font-bold text-2xl ml-8'>{title}</h2>
      <Slick className='relative mb-8' {...options}>
        {data.map((movie) => Poster(movie))}
      </Slick>
    </section>
    )
};


export default Carousel;