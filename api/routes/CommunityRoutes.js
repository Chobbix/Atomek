const express = require("express");
const router = express.Router();

const communityController = require("../controllers/CommunityController");

router.get("/community/:id", communityController.communityGetById);
router.post("/community", communityController.communityCreate);
router.put("/community/:id", communityController.communityUpdate);
router.delete("/community/:id", communityController.communityDelete);

router.get("/community/:id/amount-users", communityController.communityGetAmountOfUsers);
router.put("/community/:id/add-user", communityController.communityAddUser);
router.put("/community/:id/add-category", communityController.communityAddCategory);

module.exports = router;