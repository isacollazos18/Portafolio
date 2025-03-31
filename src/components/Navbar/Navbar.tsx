import React, { useState } from "react";
import { useLanguage } from "../../context/LenguageContext";
import "./styles.scss";

const Navbar = () => {
  const { language, toggleLanguage, texts } = useLanguage(); 
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle("dark-mode", !isDarkMode);
  };

  return (
    <nav className={`navbar ${isDarkMode ? "navbar--dark" : "navbar--light"}`}>
      <div className="navbar__logo">
        INFRATECH
      </div>

      <div className={`navbar__links ${isOpen ? "navbar__links--open" : ""}`}>
        <a href="#about">{texts.navAbout}</a>
        <a href="#services">{texts.navServices}</a>
        <a href="#projects">{texts.navProjects}</a>
        <a href="#tecnologies">{texts.navTechnologies}</a>
        <a href="#contact">{texts.navContact}</a>
      </div>

      <div className="navbar__actions">
        <button className="navbar__toggle" onClick={toggleMenu}>
          {isOpen ? (language === "es" ? "Cerrar" : "Close") : (language === "es" ? "Menú" : "Menu")}
        </button>
        <button className="navbar__language" onClick={toggleLanguage}>
          {language === "es" ? "EN" : "ES"}
        </button>
        <button className="navbar__dark-mode" onClick={toggleDarkMode}>
          {isDarkMode ? (language === "es" ? "Modo Claro" : "Light Mode") : (language === "es" ? "Modo Oscuro" : "Dark Mode")}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
