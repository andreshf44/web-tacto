// src/pages/Team.js

import React, { useState } from "react";
import director from "../assets/director.jpg";
import bailarina1 from "../assets/bailarina1.jpg";
import bailarin2 from "../assets/bailarin2.jpg";
import productora from "../assets/productora.jpg";

const teamMembers = [
  { 
    name: "Juan Pérez", 
    role: "Director Artístico", 
    img: director,
    bio: "Juan Pérez ha dirigido la compañía por más de 15 años, inspirando a generaciones de bailarines."
  },
  { 
    name: "Ana Gómez", 
    role: "Bailarina Principal", 
    img: bailarina1,
    bio: "Ana es reconocida por su técnica impecable y expresividad en escena." 
  },
  { 
    name: "Luis Martínez", 
    role: "Bailarín", 
    img: bailarin2,
    bio: "Luis combina fuerza y gracia en sus presentaciones, destacando en danza contemporánea." 
  },
  { 
    name: "María López", 
    role: "Productora", 
    img: productora,
    bio: "María organiza los eventos y coordina toda la logística de la compañía." 
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
              <p>{selectedMember.bio}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Team;

