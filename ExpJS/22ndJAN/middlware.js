var express = require('express')
var app = express();



// var vari =function (err, req, res, next) {
//     console.error(err)
//     res.send('Something broke!')
//   }

app.use('/',function (req, res, next) {
    console.error(err)
    console.log("i am middleware");
    res.status(500).send('Something broke!')
    console.log("i am middleware");
  })
// app.use(vari());


   

app.get('/',(req,res)=>{
     console.log('response in get');
     res.send('hi hello');
})

app.listen(3002,'localhost',()=>{
    console.log('Server Connected!');
});

