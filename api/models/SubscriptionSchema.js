const mongoose = require("mongoose");

const subscriptionSchema = new mongoose.Schema({
    counter: {
        type: Number,
        default: 0,
        required: true,
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
    },
    _streak: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "streak"
    },
    _tags: [
        {
            type: mongoose.Schema.Types.ObjectId,
            required: false,
            ref: "tag"
        }
    ]
});

const Subscription = mongoose.model("subscription", subscriptionSchema);
module.exports = Subscription;