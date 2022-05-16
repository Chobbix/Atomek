const Tag = require("../models/TagSchema");
const verifyToken = require("../utils/TokenVerify");

exports.tagGetAll = async (req, res) => {
    const { userId } = req.params;
    const auth = req.get('authorization');

    if (!verifyToken(auth)) {
        res.status(401).send({message: "Token invalid"});
        return;
    }
    
    const tags = await Tag.find({_user: userId});

    res.send(tags);
};

exports.tagCreate = async (req, res) => {
    const { userId } = req.params;
    const { body } = req;
    const auth = req.get('authorization');
    body._user = userId;

    if (!verifyToken(auth)) {
        res.status(401).send({message: "Token invalid"});
        return;
    }
    
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
    const auth = req.get('authorization');

    if (!verifyToken(auth)) {
        res.status(401).send({message: "Token invalid"});
        return;
    }
    
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
    const auth = req.get('authorization');

    if (!verifyToken(auth)) {
        res.status(401).send({message: "Token invalid"});
        return;
    }
    
    const tag = Tag.findById(id);

    if (tag) {
        await tag.deleteOne();

        res.send();
    } else {
        res.status(404).send({message: "Tag not found. Could not delete data"});
    }
};