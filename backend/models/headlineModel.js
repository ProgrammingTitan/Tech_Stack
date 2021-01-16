const mongoose = require("mongoose");

const headlineSchema = new mongoose.Schema({
    title: {type: String, required:true},
    image: {type:String, required: true},
    date: {type: String, required: true},
    category: {type:String, required: true},
    articleLink: {type:String, required: true},
});

module.exports = Headline = mongoose.model("Headline", headlineSchema);