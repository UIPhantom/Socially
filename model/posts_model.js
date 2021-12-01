const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    post: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
},{
    timestamps: true
});

const Post = mongoose.model("post" , postSchema);

module.exports = Post;