const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/blogDb')

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const Schema = mongoose.Schema;

var NewBlogSchema = new Schema({
    blogHead: String,
    blogDate: String,
    blogContent: String
});

var BlogData = mongoose.model('blogcontent', NewBlogSchema);
module.exports = BlogData;