// src/components/Header.js

import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`site-header ${
        hasScrolled ? "site-header--scrolled" : ""
      }`}
    >
      <Link
    to="/"
    className="site-logo"
    onClick={closeMenu}
>
    <img
        src="/isotipo-tacto.png"
        alt=""
        className="site-logo-mark"
    />

    <div className="site-logo-text">
        <span>TACTO</span>
        <span>SUR</span>
    </div>
</Link>

      <button
        type="button"
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={toggleMenu}
        aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={menuOpen}
      >
        <span />
        <span />
        <span />
      </button>

      <nav
        className={`nav-links ${menuOpen ? "active" : ""}`}
        aria-label="Navegación principal"
      >
        <Link to="/" onClick={closeMenu}>
          Inicio
        </Link>

        <Link to="/gallery" onClick={closeMenu}>
          Obras
        </Link>

        <Link to="/about" onClick={closeMenu}>
          Plataforma
        </Link>

        <Link to="/team" onClick={closeMenu}>
          Equipo
        </Link>

        <Link to="/contact" onClick={closeMenu}>
          Contacto
        </Link>

        <Link
          to="/subscription"
          onClick={closeMenu}
          className="nav-cta"
        >
          Hazte Amigx
        </Link>
      </nav>

      {menuOpen && (
        <button
          type="button"
          className="nav-backdrop"
          onClick={closeMenu}
          aria-label="Cerrar menú"
        />
      )}
    </header>
  );
}

export default Header;