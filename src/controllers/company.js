const Company = require("../models/company");

exports.addCompany = async (req, res, next) => {
    const company = req.body;
    const newCompany = new Company(company);
    await newCompany
    .save()
    .then(() => res.send(company))
    .catch((err) => res.status(400).send(err));
}