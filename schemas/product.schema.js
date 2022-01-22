const Joi = require('joi');

const id = Joi.string();
const name = Joi.string().min(3);
const price = Joi.number().integer().min(5);
const description = Joi.string().min(10);
const image = Joi.string().uri();
const categoryId = Joi.number();

const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  description: description.required(),
  categoryId: categoryId.required(),
});

const updateProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  description: description.required(),
  image: image
});

const getProductSchema = Joi.object({
  id: id.required(),
});

module.exports = { createProductSchema, updateProductSchema, getProductSchema }