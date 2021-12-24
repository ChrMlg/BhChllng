const mongoose = require("mongoose");

const uri = process.env.URI;

const database = async () => {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to database");
    }
    catch (e) {
        console.log("Couldn't connect to database");
        process.exit(1);
    }
};

module.exports = database;