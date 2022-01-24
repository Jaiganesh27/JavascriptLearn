var express = require('express')
var app = express()
port = 3000;
var wanimalsRoute = require('./wildAnimals')
var asyncAwait = require('./asyncawait')

var midwar1 = function(req,res,next){
    console.log('Middle ware between req and res');
    next()
}
app.use('/wAnimals',function(req,res,next){
    console.log('Middle ware redirect to wanimals route page');
    next()
})
app.use(midwar1);

app.get('/',function(req,res){
    console.log('hii jaiganesh')
    res.send('Animals Home Page');
})


app.use('/wAnima?ls',wanimalsRoute)
app.use('/async',asyncAwait)
app.listen(port,function(){
console.log('Server Connected!');
})



