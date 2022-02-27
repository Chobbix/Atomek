const express = require("express");
const router = express.Router();

const streakController = require("../controllers/StreakController");

router.get("/streak/:id", streakController.streakGetById);
router.post("/streak", streakController.streakCreate);
router.put("/streak/:id", streakController.streakUpdate);
router.delete("/streak/:id", streakController.streakDelete);

module.exports = router;