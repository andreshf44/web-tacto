// src/components/Header.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="site-header">

      <div className="logo">
        <h2>Plataforma Tacto Sur</h2>
      </div>

      {/* botón hamburguesa */}
      <div 
        className={`hamburger ${menuOpen ? "active" : ""}`} 
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={`nav-links ${menuOpen ? "active" : ""}`}>

        <Link to="/" onClick={closeMenu}>Inicio</Link>
        <Link to="/about" onClick={closeMenu}>Sobre Nosotros</Link>
        <Link to="/gallery" onClick={closeMenu}>Galería</Link>
       {/*<Link to="/news" onClick={closeMenu}>Eventos</Link> */} 
        <Link to="/team" onClick={closeMenu}>Equipo</Link>
        <Link to="/subscription" onClick={closeMenu}>Suscripción</Link>
        <Link to="/contact" onClick={closeMenu}>Contacto</Link>

      </nav>

    </header>
  );
}

export default Header;
