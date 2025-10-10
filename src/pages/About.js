// src/pages/About.js
import React from "react";

export default function About() {
  return (
    <div className="about-page">
      {/* Descripción de la compañía */}
      <section className="about-section">
        <h1>Sobre Nuestra Compañía</h1>
        <p>
          Somos una compañía de danza contemporánea dedicada a inspirar, educar
          y promover la creatividad artística en la comunidad.
        </p>
      </section>

      {/* Misión y Visión */}
      <section className="about-section" id="mission-vision">
        <h2>Misión</h2>
        <p>
          Inspirar y educar a través de la danza, promoviendo creatividad y
          disciplina artística.
        </p>

        <h2>Visión</h2>
        <p>
          Ser un referente cultural en la danza contemporánea, fomentando la
          participación y el talento local.
        </p>
      </section>
    </div>
  );
}
