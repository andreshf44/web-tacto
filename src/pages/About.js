// src/pages/About.js

import React from "react";

export default function About() {
  const ejes = [
    {
      number: "01",
      title: "Creación de audiencias",
      description:
        "Desarrollamos acciones sostenidas de mediación y programación para formar públicos en artes escénicas en el sur de Chile, trabajando en espacios convencionales y no convencionales junto a comunidades locales.",
    },
    {
      number: "02",
      title: "Difusión y circulación",
      description:
        "Impulsamos obras y repertorios propios y asociados mediante itinerancias regionales, nacionales e internacionales, fortaleciendo la descentralización y la proyección de artistas independientes.",
    },
    {
      number: "03",
      title: "Formación",
      description:
        "Diseñamos seminarios, residencias y programas de formación para niñas, niños, jóvenes y personas adultas, promoviendo procesos de educación artística y creación interdisciplinaria.",
    },
  ];

  return (
    <main className="about-page">
      {/* MANIFIESTO */}
      <section className="about-manifesto">
        <div className="about-manifesto__label">
          <span>01</span>
          <p>PLATAFORMA</p>
        </div>

        <div className="about-manifesto__content">
          <p className="about-eyebrow">¿Quiénes somos?</p>

          <h1>
            No observamos
            <br />
            el territorio.
            <br />
            <span>Creamos desde él.</span>
          </h1>

          <div className="about-manifesto__body">
            <p>
              Somos un equipo multidisciplinario de artistas, gestores y
              productores independientes con base en Río Bueno y La Unión,
              Región de Los Ríos.
            </p>

            <p>
              Trabajamos desde las artes escénicas contemporáneas como un
              espacio de investigación, creación y producción artística desde
              una perspectiva territorial, colaborativa y descentralizada.
            </p>
          </div>

          <a
            href="/quienes-somos.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="about-pdf"
          >
            Leer presentación completa ↗
          </a>
        </div>

        <div className="about-manifesto__keywords">
          <span>CUERPO</span>
          <span>TERRITORIO</span>
          <span>COLABORACIÓN</span>
        </div>
      </section>

      {/* QUÉ HACEMOS */}
      <section className="about-work">
        <div className="about-work__header">
          <div>
            <p className="about-eyebrow">Nuestra práctica</p>

            <h2>
              ¿Qué
              <br />
              <span>hacemos?</span>
            </h2>
          </div>

          <p className="about-work__intro">
            Somos una plataforma cultural independiente dedicada al desarrollo,
            circulación y fortalecimiento de las artes escénicas
            contemporáneas en la Región de Los Ríos.
          </p>
        </div>

        <div className="about-work__grid">
          {ejes.map((eje) => (
            <article className="about-work__item" key={eje.number}>
              <span className="about-work__number">{eje.number}</span>

              <h3>{eje.title}</h3>

              <p>{eje.description}</p>

              <span className="about-work__line" />
            </article>
          ))}
        </div>
      </section>

      {/* PROYECCIÓN */}
      <section className="about-future">
        <div className="about-future__visual">
          <span className="about-future__word">SUR</span>
        </div>

        <div className="about-future__content">
          <p className="about-eyebrow">Proyección</p>

          <h2>
            Desde el sur,
            <br />
            <span>sin fronteras.</span>
          </h2>

          <p>
            Aspiramos a consolidarnos como una plataforma cultural independiente
            referente en el desarrollo de las artes escénicas contemporáneas en
            la Región de Los Ríos, contribuyendo a la descentralización,
            profesionalización y sostenibilidad del sector cultural.
          </p>

          <p>
            Nuestras obras han circulado por Chile y países como Colombia,
            Ecuador y Estados Unidos. Proyectamos nuestro trabajo hacia nuevas
            redes, alianzas y territorios, manteniendo siempre el sur como punto
            de origen.
          </p>
        </div>
      </section>
    </main>
  );
}