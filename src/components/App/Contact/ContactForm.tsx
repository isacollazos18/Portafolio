import React, { useState } from "react";
import "./styles.scss";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    projectDetails: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Formulario enviado:", formData);

    setFormStatus("¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.");
    
    setFormData({
      name: "",
      email: "",
      service: "",
      projectDetails: "",
      message: "",
    });
  };

  return (
    <section className="contact-form-section">
      <h2 className="contact-form-title">Contáctanos</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Tu nombre"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Tu correo electrónico"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="service">Servicio de interés</label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="">Selecciona un servicio</option>
            <option value="desarrollo_web">Desarrollo Web</option>
            <option value="desarrollo_movil">Desarrollo Móvil</option>
            <option value="diseno_ux">Diseño UX/UI</option>
            <option value="consultoria">Consultoría de Software</option>
            <option value="mantenimiento">Mantenimiento y Soporte</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="projectDetails">Cuéntanos sobre tu proyecto</label>
          <textarea
            id="projectDetails"
            name="projectDetails"
            value={formData.projectDetails}
            onChange={handleChange}
            placeholder="Describe brevemente tu proyecto"
            rows={5}
            required
          ></textarea>
        </div>
        <button type="submit" className="button">Enviar</button>
      </form>
      {formStatus && <p className="form-status">{formStatus}</p>}
    </section>
  );
};

export default ContactForm;