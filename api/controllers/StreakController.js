const Streak = require("../models/StreakSchema");

exports.streakGetById = async (req, res) => {
    const { id } = req.params;

    const streak = await Streak.findById(id).populate("_community").populate("_user");

    if (streak) {
        res.send(streak);
    }
    else {
        res.status(404).send({message: "Streak not found"});
    }
};

exports.streakCreate = async (req, res) => {
    const { body } = req;

    const streak = new Streak(body);

    await streak
    .save()
    .then(() => {
        console.log("Succesful streak creation");
    })
    .catch(() => {
        console.log("Could not create a streak");
    });

    res.send(streak);
}