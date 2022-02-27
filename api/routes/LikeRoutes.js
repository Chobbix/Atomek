const express = require("express");
const router = express.Router();

const likeController = require("../controllers/LikeController");

router.get("/posts/:postId/likes", likeController.likeGetAll);
router.post("/posts/:postId/likes", likeController.likeAdd);
router.delete("/posts/:postId/likes/:userId", likeController.likeRemove);

module.exports = router;