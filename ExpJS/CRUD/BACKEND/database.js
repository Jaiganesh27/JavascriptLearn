var express = require('express')
var app = express();
var mysql  = require('mysql')


con = mysql.createConnection({
  host:"localhost",
  password:"MySqlRoot12345",
  user:"root",
  database:"fruits"
})


con.connect((err)=>{
if(err) throw err;
console.log("DB Connected!");
})