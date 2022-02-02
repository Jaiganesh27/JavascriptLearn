const db = require('../models/index.js');
const Product = db.products;

exports.create = async (req,res)=>{
    console.log("req in create ",req);
    const info = {
     title: req.body.title,
     price:req.body.price,
     description:req.body.description,
     published:req.body.published    
    };
    console.log(info)
    try{
     addProd = await Product.create(info);
     data = await addProd.json();
     res.status(200).send(addProd)
    }
    catch(err){
     res.status(500).send(err);
    }
}
