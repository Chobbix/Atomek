const User = require("../models/UserSchema");

exports.userGetById = async (req, res) => {
    const id = req.params.id;

    const data = User.findById(id);

    res.send(data);
};

exports.userCreate = async (req, res) => {
    const { body } = req;

    const user = new User(body);

    await user
    .save()
    .then(() => {
        console.log("Succesful user creation");
    })
    .catch(() => {
        console.log("Could not create a user");
    });

    res.send(user);
}