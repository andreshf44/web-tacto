// src/pages/Home.js
import React from "react";
import "./Home.css"; // Importar CSS
import About from "./About";
import Contact from "./Contact";
import Gallery from "./Gallery";
import Team from "./Team";
import News from "./News";
import Subscription from "./Subscription";

function Home() {
  return (
    <div>
        {/* Sección de bienvenida */}
        <header className="home-header">
            <div className="home-header-content">
                <h1>Bienvenidos a la Compañía de Danza</h1>
                <p>Descubre nuestra pasión por el arte y la expresión corporal</p>
                <button className="subscribe-btn">Suscribirse</button>
            </div>
        </header>

        {/* Misión y Visión */}
      <section className="home-section" id="about">
        <h2>¿Quienes somos?</h2>
        <About />
      </section>

      {/* Galería */}
      <section className="home-section-alt" id="gallery">
        <h2>Galería</h2>
        <Gallery />
      </section>

      {/* Equipo */}
      <section className="home-section" id="team">
        <h2>Conoce a nuestro equipo</h2>
        <Team />
      </section>

      {/* Noticias */}
      <section className="home-section-alt" id="news">
        <h2>Noticias y Eventos</h2>
        <News />
      </section>

      {/* Suscripción */}
      <section className="home-section" id="subscription">
        <h2>Suscríbete y apoya la danza</h2>
        <Subscription />
      </section>

      {/* Contacto */}
      <section className="home-section" id="contacto">
        <Contact />
      </section>
    </div>
  );
}

export default Home;
