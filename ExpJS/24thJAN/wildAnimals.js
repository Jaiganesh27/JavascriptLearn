var express = require('express')
var app = express()
var router = express.Router()
var hAnimals = require('./hAnimals');
//routing from one router to another
router.use('/hAnimals',hAnimals);

router.get('/',(req,res)=>{
    res.send('wild animals - get called');
})
router.post('/',(req,res)=>{
    res.send('wild animals - post called');
})
router.put('/',(req,res)=>{
    res.send('wild animals - put called');
})
router.delete('/',(req,res)=>{
    res.send('wild animals - delete called');
})


module.exports = router;