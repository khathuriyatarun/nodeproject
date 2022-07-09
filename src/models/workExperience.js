const { Double, Decimal128 } = require("mongodb");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const wokeExperienceSchema = new Schema ({
    tenure: {
        required: true,
        type: Decimal128
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    company: {
        type: Schema.Types.ObjectId,
        ref: "company",
        required: true
    }
})

module.exports = mongoose.model("workExperience", wokeExperienceSchema);