import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import "./styles.scss";
import { useLanguage } from "../../../context/LenguageContext";

const Projects = () => {
  const { texts } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [slideWidth, setSlideWidth] = useState(0);

  const projects = [
    {
      id: 1,
      title: texts.project1Title,
      description: texts.project1Description,
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      tags: ["Cloud Computing", texts.tagSecurity, "AWS"]
    },
    {
      id: 2,
      title: texts.project2Title,
      description: texts.project2Description,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      tags: ["Data Center", texts.tagVirtualization, "VMware"]
    },
    {
      id: 3,
      title: texts.project3Title,
      description: texts.project3Description,
      image: "https://images.unsplash.com/photo-1581092921461-39b079ce1984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      tags: [texts.tagCybersecurity, "Compliance", texts.tagHealth]
    }
  ];

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
          <h2 className="section-title">{texts.projectsTitle}</h2>
          <div className="divider"></div>
          <p className="section-description">{texts.projectsDescription}</p>
        </div>
        <div className="carousel-container" ref={containerRef}>
          <div className="carousel-overflow">
            <div 
              className="carousel-track" 
              style={{ transform: `translateX(-${currentSlide * slideWidth}px)` }}
            >
              {projects.map((project) => (
                <div key={project.id} className="project-slide">
                  <div className="project-card">
                    <div className="project-content">
                      <div className="project-image">
                        <img src={project.image} alt={project.title} />
                      </div>
                      <div className="project-info">
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-description">{project.description}</p>
                        <div className="project-tags">
                          {project.tags.map((tag, index) => (
                            <span key={index} className="tag">{tag}</span>
                          ))}
                        </div>
                        <div className="project-link">
                          <span>{texts.projectViewMore}</span>
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
            aria-label={texts.projectsPrev}
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={goToNextSlide}
            className="carousel-control next"
            aria-label={texts.projectsNext}
          >
            <ChevronRight size={24} />
          </button>
          <div className="carousel-indicators">
            {projects.map((_, index) => (
              <button 
                key={index}
                onClick={() => goToSlide(index)}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                aria-label={`${texts.projectsGoToSlide} ${index + 1}`}
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
