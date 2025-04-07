import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Phone,
  Mail,
  Clock,
  ChevronRight,
} from "lucide-react";
import "./styles.scss";
import { useLanguage } from "../../context/LenguageContext";
const Footer = () => {
  const { texts } = useLanguage();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-about">
            <div className="footer-logo">INFRATECH</div>
            <p className="footer-description">{texts.footerDescription}</p>
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
            <h3 className="footer-title">{texts.footerServices}</h3>
            <ul className="links-list">
              <li className="link-item">
                <a href="#" className="link">
                  <ChevronRight className="link-icon" size={16} />
                  <span>{texts.footerService1}</span>
                </a>
              </li>
              <li className="link-item">
                <a href="#" className="link">
                  <ChevronRight className="link-icon" size={16} />
                  <span>{texts.footerService2}</span>
                </a>
              </li>
              <li className="link-item">
                <a href="#" className="link">
                  <ChevronRight className="link-icon" size={16} />
                  <span>{texts.footerService3}</span>
                </a>
              </li>
              <li className="link-item">
                <a href="#" className="link">
                  <ChevronRight className="link-icon" size={16} />
                  <span>{texts.footerService4}</span>
                </a>
              </li>
              <li className="link-item">
                <a href="#" className="link">
                  <ChevronRight className="link-icon" size={16} />
                  <span>{texts.footerService5}</span>
                </a>
              </li>
              <li className="link-item">
                <a href="#" className="link">
                  <ChevronRight className="link-icon" size={16} />
                  <span>{texts.footerService6}</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-links">
            <h3 className="footer-title">{texts.footerLinks}</h3>
            <ul className="links-list">
              <li className="link-item">
                <a href="#about" className="link">
                  <ChevronRight className="link-icon" size={16} />
                  <span>{texts.navAbout}</span>
                </a>
              </li>
              <li className="link-item">
                <a href="#projects" className="link">
                  <ChevronRight className="link-icon" size={16} />
                  <span>{texts.navProjects}</span>
                </a>
              </li>
              <li className="link-item">
                <a href="#technologies" className="link">
                  <ChevronRight className="link-icon" size={16} />
                  <span>{texts.navTechnologies}</span>
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
                  <span>{texts.navContact}</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3 className="footer-title">{texts.contactTitle}</h3>
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
                <span className="contact-text">{texts.footerHours}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">
            &copy; {new Date().getFullYear()} Infratech. {texts.footerRights}
            <div className="footer-links">
              <a href="#">{texts.footerTerms}</a> |{" "}
              <a href="#">{texts.footerPrivacy}</a> |{" "}
              <a href="#">{texts.footerCookies}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
