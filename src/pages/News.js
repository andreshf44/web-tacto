// src/components/News.js
import React, { useState, useEffect } from "react";
import event1 from "../assets/albums/soñe_que_volaba/Sone_que_volaba-25.jpg";
import event2 from "../assets/albums/amatista/13.jpg";
import event3 from "../assets/albums/psique/5.JPEG";
import event4 from "../assets/albums/soñe_que_volaba/Sone_que_volaba-69.jpg";
import news1 from "../assets/news1.jpg";
import news2 from "../assets/news2.jpg";
import news3 from "../assets/news3.jpg";

const eventsItems = [
  {
    title: "ARREBATO DOMÉSTICO",
    date: "Viernes 10 Enero 2026",
    place: "Sede Junta de Vecinos Irene Daiber, La Unión.",
    img: event1,
    description: "Sede Junta de Vecinos Irene Daiber, La Unión.",
  },
  {
    title: "ARREBATO DOMÉSTICO",
    date: "Sábado 11 Enero 2026",
    place: "Club Deportivo Barrabases, Río Bueno.",
    img: event1,
    description: "Club Deportivo Barrabases, Río Bueno.",
  },
  {
    title: "AMATISTA",
    date: "Viernes 16 Enero 2026",
    place: "Auditorio Santiago Santana, Paillaco.",
    img: event2,
    description: "Auditorio Santiago Santana, Paillaco.",
  },
  {
    title: "CONCIERTO REBECCA LEVI & BANDA",
    date: "Viernes 22 Enero 2026",
    place: "Casa del Abuelo, Río Bueno.",
    img: event3,
    description: "Casa del Abuelo, Río Bueno.",
  },
  {
    title: "CONCIERTO REBECCA LEVI & BANDA",
    date: "Viernes 23 Enero 2026",
    place: "El Galpón, Frutillar.",
    img: event3,
    description: "El Galpón, Frutillar.",
  },
  {
    title: "CONCIERTO REBECCA LEVI & BANDA",
    date: "Sábado 24 Enero 2026",
    place: " Espacio En Construcción, Valdivia.",
    img: event3,
    description: " Espacio En Construcción, Valdivia.",
  },
  {
    title: "SOÑÉ QUE VOLABA",
    date: "Sábado 21 & Domingo 22 Febrero 2026",
    place: "El Galpón, Frutillar.",
    img: event4,
    description: "El Galpón, Frutillar.",
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
  //const [selectedNews, setSelectedNews] = useState(null);
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
      {/* Slider Noticias 
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
          */}
           {/* Dots 
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
      */}
      {/* Modal Noticias 
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
      )}*/}

      {/* Sección Eventos */}
      <h2>Eventos</h2>
      <div className="events-grid">
        {eventsItems.map((item, index) => (
          <div className="events-card" key={index} onClick={() => setSelectedEvent(item)}>
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.date}</p>
            <p>{item.place}</p>
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
