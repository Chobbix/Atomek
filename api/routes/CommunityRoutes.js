const express = require("express");
const router = express.Router();

const communityController = require("../controllers/CommunityController");

router.get("/community/:id", communityController.communityGetById);
router.post("/community", communityController.communityCreate);
router.put("/community/:id", communityController.communityUpdate);
router.delete("/community/:id", communityController.communityDelete);

router.get("/community/amount-users/:id", communityController.communityGetAmountOfUsers);

module.exports = router;