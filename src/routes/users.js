const express = require("express");
const userController = require("../controllers/users");
const router = express.Router();


router.post("/addUser", userController.addUser);
router.post("/loginUser", userController.loginUser);
router.get("/:id", userController.fetchUserById);

module.exports = router;