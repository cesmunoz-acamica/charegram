const express = require("express");
const router = express.Router();

const UsersController = require("../controllers/usersController");
const controller = new UsersController();

router.post("/", controller.saveUser);
router.get("/", controller.getUsers);
router.get("/:id", controller.getById);
router.delete("/:id", controller.deleteById);
router.put("/:id", controller.updateUser);

module.exports = router;
