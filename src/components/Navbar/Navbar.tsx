import React, { useState } from "react";
import './styles.scss';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <img src="" alt="Logo" />
            </div>

            <div className={`navbar__links ${isOpen ? "navbar__links--open" : ""}`}>
                <a href="#about">Nosotros</a>
                <a href="#services">Servicios</a>
                <a href="#projects">Proyectos</a>
                <a href="#tecnologies">Tecnologías</a>
                <a href="#contact">Contáctanos</a>
            </div>

            <button className="navbar__toggle" onClick={toggleMenu}>
                {isOpen ? "Cerrar" : "Menú"}
            </button>
        </nav>
    );
};

export default Navbar;