const express = require("express");
const router = express.Router();

const categoryController = require("../controllers/CategoryController");

router.get("/category/:id", categoryController.categoryGetById);
router.post("/category", categoryController.categoryCreate);
router.put("/category/:id", categoryController.categoryUpdate);
router.delete("/category/:id", categoryController.categoryDelete);

module.exports = router;