// src/pages/Contact.js

import React, { useState } from "react";


export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const companyPhone = "56956172155";

    const text = `Hola Tacto Sur,

Soy ${formData.name}.

Correo: ${formData.email}
Asunto: ${formData.subject || "Consulta general"}

Mensaje:
${formData.message}`;

    const whatsappUrl = `https://wa.me/${companyPhone}?text=${encodeURIComponent(
      text
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="contact" id="contacto">
      <div className="contact__container">
        {/* INFORMACIÓN */}
        <div className="contact__info">
          <p className="contact__eyebrow">
            Contacto
          </p>

          <h2>
            Conversemos.
            <br />
            <span>Algo puede empezar acá.</span>
          </h2>

          <p className="contact__description">
            ¿Quieres programar una obra, proponer una colaboración,
            conversar sobre formación, prensa o desarrollar un proyecto
            junto a Tacto Sur? Escríbenos.
          </p>

          <div className="contact__links">
            <a href="mailto:tactosur@gmail.com">
              <span>Email</span>
              <strong>tactosur@gmail.com</strong>
            </a>

            <a
              href="https://wa.me/56956172155"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>WhatsApp</span>
              <strong>+56 9 5617 2155</strong>
            </a>

            <div className="contact__location">
              <span>Territorio</span>
              <strong>
                Río Bueno · La Unión
                <br />
                Región de Los Ríos · Chile
              </strong>
            </div>
          </div>

          <div
            className="contact__mark"
            aria-hidden="true"
          >
            SUR
          </div>
        </div>

        {/* FORMULARIO */}
        <div className="contact__form-wrapper">
          <form
            className="contact__form"
            onSubmit={handleSubmit}
          >
            <div className="contact__form-header">
              <span>Escríbenos</span>
              <span>01 — 04</span>
            </div>

            <div className="contact__field">
              <label htmlFor="contact-name">
                Nombre
              </label>

              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="Tu nombre"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact__field">
              <label htmlFor="contact-email">
                Correo
              </label>

              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="tu@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact__field">
              <label htmlFor="contact-subject">
                Asunto
              </label>

              <input
                id="contact-subject"
                type="text"
                name="subject"
                placeholder="Programación, colaboración, prensa..."
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            <div className="contact__field">
              <label htmlFor="contact-message">
                Mensaje
              </label>

              <textarea
                id="contact-message"
                name="message"
                placeholder="Cuéntanos un poco..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="contact__submit"
            >
              <span>Enviar por WhatsApp</span>
              <span>↗</span>
            </button>

            <p className="contact__helper">
              Tu mensaje se abrirá directamente en WhatsApp.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}