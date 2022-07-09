const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    firstName: {
        required: true,
        type: String
    },
    lastName: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    password: {
        default: "Welcome@123",
        type: String
    },
    mobileNumber: {
        type: Number
    },
    employeeId: {
        required: true,
        type: Number
    },
    profileImageURL: {
        type: String
    },
    company: {
        type: Schema.Types.ObjectId,
        ref: "company",
        required: false
    },
    role: {
        type: Schema.Types.ObjectId,
        ref: "role",
        required: false
    },
    deleted: {
        type: Boolean,
        default: false
    },
    isActive: {
        type: Boolean,
        default: true
    }
})

module.exports = mongoose.model("users", userSchema);