var express = require('express')
var app = express();
var router =  express.Router();
router.post('/',(req,res)=>{
    console.log(req.body,"req from add")
    res.json("post method hitted").status(400);
})
router.get('/',(req,res)=>{
    console.log(req.body,"req from list")
    res.json("i am get method").status(200)
})
router.put('/',(req,res)=>{
    console.log(req.body,"req from delete")
})
router.delete('/',(req,res)=>{
    console.log(req.body,"req from update")

    app.use('/good',good)
})

module.exports = router