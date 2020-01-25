const express = require("express");
const router = express.Router();

const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");

router.use("/users", userRoutes);
router.use("/auth", authRoutes);

router.use("/authors", userRoutes);
router.use("/books", authRoutes);

router.use("/chat", authRoutes);
router.use("/post", authRoutes);

module.exports = router;
