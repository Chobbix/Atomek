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
        console.log("Succesful community creation");
    })
    .catch(() => {
        console.log("Could not create a community");
    });

    res.send(community);
}

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