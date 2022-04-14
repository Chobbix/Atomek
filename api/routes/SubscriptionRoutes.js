const express = require("express");
const router = express.Router();

const subscriptionController = require("../controllers/SubscriptionController");

router.get("/subscription/:id", subscriptionController.subscriptionGetById);
router.post("/streak/:streakId/subscription", subscriptionController.subscriptionCreate);
router.put("/subscription/:id", subscriptionController.subscriptionUpdate);
router.delete("/subscription/:id", subscriptionController.subscriptionDelete);

module.exports = router;