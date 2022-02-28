const { default: mongoose } = require("mongoose");
const Community = require("../models/CommunitySchema");

exports.communityGetById = async (req, res) => {
    const { id } = req.params;

    const community = await Community.findById(id).populate("_category").populate("_users");

    if (community) {
        res.send(community);
    }
    else {
        res.status(404).send({message: "Community not found"});
    }
};

exports.communityCreate = async (req, res) => {
    const { body } = req;

    const community = new Community(body);

    await community
    .save()
    .then(() => {
        res.send(community);
        console.log("Succesful community creation");
    })
    .catch((err) => {
        console.log("Could not create a community", err);
        res.status(500).send({message: "Could not create a community", err});
    });
}

exports.communityUpdate = async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    const community = await Community.findById(id);

    if (community) {
        await community.updateOne(body)
        res.send();
    }
    else {
        res.status(404).send({message: "Community not found. Could not update data"});
    }
};

exports.communityDelete = async (req, res) => {
    const { id } = req.params;

    const community = await Community.findById(id);

    if (community) {
        await community.deleteOne();
        res.send();
    }
    else {
        res.status(404).send({message: "Community not found. Could not delete data"});
    }
};

exports.communityGetAmountOfUsers = async (req, res) => {
    var { id } = req.params;

    id = mongoose.Types.ObjectId(id);
    const community = await Community
        .aggregate([
            { $match: { _id: id } },
            { $project: { amount_users: { $size: "$_users" } } }
        ]);

    if (community) {
        res.send(community);
    }
    else {
        res.status(404).send({message: "Community not found"});
    }
};

exports.communityAddUser = async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    const community = await Community.findById(id);

    if (community) {
        await community.updateOne(
            { 
                $addToSet: { 
                    _users: body 
                } 
            }
        );
        res.send(community);
    }
    else {
        res.status(404).send({message: "Community not found. Could not update data"});
    }
};

exports.communityAddCategory = async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    const community = await Community.findById(id);

    if (community) {
        await community.updateOne(
            { 
                $addToSet: { 
                    _category: body 
                } 
            }
        );
        res.send(community);
    }
    else {
        res.status(404).send({message: "Community not found. Could not update data"});
    }
};