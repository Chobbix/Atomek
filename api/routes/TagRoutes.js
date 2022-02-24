const express = require("express");
const router = express.Router();

const tagController = require("../controllers/TagController");

router.get("/tag/:id", tagController.tagGetById);
router.post("/tag", tagController.tagCreate);

module.exports = router;