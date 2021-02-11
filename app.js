// Import the express library here
const express = require("express");
// Instantiate the app here
const app = express();

const PORT = process.env.PORT || 4001;

const moods = [
  { mood: "excited" },
  { mood: "pissed" },
  { mood: "pukeing with rainbow" },
  { mood: "angry" },
  { mood: "hungry and angry" },
];

//GET
app.get("/moods", (req, res, next) => {
  res.send(moods);
});

// Invoke the app's `.listen()` method below:
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
