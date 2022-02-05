
var { sequelize,Model } =  require('sequelize');
module.exports()
class Posts extends Model {}
Posts.init({
    title:DataTypes.STRING
 }, {
  sequelize,
  paranoid: true,

  // If you want to give a custom name to the deletedAt column
  deletedAt: 'destroyTime'
});