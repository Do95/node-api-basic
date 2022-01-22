const boom = require('@hapi/boom')
const { models } = require('../libs/sequelize');

class ProductService {

  constructor(){
    this.models = models;
  }

  async create(product){
    product.image = "https://thumbs.dreamstime.com/b/no-thumbnail-image-placeholder-forums-blogs-websites-148010362.jpg"
    const newProduct = await models.Product.create(product);
    return newProduct;
  }
  
  async all(){
    const rta = await this.models.Product.findAll();
    return rta
  }

  async findOne(id){
    const product = await this.models.Product.findByPk(id)
    if (!product){
      throw boom.notFound('Product not found');
    }
    return product;
  }

  async update(id, changes){
    const product = await this.findOne(id);
    const rta = await product.update(changes)
    return rta 
  }

  async delete(id){
    const product = await this.findOne(id);
    const rta = await product.destroy()
    return { id }
  }

}

module.exports = ProductService