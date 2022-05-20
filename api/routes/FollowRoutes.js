const express = require("express");
const router = express.Router();

const followController = require("../controllers/FollowController");

router.get("/users/:userId/follows", followController.followGetAll);
router.post("/users/:userId/follows", followController.followAdd);
router.delete("/users/:userId/follows/:followUserId", followController.followRemove);

router.get("/users/:userId/is-followed/:followUserId", followController.followIsFollowed);

module.exports = router;