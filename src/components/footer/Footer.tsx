import { 
    Facebook, 
    Twitter, 
    Linkedin, 
    Instagram,
    MapPin,
    Phone,
    Mail,
    Clock,
    ChevronRight
  } from "lucide-react";
  import "./styles.scss";
  
  const Footer = () => {
    return (
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-about">
              <div className="footer-logo">INFRATECH</div>
              <p className="footer-description">
                Soluciones tecnológicas de vanguardia para impulsar el éxito de tu empresa.
              </p>
              <div className="footer-social">
                <a href="#" className="social-link">
                  <Facebook size={20} />
                </a>
                <a href="#" className="social-link">
                  <Twitter size={20} />
                </a>
                <a href="#" className="social-link">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="social-link">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
            
            <div className="footer-links">
              <h3 className="footer-title">Servicios</h3>
              <ul className="links-list">
                <li className="link-item">
                  <a href="#" className="link">
                    <ChevronRight className="link-icon" size={16} />
                    <span>Infraestructura Cloud</span>
                  </a>
                </li>
                <li className="link-item">
                  <a href="#" className="link">
                    <ChevronRight className="link-icon" size={16} />
                    <span>Ciberseguridad Empresarial</span>
                  </a>
                </li>
                <li className="link-item">
                  <a href="#" className="link">
                    <ChevronRight className="link-icon" size={16} />
                    <span>Data Centers</span>
                  </a>
                </li>
                <li className="link-item">
                  <a href="#" className="link">
                    <ChevronRight className="link-icon" size={16} />
                    <span>Desarrollo de Software</span>
                  </a>
                </li>
                <li className="link-item">
                  <a href="#" className="link">
                    <ChevronRight className="link-icon" size={16} />
                    <span>Consultoría IT</span>
                  </a>
                </li>
                <li className="link-item">
                  <a href="#" className="link">
                    <ChevronRight className="link-icon" size={16} />
                    <span>Experiencia de Usuario</span>
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="footer-links">
              <h3 className="footer-title">Enlaces</h3>
              <ul className="links-list">
                <li className="link-item">
                  <a href="#about" className="link">
                    <ChevronRight className="link-icon" size={16} />
                    <span>Acerca de nosotros</span>
                  </a>
                </li>
                <li className="link-item">
                  <a href="#projects" className="link">
                    <ChevronRight className="link-icon" size={16} />
                    <span>Proyectos</span>
                  </a>
                </li>
                <li className="link-item">
                  <a href="#technologies" className="link">
                    <ChevronRight className="link-icon" size={16} />
                    <span>Tecnologías</span>
                  </a>
                </li>
                <li className="link-item">
                  <a href="#" className="link">
                    <ChevronRight className="link-icon" size={16} />
                    <span>Blog</span>
                  </a>
                </li>
                <li className="link-item">
                  <a href="#contact" className="link">
                    <ChevronRight className="link-icon" size={16} />
                    <span>Contacto</span>
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="footer-contact">
              <h3 className="footer-title">Contáctanos</h3>
              <div className="contact-info">
                <div className="contact-item">
                  <Phone className="contact-icon" size={18} />
                  <span className="contact-text">+57 (313) 780 6860</span>
                </div>
                <div className="contact-item">
                  <Mail className="contact-icon" size={18} />
                  <span className="contact-text">info@infratech.com</span>
                </div>
                <div className="contact-item">
                  <Clock className="contact-icon" size={18} />
                  <span className="contact-text">Lun-Vie: 9:00 - 18:00</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div className="copyright">
              &copy; {new Date().getFullYear()} Infratech. Todos los derechos reservados.
              <div className="footer-links">
                <a href="#">Términos de servicio</a> | 
                <a href="#">Política de privacidad</a> | 
                <a href="#">Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  