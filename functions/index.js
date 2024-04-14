// const onRequest = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");
// const initializeApp = require("firebase-admin/app");

const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripeKey1 = "sk_test_51NxlGQGVkWt1AECJp0fHTueWvKxJ09jaF766IoAFuqIz8d";
const stripeKey2 = "IIDqb4ebN0qC9wElyRwBPAJBd690nRHNUCTQWQYYDI00C8zzgjm4";
const stripe = require("stripe")(stripeKey1+stripeKey2);

// API

// App config
const app = express();
// Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// API routes
app.get("/", (req, res) => res.status(200).send("hello world"));

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  console.log("Payment Request Recieve BOOM!!! for this amount >>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  // OK - Created
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command
exports.api = functions.https.onRequest(app);
// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
