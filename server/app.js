const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

// Explicar use
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Explicar cors
app.use(cors());

app.get("/", function(req, res) {
  res.send("Bienvenidos a la MEGA API");
});

app.get("/live", function(req, res) {
  res.status(200).json({
    result: "ok"
  });
});

app.post("/users", function(req, res) {
  console.log(req.body);
  res.status(201).json({
    result: "Created"
  });
});

app.get("/users", function(req, res) {
  res.status(200).json([
    {
      id: 1,
      username: "mgrozado",
      firstName: "Maximiliano",
      lastName: "Rozado"
    },
    {
      id: 2,
      username: "cesmunoz",
      firstName: "Cesar",
      lastName: "Muñoz"
    },
    {
      id: 3,
      username: "jsmith",
      firstName: "John",
      lastName: "Smith"
    }
  ]);
});

app.delete("/users/:id", function(req, res) {
  res.status(200).json({
    success: true
  });
});

app.put("/users/:id", function(req, res) {
  res.status(200).json({
    success: true
  });
});

app.get("/users/:id", function(req, res) {
  res.status(200).json({
    id: 1,
    username: "mgrozado",
    firstName: "Maximiliano",
    lastName: "Rozado"
  });
});

// auth
// post
// comment
// profile

app.listen(4000, function() {
  console.log("Listening in port 4000");
});
