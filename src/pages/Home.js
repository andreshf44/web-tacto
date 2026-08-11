// src/pages/Home.js

import React from "react";
import "./Home.css";
import About from "./About";
import Contact from "./Contact";
import Gallery from "./Gallery";
import Team from "./Team";
import Subscription from "./Subscription";

function Home() {

  const scrollToSection = (sectionId) => {
    document
      .getElementById(sectionId)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      {/* HERO CON VIDEO */}
      <header className="hero" id="inicio">
        <video
          className="hero__video"
          src="/videos/intro.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />

        <div className="hero__overlay" />
        <div className="hero__gradient" />

        <span className="hero__vertical-word" aria-hidden="true">
          SUR
        </span>

        <div className="hero__content">
          <p className="hero__eyebrow">
            Plataforma de artes escénicas contemporáneas
          </p>

          <h1 className="hero__title">
            Artes escénicas
            <span>desde el territorio.</span>
          </h1>

          <p className="hero__description">
            Creación, cuerpo y experimentación contemporánea desde la Región de
            Los Ríos, Chile.
          </p>

          <div className="hero__actions">
            <button
              type="button"
              className="hero__button hero__button--primary"
              onClick={() => scrollToSection("gallery")}
            >
              Explorar nuestro trabajo
            </button>

            <button
              type="button"
              className="hero__button hero__button--secondary"
              onClick={() => scrollToSection("about")}
            >
              Conocer la plataforma
            </button>
          </div>
        </div>

        <button
          type="button"
          className="hero__scroll"
          onClick={() => scrollToSection("about")}
          aria-label="Ir a la siguiente sección"
        >
          <span>Desliza</span>
          <span className="hero__scroll-line" />
        </button>
      </header>

      {/* SOBRE NOSOTROS */}
      <section className="home-section" id="about">
        <About />
      </section>

      {/* OBRAS */}
      <section className="home-section-alt" id="gallery">
        <Gallery />
      </section>

      {/* QUÉ HACEMOS */}
      <section className="home-section" id="platform">
        {/* Aquí después podemos crear la nueva sección Qué hacemos */}
      </section>

      {/* EQUIPO */}
      <section className="home-section" id="team">
        <Team />
      </section>

      {/* SUSCRIPCIÓN */}
      <section className="home-section" id="subscription">
        <Subscription />
      </section>

      {/* CONTACTO */}
      <section className="home-section" id="contacto">
        <Contact />
      </section>
    </main>
  );
}

export default Home;