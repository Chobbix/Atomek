const Follow = require("../models/FollowSchema");
const User = require("../models/UserSchema");
const verifyToken = require("../utils/TokenVerify");

exports.followGetAll = async (req, res) => {
    const { userId } = req.params;
    const auth = req.get('authorization');

    if (!verifyToken(auth)) {
        res.status(401).send({message: "Token invalid"});
        return;
    }
    
    const user = await User.findById(userId);

    if (!user) {
        res.status(404).send({message: "User not found"});
        return;
    }

    const follow = await Follow.findOne({_user: userId}).populate("_follows", "username image");

    if (follow) {
        res.send(follow._follows);
        return;
    }

    res.send([]);
};

exports.followAdd = async (req, res) => {
    const { userId } = req.params;
    const { body } = req;
    const auth = req.get('authorization');

    if (!verifyToken(auth)) {
        res.status(401).send({message: "Token invalid"});
        return;
    }
    
    const user = await User.findById(userId);

    if (!user) {
        res.status(404).send({message: "User not found"});
        return;
    }

    const followUser = await User.findById(body.followUser);

    if (!followUser) {
        res.status(400).send({message: "Invalid Follow User Id"});
        return;
    }

    let follow = await Follow.findOne({_user: userId});

    if (follow) {
        follow._follows.push(followUser._id);
    } else {
        try {
            follow = new Follow({
                _user: userId,
                _follows: [followUser._id]
            });
        } catch (e) {
            console.log("Could not create a follow", e);
            res.status(500).send({message: e});
        }
    }

    await follow.save();

    followUser.followersCount = followUser.followersCount + 1;

    await followUser.save();

    res.send();
};

exports.followRemove = async (req, res) => {
    const { userId } = req.params;
    const { followUserId } = req.params;
    const auth = req.get('authorization');

    if (!verifyToken(auth)) {
        res.status(401).send({message: "Token invalid"});
        return;
    }
    
    const user = await User.findById(userId);

    if (!user) {
        res.status(404).send({message: "User not found"});
        return;
    }

    const followUser = await User.findById(followUserId);

    if (!followUser) {
        res.status(400).send({message: "Invalid Follow User Id"});
        return;
    }

    const follow = await Follow.findOne({_user: userId});

    if (follow) {
        follow._follows.remove(followUser._id);

        await follow.save();

        followUser.followersCount = followUser.followersCount - 1;

        await followUser.save();
    }

    res.send();
};