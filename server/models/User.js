const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    register_date: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model("user", UserSchema);

module.exports = User;