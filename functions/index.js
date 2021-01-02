const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51I32thLGnub5vC3OlG36curYr4FQXlvSWX1TNjLR2Ei4ut9Dq7uF7x1OCToG9IxHhTmp48nP6aPGKgr59P2ngT3R00B8hhMFQi');

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get('/', (req, res) => res.status(200).send('hello world'));

app.post('/payments/create', async(req, res) => {
    const total = req.query.total;
    console.log('Payment req received: ', total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //subunits of currency
        currency: "usd"
    });

    // OK - Created
    res.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})

// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/clone-124e6/us-central1/api
