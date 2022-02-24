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
        console.log("Could not create a user");
    });

    res.send(community);
}