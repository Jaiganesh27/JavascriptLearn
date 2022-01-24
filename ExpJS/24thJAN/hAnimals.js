var express = require('express')
var app = express()
var router = express.Router()

router.route('/')
.get(function(req,res){
    res.send('home animals - get called');
})
.post(function(req,res){
    res.send('home animals - post called');
})
.put(function(req,res){
    res.send('home animals - put called');
})
.delete(function(req,res){
    res.send('home animals - delete called');
})
module.exports = router;