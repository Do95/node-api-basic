const { Category, CategorySchema } = require('./category.model');
const { Product, ProductSchema } = require('./product.model');
const { User, UserSchema } = require('./user.model');

function setupModels(sequelize){
  User.init(UserSchema,User.config(sequelize))
  Category.init(CategorySchema, Category.config(sequelize));
  Product.init(ProductSchema,Product.config(sequelize));
  
  
  Category.associate(sequelize.models);
  Product.associate(sequelize.models);  
}

module.exports = setupModels;