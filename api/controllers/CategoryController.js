const Category = require("../models/CategorySchema");

exports.categoryGetById = async (req, res) => {
    const { id } = req.params;

    const category = await Category.findById(id);

    if (category) {
        res.send(category);
    }
    else {
        res.status(404).send({message: "category not found"});
    }
};

exports.categoryCreate = async (req, res) => {
    const { body } = req;

    const category = new Category(body);

    await category
    .save()
    .then(() => {
        console.log("Succesful category creation");
    })
    .catch(() => {
        console.log("Could not create a user");
    });

    res.send(category);
}