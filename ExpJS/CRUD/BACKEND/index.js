var express = require('express')
var app = express()
var db = require('./database')
var fruits = require('./routing')

app.use(express.json());
app.get('/',(req,res)=> {
    res.send('it is our landing page');
})


app.use('/fruits',fruits);

app.listen(3000,(err)=>{
   if(err) throw err
   console.log("Server Connected");
})