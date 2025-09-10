// src/components/Subscription.js
import React from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("TU_PUBLIC_KEY_DE_STRIPE"); // reemplaza con tu clave pública

function Subscription() {
  const handleSubscribe = async () => {
    const stripe = await stripePromise;

    // Llamada a tu backend para crear sesión de Stripe
    const response = await fetch("/create-checkout-session", {
      method: "POST",
    });
    const session = await response.json();

    // Redirigir al Checkout de Stripe
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.error(result.error.message);
    }
  };

  return (
    <div>
      <p>Suscríbete y recibe contenido exclusivo de nuestra compañía.</p>
      <button onClick={handleSubscribe}>Suscribirse</button>
    </div>
  );
}

export default Subscription;
