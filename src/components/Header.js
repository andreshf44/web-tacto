// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="site-header">
      <div className="logo">
        <h2>Compañía Tacto Sur</h2>
      </div>
      <nav className="nav-links">
        <Link to="/">Inicio</Link>
        <Link to="/about">Sobre Nosotros</Link>
        <Link to="/gallery">Galería</Link>
        <Link to="/news">Noticias</Link>
        <Link to="/team">Equipo</Link>
        <Link to="/subscription">Suscripción</Link>
        <Link to="/contact">Contacto</Link>
      </nav>
    </header>
  );
}

export default Header;
