// src/pages/Gallery.js

import React, { useState } from "react";

import dance1 from "../assets/dance1.jpg";
import dance2 from "../assets/dance2.jpg";
import dance3 from "../assets/dance3.jpg";
import dance4 from "../assets/dance4.jpg";

const images = [dance1, dance2, dance3, dance4];

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
      <div className="gallery-grid">
        {images.map((img, index) => (
          <div key={index} className="gallery-item" onClick={() => setSelectedImage(img)}>
            <img src={img} alt={`Dance ${index + 1}`} />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Ampliada" />
        </div>
      )}
    </div>
  );
}

export default Gallery;
