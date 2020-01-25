const express = require("express");
const router = express.Router();

const controller = require("../controllers/authController");

router.post("/", controller.post);
router.get("/", controller.get);
router.get("/:id", controller.getById);
router.delete("/:id", controller.delete);
router.put("/:id", controller.update);

module.exports = router;
