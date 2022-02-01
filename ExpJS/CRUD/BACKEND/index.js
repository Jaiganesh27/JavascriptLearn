var express = require('express')
var app = express();
var student = require('./routing')
require('./database')
app.use('/student',student);


app.get("/",(req ,res)=>{
 res.send("Hii I am Send Request!");
})

app.listen(3000,(err)=>{
    if(err) throw err;
    console.log("Connected");
});