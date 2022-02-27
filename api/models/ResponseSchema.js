const mongoose = require("mongoose");

const responseSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 400
    },
    image: {
        type: String,
        required: false
    },
    date_create: { 
        type : Date, 
        default: Date.now 
    },
    note: {
        type: String,
        required: false,
        maxlength: 100
    },
    _subscription: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: "subscription"
    }
});

//responseSchema.pre('save', function(next){
//    console.log("previo a guardar");
//    next();
//});

const Response = mongoose.model("response", responseSchema);
module.exports = Response;