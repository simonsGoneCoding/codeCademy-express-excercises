// Import the express library here
const express = require("express");
// Instantiate the app here
const app = express();

const PORT = process.env.PORT || 4001;

const moods = [
  { mood: "excited", id: 1 },
  { mood: "pissed", id: 2 },
  { mood: "pukeing with rainbow", id: 3 },
  { mood: "angry", id: 4 },
  { mood: "hungry and angry", id: 5 },
];

//GET
app.get("/moods", (req, res, next) => {
  res.send(moods);
});

//getting a single expression
app.get("/moods/:id", (req, res) => {
  const reqIndex = moods.findIndex((el) => el.id === parseInt(req.params.id));
  res.send(moods[reqIndex].mood);
});

//Setting Status Codes
app.get("/moods/:id", (req, res) => {
  const reqIndex = moods.findIndex((el) => el.id === parseInt(req.params.id));
  if (reqIndex !== -1) {
    res.send(moods[reqIndex].mood);
  } else {
    res.status(404).send("Not found!");
  }
});

// Invoke the app's `.listen()` method below:
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
