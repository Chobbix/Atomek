const express = require("express");
const router = express.Router();

const userController = require("../controllers/UserController");

router.get("/users/:id", userController.userGetById);
router.post("/users", userController.userCreate);

module.exports = router;