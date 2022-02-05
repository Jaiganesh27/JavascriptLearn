const { Op,DataTypes } = require('sequelize');
const db = require('../models/index.js');
const Product = db.products;

addProduct = async (req, res) => {
    console.log("req in create ", req);
    const info = {
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        published: req.body.published
    };
    console.log(info)

    console.log("try block");
    let addProd = await Product.create(info)
    console.log("data", addProd);
    res.status(200).send(addProd)
}

getAllProduct = async (req, res) => {
    let getAll = await Product.findAll({

    });
    res.status(200).send(getAll);
}
getOneProduct = async (req, res) => {
    let id = req.params.id;
    let getAll = await Product.findOne({
        where: {
            id: id
        }
    });
    res.status(200).send(getAll);
}
deleteProduct = async (req, res) => {
    let id = req.params.id;
    console.log("req.params.id", id)
    let getAll = await Product.destroy({
        where: {
            id: id
        }
    });
    res.status(200).send(getAll);
}
updateProduct = async (req, res) => {
    let id = req.params.id;
    let getAll = await Product.update(req.body, {
        where: {
            id: id
        }
    });
    res.status(200).send(getAll);
}
getSpecificAttrib = async (req, res) => {
    let getAll = await Product.findAll({
        //   attributes:['title','price'] normal attrib
        //   attributes:['title',['description','desc'],'price'] alias name
        //   attributes:[[sequelize.fn('COUNT',sequelize.col('price')),'price_count']]
    });
    res.status(200).send(getAll);
}
getWhereClause = async (req, res) => {
    let id = req.params.id;
    let getAll = await Product.findAll({
        where: {
            // id:id //basic default for = operator
            id: {
                // [Op.ne]:id
                // [Op.eq]:id
                // [Op.]
            }
        }
    });
    res.status(200).send(getAll);
}

Finders = async (req, res) => {
    let id = req.params.id;
    let title = req.body.title;
    // let  getAll = await Product.findByPk(id);


    // let  getAll = await Product.findAll({
    //     where:{
    //         id:id
    //     }
    // });


    let getAll = await Product.findAll({
        where: {
            // eq,or,and,ne,
            // [Op.or]:[{published:true},{id:id}]
            // [Op.and]:[{published:true},{id:id}]

            // published:{
                // [Op.ne]:false
            // }

            // id:{
            // [Op.lte]:id
            // [Op.ne]:id
            // [Op.lt]:id
            // [Op.gte]:id
            // [Op.gt]:id
            // [Op.between]:[10,15]
            // [Op.notBetween]:[10,15]
            // },

            title:{
            // [Op.in]: ["RealMe", "OnePlus"]
            // [Op.notIn]: ["RealMe", "OnePlus"]
            // [Op.like]: '%One'  
            // [Op.like]: 'One%'     
            // [Op.like]: '%One%'              
            // [Op.notLike]: '%One%'                 
            // [Op.startsWith]: 'One'                 
            // [Op.endsWith]: 'One'                  
            // [Op.substring]: 'One'
            // [Op.regexp]: '^[h|a|b]'
            // [Op.notRegexp]: '^[h|a|t]', 
            
            }
    
        }
    });

    // let  [getAll,BoolVal] = await Product.findOrCreate({
    //     where:{
    //             title:title,
    //         },
    //     defaults:{
    //         price:500,
    //         published:false,
    //     }
    // });
    // console.log('getall',getAll)
    //   console.log("Boolvalue",BoolVal);
      res.status(200).send(getAll);

    //   const { count , rows } = await Product.findAndCountAll({
    //       where:{
    //          id:id
    //       }, 
    //     offset:0,
    //     limit:10
    // });
    // console.log('count',count);
    // console.log(rows)
    // res.status(200).send(rows);


}
  
getCreatedDateList = async(req,res)=>{
    let sDate = req.body.sDate;
    let eDate = req.body.eDate;
    // let temp = eDate.getDate(); 
    // console.log(temp)
  let getAll = await Product.findAll({
    where:{     
    createdAt:{
     [Op.or]:{
          [Op.substring]:eDate,
          [Op.between]:[sDate,eDate]
      } 
    }
}
        // validate:{
        //     isAfter:sDate,
        //     // isBefore:eDate
        // }
      // [Op.or]:[{
                //  [Op.gte]: sDate,
                //  [Op.lte]: eDate.toDate()
                // },{
                //     [Op.eq]:eDate.toDate()
                // }
            // ]
               // [Op.or]:[{[Op.gte]:{createdAt:sDate}},{[Op.lt]:{createdAt:eDate}}] 

    // }
  })
res.status(200).send(getAll);
}



module.exports = {
    addProduct,
    updateProduct,
    deleteProduct,
    getAllProduct,
    getOneProduct,
    getSpecificAttrib,
    getWhereClause,
    Finders,
    getCreatedDateList
}