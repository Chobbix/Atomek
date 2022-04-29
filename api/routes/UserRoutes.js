const express = require("express");
const router = express.Router();

const userController = require("../controllers/UserController");

router.get("/users/:id", userController.userGetById);
router.post("/users", userController.userCreate);
router.put("/users/:id", userController.userUpdate);
router.put("/users/:id/image", userController.userUpdateImage);
router.delete("/users/:id", userController.userDelete);

router.post("/login", userController.userLogin);
router.get("/users/:id/amount-likes", userController.userGetAmountOfLikes);
router.get("/users/:id/amount-communities", userController.userGetAmountOfCommunities);
router.get("/users/:id/amount-posts", userController.userGetAmountOfPosts);
router.get("/users/:id/amount-subscriptions", userController.userGetAmountOfSubscriptions);

module.exports = router;