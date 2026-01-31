// src/pages/Team.js

import React, { useState } from "react";
import director from "../assets/director.jpg";
import productora from "../assets/productora.jpg";
import bailarin1 from "../assets/bailarin1.jpg";
import bailarina1 from "../assets/bailarina1.jpg";
import bailarin2 from "../assets/bailarin2.jpg";
import bailarina2 from "../assets/bailarina2.jpg";
import bailarina3 from "../assets/bailarina3.jpg";
import musica1 from "../assets/musica1.JPG";
import musico1 from "../assets/musico1.jpg";
import musico2 from "../assets/musico2.jpg";
import tecnico1 from "../assets/tecnico1.jpg";
import tecnico2 from "../assets/tecnico2.jpg";


const teamMembers = [
  { 
    name: "Paulo Uribe", 
    role: "Director Artístico", 
    img: director,
    bio: "Oriundo de La Unión, Región de los Ríos, artista escénico con más de 20 años de trayectoria en interpretación, dirección, composición y docencia en danza. Ha sido intérprete en danza moderna y contemporánea en compañías destacadas como el Ballet Nacional de Ecuador, Ballet de Cámara del Teatro Municipal de Santiago, entre otras 7 compañias y variados proyectos independientes. Gestor y director de certámenes y festivales de danza y artes escénicas nacionales e internacionales, sus propuestas y creaciones han sido  exhibidas en Chile, Ecuador, Perú, Colombia y los EE.UU. Actualmente es director, coreógrafo, terapeuta corporal y educador en movimiento somático.    "
  },
  { 
    name: "Rebecca Levi", 
    role: "Productora - Música", 
    img: productora,
    bio: "Música y poeta de Nueva York ahora enraizada en Chile. Licenciada en literatura italiana, recibió su maestría en poesía. Como música se formó en la tradición clásica occidental y después en la música folclórica de los diferentes países donde ha vivido. Compone música para obras multidisciplinarias y escribe canciones con una mirada panamericana. Vive en La Unión, Región de los Ríos." 
  },
  { 
    name: "Antonio Muñoz", 
    role: "Intérprete Bailarin", 
    img: bailarin1,
    bio: "Artista escénico apasionado por la comunicación. Actor titulado de la escuela de comunicación de DUOC UC, San Carlos de Apoquindo. Originario del Sur de Chile. Ha recibido formaciones con artistas de diferentes partes de Chile y el mundo, como en residencias con “Le Théâtre du Soleil” de Francia y la Academia PULSO de Valdivia." 
  },
  { 
    name: "María José Franco", 
    role: "Intérprete Bailarina", 
    img: bailarina1,
    bio: "Directora y coreógrafa, formada en la Escuela de Danza Espiral bajo la guía de Patricio Bunster y con estudios complementarios nacionales e internacionales. Desde 2009 reside en Valparaíso, donde ha desarrollado una sólida trayectoria en creación e investigación escénica. Sus obras se han presentado en Chile, Brasil, Inglaterra y Argentina. En 2017 fundó la Compañía de Danza Hilo Rojo, desde donde impulsa procesos de creación multidisciplinarios vinculados al territorio y la memoria corporal." 
  },
  { 
    name: "Miguel Saint-Lawrence", 
    role: "Intérprete Bailarin", 
    img: bailarin2,
    bio: "Bailarín e intérprete chileno titulado de la Escuela Moderna de Música y Danza con Mención en Coreografía, ha forjado su camino en el mundo de la danza a través de una trayectoria rica en experiencia y aprendizajes. Como intérprete ha sido invitado a diversas compañías chilenas y como coreógrafo ha presentado sus obras en diversos festivales nacionales. Actualmente dirige el Colectivo Ser Andante en Valdivia." 
  },
  { 
    name: "Olivia Cornejo", 
    role: "Intérprete Bailarina", 
    img: bailarina2,
    bio: "Artista escénica, psicóloga y docente de danza. Con 8 años de trayectoria en las artes escénicas a lo largo de Chile y en Argentina, Brasil, Colombia y EE.UU. Funda e integra el Colectivo Incorpórea, plataforma colaborativa de exploración y creación en danza contemporánea. Crea y coordina 'Cuerpo Territorio', espacio de formación integral, mediación artística y acompañamientos terapéuticos. Realiza los encuentros escénicos 'Portal Sur.' " 
  },
  { 
    name: "Teresa de Jesús Gallardo", 
    role: "Intérprete Bailarina", 
    img: bailarina3,
    bio: "Bailarina del sur de Chile, ha integrado diversos ballets folclóricos y ha participado en festivales internacionales y nacionales de danzas folclóricas, contemporáneas y performance. Actualmente es intérprete en danza, artista educadora y preparadora física formando parte de proyectos escénicos, comunitarios y educativos." 
  },
  { 
    name: "Constanza García", 
    role: "Música", 
    img: musica1,
    bio: "Flautista y multiinstrumentista licenciada en Interpretación Musical mención en Flauta traversa del Instituto de Música de la Pontificia Universidad Católica de Valparaíso. Desde 2009 ha estudiado flautas andinas y del mundo y percusiones afrolatinas. Ha participado en varios proyectos y ensambles musicales como la Orquesta Andina y Ensamble Fractura, realizando giras por América Latina y Europa." 
  },
  { 
    name: "Cristian Reinas", 
    role: "Músico", 
    img: musico1,
    bio: "Artista transdisciplinar. Desde 2009, ha trabajado en áreas como la creación, producción, dirección, diseño integral, interpretación, revisión textual y sonorización de obras de artes escénicas; creación de instalaciones visuales y sonoras; musicalización de piezas audiovisuales; y realización de talleres, seminarios y charlas. Ha exhibido su trabajo en destacados espacios culturales como el Teatro Biobío, la Sala Arrau, Nau Ivanow (Barcelona, España), entre otros." 
  },
  { 
    name: "René Bustos", 
    role: "Músico", 
    img: musico2,
    bio: "Artista educador, baterista y percusionista con más de 15 años, especializado en ritmos afrolatinos, jazz, fusión y música experimental. Licenciado en Educación, explora paisaje sonoro, texturas y atmósferas multidisciplinarias. Director de 'Residencia Artística Casona Bustos' desde 2022, ha realizado giras en el sur de Chile, México, Colombia, Argentina y República Dominicana." 
  },
  { 
    name: "Claudio Romero", 
    role: "Dirección Técnica e Iluminación", 
    img: tecnico1,
    bio: "Comenzó su exploración con la electrónica e iluminación desde pequeño. Estudió ingeniería electrónica y pedagogía en educación física; paralelamente siguió experimentando con el diseño y trabajo técnico en iluminación y diseño escénico. Ahora trabaja en diseño y montaje escénico, levantamiento y modelado 3D, y colaboración y asesoría de proyectos." 
  },
  { 
    name: "Iñaki Muñoz", 
    role: "Artes Visuales", 
    img: tecnico2,
    bio: "Artista visual y sonoro. 1980. Egresado de la escuela de diseño gráfico de U. ARCIS. Desarrolla e investiga los lenguajes de la pintura, el dibujo, collage, técnica mixta, video y sonido. Con una vasta trayectoria nacional e internacional, ha expuesto su obra en Italia, Noruega, EE.UU, Alemania, España, Portugal, Canadá, Costa Rica y Chile. Parte de su obra se encuentra en colecciones privadas y en el museo de Eugenio Granell en España." 
  },
];

function Team() {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <div className="team-container">
      {teamMembers.map((member, index) => (
        <div className="team-card" key={index} onClick={() => setSelectedMember(member)}>
          <img src={member.img} alt={member.name} />
          <h3>{member.name}</h3>
          <p>{member.role}</p>
        </div>
      ))}

      {/* Modal */}
      {selectedMember && (
        <div className="team-modal" onClick={() => setSelectedMember(null)}>
          <div className="team-modal-content" onClick={e => e.stopPropagation()}>
            <img src={selectedMember.img} alt={selectedMember.name} />
            <div className="team-bio">
              <h3>{selectedMember.name}</h3>
              <p><strong>{selectedMember.role}</strong></p>
              <p className="descripcion-team">{selectedMember.bio}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Team;

