// src/components/Subscription.js

import React, { useEffect, useState } from "react";

function Subscription() {
  const [open, setOpen] = useState(false);

  const handleSubscribe = () => {
    window.location.href =
      "https://www.mercadopago.cl/subscriptions/checkout?preapproval_plan_id=08e9c5175b3548cc95109671b16cdfa1";
  };

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <section className="subscription" id="suscripcion">
        <div className="subscription__visual">
          <span className="subscription__word" aria-hidden="true">
            AMIGXS
          </span>
        </div>

        <div className="subscription__content">
          <p className="subscription__eyebrow">
            Comunidad Tacto
          </p>

          <h2>
            La cultura independiente
            <br />
            <span>también se sostiene en comunidad.</span>
          </h2>

          <p className="subscription__description">
            Súmate a una red que impulsa creación, circulación,
            formación y producción artística desde el sur de Chile.
          </p>

          <div className="subscription__price">
            <span>Desde</span>

            <strong>$5.000</strong>

            <span>mensuales</span>
          </div>

          <div className="subscription__actions">
            <button
              type="button"
              className="subscription__button subscription__button--primary"
              onClick={handleSubscribe}
            >
              Hazte Amigx
            </button>

            <button
              type="button"
              className="subscription__button subscription__button--secondary"
              onClick={() => setOpen(true)}
            >
              Conocer beneficios
            </button>
          </div>

          <p className="subscription__note">
            Tu aporte ayuda a sostener producción, salas de ensayo,
            teatros, circulación, iluminación, sonido y movilidad de artistas.
          </p>
        </div>
      </section>

      {open && (
        <div
          className="subscription-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="subscription-modal-title"
          onClick={() => setOpen(false)}
        >
          <div
            className="subscription-modal__content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="subscription-modal__close"
              onClick={() => setOpen(false)}
              aria-label="Cerrar información de suscripción"
            >
              ×
            </button>

            <div className="subscription-modal__header">
              <p className="subscription__eyebrow">
                Amigxs de Tacto
              </p>

              <h3 id="subscription-modal-title">
                Sostener también
                <br />
                <span>es participar.</span>
              </h3>

              <p>
                Al hacerte Amigx de Tacto, te comprometes con un aporte
                mensual desde $5.000 y pasas a formar parte de una comunidad
                que apoya directamente el desarrollo de las artes escénicas
                contemporáneas desde la Región de Los Ríos.
              </p>
            </div>

            <div className="subscription-modal__grid">
              <div className="subscription-modal__block">
                <span className="subscription-modal__number">
                  01
                </span>

                <h4>¿A dónde va tu aporte?</h4>

                <p>
                  Los fondos permiten cubrir producción, arriendo de salas
                  de ensayo y teatros, iluminación y sonido, publicidad,
                  traslados de artistas, circulación regional e internacional
                  y participación en festivales y certámenes.
                </p>
              </div>

              <div className="subscription-modal__block">
                <span className="subscription-modal__number">
                  02
                </span>

                <h4>Transparencia</h4>

                <p>
                  Los ingresos y gastos asociados a la plataforma serán
                  informados a la comunidad de Amigxs de Tacto para mantener
                  claridad y transparencia en la distribución de los fondos.
                </p>
              </div>

              <div className="subscription-modal__block">
                <span className="subscription-modal__number">
                  03
                </span>

                <h4>Beneficios</h4>

                <p>
                  Acceso a descuentos y promociones en estrenos,
                  instalaciones, conciertos, exposiciones, festivales,
                  talleres, residencias, seminarios y actividades especiales.
                </p>
              </div>

              <div className="subscription-modal__block">
                <span className="subscription-modal__number">
                  04
                </span>

                <h4>Difusión</h4>

                <p>
                  Los Amigxs de Tacto pueden acceder a espacios de difusión
                  para emprendimientos, proyectos, negocios o iniciativas
                  vinculadas a la comunidad.
                </p>
              </div>
            </div>

            <div className="subscription-modal__footer">
              <button
                type="button"
                className="subscription__button subscription__button--primary"
                onClick={handleSubscribe}
              >
                Quiero ser Amigx de Tacto
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Subscription;