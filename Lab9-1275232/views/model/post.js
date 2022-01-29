let mongoose = require("mongoose");
const Schema = mongoose.Schema;


const PostSchema = Schema({
    title : String ,
    author : String ,
    post_data : String,
    post_date : {
        type : Date,
        deafult : Date.now
    }
});

module.exports =  mongoose.model('post', PostSchema);