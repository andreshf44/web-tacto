// src/pages/Gallery.js

import React, { useState, useEffect } from "react";
import albumsInfo from "../assets/albums/albumsInfo";

/* -------------------------------------------------------
   CARGA AUTOMÁTICA DE TODAS LAS IMÁGENES (Webpack / CRA)
-------------------------------------------------------- */
const req = require.context(
  "../assets/albums",
  true,
  /\.(jpg|jpeg|png)$/i
);

function loadAlbums() {
  const albums = {};

  req.keys().forEach((path) => {
    // path = "./carpeta/archivo.jpg"
    const parts = path.split("/");

    const folderName = parts[1]; // carpeta del álbum
    const fileName = parts[2];   // nombre de archivo (1.jpg, 10.jpg, etc.)

    if (!albums[folderName]) {
      albums[folderName] = {
        name:
          albumsInfo[folderName]?.name ||
          folderName.replace(/_/g, " "),
        description:
          albumsInfo[folderName]?.description || "",
        images: []
      };
    }

    albums[folderName].images.push({
      src: req(path),
      fileName
    });
  });

  // Ordenar imágenes por número
  return Object.values(albums).map((album) => {
    album.images.sort((a, b) => {
      const numA = parseInt(a.fileName.match(/\d+/)?.[0] || 0);
      const numB = parseInt(b.fileName.match(/\d+/)?.[0] || 0);
      return numA - numB;
    });

    return {
      ...album,
      images: album.images.map((img) => img.src),
      cover: album.images[0].src
    };
  });
}

const albums = loadAlbums();

/* -------------------------------------------------------
                    COMPONENTE GALLERY
-------------------------------------------------------- */
function Gallery() {
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  /* ---------------------------------------------
     Navegación global con teclado
  ---------------------------------------------- */
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImageIndex !== null) {
        if (e.key === "ArrowRight") nextImage();
        if (e.key === "ArrowLeft") prevImage();
        if (e.key === "Escape") closeImage();
      } else if (selectedAlbum && e.key === "Escape") {
        closeAlbum();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  const closeAlbum = () => setSelectedAlbum(null);
  const closeImage = () => setSelectedImageIndex(null);

  const nextImage = () => {
    if (!selectedAlbum) return;
    setSelectedImageIndex((prev) =>
      prev < selectedAlbum.images.length - 1 ? prev + 1 : 0
    );
  };

  const prevImage = () => {
    if (!selectedAlbum) return;
    setSelectedImageIndex((prev) =>
      prev > 0 ? prev - 1 : selectedAlbum.images.length - 1
    );
  };

  return (
    <div className="content-gallery">

      {/* -------- GRID DE ÁLBUMES -------- */}
      <div className="gallery-grid">
        {albums.map((album, index) => (
          <div
            key={index}
            className="gallery-item"
            onClick={() => {
              setSelectedAlbum(album);
              setSelectedImageIndex(null);
            }}
          >
            <img src={album.cover} alt={album.name} />
            <h3>{album.name}</h3>
            <p>{album.description}</p>
          </div>
        ))}
      </div>

      {/* -------- MODAL: LISTA DE IMÁGENES -------- */}
      {selectedAlbum && selectedImageIndex === null && (
        <div className="modal" onClick={closeAlbum}>
          <div className="album-modal" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedAlbum.name}</h2>

            <div className="album-images-grid">
              {selectedAlbum.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  className="album-thumb"
                  onClick={() => setSelectedImageIndex(idx)}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* -------- MODAL: IMAGEN GRANDE + NAVEGACIÓN -------- */}
      {selectedAlbum && selectedImageIndex !== null && (
        <div className="modal" onClick={closeImage}>

          {/* Flecha izquierda */}
          <div
            className="nav-arrow left"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
          >
            ❮
          </div>

          <img
            className="large-image"
            src={selectedAlbum.images[selectedImageIndex]}
            alt="Grande"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Flecha derecha */}
          <div
            className="nav-arrow right"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
          >
            ❯
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
