const Role = require("../models/role");

exports.addRole = async (req, res, next) => {
    const role = req.body;
    const newRole = new Role(role);
    await newRole
    .save()
    .then(() => res.send(role))
    .catch((err) => res.status(400).send(err));
}