const Tag = require("../models/TagSchema");

exports.tagGetAll = async (req, res) => {
    const { userId } = req.params;

    const tags = await Tag.find({_user: userId});

    res.send(tags);
};

exports.tagCreate = async (req, res) => {
    const { userId } = req.params;
    const { body } = req;
    body._user = userId;

    const tag = new Tag(body);

    try {
        await tag.save();

        console.log("Successful tag creation", tag);
        res.send(tag);
    } catch (e) {
        console.log("Could not create a tag", e);
        res.status(500).send(e);
    }
};

exports.tagUpdate = async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    const tag = Tag.findById(id);

    if (tag) {
        await tag.updateOne(body);

        res.send();
    } else {
        res.status(404).send({message: "Tag not found. Could not update data"});
    }
};

exports.tagDelete = async (req, res) => {
    const { id } = req.params;

    const tag = Tag.findById(id);

    if (tag) {
        await tag.deleteOne();

        res.send();
    } else {
        res.status(404).send({message: "Tag not found. Could not delete data"});
    }
};