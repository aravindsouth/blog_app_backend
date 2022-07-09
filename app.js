const express = require('express');

// environment variable setup
const path = require ('path');
const dotenv = require('dotenv')
dotenv.config({path:__dirname+'/.env'});

const BlogData = require('./src/model/Blogdata');
const CommentData = require('./src/model/Commentdata');
const cors = require('cors');

const PORT = process.env.PORT || 3000;

const app = express();

// const port = 3000;
app.use(cors());

// app.get('/', (req, res) => {
//     res.send('Hello from express');
// });


app.get('/', (req,res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET POST");
    BlogData.find()
    .then(function(blogcontents) {
        res.send(blogcontents);
        console.log(blogcontents);
    });

})

app.get('/comments', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET POST");
    CommentData.find()
    .then(function(comment) {
        res.send(comment);
        console.log(comment);
    });
})

app.listen(PORT,()=>{
    console.log(`Server Ready on ${PORT}`);
});
