import { createContext, useState } from 'react';

export const LanguageContext = createContext();

const initialLanguage = 'es';
const translations = {
    en: {
        headerH1: "Hi everyone, I'm Florencia!",
        headerH2: "Developer based in Buenos Aires, Argentina",
        headerSection: "WELCOME TO MY PORTFOLIO",
        ctaDownload: "Download CV",
        ctaTalk: "Let's talk!",
        aboutH2: "About me",
        aboutTech: "Technologies",
        aboutLib: "Libraries",
        aboutDesign: "Design",
        aboutTechList: "JAVA, ReactJS, Javascript",
        aboutLibList: "Bootstrap, MaterialUI",
        aboutDesignList: "Illustrator, Figma",
        aboutP: "Developer and enthusiast student to be constantly learning. Passionate and eager to learn about new technologies to enhance my professional skills in my career as full-stack",
        aboutPTech: "+ STACK: HTML, CSS, Git, Python, SQL, Linux, APIRest",
        expH5: "Education and work",
        expH2: "My experience",
        expH3Education:"Education",
        expH3Work: "Work",
        expAnalyst: "System Analyst",
        expAnalystPlace: "ISNSLP",
        expAnalystTime: "Mar 2020 - Present",
        expJava: "Java Developer",
        expJavaPlace: "EDUCACIÓNIT",
        expJavaTime: "Oct 2021 - Feb 2022",
        expOracle: "Oracle Data Architect",
        expOraclePlace: "EDUCACIÓNIT",
        expOracleTime: "Aug 2019 - Dec 2019",
        expDev: "Full Stack Developer",
        expDevPlace: "COLDVIEW LATAM",
        expDevTime: "Oct 2020 - Present",
        expEnc: "Graphic Designer",
        expEncPlace: "TALLER 4",
        expEncTime: "Ago 2019 - Oct 2020",
        contactH5: "Write me an e-mail or just connect and chat with me on LinkedIn.",
        contactH2: "Get in touch!",
        footerHome: "Home",
        footerAbout: "About",
        footerExp: "Experience",
        footerCont: "Contact",
        footerThnks: "Thanks for watching!"


    },
    es: {
        headerH1: "Hola a todos, soy Florencia!",
        headerH2: "Desarrolladora de Buenos Aires, Argentina",
        headerSection: "BIENVENIDOS A MI PORTFOLIO",
        ctaDownload: "Descargar CV",
        ctaTalk: "Hablemos!",
        aboutH2: "Sobre mi",
        aboutTech: "Tecnologías",
        aboutLib: "Librerías",
        aboutDesign: "Diseño",
        aboutTechList: "JAVA, ReactJS, Javascript",
        aboutLibList: "Bootstrap, MaterialUI",
        aboutDesignList: "Illustrator, Figma",
        aboutP: "Desarrolladora y estudiante en constante aprendizaje. Apasionada por aprender sobre nuevas tecnologías para poder seguir ampliando mi carrera profesional como full-stack.",
        aboutPTech: "+ TECNOLOGÍAS: HTML, CSS, Git, Python, SQL, Linux, APIRest",
        expH5: "Formación profesional",
        expH2: "Mi experiencia",
        expH3Education:"Formación Académica",
        expH3Work: "Experiencia Profesional",
        expAnalyst: "Analista de Sistemas",
        expAnalystPlace: "ISNSLP",
        expAnalystTime: "Mar 2020 - Actualidad",
        expJava: "Java Developer",
        expJavaPlace: "EDUCACIÓNIT",
        expJavaTime: "Oct 2021 - Feb 2022",
        expOracle: "Oracle Data Architect",
        expOraclePlace: "EDUCACIÓNIT",
        expOracleTime: "Ago 2019 - Dic 2019",
        expDev: "Desarrolladora Full Stack",
        expDevPlace: "COLDVIEW LATAM",
        expDevTime: "Oct 2020 - Actualidad",
        expEnc: "Diseñadora Gráfica",
        expEncPlace: "TALLER 4",
        expEncTime: "Ago 2019 - Oct 2020",
        contactH5: "Escribeme un correo o simplemente conectemos y hablemos por LinkedIn",
        contactH2: "Comunicate conmigo!",
        footerHome: "Inicio",
        footerAbout: "Sobre mi",
        footerExp: "Experiencia",
        footerCont: "Contacto",
        footerThnks: "Gracias por llegar hasta aquí!"
    }
}

export default function LanguageProvider({ children }) {
    const [language, setLanguage] = useState(initialLanguage);
    const [texts, setTexts] = useState(translations[language]);

    function handleLanguage(e) {
        console.log(e)
        if(e.target.textContent === 'EN') {
            setLanguage('en');
            setTexts(translations.en);
        } else {
            setLanguage('es');
            setTexts(translations.es);
        }
    }

    const data = {texts, handleLanguage};

    return (
        <LanguageContext.Provider value={data}>
            {children}
        </LanguageContext.Provider>
    )
}