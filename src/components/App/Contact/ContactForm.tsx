import React, { useState } from "react";
import "./styles.scss";
import { useLanguage } from "../../../context/LenguageContext";

const ContactForm = () => {
  const { texts } = useLanguage();

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
    setFormStatus(texts.contactThanks);

    setFormData({
      name: "",
      email: "",
      service: "",
      projectDetails: "",
      message: "",
    });
  };

  return (
    <section className="contact-form-section" id="contact">
      <h2 className="contact-form-title">{texts.contactTitle}</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">{texts.contactName}</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={texts.contactNamePlaceholder}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">{texts.contactEmail}</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={texts.contactEmailPlaceholder}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="service">{texts.contactService}</label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="">{texts.contactServicePlaceholder}</option>
            <option value="desarrollo_web">{texts.serviceOption1}</option>
            <option value="desarrollo_movil">{texts.serviceOption2}</option>
            <option value="diseno_ux">{texts.serviceOption3}</option>
            <option value="consultoria">{texts.serviceOption4}</option>
            <option value="mantenimiento">{texts.serviceOption5}</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="projectDetails">{texts.contactProject}</label>
          <textarea
            id="projectDetails"
            name="projectDetails"
            value={formData.projectDetails}
            onChange={handleChange}
            placeholder={texts.contactProjectPlaceholder}
            rows={5}
            required
          ></textarea>
        </div>
        <button type="submit" className="button">{texts.contactButton}</button>
      </form>
      {formStatus && <p className="form-status">{formStatus}</p>}
    </section>
  );
};

export default ContactForm;
