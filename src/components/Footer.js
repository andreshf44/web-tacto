// src/components/Footer.js

import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <span className="footer__eyebrow">
            Plataforma Cultural Independiente
          </span>

          <h2>
            TACTO
            <br />
            <span>SUR</span>
          </h2>

          <p>
            Artes escénicas contemporáneas, creación interdisciplinaria,
            formación y circulación desde la Región de Los Ríos.
          </p>
        </div>

        <div className="footer__column">
          <span>Navegación</span>

          <a href="#about">Plataforma</a>
          <a href="#gallery">Obras</a>
          <a href="#team">Equipo</a>
          <a href="#subscription">Amigxs</a>
          <a href="#contacto">Contacto</a>
        </div>

        <div className="footer__column">
          <span>Contacto</span>

          <a href="mailto:tactosur@gmail.com">
            tactosur@gmail.com
          </a>

          <a
            href="https://wa.me/56956172155"
            target="_blank"
            rel="noopener noreferrer"
          >
            +56 9 5617 2155
          </a>

          <p>
            Río Bueno · La Unión
            <br />
            Región de Los Ríos · Chile
          </p>
        </div>

        <div className="footer__column">
          <span>Redes</span>

          <a
            href="https://www.instagram.com/companiatacto/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>

          <a
            href="https://www.youtube.com/@tactosur"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <p>
          © {new Date().getFullYear()} Plataforma Tacto Sur.
          Todos los derechos reservados.
        </p>

        <p className="footer__credit">
          Diseño y desarrollo web por{" "}
          <a
            href="https://andresenrique.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Andrés Herrera ↗
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;