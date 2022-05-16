const Comment = require("../models/CommentSchema");
const verifyToken = require("../utils/TokenVerify");

exports.commentGetAll = async (req, res) => {
    const { postId } = req.params;

    const comments = await Comment.find({_post: postId}).populate("_user", "username image");
    
    res.send(comments);
};

exports.commentCreate = async (req, res) => {
    const { postId } = req.params;
    const { body } = req;
    body._post = postId;

    const comment = new Comment(body);

    try {
        await comment.save();

        console.log("Successful comment creation", comment);
        res.send(comment);
    } catch (e) {
        console.log("Could not create comment", e);
        res.status(500).send(e);
    }
};

exports.commentUpdate = async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    const comment = await Comment.findById(id);

    if (comment) {
        await comment.updateOne(body);

        res.send();
    } else {
        res.status(404).send({message: "Comment not found. Could not update data"});
    }
};

exports.commentDelete = async (req, res) => {
    const { id } = req.params;

    const comment = await Comment.findById(id);

    if (comment) {
        await comment.deleteOne();

        res.send();
    } else {
        res.status(404).send({message: "Comment not found. Could not delete data"});
    }
};