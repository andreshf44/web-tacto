// src/components/Subscription.js
import React from "react";

function Subscription() {
  const handleSubscribe = async () => {
    try {
      const response = await fetch("http://localhost:5000/create-preference", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: "Suscripción Compañía de Danza",
          price: 5000, // valor de la suscripción en CLP
        }),
      });

      const data = await response.json();
      if (data.init_point) {
        window.location.href = data.init_point; // Redirige al checkout de Mercado Pago
      } else {
        alert("No se pudo iniciar el pago");
      }
    } catch (error) {
      console.error("Error creando preferencia:", error);
      alert("Ocurrió un error al iniciar el pago");
    }
  };

  return (
    <div className="subscription-container">
      <h2>Suscríbete</h2>
      <p>Recibe contenido exclusivo de nuestra compañía de danza.</p>
      <button className="subscribe-button" onClick={handleSubscribe}>
        Suscribirse
      </button>
    </div>
  );
}

export default Subscription;
