const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class CategoryService {

  constructor(){
    this.models = models;
  }

  async create(category){
    category.image = "https://thumbs.dreamstime.com/b/no-thumbnail-image-placeholder-forums-blogs-websites-148010362.jpg"
    const newCategory = await models.Category.create(category);
    return newCategory;
  }

  async all(){
    const rta = await this.models.Category.findAll();
    return rta
  }

  async findOne(id){
    const category = await this.models.Category.findByPk(id)
    if (!category){
      throw boom.notFound('Product not found');
    }
    return category;
  }

  async update(id, changes){
    const category = await this.findOne(id);
    const rta = await category.update(changes)
    return rta 
  }

  async delete(id){
    const category = await this.findOne(id);
    const rta = await category.destroy();
    return { id }
  }
}

module.exports = CategoryService;