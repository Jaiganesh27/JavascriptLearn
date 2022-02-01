var express = require('express')
var app = express();
var router =  express.Router();
var good = require('./good')
router.post('/add',(req,res)=>{
    console.log(req.body,"req from add")
    res.json("post method hitted").status(400);
})
router.get('/list',(req,res)=>{
    console.log(req.body,"req from list")
    res.json("i am get method").status(200)
})
router.get('/list/:id',(req,res)=>{
    console.log(req.body,"req from list id")  
})
router.put('/update',(req,res)=>{
    console.log(req.body,"req from delete")
})
router.delete('/delete',(req,res)=>{
    console.log(req.body,"req from update")
})
app.use('/good',good)

module.exports = router