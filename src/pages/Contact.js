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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const companyPhone = "56 9 8599 1949"; // número de la compañía con código de país
    const text = `Hola, soy ${formData.name}.\nCorreo: ${formData.email}\nAsunto: ${formData.subject}\nMensaje: ${formData.message}`;

    // Codificar el mensaje para la URL
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${companyPhone}&text=${encodedText}`;

    // Abrir WhatsApp en nueva pestaña
    window.open(whatsappUrl, "_blank");

    // Limpiar formulario
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-info">
          <h1>Contáctanos</h1>
          <p>
            ¿Tienes preguntas o quieres más información sobre nuestras clases y
            presentaciones? Escríbenos y te responderemos a la brevedad.
          </p>
          <p><strong>Email:</strong> contacto@companiadanza.com</p>
          <p><strong>Teléfono:</strong> +56 9 1234 5678</p>
        </div>

        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Asunto"
              value={formData.subject}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Mensaje"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Enviar por WhatsApp</button>
          </form>
        </div>
      </div>
    </section>
  );
}
