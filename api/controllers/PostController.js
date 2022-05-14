const Post = require("../models/PostSchema");
const Community = require("../models/CommunitySchema");
const ImageUploader = require("../utils/ImageUploader");

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

    const posts = await Post.find({_community: communityId}).populate("_user", "username image").populate("_streak", "_id title").populate("_community", "_id name").sort({date_create: -1});

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

exports.postUpdateImage = async (req, res) => {
    const { id } = req.params;
    const { body, headers } = req;

    if (!req.is("image/*")) {
        return res.status(415).send({message: "Unsupported media type. Should be an image file"});
    }

    const post = await Post.findById(id);

    if (!post) {
        return res.status(404).send({message: "Poster not found. Could not update image"});
    }

    const imageUploader = new ImageUploader();

    const imageUrl = await imageUploader.upload(body, headers["content-type"]);

    if (imageUrl) {
        await post.updateOne({image: imageUrl});
        res.send();
    }
    else {
        res.status(500).send({message: "Image could not be uploaded"});
    }
}

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

exports.postGetPostsByUser = async (req, res) => {
    const { userId } = req.params;

    const posts = await Post.find({_user: userId}).populate("_user", "username image")
                                                .populate("_streak", "_id title")
                                                .populate("_community", "_id name");

    res.send(posts);
};

exports.postGetPostsByUserCommunities = async (req, res) => {
    const { userId } = req.params;

    const communities = await Community.find({_users: userId}).select('_id');

    const posts = await Post.find({
        _community: { $in: 
            communities
        }
    }).populate("_user", "username image").populate("_streak", "_id title").populate("_community", "_id name active").sort({date_create: -1});

    res.send(posts);
};