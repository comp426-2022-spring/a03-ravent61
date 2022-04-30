import { coinFlip, coinFlips, flipACoin } from "./coin.mjs";
import express from "express";
import minimist from "minimist";
const app = express();

const args = minimist(process.argv.slice(2));

const HTTP_PORT = args["port"] || 5000;

//start an app server
const server = app.listen(HTTP_PORT, () => {
  console.log("App listening on port %PORT%".replace("%PORT%", HTTP_PORT));
});

//default respnse for any other request

app.get("/app/", (req, res) => {
  res.status(200).json("200 OK");
});

app.get("/app/flip", (req, res, next) => {
  res.status(200).json({ flip: coinFlip() });
});

app.get("/app/flips/:number", (req, res, next) => {
  res.status(200).json(coinFlips(req.params.number));
});

app.get("/app/flip/call/heads", (req, res, next) => {
  res.status(200).json(flipACoin("heads"));
});

app.get("/app/flip/call/tails", (req, res, next) => {
  res.status(200).json(flipACoin("tails"));
});

app.use(function (req, res) {
  res.status(404).send("404 NOT FOUND");
});
