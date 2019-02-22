// Setup
var express = require('express');
var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ohwhataworld2.0');

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// Routes
app.get('/', (req, res) => {
  res.render('index');
});

// Listen
app.listen(3000, () => {
  console.log('Server listing on 3000');
});
