const express = require("express");
const router = express.Router();

const postController = require("../controllers/PostController");

router.get("/posts/:id", postController.postGetById);
router.get("/community/:communityId/posts", postController.postGetAll);
router.get("/users/:userId/posts", postController.postGetPostsByUser);
router.get("/users/:userId/communities-posts", postController.postGetPostsByUserCommunities);
router.post("/community/:communityId/posts", postController.postCreate);
router.put("/posts/:id", postController.postUpdate);
router.delete("/posts/:id", postController.postDelete);

module.exports = router;