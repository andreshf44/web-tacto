// src/components/Subscription.js
import React, { useState } from "react";

function Subscription() {
  const [open, setOpen] = useState(false);
  const handleSubscribe = () => {
    // Redirige a la URL deseada
    window.location.href = "https://www.mercadopago.cl/subscriptions/checkout?preapproval_plan_id=08e9c5175b3548cc95109671b16cdfa1";
  };

  return (
    <>
    <div className="subscription-container">
      <div className="subscription-title">
        <h2>Suscríbete</h2>

        <button
          className="info-icon"
          onClick={() => setOpen(true)}
          aria-label="¿Qué significa ser Amigx de Tacto?"
        >
          ?
          <span className="tooltip">
            ¿Qué significa ser Amigx de Tacto?
          </span>
        </button>
      </div>
      <p>
        ¿Te gusta el arte y la cultura? ¿Te gustaría apoyar a un proyecto multidisciplinario en el sur de Chile? 
      </p>
      <button className="subscribe-button" onClick={handleSubscribe}>
        Suscribirse
      </button>
      <p className="subscription-helper">
        Desde $5.000 mensuales ·{" "}
        <span onClick={() => setOpen(true)}>
          ¿Qué significa ser Amigx de Tacto?
        </span>
      </p>
    </div>

    {/* MODAL */}
    {open && (
        <div className="modal-overlay" onClick={() => setOpen(false)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setOpen(false)}
            >
              ×
            </button>

            <div className="info-suscripcion">
            <h3>Hazte Amigx de Tacto</h3>

            <p>
              ¿Te gusta el arte y la cultura? ¿Te gustaría apoyar a un proyecto
              multidisciplinario en el sur de Chile? Te invitamos a sumarte a
              Plataforma Tacto.
            </p>

            <p>
              En hacerte Amigx de Tacto, te comprometes con un <strong>aporte mensual
              desde $5.000</strong>. Somos artistas independientes, por lo tanto funcionamos desde la autogestión, 
              financiados por diferentes fuentes públicas y privadas. Los fondos que se recaudan en la plataforma 
              serán destinados para cubrir gastos de: producción, arriendo de sala de ensayo y teatros, iluminación 
              y sonido, publicidad, pasajes de artistas interregionales, pasajes para invitaciones a certámenes, 
              festivales nacionales e internacionales, entre otros. Todos estos ingresos y gastos serán rendidos a 
              los Amigxs de Tacto para una mayor transparencia en la distribución de fondos.
            </p>

            <h4>Beneficios</h4>
            <ul>
              <li><strong>Descuentos y promociones especiales en todas nuestras actividades:</strong> 
                Estrenos de obras, instalaciones, conciertos, exposiciones, festivales, lanzamientos audiovisuales, 
                talleres, residencias, seminarios. Para Amigxs de Tacto que están fuera de la región o el país, 
                habrá actividades online.
              </li>
              <li><strong>Espacio publicitario gratuito:</strong> Los Amigxs de Tacto podrán compartir la publicidad de su 
                emprendimiento, negocio o empresa en nuestra plataforma. La cantidad de publicidad será proporcional
                al aporte mensual.
              </li>
            </ul>
            </div>
          </div>
        </div>
    )}
    </>
  );
}

export default Subscription;


