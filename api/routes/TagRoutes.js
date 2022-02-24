const express = require("express");
const router = express.Router();

const tagController = require("../controllers/TagController");

router.get("/users/:userId/tags", tagController.tagGetAll);
router.post("/users/:userId/tags", tagController.tagCreate);
router.put("/tags/:id", tagController.tagUpdate);
router.delete("/tags/:id", tagController.tagDelete);

module.exports = router;