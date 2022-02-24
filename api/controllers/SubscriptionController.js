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
    const { body } = req;

    const subscription = new Subscription(body);

    await subscription
    .save()
    .then(() => {
        console.log("Succesful subscription creation");
    })
    .catch(() => {
        console.log("Could not create a subscription");
    });

    res.send(subscription);
}