const express = require("express");
const router = express.Router();

const communityController = require("../controllers/CommunityController");

router.get("/community/:id", communityController.communityGetById);
router.post("/community", communityController.communityCreate);

module.exports = router;