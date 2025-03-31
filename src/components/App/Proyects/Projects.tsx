import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import "./styles.scss";

const projects = [
  {
    id: 1,
    title: "Migración a la nube para empresa financiera",
    description: "Implementamos una migración completa a la nube para una importante institución financiera, reduciendo sus costos operativos en un 40% y mejorando la seguridad de sus datos.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    tags: ["Cloud Computing", "Seguridad", "AWS"]
  },
  {
    id: 2,
    title: "Modernización del centro de datos para retail",
    description: "Rediseñamos completamente la infraestructura de centros de datos para una cadena de retail nacional, resultando en una mejora del 60% en el rendimiento de sus sistemas.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    tags: ["Data Center", "Virtualización", "VMware"]
  },
  {
    id: 3,
    title: "Seguridad integral para empresa de salud",
    description: "Desarrollamos una solución de seguridad completa para proteger los datos sensibles de pacientes en una red de hospitales, cumpliendo con todas las normativas del sector.",
    image: "https://images.unsplash.com/photo-1581092921461-39b079ce1984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    tags: ["Ciberseguridad", "Compliance", "Salud"]
  }
];

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [slideWidth, setSlideWidth] = useState(0);

  useEffect(() => {
    const updateSlideWidth = () => {
      if (containerRef.current) {
        const slide = containerRef.current.querySelector('.project-slide');
        if (slide) {
          setSlideWidth(slide.clientWidth);
        }
      }
    };

    updateSlideWidth();
    window.addEventListener('resize', updateSlideWidth);
    
    return () => window.removeEventListener('resize', updateSlideWidth);
  }, []);

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Proyectos Destacados</h2>
          <div className="divider"></div>
          <p className="section-description">
            Conoce algunos de nuestros casos de éxito y cómo hemos ayudado a empresas a transformar su infraestructura tecnológica.
          </p>
        </div>
        <div className="carousel-container" ref={containerRef}>
          <div className="carousel-overflow">
            <div 
              className="carousel-track" 
              style={{ transform: `translateX(-${currentSlide * slideWidth}px)` }}
            >
              {projects.map((project) => (
                <div 
                  key={project.id} 
                  className="project-slide"
                >
                  <div className="project-card">
                    <div className="project-content">
                      <div className="project-image">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                        />
                      </div>
                      <div className="project-info">
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-description">{project.description}</p>
                        <div className="project-tags">
                          {project.tags.map((tag, index) => (
                            <span key={index} className="tag">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="project-link">
                          <span>Ver caso completo</span>
                          <ArrowRight className="link-icon" size={16} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        
          <button 
            onClick={goToPrevSlide}
            className="carousel-control prev"
            aria-label="Previous project"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={goToNextSlide}
            className="carousel-control next"
            aria-label="Next project"
          >
            <ChevronRight size={24} />
          </button>
          
          <div className="carousel-indicators">
            {projects.map((_, index) => (
              <button 
                key={index}
                onClick={() => goToSlide(index)}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === currentSlide ? 'true' : 'false'}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;