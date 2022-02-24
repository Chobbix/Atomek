const mongoose = require("mongoose");

const tagSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxlength: 20
    },
    _user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }
});

const Tag = mongoose.model("tag", tagSchema);
module.exports = Tag;