const { default: mongoose } = require("mongoose");
const User = require("../models/UserSchema");
const Like = require("../models/LikeSchema")
const Community = require("../models/CommunitySchema");
const Post = require("../models/PostSchema");
const Subscription = require("../models/SubscriptionSchema");
const ImageUploader = require("../utils/ImageUploader");

exports.userGetById = async (req, res) => {
    const { id } = req.params;

    const user = await User.findById(id);

    if (user) {
        res.send(user);
    }
    else {
        res.status(404).send({message: "User not found"});
    }
};

exports.userLogin = async (req, res) => {
    const { body } = req;

    const user = await User.findOne({email: body.email, password: body.password});

    if (user) {
        res.send(user);
    }
    else {
        res.status(404).send({message: "User not found"});
    }
};

exports.userCreate = async (req, res) => {
    const { body } = req;

    const user = new User(body);

    try {
        await user.save();

        console.log("Succesful user creation", user);
        res.send(user);
    } catch (e) {
        console.log("Could not create a user", e);
        res.status(500).send(e);
    }
};

exports.userUpdate = async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    const user = await User.findById(id);

    if (user) {
        await user.updateOne(body)

        res.send();
    }
    else {
        res.status(404).send({message: "User not found. Could not update data"});
    }
};

exports.userDelete = async (req, res) => {
    const { id } = req.params;

    const user = await User.findById(id);

    if (user) {
        await user.deleteOne();

        res.send();
    }
    else {
        res.status(404).send({message: "User not found. Could not delete data"});
    }
};

exports.userUpdateImage = async (req, res) => {
    const { id } = req.params;
    const { body, headers } = req;

    if (!req.is("image/*")) {
        return res.status(415).send({message: "Unsupported media type. Should be an image file"});
    }

    const user = await User.findById(id);

    if (!user) {
        return res.status(404).send({message: "User not found. Could not update image"});
    }

    const imageUploader = new ImageUploader();

    const imageUrl = await imageUploader.upload(body, headers["content-type"]);

    if (imageUrl) {
        await user.updateOne({image: imageUrl});
        res.send();
    }
    else {
        res.status(500).send({message: "Image could not be uploaded"});
    }
}

exports.userGetAmountOfLikes = async (req, res) => {
    const { id } = req.params;

    const amountLikes = await Like
        .aggregate([
            { $match: { _users: {$eq: mongoose.Types.ObjectId(id)} } },
            { $count: "amount_likes" }
        ]);

    if (amountLikes) {
        res.send(amountLikes[0]);
    }
    else {
        res.status(404).send({message: "User not found"});
    }
};

exports.userGetAmountOfCommunities = async (req, res) => {
    const { id } = req.params;

    const amountCommunities = await Community
        .aggregate([
            { $match: { _users: {$eq: mongoose.Types.ObjectId(id)} } },
            { $count: "amount_communities" }
        ]);

    if (amountCommunities) {
        res.send(amountCommunities[0]);
    }
    else {
        res.status(404).send({message: "User not found"});
    }
};

exports.userGetAmountOfPosts = async (req, res) => {
    const { id } = req.params;

    const amountPosts = await Post
        .aggregate([
            { $match: { _user: mongoose.Types.ObjectId(id)} },
            { $count: "amount_posts" }
        ]);

    if (amountPosts) {
        res.send(amountPosts[0]);
    }
    else {
        res.status(404).send({message: "User not found"});
    }
};

exports.userGetAmountOfSubscriptions = async (req, res) => {
    const { id } = req.params;

    const amountSubscriptions = await Subscription
        .aggregate([
            { $match: { _user: mongoose.Types.ObjectId(id)} },
            { $count: "amount_subscriptions" }
        ]);

    if (amountSubscriptions) {
        res.send(amountSubscriptions[0]);
    }
    else {
        res.status(404).send({message: "User not found"});
    }
};