// src/pages/About.js
import React from "react";

export default function About() {
  
  return (
    <div className="about-page">

      {/* Hero / Intro */}
      <section className="about-hero">
        <div className="about-hero-header">
          <h2>¿Quiénes somos?</h2>

          <a
            href="/quienes-somos.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="pdf-link"
          >
            Ver PDF
          </a>
        </div>
        <p>
        Somos un equipo multidisciplinario de artistas, gestores y productores independientes, con base en Río Bueno
        y La Unión, en la <span>Región de Los Ríos.</span> Nuestro trabajo se centra en el desarrollo de las <span>
        artes escénicas contemporáneas, </span>entendidas como eje principal de investigación, creación y producción
        artística desde una perspectiva territorial y colaborativa.
        Funcionamos como una <span>compañía artística multidisciplinaria,</span> integrada por músicos, bailarines, 
        coreógrafos, artistas visuales y profesionales de las áreas de iluminación, tecnología escénica, vestuario, 
        diseño escénico y diseño gráfico. Esta diversidad de disciplinas nos permite abordar proyectos de <span>
        contemporáneo regional arte </span>y otras expresiones escénicas con una mirada integral.
        Nuestro equipo cuenta con una amplia trayectoria artística y experiencia en <span>gestión cultural regional,</span> 
        lo que nos ha permitido desarrollar y consolidar en la <span>Región de Los Ríos</span> proyectos como la Compañía
        Profesional de Danza Contemporánea Tacto Sur, la Agrupación Cultural Aylin Kürrüf y Jardines Humanos Academia 
        de Música, contribuyendo al fortalecimiento de la <span>cultura independiente del sur de Chile.</span>
        </p>
      </section>

      {/* Misión y Visión */}
      <section className="about-content">
        <div className="about-block">
          <h2>¿Qué hacemos? (misión)</h2>
          <p>
          Somos una <span>plataforma cultural independiente</span> dedicada al desarrollo, circulación y fortalecimiento de las 
          <span>artes escénicas contemporáneas en la Región de Los Ríos,</span> con especial énfasis en la promoción de la 
          <span>cultura independiente del sur de Chile.</span> Nuestro trabajo se fundamenta en prácticas de 
          <span>gestión cultural independiente y local,</span> orientadas al acceso, la formación y la profesionalización del sector artístico.<br/><br/>

          Nuestras proyecciones de trabajo se estructuran en tres ejes estratégicos:<br/><br/>

          <span className="subtitle">1. Creación de audiencias</span><br/><br/>
          Desarrollamos acciones sostenidas de mediación y programación para la formación de públicos en <span>
          artes escénicas en el sur de Chile,</span> ofreciendo una cartelera permanente regional de danza, 
          video danza, performance, música, artes visuales, exposiciones interactivas y residencias de composición. 
          Estas actividades se realizan en espacios convencionales y no convencionales, fortaleciendo los <span>
          proyectos culturales en la Región de Los Ríos</span> y promoviendo la participación activa de comunidades 
          locales.<br/><br/>

          <span className="subtitle">2. Difusión y circulación de obras</span><br/><br/>
          Impulsamos la circulación de obras y repertorios propios y asociados, mediante itinerancias regionales, 
          nacionales e internacionales.<span>Como compañía de danza contemporánea en Los Ríos,</span> desarrollamos 
          <span>proyectos de artes escénicas en Río Bueno</span> y otras comunas del territorio, contribuyendo al 
          <span>apoyo a artistas independientes en Chile</span> y a la descentralización del acceso a las artes.<br/><br/>

          Actualmente, gestionamos giras internacionales para el año 2026 en Ecuador y México, como parte de una 
          estrategia de internacionalización y <span>financiamiento cultural independiente.</span><br/><br/>

          <span className="subtitle">3. Formación</span><br/><br/>
          Diseñamos e implementamos seminarios, residencias artísticas y programas de formación para niñas, niños, 
          jóvenes y personas adultas, enfocados en el desarrollo de las <span>artes interdisciplinarias contemporáneas
          a nivel regional.</span><br/><br/>  
          Nos encontramos abiertos a establecer alianzas con instituciones públicas, privadas y organizaciones 
          territoriales interesadas en desarrollar <span>proyectos culturales en la Región de Los Ríos</span> 
          y fortalecer procesos de educación artística.
          </p>
          
        </div>

        <div className="about-block vision">
          <h2>Proyección (Visión)</h2>
          <p>
          Aspiramos a consolidarnos como una <span>plataforma cultural independiente</span> y una <span>compañía de 
          artes escénicas integradas en Chile</span> referente en el desarrollo cultural <span>en la Región de Los Ríos,</span>
          contribuyendo activamente a la descentralización, profesionalización y sostenibilidad del sector cultural.<br/><br/>

          Nuestro proyecto promueve una programación de alta calidad que integra artes escénicas, conciertos en 
          pequeño y gran formato, varietés multidisciplinarias locales, lanzamientos audiovisuales y propuestas 
          estéticas en espacios no convencionales, fortaleciendo el ecosistema de las <span>artes escénicas en el sur de Chile.</span><br/><br/>
          
          Nuestras obras han sido presentadas en La Unión, Río Bueno, Frutillar y Valparaíso, así como en Colombia, 
          Ecuador y Estados Unidos. Desde nuestro territorio, hemos logrado consolidar una <span>comunidad cultural 
          con suscripción mensual,</span> generando vínculos estables con el público y avanzando hacia modelos 
          sostenibles de <span>financiamiento cultural independiente.</span><br/><br/>

          Proyectamos nuestro trabajo como un aporte permanente al desarrollo de la <span>cultura independiente del 
          sur de Chile,</span> ampliando el acceso, la circulación y la valoración de las artes escénicas 
          contemporáneas desde una perspectiva territorial y colaborativa.
          </p>
        </div>
      </section>
    </div>
  );
}
