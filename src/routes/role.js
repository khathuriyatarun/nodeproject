const express = require("express");
const roleController = require("../controllers/role");
const router = express.Router();

router.post("/addRole", roleController.addRole);

module.exports = router;