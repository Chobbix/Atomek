const mongoose = require("mongoose");

const communitySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        minlength: 4,
        maxlength: 30
    },
    date_create: { 
        type : Date, 
        default: Date.now 
    },
    _category: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "category"
        },
    ],
    _users: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user"
        },
    ],
});

const Community = mongoose.model("community", communitySchema);
module.exports = Community;