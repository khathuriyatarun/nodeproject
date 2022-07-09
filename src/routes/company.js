const express = require("express");
const companyController = require("../controllers/company");
const router = express.Router();

router.post("/addCompany", companyController.addCompany);

module.exports = router;