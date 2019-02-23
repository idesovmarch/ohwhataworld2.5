// Setup
var express = require('express');
var app = express();
var mongoose = require('mongoose');

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var db = require('./config/key').mongoURI;

mongoose
  .connect(db)
  .then(() => console.log('mongoDB Connected'))
  .catch(err => console.log(err));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// Routes
app.get('/', (req, res) => {
  res.render('blogIndex');
});

// Listen
app.listen(3000, () => {
  console.log('Server listing on 3000');
});

var postSchema = new mongoose.Schema({ body: String });

var Post = mongoose.model('Post', postSchema);

app.post('/addpost', (req, res) => {
  var postData = new Post(req.body);
  postData
    .save()
    .then(result => {
      res.redirect('/');
    })
    .catch(err => {
      res.status(400).send('Unable to save data');
    });
});

app.get('/', (req, res) => {
  Post.find({}, (err, posts) => {
    res.render('blogIndex', { posts: posts });
  });
});
