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
  const [showIntroVideo, setShowIntroVideo] = useState(false);

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
  
  useEffect(() => {
    const hasSeenVideo = sessionStorage.getItem("introVideoSeen");
  
    if (!hasSeenVideo) {
      setShowIntroVideo(true);
      sessionStorage.setItem("introVideoSeen", "true");
    }
  }, []);
  
  return (
    <div>
        {showIntroVideo && (
          <div className="intro-video-overlay">
            <div className="intro-video-container">
      
              <button className="close-video" onClick={() => setShowIntroVideo(false)}>
                ✕
              </button>

              <video
                src="/videos/intro.mp4"
                autoPlay
                muted
                playsInline
                onEnded={() => setShowIntroVideo(false)}
              />
            </div>
          </div>
        )}
        {/* Sección de bienvenida */}
        <header className={`home-header ${hideHeader ? "no-visible" : ""}`}>
            <div className="home-header-content">
                <h1>Bienvenidos a Tacto Sur</h1>
                <p>Somos una plataforma cultural independiente y compañía de artes escénicas contemporáneas con base
                   en Río Bueno y La Unión, en la Región de Los Ríos. Desde el sur de Chile, desarrollamos danza 
                   contemporánea, performance, música, diseño gráfico y audiovisual desde una mirada territorial, 
                   colaborativa y descentralizada. <br/><br/>
                   Trabajamos para fortalecer la cultura independiente, impulsando la creación, difusión, circulación 
                   y formación artística, generando audiencias y acompañando a artistas independientes en su proyección 
                   regional, nacional e internacional.<br/><br/>
                   Al unirte a Amigxs de Tacto, te conviertes en parte activa de este proceso. Tu suscripción 
                   permite sostener y proyectar las artes escénicas contemporáneas desde el territorio, apoyando una 
                   gestión cultural autónoma y comprometida con la Región de Los Ríos.
                </p>
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


