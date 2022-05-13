const mongoose = require("mongoose");

const communitySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        minlength: 4,
        maxlength: 30
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    date_create: { 
        type : Date, 
        default: Date.now 
    },
    active: {
        type: Boolean,
        default: true
    },
    _category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "category",
        required: true,
    },
    _admin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    _users: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user"
        },
    ],
});

const Community = mongoose.model("community", communitySchema);
module.exports = Community;