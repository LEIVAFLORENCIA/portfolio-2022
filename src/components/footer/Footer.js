import React, { useContext } from 'react';
import './footer.css';
import { LanguageContext } from '../../context/LanguageContext';
import { RiInstagramFill } from 'react-icons/ri'
import { FaLinkedin } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'

const Footer = () => {
    const { texts } = useContext(LanguageContext);

    return (
        <footer>
            <a href='#' className='footer__logo'>{texts.footerThnks}</a>

            <div className='footer__sections'>
                <ul>
                    <li><a href='#'>{texts.footerHome}</a></li>
                    <li><a href='#about'>{texts.footerAbout}</a></li>
                    <li><a href='#experience'>{texts.footerExp}</a></li>
                    <li><a href='#contact'>{texts.footerCont}</a></li>
                </ul>
            </div>


            <div className='footer__copyright'>
                <small>&copy; Florencia Leiva. All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer