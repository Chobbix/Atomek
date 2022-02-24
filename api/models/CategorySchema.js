const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        minlength: 4,
        maxlength: 15
    }
});

const Category = mongoose.model("category", categorySchema);
module.exports = Category;