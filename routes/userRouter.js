const router = require("express").Router();
const userController = require("../controller/userController");

router.post("/addUser", userController.addUser);
router.get("/all", userController.getAllUsers);
router.get("/:id", userController.getUser);
router.put("/update/:id", userController.updateUser);
router.delete("/delete/:id", userController.deleteUser);
router.get("/:id/posts", userController.getUserPosts);

module.exports = router;
