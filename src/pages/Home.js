// src/pages/Home.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css"; // Importar CSS
import About from "./About";
import Contact from "./Contact";
import Gallery from "./Gallery";
import Team from "./Team";
import News from "./News";
import Subscription from "./Subscription";

function Home() {
  const navigate = useNavigate();
  const [hideHeader, setHideHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Si el scroll es mayor a 10 px, escondemos header
      if (window.scrollY > 10) {
        setHideHeader(true);
      } else {
        setHideHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <div>
        {/* Sección de bienvenida */}
        <header className={`home-header ${hideHeader ? "no-visible" : ""}`}>
            <div className="home-header-content">
                <h1>Bienvenidos a Tacto Sur</h1>
                <p>Descubre nuestra pasión por el arte y la expresión corporal</p>
                <button
                  className="subscribe-btn"
                  onClick={() => navigate("/subscription")}
                >
                  Suscribirse
                </button>
            </div>
        </header>

        {/* Misión y Visión */}
      <section className="home-section" id="about">
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
        <News />
      </section>

      {/* Suscripción */}
      <section className="home-section" id="subscription">
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
