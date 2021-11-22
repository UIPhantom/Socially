//Mongoose initialization
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    }
});

const user = mongoose.model("user", userSchema);

module.exports = user;