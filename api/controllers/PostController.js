const Post = require("../models/PostSchema");

exports.postGetById = async (req, res) => {
    const { id } = req.params;

    const post = await Post.findById(id).populate("_user", "username image");

    if (post) {
        res.send(post);
    } else {
        res.status(404).send({message: "Post not found"});
    }
};

exports.postGetAll = async (req, res) => {
    const { communityId } = req.params;

    const posts = await Post.find({_community: communityId}).populate("_user", "username image");

    res.send(posts);
};

exports.postCreate = async (req, res) => {
    const { communityId } = req.params;
    const { body } = req;
    body._community = communityId;

    const post = new Post(body);

    try {
        await post.save();

        console.log("Successful post creation", post);
        res.send(post);
    } catch (e) {
        console.log("Could not create post", e);
        res.status(500).send(e);
    }
};

exports.postUpdate = async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    const post = await Post.findById(id);

    if (post) {
        await post.updateOne(body);

        res.send();
    } else {
        res.status(404).send({message: "Post not found. Could not update data"});
    }
};

exports.postDelete = async (req, res) => {
    const { id } = req.params;
    
    const post = await Post.findById(id);

    if (post) {
        await post.deleteOne();

        res.send();
    } else {
        res.status(404).send({message: "Post not found. Could not delete data"});
    }
};