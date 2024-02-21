const express = require("express");
const UserController = require("../controllers/userController");

const router = express.Router();

router.get("/users", UserController.getAllUsers);
router.post("/users", UserController.createUser);
router.get("/users/:userId", UserController.getUserById);
router.put("/users/:userId", UserController.updateUserById);
router.delete("/users/:userId", UserController.deleteUserById);

module.exports = router;
