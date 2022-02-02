const { application } = require('express');
const express = require('express')
const app = express()
const productRouter = require('./routes/productRouter.js')
const reviewRouter = require('./routes/reviewRouter.js')
// const db = require('./models')


app.use(express.json());
// home page get method 
app.get('/',(req,res)=>{
    res.json(`Start Page Working`);


})
//route
app.use('/products',productRouter)
app.use('/reviews',reviewRouter)
//port
const PORT = 3005;

//server declarations
app.listen(PORT,(err)=>{
    if(err) throw err;
    console.log(`Server Connected and server port is ${PORT}`);
})