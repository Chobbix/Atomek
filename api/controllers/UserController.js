const User = require("../models/UserSchema");

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