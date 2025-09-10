// src/components/Footer.js
import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <p>&copy; {new Date().getFullYear()} Compañía de Danza. Todos los derechos reservados.</p>
      <div className="socials">
        <a href="https://www.instagram.com/companiatacto/" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="#" target="_blank" rel="noopener noreferrer">YouTube</a>
      </div>
    </footer>
  );
}

export default Footer;
