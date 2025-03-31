import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./styles.scss";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="hero-section">
      <div className="container">
        <h1 className="hero-title" data-aos="fade-up">
          <span>Innovación</span> y tecnología para tu <br />
          <strong>Negocio Digital</strong>
        </h1>
        <p className="hero-description" data-aos="fade-up" data-aos-delay="200">
          En Infratech, ofrecemos soluciones innovadoras en desarrollo de software, diseño UX/UI y publicidad digital, conectando marcas con su audiencia de manera efectiva.
        </p>
        <a href="#contacto" className="cta-button" data-aos="zoom-in" data-aos-delay="400">
          Conoce más aquí
        </a>
      </div>
    </section>
  );
};

export default HeroSection;