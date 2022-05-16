const { default: mongoose } = require("mongoose");
const Streak = require("../models/StreakSchema");
const Subscription = require("../models/SubscriptionSchema");
const verifyToken = require("../utils/TokenVerify");

exports.streakGetById = async (req, res) => {
    const { id } = req.params;
    const auth = req.get('authorization');

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
    const auth = req.get('authorization');

    const streak = new Streak(body);

    await streak
    .save()
    .then(() => {
        res.send(streak);
        console.log("Succesful streak creation");
    })
    .catch((err) => {
        console.log("Could not create a streak", err);
        res.status(500).send({message: "Could not create a streak", err});
    });
}

exports.streakUpdate = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    const auth = req.get('authorization');

    const streak = await Streak.findById(id);

    if (streak) {
        await streak.updateOne(body)
        res.send();
    }
    else {
        res.status(404).send({message: "Streak not found. Could not update data"});
    }
};

exports.streakDelete = async (req, res) => {
    const { id } = req.params;
    const auth = req.get('authorization');

    const streak = await Streak.findById(id);

    if (streak) {
        await streak.deleteOne();
        res.send();
    }
    else {
        res.status(404).send({message: "Streak not found. Could not delete data"});
    }
};

exports.streakGetByCommunity = async (req, res) => {
    const { communityId } = req.params;
    const auth = req.get('authorization');

    const streak = await Streak.find({_community: communityId, active: true}).populate("_community").populate("_user");

    if (streak) {
        res.send(streak);
    }
    else {
        res.status(404).send({message: "Streak not found"});
    }
};

exports.streakGetByCommunityIfUserIsSubscribed = async (req, res) => {
    const { communityId } = req.params;
    const { userId } = req.params;
    const auth = req.get('authorization');

    const reponseSubscriptions = await Subscription
        .aggregate([
            { $match: { _user: mongoose.Types.ObjectId(userId)} },
            { 
                $group: { 
                    _id: "$_user",
                    subscriptions_streak: { $push: "$_streak" } 
                }
            }
        ]);

    let streak;

    if (reponseSubscriptions != ''){
        streak = await Streak
            .aggregate([
                { $match: { _community: mongoose.Types.ObjectId(communityId)} },
                { 
                    $project: { 
                        title: "$title",
                        type: "$type",
                        _community: "$_community",
                        date_create: "$date_create",
                        isSubscribed: { 
                            $cond: { if: { $in: [ "$_id", reponseSubscriptions[0].subscriptions_streak ] }, then: true, else: false }
                        }
                    }
                }
            ]);
    }
    else {
        streak = await Streak
            .aggregate([
                { $match: { _community: mongoose.Types.ObjectId(communityId)} }
            ]);
    }

    if (streak) {
        res.send(streak);
    }
    else {
        res.status(404).send({message: "Streak not found"});
    }
};