const express = require("express");
const app = express();
const PORT = 4002 || process.env.PORT;

const monsters = {
  1: { name: "chucacabra", age: "4" },
  2: { name: "viper", age: "2" },
};

// app.get("/monsters", (req, res) => {
//   res.send(monsters);
// });

app.put("/monsters/:id", (req, res) => {
  // PUT /monsters/1?name=chimera&age=1
  const monstUpdate = req.query;
  monsters[req.params.id] = monstUpdate;
  res.send(monsters[req.params.id]);
});

app.listen(PORT, () => {
  console.log(`server is listening on port: ${PORT}`);
});
