var express = require('express');
var router = express.Router();

router.get('/',(req,res)=>{
    res.redirect("https://mail.google.com");
})
router.get('/register',(req,res)=>{
    res.redirect("https://accounts.google.com/signup/v2/webcreateaccount?service=mail&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&flowName=GlifWebSignIn&flowEntry=SignUp");
})
router.get('/signup',(req,res)=>{
    res.redirect("https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&service=mail&sacu=1&rip=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin");
})

module.exports = router;