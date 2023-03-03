import React, { useContext } from "react";
import './experience.css';
import { LanguageContext } from "../../context/LanguageContext";
import { BsCheckCircle } from 'react-icons/bs';

const Experience = () => {

    const { texts } = useContext(LanguageContext);

    return (
        <section id='experience' className="container">
            <h5>{texts.expH5}</h5>
            <h2>{texts.expH2}</h2>
            <div className="experience__container">
                <div className="experience__education">
                    <h3>{texts.expH3Education}</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            < BsCheckCircle className='experience__details-icon' />
                            <div> <h4>{texts.expAnalyst}</h4>
                                <small>@ {texts.expAnalystPlace}</small>
                                <small  > | {texts.expAnalystTime}</small></div>

                        </article>
                        <article className='experience__details'>
                            < BsCheckCircle className='experience__details-icon' />
                            <div> <h4>{texts.expJava}</h4>
                                <small>@ {texts.expJavaPlace}</small>
                                <small  > | {texts.expJavaTime}</small></div>

                        </article>

                        <article className='experience__details'>
                            < BsCheckCircle className='experience__details-icon' />
                            <div> <h4>{texts.expOracle}</h4>
                                <small>@ {texts.expOraclePlace}</small>
                                <small  > | {texts.expOracleTime}</small></div>
                        </article>
                    </div>
                </div>
                <div className="experience__work">
                    <h3>{texts.expH3Work}</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            < BsCheckCircle className='experience__details-icon' />
                            <div> <h4>{texts.expTecso}</h4>
                                <small>@ {texts.expTecsoPlace}</small>
                                <small  > | {texts.expTecsoTime}</small></div>
                        </article>
                        <article className='experience__details'>
                            < BsCheckCircle className='experience__details-icon' />
                            <div> <h4>{texts.expColdview}</h4>
                                <small>@ {texts.expColdviewPlace}</small>
                                <small  > | {texts.expColdviewTime}</small></div>
                        </article>
                        <article className='experience__details'>
                            < BsCheckCircle className='experience__details-icon' />
                            <div> <h4>{texts.expEnc}</h4>
                                <small>@ {texts.expEncPlace}</small>
                                <small  > | {texts.expEncTime}</small></div>
                        </article>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Experience;