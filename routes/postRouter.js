const router = require("express").Router();
const postController = require("../controller/postController");

router.post("/addPost", postController.addPost);
router.get("/all", postController.getAllPost);
router.get("/:id", postController.getPost);
router.put("/update/:id", postController.updatePost);
router.delete("/delete/:id", postController.deletePost);

module.exports = router;
