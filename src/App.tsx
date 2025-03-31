import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/App/AboutUs/About";
import Projects from "./components/App/Proyects/Projects";
import Footer from "./components/footer/Footer";
import Technologies from "./components/App/Tecnologies/Technologies";
import Services from "./components/App/OurService/Services";
import ContactForm from "./components/App/Contact/ContactForm";
import HeroSection from "./components/App/Information/HeroSection";
import { LanguageProvider, useLanguage } from "./context/LenguageContext";
import './styles/styles.scss'

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <MainApp />
    </LanguageProvider>
  );
};

const MainApp: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();  
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  useEffect(() => {
    document.body.classList.remove('es', 'en', 'light-mode', 'dark-mode');
    document.body.classList.add(language, isDarkMode ? 'dark-mode' : 'light-mode');
  }, [language, isDarkMode]);
  return (
    <LanguageProvider>
      <div>
        <Navbar />
        <HeroSection />
        <About />
        <Services />
        <Projects />
        <Technologies />
        <ContactForm />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;