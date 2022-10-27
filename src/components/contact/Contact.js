import React, { useContext } from 'react';
import './contact.css';
import { LanguageContext } from '../../context/LanguageContext';
import { HiOutlineMail } from 'react-icons/hi';
import { TbBrandLinkedin } from 'react-icons/tb';

const Contact = () => {
    const { texts } = useContext(LanguageContext);

    return (
        <section id='contact' className='container'>
            <h5>{texts.contactH5}</h5>
            <h2>{texts.contactH2}</h2>
            <div className='contact__container'>
                <article className='contact__details'>
                    <h4><TbBrandLinkedin /> LinkedIn: <a href='https://www.linkedin.com/in/leivaflorencia/' target='_blank' rel='noreferrer'>in/leivaflorencia</a></h4>
                </article>
                <article className='contact__details'>
                    <h4><HiOutlineMail /> Mail: <a href='mailto:leivaflorenciad@gmail.com' target='_blank' rel='noreferrer'>leivaflorenciad@gmail.com</a></h4>
                </article>
            </div>
        </section>
    )
}

export default Contact;