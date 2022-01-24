var express = require('express')
var app = express()
var mysql = require('mysql')
var conn = mysql.createConnection({
    host:"localhost",
  user:"root",
  password:"MySqlRoot12345",
  database:'fruits',
})

conn.connect((err)=>{
    if(err) throw err;
    console.log("DB Connected!");
})


module.exports = conn;