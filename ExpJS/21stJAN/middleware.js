// middleware are the function are has to be executed between req and res.
// it will be special things when we use after req and before res.
//it should have next statement to call after middleware works has beeen finished
// middleware initiated by app.use
var express  = require('express');
var app = express();
var router  = express.Router();
var middle1 = function(req,res,next){
     console.log('hii jaiganesh i m mw1');
     console.log('hii jai m1');
    // res.send('google');
    next()
}
var middle2 = function(req,res,next){
    console.log('hii jaiganesh i m mw1');
    console.log('hii jai m2');
//    res.send('google');
   next()
}
var middle3 = function(req,res,next){
    console.log('hii jaiganesh i m mw1');
    console.log('hii jai m3');
//    res.send('google');
   next()
}

app.use([middle2,middle1,middle3]);
app.get('/',(req,res)=>{
    console.log('after all middleware executions');
    res.send('good  bye');
    
})
// middleware using route
router.use('/jai/:id',function (req,res,next){
    console.log(req.params.id)
    console.log("he has been requested 1",req.method); 
    if(req.params.id == '2'){
        console.log('hii jai');
     next('route')
    }
    else next()
},//middle stack
function (req,res,next){
    console.log("he has been requested 2",req.method); 
    next()
})

app.get('/jai/:id',(req,res)=>{
    console.log('after all middleware executions');
    res.send('good  bye');
    
})

app.listen(3004,(req,res)=>{
    console.log('i am connected');
});