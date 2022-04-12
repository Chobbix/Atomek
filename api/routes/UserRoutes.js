const express = require("express");
const router = express.Router();

const userController = require("../controllers/UserController");

router.get("/users/:id", userController.userGetById);
router.post("/users", userController.userCreate);
router.put("/users/:id", userController.userUpdate);
router.delete("/users/:id", userController.userDelete);

router.post("/login", userController.userLogin);

module.exports = router;