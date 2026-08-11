// src/pages/Gallery.js

import React, { useEffect, useState } from "react";
import albumsInfo from "../assets/albums/albumsInfo";


/* -------------------------------------------------------
   CARGA AUTOMÁTICA DE TODAS LAS IMÁGENES
-------------------------------------------------------- */

const req = require.context(
  "../assets/albums",
  true,
  /\.(jpg|jpeg|png)$/i
);

function loadAlbums() {
  const albums = {};

  req.keys().forEach((path) => {
    const parts = path.split("/");

    const folderName = parts[1];
    const fileName = parts[2];

    if (!albums[folderName]) {
      albums[folderName] = {
        id: folderName,
        name:
          albumsInfo[folderName]?.name ||
          folderName.replace(/_/g, " "),
        description:
          albumsInfo[folderName]?.description || "",
        year:
          albumsInfo[folderName]?.year || "",
        category:
          albumsInfo[folderName]?.category || "Artes escénicas",
        images: [],
      };
    }

    albums[folderName].images.push({
      src: req(path),
      fileName,
    });
  });

  return Object.values(albums).map((album) => {
    album.images.sort((a, b) => {
      const numA = parseInt(a.fileName.match(/\d+/)?.[0] || 0);
      const numB = parseInt(b.fileName.match(/\d+/)?.[0] || 0);

      return numA - numB;
    });

    return {
      ...album,
      images: album.images.map((img) => img.src),
      cover: album.images[0]?.src,
    };
  });
}

const albums = loadAlbums();

/* -------------------------------------------------------
   COMPONENTE
-------------------------------------------------------- */

function Gallery() {
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const isProjectOpen = selectedAlbum !== null;

  const closeAlbum = () => {
    setSelectedAlbum(null);
    setSelectedImageIndex(null);
  };

  const closeImage = () => {
    setSelectedImageIndex(null);
  };

  const nextImage = () => {
    if (!selectedAlbum || selectedImageIndex === null) return;

    setSelectedImageIndex(
      (selectedImageIndex + 1) % selectedAlbum.images.length
    );
  };

  const prevImage = () => {
    if (!selectedAlbum || selectedImageIndex === null) return;

    setSelectedImageIndex(
      (selectedImageIndex - 1 + selectedAlbum.images.length) %
        selectedAlbum.images.length
    );
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImageIndex !== null && selectedAlbum) {
        if (e.key === "ArrowRight") {
          setSelectedImageIndex((prev) =>
            prev < selectedAlbum.images.length - 1 ? prev + 1 : 0
          );
        }
  
        if (e.key === "ArrowLeft") {
          setSelectedImageIndex((prev) =>
            prev > 0 ? prev - 1 : selectedAlbum.images.length - 1
          );
        }
  
        if (e.key === "Escape") {
          setSelectedImageIndex(null);
        }
      } else if (selectedAlbum && e.key === "Escape") {
        setSelectedAlbum(null);
      }
    };
  
    window.addEventListener("keydown", handleKeyDown);
  
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedAlbum, selectedImageIndex]);

  useEffect(() => {
    document.body.style.overflow =
      isProjectOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isProjectOpen]);

  return (
    <section className="projects" id="obras">
      {/* HEADER */}
      <div className="projects__header">
        <div>
          <p className="projects__eyebrow">
            Archivo escénico
          </p>

          <h2>
            Obras &
            <br />
            <span>proyectos</span>
          </h2>
        </div>

        <p className="projects__intro">
          Una selección de procesos, obras y experiencias
          desarrolladas desde el sur de Chile.
        </p>
      </div>

      {/* PROYECTOS */}
      <div className="projects__list">
        {albums.map((album, index) => (
          <article
            key={album.id}
            className={`project-card ${
              index % 2 !== 0 ? "project-card--reverse" : ""
            }`}
          >
            <button
              type="button"
              className="project-card__image"
              onClick={() => setSelectedAlbum(album)}
              aria-label={`Ver proyecto ${album.name}`}
            >
              <img
                src={album.cover}
                alt={album.name}
              />

              <span className="project-card__index">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="project-card__view">
                Ver proyecto ↗
              </span>
            </button>

            <div className="project-card__content">
              <div className="project-card__meta">
                <span>{album.category}</span>

                {album.year && (
                  <span>{album.year}</span>
                )}
              </div>

              <h3>{album.name}</h3>

              {album.description && (
                <p>{album.description}</p>
              )}

              <div className="project-card__footer">
                <span>
                  {album.images.length} imágenes
                </span>

                <button
                  type="button"
                  onClick={() => setSelectedAlbum(album)}
                >
                  Explorar archivo
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* MODAL PROYECTO */}
      {selectedAlbum && selectedImageIndex === null && (
        <div
          className="project-modal"
          role="dialog"
          aria-modal="true"
          aria-label={`Galería de ${selectedAlbum.name}`}
          onClick={closeAlbum}
        >
          <div
            className="project-modal__content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="project-modal__header">
              <div>
                <p className="projects__eyebrow">
                  Archivo
                </p>

                <h2>{selectedAlbum.name}</h2>

                {selectedAlbum.description && (
                  <p>
                    {selectedAlbum.description}
                  </p>
                )}
              </div>

              <button
                type="button"
                className="project-modal__close"
                onClick={closeAlbum}
                aria-label="Cerrar proyecto"
              >
                ×
              </button>
            </div>

            <div className="project-modal__grid">
              {selectedAlbum.images.map((img, idx) => (
                <button
                  key={`${img}-${idx}`}
                  type="button"
                  className={
                    idx % 5 === 0
                      ? "project-modal__image project-modal__image--large"
                      : "project-modal__image"
                  }
                  onClick={() => setSelectedImageIndex(idx)}
                >
                  <img
                    src={img}
                    alt={`${selectedAlbum.name} ${idx + 1}`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* LIGHTBOX */}
      {selectedAlbum && selectedImageIndex !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Imagen ${selectedImageIndex + 1} de ${
            selectedAlbum.images.length
          }`}
          onClick={closeImage}
        >
          <button
            type="button"
            className="lightbox__close"
            onClick={closeImage}
            aria-label="Cerrar imagen"
          >
            ×
          </button>

          <button
            type="button"
            className="lightbox__arrow lightbox__arrow--left"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            aria-label="Imagen anterior"
          >
            ‹
          </button>

          <div
            className="lightbox__image"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedAlbum.images[selectedImageIndex]}
              alt={`${selectedAlbum.name} ampliada`}
            />
          </div>

          <button
            type="button"
            className="lightbox__arrow lightbox__arrow--right"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            aria-label="Imagen siguiente"
          >
            ›
          </button>

          <div className="lightbox__counter">
            {String(selectedImageIndex + 1).padStart(2, "0")}
            <span>/</span>
            {String(selectedAlbum.images.length).padStart(2, "0")}
          </div>
        </div>
      )}
    </section>
  );
}

export default Gallery;