const express = require("express");
const router = express.Router();

const streakController = require("../controllers/StreakController");

router.get("/streak/:id", streakController.streakGetById);
router.post("/streak", streakController.streakCreate);

module.exports = router;