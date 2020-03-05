// Dependecias
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const dotenv = require('dotenv');
dotenv.config()

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

app.listen(process.env.APP_PORT, () => console.log(`Listening in port ${process.env.APP_PORT}`));
