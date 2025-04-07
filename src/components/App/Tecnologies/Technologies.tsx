import React from "react";
import {
  SiAmazonwebservices,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiJavascript,
  SiTypescript,
  SiDocker,
  SiPython,
  SiFigma
} from "react-icons/si";
import './styles.scss';
import { useLanguage } from "../../../context/LenguageContext"; // <- corregido

interface Technology {
  id: number;
  name: string;
  icon: React.ElementType;
}

const technologies: Technology[] = [
  { id: 1, name: "AWS", icon: SiAmazonwebservices },
  { id: 2, name: "React", icon: SiReact },
  { id: 3, name: "Next.js", icon: SiNextdotjs },
  { id: 4, name: "Node.js", icon: SiNodedotjs },
  { id: 5, name: "JavaScript", icon: SiJavascript },
  { id: 6, name: "TypeScript", icon: SiTypescript },
  { id: 7, name: "Docker", icon: SiDocker },
  { id: 8, name: "Python", icon: SiPython },
  { id: 9, name: "Figma", icon: SiFigma } // <- Añadido
];

const Technologies = () => {
  const { texts } = useLanguage();

  return (
    <section id="technologies" className="technologies-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{texts.technologiesTitle}</h2>
          <div className="divider"></div>
          <p className="section-description">{texts.technologiesDescription}</p>
        </div>

        <div className="technologies-slider">
          <div className="slider-track">
            {technologies.map((tech, index) => {
              const colorClass =
                index % 3 === 0
                  ? "orange"
                  : index % 3 === 1
                  ? "purple"
                  : "royal-blue";

              return (
                <div key={tech.id} className="tech-item">
                  <div className="tech-icon">
                    <tech.icon className={`icon ${colorClass}`} />
                  </div>
                  <h3 className="tech-name">{tech.name}</h3>
                </div>
              );
            })}
            {technologies.map((tech, index) => {
              const colorClass =
                index % 3 === 0
                  ? "orange"
                  : index % 3 === 1
                  ? "purple"
                  : "royal-blue";

              return (
                <div key={`duplicate-${tech.id}`} className="tech-item">
                  <div className="tech-icon">
                    <tech.icon className={`icon ${colorClass}`} />
                  </div>
                  <h3 className="tech-name">{tech.name}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
