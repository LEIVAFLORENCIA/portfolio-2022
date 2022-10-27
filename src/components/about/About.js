import React, { useContext } from 'react';
import './about.css';
import { LanguageContext } from '../../context/LanguageContext';
import { AiOutlineSetting } from 'react-icons/ai';
import { IoLibraryOutline } from 'react-icons/io5';
import { BiPaint } from 'react-icons/bi';

const About = () => {
    const { texts } = useContext(LanguageContext);

    return (
        <section id='about' className='container'>
            <h2>{texts.aboutH2}</h2>
            <div className='about__container'>
                <div className='about__me'>
                    <p>{texts.aboutP}</p>
                    <p>{texts.aboutPTech}</p>
                </div>
                <div className='about__cards'>
                    <article className='about__card'>
                        <AiOutlineSetting className='about__icon' />
                        <h5>{texts.aboutTech}</h5>
                        <small>{texts.aboutTechList}</small>
                    </article>
                    <article className='about__card'>
                        <IoLibraryOutline className='about__icon' />
                        <h5>{texts.aboutLib}</h5>
                        <small>{texts.aboutLibList}</small>
                    </article>
                    <article className='about__card'>
                        <BiPaint className='about__icon' />
                        <h5>{texts.aboutDesign}</h5>
                        <small>{texts.aboutDesignList}</small>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default About;
