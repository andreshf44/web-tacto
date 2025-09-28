require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mercadopago = require('mercadopago');

const app = express();
app.use(cors());
app.use(express.json());

// Configura Mercado Pago
mercadopago.configurations.setAccessToken(process.env.MERCADO_PAGO_ACCESS_TOKEN);

// Endpoint para crear la preferencia de pago
app.post('/create-preference', async (req, res) => {
  try {
    const { title = "Suscripción Compañía de Danza", price = 1000 } = req.body;

    const preference = {
      items: [
        {
          title,
          quantity: 1,
          currency_id: "CLP", // pesos chilenos
          unit_price: parseFloat(price),
        },
      ],
      back_urls: {
        success: `${process.env.DOMAIN}/success`,
        failure: `${process.env.DOMAIN}/cancel`,
        pending: `${process.env.DOMAIN}/pending`,
      },
      auto_return: "approved",
    };

    const response = await mercadopago.preferences.create(preference);
    res.json({ init_point: response.body.init_point });
  } catch (error) {
    console.error("Error creando preferencia:", error);
    res.status(500).json({ error: "No se pudo crear la preferencia" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
