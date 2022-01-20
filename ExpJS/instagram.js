var express = require('express');
var router = express.Router();

router.get('/',(req,res)=>{
    res.redirect("https://www.instagram.com");
})
router.get('/register',(req,res)=>{
    res.redirect("https://www.instagram.com/accounts/emailsignup");
})
router.get('/fpass',(req,res)=>{
    res.redirect("https://www.instagram.com/accounts/password/reset");
})

module.exports = router;