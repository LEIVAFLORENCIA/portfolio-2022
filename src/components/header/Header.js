import React, { useContext } from 'react';
import './header.css'
import { LanguageContext } from '../../context/LanguageContext';
import CTA from './CTA';
import SocialMedias from './SocialMedias';

const Header = () => {
    const { texts } = useContext(LanguageContext);

    return (
        <header>
            <div className='container header__container'>
                <h3>🚀 {texts.headerSection}</h3>
                <h1>{texts.headerH1}</h1>
                <h3>{texts.headerH2}</h3>
                <CTA />
                <SocialMedias />
            </div>
        </header>
    )
}

export default Header;