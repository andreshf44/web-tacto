// src/components/Subscription.js
import React from "react";

function Subscription() {
  const handleSubscribe = () => {
    // Redirige a la URL deseada
    window.location.href = "https://www.mercadopago.cl/subscriptions/checkout?preapproval_plan_id=64a81512d1bc47f4a11e26d7907e6cae";
  };

  return (
    <div className="subscription-container">
      <h2>Suscríbete</h2>
      <p>
        Recibe contenido exclusivo de nuestra compañía de danza y mantente al
        día con nuestras actividades y talleres.
      </p>
      <button className="subscribe-button" onClick={handleSubscribe}>
        Suscribirse
      </button>
    </div>
  );
}

export default Subscription;


