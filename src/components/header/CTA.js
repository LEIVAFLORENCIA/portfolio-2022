import React, { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

const CTA = () => {
    const { texts } = useContext(LanguageContext);

    return (
        <div className='cta'>
            <a className='btn' href='https://drive.google.com/file/d/1hH6Tvv8WHEmmN7ZUd9zaFLz671EjFzLF/view?usp=sharing' target='_blank'>{texts.ctaDownload}</a>
            <a className='btn btn-primary' href='#contact'>{texts.ctaTalk}</a>
        </div>
    )
}
export default CTA;