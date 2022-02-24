const express = require("express");
const router = express.Router();

const responseController = require("../controllers/ResponseController");

router.get("/response/:id", responseController.responseGetById);
router.post("/response", responseController.responseCreate);

module.exports = router;