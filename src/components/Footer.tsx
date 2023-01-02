import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

import './Footer.css'

const Footer = () =>  {
    const today = new Date();
return(
    <footer className='px-12 mt-36 pb-4 text-gray-500'>
 
            <FontAwesomeIcon className="link mr-8" icon={faFacebookSquare} size='2x' />
            <FontAwesomeIcon className="link mr-8" icon={faInstagram}  size='2x'/>
            <FontAwesomeIcon className="link mr-8" icon={faTwitter} size='2x'/>
            <FontAwesomeIcon className="link" icon={faYoutube} size='2x'/>

        <div className='links grid grid-cols-4 gap-2 pt-4'>
            
            <a href="#">Idiomas e legendas</a>
            <a href="#">Audiodescrição</a>
            <a href="#">Centro de ajuda</a>
            <a href="#">Cartão pré-pago</a>
            <a href="#">Imprensa</a>
            <a href="#">Relação com investidores</a>
            <a href="#">Carreiras</a>
            <a href="#">Termos de uso</a>
            <a href="#">Privacidade</a>
            <a href="#">Avisos legais</a>
            <a href="#">Preferências</a>
            <a href="#">Informações corporativas</a>
            <a href="#">Entre em contato</a>
        </div>

        <p className="my-4">© 1990 - {today.getFullYear()} Imagiflix, Inc.</p>
    </footer>
);
};

export default Footer;