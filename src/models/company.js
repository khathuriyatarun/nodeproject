const mongoose = require("mongoose");
const { Schema } = mongoose;


const companySchema = new Schema ({
    name: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model("company", companySchema);