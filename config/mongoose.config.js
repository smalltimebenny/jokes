const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/jokes", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Made connection to your database."))
    .catch(err => console.log("This wasn't supposed to happen.", err));