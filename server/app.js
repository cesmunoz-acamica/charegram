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

app.listen(3001, function() {
  console.log("Listening in port 3001");
});
