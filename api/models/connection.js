const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false", {
    useNewUrlParser: true
})
.then(() => {
    console.log("Successful connection to the database");
})
.catch(() => {
    console.log("Could not connect to the database");
    process.exit();
})