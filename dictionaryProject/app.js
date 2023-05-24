var express = require('express');

var app = express();
var port = 8080

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.listen(port, () => console.log("Server start on port: " + port))

app.get('/', (req, res) => {

  var word= req.query.word;
  console.log(`here with word ${word}`);

  var query= require('./query');
  query.queryWord(word, res);
})