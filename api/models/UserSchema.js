const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 4,
        maxlength: 20
    },
    name: {
        type: String,
        required: true,
        maxlength: 50
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    image: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    followersCount: {
        type: Number,
        default: 0
    }
});

const User = mongoose.model("user", userSchema);
module.exports = User;