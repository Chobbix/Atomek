const bodyParser = require("body-parser");
const express = require("express");
require("./models/connection");

/**
 * Route requires
 */

const userRouter = require("./routes/UserRoutes");
const postRouter = require("./routes/PostRoutes");
const categoryRouter = require("./routes/CategoryRoutes");
const communityRouter = require("./routes/CommunityRoutes");
const streakRouter = require("./routes/StreakRoutes");
const tagRouter = require("./routes/TagRoutes");
const subscriptionRouter = require("./routes/SubscriptionRoutes");
const responseRouter = require("./routes/ResponseRoutes");
const likeRouter = require("./routes/LikeRoutes");
const followRouter = require("./routes/FollowRoutes");
const commentRouter = require("./routes/CommentRoutes");

const app = express();
const port = 5000;

app.use(bodyParser.json());

app.use("/api", userRouter);
app.use("/api", postRouter);
app.use("/api", categoryRouter);
app.use("/api", communityRouter);
app.use("/api", streakRouter);
app.use("/api", tagRouter);
app.use("/api", subscriptionRouter);
app.use("/api", responseRouter);
app.use("/api", likeRouter);
app.use("/api", followRouter);
app.use("/api", commentRouter);

app.listen(port, () => {
    console.log("Application listening port: " + port);
});