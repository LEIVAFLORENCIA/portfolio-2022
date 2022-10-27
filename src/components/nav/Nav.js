import React, { useContext, useState } from "react";
import './nav.css';
import { AiOutlineHome, AiFillFolder, AiOutlineMessage } from 'react-icons/ai';
import { HiOutlineNewspaper } from 'react-icons/hi';
import { MdPersonOutline } from 'react-icons/md';
import { LanguageContext } from "../../context/LanguageContext";

const Nav = () => {
    const { texts } = useContext(LanguageContext);
    const [activeNav, setActiveNav] = useState('#')
    return (
        <nav>
            <a className={activeNav === '#' ? 'active' : ''} onClick={() => setActiveNav('#')} href="#"><AiOutlineHome /></a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><MdPersonOutline /></a>
            <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><HiOutlineNewspaper /></a>
            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiOutlineMessage /></a>
        </nav>
    )
}

export default Nav;