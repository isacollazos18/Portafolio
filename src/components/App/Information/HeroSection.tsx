import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./styles.scss";
import { useLanguage } from "../../../context/LenguageContext";

const HeroSection = () => {
  const { texts } = useLanguage();

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
          {texts.heroTitlePart1} <br />
          <strong>{texts.heroTitlePart2}</strong>
        </h1>
        <p className="hero-description" data-aos="fade-up" data-aos-delay="200">
          {texts.heroDescription}
        </p>
        <a
          href="#contacto"
          className="cta-button"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          {texts.heroButton}
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
