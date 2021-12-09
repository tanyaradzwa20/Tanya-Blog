const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required :true
    },
    content: {
        type: String,
        required: true,
    },
    postedAt: {
        type: String,
        default: new Date().toString(),
    },
    image:{
        data:Buffer,
        contentType:String
    }
}) 
const Blog = mongoose.model("Blog", BlogSchema);

module.exports = Blog;