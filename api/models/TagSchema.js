const mongoose = require("mongoose");

const tagSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        minlength: 4,
        maxlength: 15
    },
    date_create: { 
        type : Date, 
        default: Date.now 
    },
    _user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "user"
    }
});

const Tag = mongoose.model("tag", tagSchema);
module.exports = Tag;