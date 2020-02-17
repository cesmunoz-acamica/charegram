const express = require("express");
const router = express.Router();

const usersController = require("../controllers/usersController");
const controller = new usersController();

router.post("/", controller.saveUser);
router.get("/", controller.getUsers);
router.get("/:id", controller.getById);
router.delete("/:id", controller.deleteById);
router.put("/:id", controller.updateUser);

module.exports = router;
