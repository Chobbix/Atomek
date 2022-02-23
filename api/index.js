const bodyParser = require("body-parser");
const express = require("express");
require("./models/connection");

const app = express();
const port = 5000;

app.use(bodyParser.json());

app.get("/api/hello-world", async (req, res) => {
    res.send("Hello world");
});

app.listen(port, () => {
    console.log("Application listening port: " + port);
});