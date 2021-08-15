const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({

    title:{
        type: String, 
        require: [true, "The post must have a title"]
    },

    body:{
        type: String, 
        require:[true, "The post cannot be empty"]
    }
});

const Post  = mongoose.model("Post", postSchema);
module.exports = Post; 