const express = require("express");
const router = express.Router();

const commentController = require("../controllers/CommentController");

router.get("/posts/:postId/comments", commentController.commentGetAll);
router.post("/posts/:postId/comments", commentController.commentCreate);
router.put("/comments/:id", commentController.commentUpdate);
router.delete("/comments/:id", commentController.commentDelete);

module.exports = router;