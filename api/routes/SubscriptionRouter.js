const express = require("express");
const router = express.Router();

const subscriptionController = require("../controllers/SubscriptionController");

router.get("/subscription/:id", subscriptionController.subscriptionGetById);
router.post("/subscription", subscriptionController.subscriptionCreate);

module.exports = router;