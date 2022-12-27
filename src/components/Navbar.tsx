import React, { useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import { faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/imagiflix.png';
import user from '../assets/user.jpg';

import './Navbar.css'

const Navbar = () => {
 const [isMenuOpen, setIsMenuOpen] = useState(false);
 const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
return (
    <nav className='navbar absolute top-0 left-0 grid grid-cols-2 gap-4 w-full p-8'>
        <div className='justify-self-start grid grid-cols-2 gap-4 items-center'>

            <h1 className='hidden'>Imagiflix</h1>
            <img src={logo} alt='Imagiflix' />
                <ul className='justify-self-center grid grid-flow-col gap-5'>
                    <li className='font-semibold'>Início</li>
                    <li><a href="#series">Séries</a></li>
                    <li><a href="#movies">Filmes</a></li>

                </ul>
        </div>


        <div className='justify-self-end flex justify-items-end items-center'>
            <form className='relative w-64'>
                <input 
                className='w-full bg-gray-900 border border-white rounded py-1 px-3 transition-all duration-300 ease-in-out opacity-0 hover:opacity-100 focus:opacity-100' 
                type='text' 
                placeholder='Títulos, gente e gêneros' 
                />
                
                <button className='search absolute right-0 py-1 px-2'>
                    <FontAwesomeIcon  icon={faSearch}  onClick={(e) => e.preventDefault()}/>
                </button>

                
            </form>
            <div className='flex ml-4'>
                <img src={user} alt='usuário' onClick={handleClick}/>
                <button onClick={handleClick}>
                    <FontAwesomeIcon className='ml-3' icon={faCaretDown} />

                </button>
                <ul className={`absolute mt-10 top-6 right-0 w-32 bg-black rounded p-4 transition-all duration-500 ease-in-out ${
              !isMenuOpen && 'opacity-0 invisible'
            }`}>
                    <li><a href='#account' onClick={handleClick}>Minha conta</a></li>
                    <li><a href='#logout' onClick={handleClick}>Sair</a></li>
                </ul>
            </div>
        </div>
    </nav>

)
};

export default Navbar;