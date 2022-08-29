const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

// eslint-disable-next-line max-len
const stripe = require("stripe")(
    "sk_test_51LZF1LSHwP10zuQShUtoxIzstW54gmhGCN2pvxeq1Fo6gFfS7bXV58uCrp1Tx4dNNMoV6NFihOMxHtbz1yAF92Yg00wVE2zdoW"
);

// App config
const app = express();

// Middler wares
app.use(cors({ origin: true }));
app.use(express.json());

// api routs
app.get("/", (request, response) => response.status(200).send("Hello world"));

// Create a post request to create a new customer

app.post("/payment/create", async (request, response) => {
    const total = request.query.total;
    console.log("payment request recieved BOOM!", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
    
});

// Listen command
exports.api = functions.https.onRequest(app);

// run firebase emulators:start
