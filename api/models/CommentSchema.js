const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    body: {
        type: String,
        maxlength: 1024
    },
    date_create: { 
        type : Date, 
        default: Date.now 
    },
    _user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    _post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "post"
    }
});

const Comment = mongoose.model("comment", commentSchema);
module.exports = Comment;