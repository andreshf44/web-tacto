// src/pages/About.js
import React from "react";

export default function About() {
  return (
    <div className="about-page">

      {/* Hero / Intro */}
      <section className="about-hero">
      <h2>¿Quienes somos?</h2>
        <p>
          <span>Tacto Sur</span> es un equipo multidisciplinario de artistas, gestores y productores independientes basado en 
          Río Bueno y La Unión, Región de los Ríos, enfocados en las artes escénicas contemporáneas como 
          eje central de investigación y producción artística. Compuesto por músicos, bailarines, 
          coreógrafos, artistas visuales, y artistas de iluminación, tecnología, vestuario, diseño 
          escénico y diseño gráfico. Nuestro equipo de trabajo cuenta con una amplia trayectoria artística 
          y ha logrado levantar en la Región de Los Rios proyectos como: Compañía profesional de danza 
          contemporánea Tacto Sur, Agrupación Cultural Aylin Kürrüf, y Jardines Humanos Academia de Música.
        </p>
      </section>

      {/* Misión y Visión */}
      <section className="about-content">
        <div className="about-block">
          <h2>Misión</h2>
          <p>
          Creación de audiencias
          Ofrecer cartelera permanente regional en: danza, video danza, performance, música, artes visuales, exposiciones interactivas, residencias de composición, en diferentes espacios convencionales y no convencionales, adaptándonos a diferentes espacios y públicos.
          </p>
          <p>
            Difusión y circulación de obras
            Itinerancias regionales, nacionales e internacionales del repertorio actual y futuras creaciones del equipo. Para 2026 tenemos giras en gestión a Ecuador y México.
          </p>
          <p>
            Formación
            Seminarios, residencias, programas de formación para todas las edades. Estamos abiertos a formar alianzas con instituciones u organizaciones que busquen implementar programas de educación artística.
          </p>
        </div>

        <div className="about-block">
          <h2>Visión</h2>
          <p>
            Descentralización, desarrollo y promoción de la industria cultural de la Región de Los Ríos. 
            Ofrecemos una cartelera de alta calidad de artes escénicas, conciertos en pequeño y gran formato,
            varietés multidisciplinarias locales, lanzamientos de propuestas audiovisuales y propuestas 
            estéticas en espacios no convencionales. Nuestras obras han sido exhibidas en La Unión, Río Bueno, 
            Frutillar y Valparaíso, y en el extranjero en Colombia, Ecuador y Estados Unidos.
            En nuestra casa, la Región de los Ríos, hemos logrado convocar una nueva audiencia local para las 
            artes escénicas. Hoy en día, tenemos el privilegio de contar con un público y queremos seguir 
            expandiendonos, compartiendo y difundiendo arte de calidad, principalmente en el territorio regional.
          </p>
        </div>
      </section>
    </div>
  );
}
