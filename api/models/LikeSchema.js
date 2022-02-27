const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema({
    _post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "post"
    },
    _users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }]
});

const Like = mongoose.model("like", likeSchema);
module.exports = Like;