import { ArrowRight, Code, Monitor, Smartphone, Database, Palette, Compass } from "lucide-react"; 
import "./styles.scss";
import { useLanguage } from "../../../context/LenguageContext";

const Services = () => {
  const { texts } = useLanguage();

  const services = [
    {
      id: 1,
      title: texts.serviceOption1,
      image: "https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      icon: <Code size={24} />,
      colorClass: "orange"
    },
    {
      id: 2,
      title: texts.serviceOption3,
      image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      icon: <Palette size={24} />,
      colorClass: "purple"
    },
    {
      id: 3,
      title: texts.serviceOption4,
      image: "https://images.unsplash.com/photo-1573495627361-d9b87960b12d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      icon: <Database size={24} />,
      colorClass: "royal-blue"
    },
    {
      id: 4,
      title: texts.serviceOption2,
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      icon: <Smartphone size={24} />,
      colorClass: "orange"
    },
    {
      id: 5,
      title: "UX/UI Consulting",
      image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      icon: <Compass size={24} />,
      colorClass: "purple"
    },
    {
      id: 6,
      title: texts.serviceOption5,
      image: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      icon: <Monitor size={24} />,
      colorClass: "royal-blue"
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{texts.navServices}</h2>
          <div className="divider"></div>
          <p className="section-description">
            {texts.aboutDescription}
          </p>
        </div>
        
        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <div className="service-image">
                <img 
                  src={service.image} 
                  alt={service.title} 
                />
              </div>
              <div className="service-content">
                <div className="service-header">
                  <div className={`service-icon ${service.colorClass}`}>
                    {service.icon}
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
