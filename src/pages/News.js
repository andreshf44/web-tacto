// src/components/News.js
import React, { useState, useEffect } from "react";
import event1 from "../assets/event1.jpg";
import event2 from "../assets/event2.jpg";
import event3 from "../assets/event3.jpg";
import news1 from "../assets/news1.jpg";
import news2 from "../assets/news2.jpg";
import news3 from "../assets/news3.jpg";

const eventsItems = [
  {
    title: "Estreno de la obra 'Luz y Sombra'",
    date: "15 de Octubre 2025",
    img: event1,
    description: "Nuestra compañía presenta una nueva producción que combina danza contemporánea y música en vivo. ¡No te la pierdas!",
  },
  {
    title: "Taller de danza para jóvenes",
    date: "5 de Noviembre 2025",
    img: event2,
    description: "Invitamos a jóvenes de 12 a 18 años a participar en nuestro taller intensivo de danza moderna.",
  },
  {
    title: "Concierto benéfico en el Teatro Central",
    date: "20 de Noviembre 2025",
    img: event3,
    description: "Evento especial para recaudar fondos destinados a nuestro programa de becas para bailarines talentosos.",
  },
];

const newsItems = [
  {
    title: "Noticia 1: Gala de fin de año",
    img: news1,
    short: "Resumen de la gala anual con presentaciones de todos nuestros bailarines.",
    full: "Texto completo de la noticia 1, con todos los detalles de la gala, horarios, invitados especiales y fotos.",
  },
  {
    title: "Noticia 2: Participación internacional",
    img: news2,
    short: "Nuestra compañía participó en un festival de danza en Europa.",
    full: "Texto completo de la noticia 2, detallando la experiencia internacional, coreografías presentadas y feedback recibido.",
  },
  {
    title: "Noticia 3: Nuevas becas abiertas",
    img: news3,
    short: "Se abren inscripciones para becas a jóvenes talentos.",
    full: "Texto completo de la noticia 3 con requisitos, fechas de inscripción y contacto para postular.",
  },
];

function News() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedNews, setSelectedNews] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Cambio automático cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % newsItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="news-events-container">
      {/* Slider Noticias */}
      <h2>Noticias</h2>
      <div className="news-slider">
        <div className="news-slide">
          <img src={newsItems[currentSlide].img} alt={newsItems[currentSlide].title} />
          <div className="info-section">
          <div className="news-slide-content">
            <h3>{newsItems[currentSlide].title}</h3>
            <p>{newsItems[currentSlide].short}</p>
            <button onClick={() => setSelectedNews(newsItems[currentSlide])}>Ver más</button>
          </div>
           {/* Dots */}
          <div className="news-dots">
            {newsItems.map((_, index) => (
              <span
              key={index}
              className={`dot ${currentSlide === index ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
              ></span>
            ))}
          </div>
          </div>
        </div>

      </div>

      {/* Modal Noticias */}
      {selectedNews && (
        <div className="news-modal" onClick={() => setSelectedNews(null)}>
          <div className="news-modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedNews.img} alt={selectedNews.title} />
            <div className="news-details">
              <h3>{selectedNews.title}</h3>
              <p>{selectedNews.full}</p>
            </div>
          </div>
        </div>
      )}

      {/* Sección Eventos */}
      <h2>Eventos</h2>
      <div className="events-grid">
        {eventsItems.map((item, index) => (
          <div className="events-card" key={index} onClick={() => setSelectedEvent(item)}>
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.date}</p>
          </div>
        ))}
      </div>

      {/* Modal Eventos */}
      {selectedEvent && (
        <div className="events-modal" onClick={() => setSelectedEvent(null)}>
          <div className="events-modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedEvent.img} alt={selectedEvent.title} />
            <div className="events-details">
              <h3>{selectedEvent.title}</h3>
              <p><strong>{selectedEvent.date}</strong></p>
              <p>{selectedEvent.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default News;
