import React from "react";
import "./styles.scss";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <h1 className="hero-title">
          <span className="highlight">Soluciones</span> digitales integrales: desarrollo <br />
          <strong>Web, Móvil y Tecnológico</strong>
        </h1>
        <p className="hero-description">
          Ofrecemos un enfoque holístico para satisfacer todas tus necesidades tecnológicas. Desde la creación de sitios web modernos y aplicaciones móviles intuitivas hasta la implementación de infraestructura robusta y servicios en la nube, nuestro equipo de expertos está aquí para llevar tu negocio al siguiente nivel.
        </p>
        <a href="#contacto" className="cta-button">
          Conoce más aquí
        </a>
      </div>
    </section>
  );
};

export default HeroSection;