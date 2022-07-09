const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/blogDb');

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const Schema = mongoose.Schema;
var CommentSchema = new Schema({
    commentorName: String,
    commentDate: String,
    commentContent: String
});

var CommentData = mongoose.model('blogcomment', CommentSchema);

module.exports = CommentData;
