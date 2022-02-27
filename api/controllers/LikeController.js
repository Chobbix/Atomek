const Like = require("../models/LikeSchema");
const Post = require("../models/PostSchema");
const User = require("../models/UserSchema");

exports.likeGetAll = async (req, res) => {
    const { postId } = req.params;

    const post = await Post.findById(postId);

    if (!post) {
        res.status(404).send({message: "Post not found"});
    }

    const like = await Like.findOne({_post: postId}).populate("_users", "username image");

    if (like) {
        res.send(like._users);
    }

    res.send([]);
};

exports.likeAdd = async (req, res) => {
    const { postId } = req.params;
    const { body } = req;

    const post = await Post.findById(postId);

    if (!post) {
        res.status(404).send({message: "Post not found"});
    }

    const user = await User.findById(body._user);

    if (!user) {
        res.status(400).send({message: "Invalid User Id"});
    }

    let like = await Like.findOne({_post: postId});

    if (like) {
        like._users.push(user._id);
    } else {
        try {
            like = new Like({
                _post: postId,
                _users: [user._id]
            });
        } catch (e) {
            console.log("Could not create a like", e);
            res.status(500).send({message: e});
        }
    }

    await like.save();

    post.likesCount = post.likesCount + 1;

    await post.save();

    res.send();
};

exports.likeRemove = async (req, res) => {
    const { postId } = req.params;
    const { body } = req;

    const post = await Post.findById(postId);

    if (!post) {
        res.status(404).send({message: "Post not found"});
    }

    const user = await User.findById(body._user);

    if (!user) {
        res.status(400).send({message: "Invalid User Id"});
    }

    let like = await Like.findOne({_post: postId});

    if (like) {
        like._users.remove(user._id);

        await like.save();
    }

    post.likesCount = post.likesCount - 1;

    await post.save();

    res.send();
};