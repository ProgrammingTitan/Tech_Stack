const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
    title: {type: String, required:true},
    image: {type:String, required: true},
    date: {type: String, required: true},
    category: {type:String, required: true},
    author: {type:String, required: true},
    body: {type:String, required: true},
    handleType: {type:String, required: true},
    handle: {type:String, required: true},
});

module.exports = Article = mongoose.model("Article", articleSchema);