var express = require('express')
var router = express.Router();
var db = require('./database') 
var app = express()
var sqlscript;

router.get('/',(req,res)=>{
    console.log(req.query);
    let data;
    sqlscript = `select * from ${req.query.tablename}`;
    db.query(sqlscript, (err,result)=>{
        if(err) throw err;
        
        data =  result;
        console.log('data',data);
        res.send(data);
    })
   
})
router.post('/',(req,res)=>{
    sqlscript = `insert into ${req.query.tablename}(name,price,mfgdate,store,kg) values
    (${req.query.name},${req.query.price},${req.query.mfgdate},${req.query.store},${req.query.kg})`;
    db.query(sqlscript, (err,result)=>{
        if(err) throw err;
        console.log("Values Added Successful!");
        data =  result;
        console.log('data',data); 
        res.send(data)
    })
})
router.put('/',(req,res)=>{
    sqlscript =`update ${req.query.tablename} set ${req.query.rowname} = ${req.query.rowvalue} WHERE id = ${req.query.id}`;
    db.query(sqlscript, (err,result)=>{
        if(err) throw err;
        console.log('Values Updated Successfully!');
        data =  result;
        console.log('data',data); 
        res.send(data)
    })
})
router.delete('/',(req,res)=>{
    sqlscript = `delete from ${req.query.tablename} where id = ${req.query.id}`;
        db.query(sqlscript, (err,result)=>{
        if(err) throw err;
        console.log('Value Deleted Successfully!');
        data =  result;
        console.log('data',data); 
        res.send(data)
    })
  
})


module.exports = router;