const bodyParser = require("body-parser");
const express = require("express");
require("./models/connection");

/**
 * Route requires
 */

const userRouter = require("./routes/UserRoutes");

const app = express();
const port = 5000;

app.use(bodyParser.json());

app.use("/api", userRouter);

app.listen(port, () => {
    console.log("Application listening port: " + port);
});