import React, { useContext, useState } from 'react';
import './header.css';
import { LanguageContext } from '../../context/LanguageContext';
import { HiOutlineMail } from 'react-icons/hi';
import { TbBrandLinkedin, TbBrandGithub } from 'react-icons/tb';

const SocialMedias = () => {
    const { handleLanguage } = useContext(LanguageContext);
    const [activeLang, setActiveLang] = useState('ES');
    console.log(activeLang)

    return (
        <div className='header__socials'>
            <a href='https://www.linkedin.com/in/leivaflorencia/' target='_blank' rel='noreferrer'><TbBrandLinkedin /></a>
            <a href='https://github.com/leivaflorencia' target='_blank' rel='noreferrer'><TbBrandGithub /></a>
            <a href='mailto:leivaflorenciad@gmail.com' rel='noreferrer'><HiOutlineMail /></a>
            <a href='#' onClick={(e) => { handleLanguage(e); setActiveLang('ES'); }} className={activeLang === 'ES' ? 'active ': ''}>ES</a>
            <a href='#' onClick={(e) => { handleLanguage(e); setActiveLang('EN'); }} className={activeLang === 'EN' ? 'active ': ''}>EN</a>
        </div>
    )
}

export default SocialMedias;