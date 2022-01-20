var mysql = require('mysql');
var conn = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"MySqlRoot12345",
  database:'explearn',
});

conn.connect(function (err){
    if(err) throw err;
  
    console.log("DB connected!");
  });

var sql = "delete from posts where id=6";
conn.query(sql,function(err,result){
   if(err) throw err;
   console.log(result);
})

 sql = "select * from posts";
conn.query(sql,function(err,result){
   if(err) throw err;
   console.log(result);
})
module.exports = conn;