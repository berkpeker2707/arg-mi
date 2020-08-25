const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxlength: 100
    },
    text:{
        type: String,
        required:true,
        maxlength: 1000
    },
    date: {
        type: Date,
        default: Date.now
    }
});


const Post = mongoose.model("Post", PostSchema);

module.exports = Post;