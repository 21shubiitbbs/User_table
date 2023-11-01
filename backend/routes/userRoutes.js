const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");
router.post("/", userController.createUser);
router.get("/", userController.getAllUser);
router.delete("/:_id", userController.deleteUser);
router.put("/:_id", userController.updateUser); // Route for updating a user
router.get("/:_id", userController.getUserById);
module.exports = router;
