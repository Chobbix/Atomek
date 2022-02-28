const Response = require("../models/ResponseSchema");

exports.responseGetById = async (req, res) => {
    const { id } = req.params;

    const response = await Response.findById(id).populate("_subscription");

    if (response) {
        res.send(response);
    }
    else {
        res.status(404).send({message: "response not found"});
    }
};

exports.responseCreate = async (req, res) => {
    const { body } = req;

    const response = new Response(body);

    await response
    .save()
    .then(() => {
        res.send(response);
        console.log("Succesful response creation");
    })
    .catch((err) => {
        console.log("Could not create a response", err);
        res.status(500).send({message: "Could not create a response", err});
    });
}

exports.responseUpdate = async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    const response = await Response.findById(id);

    if (response) {
        await response.updateOne(body)
        res.send();
    }
    else {
        res.status(404).send({message: "Response not found. Could not update data"});
    }
};

exports.responseDelete = async (req, res) => {
    const { id } = req.params;

    const response = await Response.findById(id);

    if (response) {
        await response.deleteOne();
        res.send();
    }
    else {
        res.status(404).send({message: "Response not found. Could not delete data"});
    }
};

exports.responsesGetByIdSubscription = async (req, res) => {
    const { id } = req.params;

    const response = await Response.find({_subscription: id});

    if (response) {
        res.send(response);
    }
    else {
        res.status(404).send({message: "responses not found"});
    }
};