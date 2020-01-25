const express = require("express");
const router = express.Router();

const controller = require("../controllers/usersController");

router.post("/", controller.saveUser);
router.get("/", controller.getUsers);

module.exports = router;
