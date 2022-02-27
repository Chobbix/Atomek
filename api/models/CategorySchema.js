const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
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
});

const Category = mongoose.model("category", categorySchema);
module.exports = Category;