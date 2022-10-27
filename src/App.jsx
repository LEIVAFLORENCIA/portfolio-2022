import About from './components/about/About';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import LanguageProvider from './context/LanguageContext';

function App() {
  return (
    <div>
      <LanguageProvider>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Contact />
        <Footer />
      </LanguageProvider>
    </div>
  );
}

export default App;
