const mongoose = require("mongoose");

const followSchema = new mongoose.Schema({
    _user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    _follows: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }]
});

const Follow = mongoose.model("follow", followSchema);
module.exports = Follow;