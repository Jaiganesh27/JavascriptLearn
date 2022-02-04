const db = require('../config/db.config.js')
const { Sequelize , DataTypes } = require('sequelize');
const  sequelize = new Sequelize(
    db.DB,
    db.USER,
    db.PASSWORD,
    {
        host:db.HOST,
        dialect:db.dialect
    }
)
sequelize.authenticate()
.then(()=> console.log("DB Connected!"))
.catch((err)=> console.log("Error",err))

database = {} 
database.Sequelize = Sequelize;
database.sequelize = sequelize;
console.log("database",database)

database.reviews = require('./reviewModel.js')(sequelize,DataTypes)
database.products = require('./productModel.js')(sequelize,DataTypes)

db.products.hasMany(db.reviews, { as: "reviews" });
db.comments.belongsTo(db.products, {
  foreignKey: "productsId",
  as: "products",
});

database.sequelize.sync({ force:false })
.then(()=>{
    console.log("Database Synced!")
    console.log("hii",database.sequelize.models);
})
console.log("hii",database.sequelize.models);
module.exports = database;