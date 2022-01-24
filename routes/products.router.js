const express = require('express');
const passport = require('passport');

const ProductsService = require('./../services/product.services')
const validatorHandler = require('./../middlewares/validator.handler')
const { createProductSchema, updateProductSchema, getProductSchema } = require('./../schemas/product.schema')
const router = express.Router();

const Product = new ProductsService();

router.get('/',
  passport.authenticate('jwt', { session: false }),   
  async (req, res) => {
  const products = await Product.all();
  res.json(products)
});

router.post('/',
  passport.authenticate('jwt', { session: false }),
  validatorHandler(createProductSchema, 'body'), 
  async (req, res) =>{
    try{
      const body = req.body
      const response = await Product.create(body);
      res.json(response)
    }catch (error){
      next(error);
    }
})

router.get('/:id',
  passport.authenticate('jwt', { session: false }), 
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
  try {
    const { id }= req.params;
    const item = await Product.findOne(id);
    res.json(item)
  } catch (error) {
    next(error);
  }
});

router.patch('/:id',
  passport.authenticate('jwt', { session: false }),
  validatorHandler(getProductSchema, 'params'), 
  validatorHandler(createProductSchema, 'body'),
  async (req, res) => {
    try {
      const id = req.params.id;
      const body = req.body
      const response = await Product.update(id, body);
      res.json(response);
    } catch (error) {
      res.status(404).json({
        message: error.message
      })
    }
});

router.delete('/:id',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const id = req.params.id;
    const response = await Product.delete(id);
    res.json(response)
  }
);

module.exports = router;

