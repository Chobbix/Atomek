const Tag = require("../models/TagSchema");

exports.tagGetById = async (req, res) => {
    const { id } = req.params;

    const tag = await Tag.findById(id).populate("_user");

    if (tag) {
        res.send(tag);
    }
    else {
        res.status(404).send({message: "tag not found"});
    }
};

exports.tagCreate = async (req, res) => {
    const { body } = req;

    const tag = new Tag(body);

    await tag
    .save()
    .then(() => {
        console.log("Succesful tag creation");
    })
    .catch(() => {
        console.log("Could not create a tag");
    });

    res.send(tag);
}