const Subscription = require("../models/SubscriptionSchema");

exports.subscriptionGetById = async (req, res) => {
    const { id } = req.params;

    const subscription = await Subscription.findById(id).populate("_user").populate("_streak").populate("_tags");

    if (subscription) {
        res.send(subscription);
    }
    else {
        res.status(404).send({message: "subscription not found"});
    }
};

exports.subscriptionCreate = async (req, res) => {
    const { streakId } = req.params;
    const { body } = req;
    body._streak = streakId;

    const subscription = new Subscription(body);

    await subscription
    .save()
    .then(() => {
        res.send(subscription);
        console.log("Succesful subscription creation");
    })
    .catch((err) => {
        console.log("Could not create a subscription", err);
        res.status(500).send({message: "Could not create a subscription", err});
    });
}

exports.subscriptionUpdate = async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    const subscription = await Subscription.findById(id);

    if (subscription) {
        await subscription.updateOne(body)
        res.send();
    }
    else {
        res.status(404).send({message: "Subscription not found. Could not update data"});
    }
};

exports.subscriptionDelete = async (req, res) => {
    const { id } = req.params;

    const subscription = await Subscription.findById(id);

    if (subscription) {
        await subscription.deleteOne();
        res.send();
    }
    else {
        res.status(404).send({message: "Subscription not found. Could not delete data"});
    }
};

exports.subscriptionGetSubscriptionByStreakAndUser = async (req, res) => {
    const { streakId } = req.params;
    const { userId } = req.params;

    const subscription = await Subscription.findOne({ _streak: streakId, _user: userId }).populate("_user").populate("_streak").populate("_tags");

    if (subscription) {
        res.send(subscription);
    }
    else {
        res.status(404).send({message: "subscription not found"});
    }
};