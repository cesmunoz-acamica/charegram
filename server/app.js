// Dependecias
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const routes = require("./router");

// Instancio express
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", routes);

// auth
// post
// comment
// profile

app.listen(4000, () => console.log("Listening in port 4000"));
