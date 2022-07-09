const mongoose = require("mongoose");
const { Schema } = mongoose;


const roleSchema = new Schema ({
    name: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model("role", roleSchema);