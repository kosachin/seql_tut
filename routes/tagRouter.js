const router = require("express").Router();
const tagController = require("../controller/tagController");

router.post("/addTag",tagController.addTag);
router.get("/all",tagController.getAllTags);
// router.get("/all",tagController.getAllTags);
module.exports = router;
