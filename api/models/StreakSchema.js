const mongoose = require("mongoose");

const streakSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 30
    },
    type: {
        type: String,
        required: true
    },
    date_create: { 
        type : Date, 
        default: Date.now 
    },
    active: {
        type: Boolean,
        default: true
    },
    _community: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: "community"
    },
    _user: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: "user"
    }
});

const Streak = mongoose.model("streak", streakSchema);
module.exports = Streak;