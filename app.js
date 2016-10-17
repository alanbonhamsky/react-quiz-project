// Node Server config

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
app.use(express.static(path.join(__dirname, 'public')))

app.use(bodyParser.json())
var host = process.env.HOST || 'localhost'
var port = process.env.PORT || 8080
var url = "http://" + host + ":" + port;

app.get('/', function(req, res) {
  //res.sendFile(path.join(__dirname, 'public', 'index.html'))
  res.send("Quiz Project")
})

app.listen(port, function() {
  console.log("App listening at port - " + port)
})

