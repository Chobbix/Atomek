const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    body: {
        type: String
    },
    likesCount: {
        type: Number,
        default: 0
    },
    _user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    _community: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "community"
    }
});

const Post = mongoose.model("post", postSchema);
module.exports = Post;