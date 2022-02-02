const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    try{
    res.send("i ma reviewrouter get method").status(200)
    }
    catch(err){
    console.log(err);
    }
    finally{
        console.log('I am finally block');
    }
})

module.exports = router;