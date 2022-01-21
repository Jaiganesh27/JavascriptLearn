// basic http methods are get , post put , delete
var express = require('express')
var app = express()
app.listen(3002,'localhost',(req,res)=>{
    console.log('server has been connected!');
});
var middle1 = function (req,res,next){
    console.log('i am in middlewre');
    next() //if we does not give next it will hang into this like no moving next part
}
// app.use used for executing middleware functions in exprers
app.use(middle1)
app.get('/',(req,res)=>{
    console.log('after middleware function');
    res.send('hii jai i am doing good!');
    res.end();
})





// only tried with postman 
app.get('/jai',(req,res)=>{
  res.send('i am in home page i am get method');
});  
  app.put('/jai',(req,res)=>{
    res.send('i am in home page i am put method');
  });
  app.post('/jai',(req,res)=>{
    res.send('i am in home page i am post method');
  });  
  app.delete('/jai',(req,res)=>{
    res.send('i am in home page i am delete method');
  });
// will always checks for all http methods
app.all('/jaiganesh',(req,res)=>{
    res.send('i am in home page with all method');
  });
