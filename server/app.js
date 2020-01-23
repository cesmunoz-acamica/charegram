// Dependecias
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const userController = require("./controllers/usersController");

// Instancio express
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.get("/", function(req, res) {
  res.send("Bienvenidos a la MEGA API");
});

app.get("/live", function(req, res) {
  res.status(200).json({
    result: "ok"
  });
});

app.post("/users", userController.saveUser);
app.get("/users", userController.getUsers);

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
