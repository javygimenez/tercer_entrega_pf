const express = require("express");
const { getProducts, addProduct, updateProduct, deleteProduct } = require("../controllers/controllerProducts.js");
const routerProducts = express.Router();
const { checkAuthentication } = require('../middleware/auth.js')

//Get all products or product selected
routerProducts.get('/:id?', checkAuthentication, getProducts);

//Add product
routerProducts.post('/', checkAuthentication, addProduct);

//Update product
routerProducts.put('/:id', checkAuthentication, updateProduct);

//Delete product
routerProducts.delete('/:id', checkAuthentication, deleteProduct);

module.exports = routerProducts;