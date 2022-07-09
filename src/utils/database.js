const mongoose = require("mongoose");

exports.connectDB = async () => {
    await mongoose
    .connect('mongodb://localhost/demo')
    .then(() => {
        console.log("MongoDB Connected!");
    })
    .catch((err) => {
        console.error(err);
    });
};
