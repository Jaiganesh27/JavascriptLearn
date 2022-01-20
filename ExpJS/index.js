var express = require('express');
var app = express();
var youtube = require('./youtube.js');
var instagram = require('./instagram.js');
var gmail = require('./test/gmail.js');
var db = require('./test/database');
app.post('/',function (req,res){
  res.send('good morning user jai');
})

app.use('/youtube', youtube)
app.use('/instagram', instagram)
app.use('/gmail',gmail)
app.listen(3001,()=>{
  console.log("Server Connected!");
});