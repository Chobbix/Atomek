const Category = require("../models/CategorySchema");

exports.categoryGetById = async (req, res) => {
    const { id } = req.params;

    const category = await Category.findById(id);

    if (category) {
        res.send(category);
    }
    else {
        console.log("category not found");
        res.status(404).send({message: "category not found"});
    }
};

exports.categoryCreate = async (req, res) => {
    const { body } = req;

    const category = new Category(body);

    await category
    .save()
    .then(() => {
        res.send(category);
        console.log("Succesful category creation");
    })
    .catch((err) => {
        console.log("Could not create a category", err);
        res.status(500).send({message: "Could not create a category", err});
    });
}

exports.categoryUpdate = async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    const category = await Category.findById(id);

    if (category) {
        await category.updateOne(body)
        res.send();
    }
    else {
        res.status(404).send({message: "Community not found. Could not update data"});
    }
};

exports.categoryDelete = async (req, res) => {
    const { id } = req.params;

    const category = await Category.findById(id);

    if (category) {
        await category.deleteOne();
        res.send();
    }
    else {
        res.status(404).send({message: "Category not found. Could not delete data"});
    }
};