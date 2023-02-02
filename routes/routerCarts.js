const express = require("express");
const { addCart, deleteCart, getProducts, addProduct, deleteProduct } = require("../controllers/controllerCarts.js");
const routerCarts = express.Router();
const { checkAuthentication } = require('../middleware/auth.js')
const { reqLog } = require('../middleware/reqLog');

//Add cart
routerCarts.post('/', reqLog, checkAuthentication, addCart);

//Delete cart
routerCarts.delete('/:id', reqLog, checkAuthentication, deleteCart);

//Get products from cart
routerCarts.get('/:id', reqLog, checkAuthentication, getProducts);

//Add product to cart
routerCarts.post('/:id/productos/:id_prod', reqLog, checkAuthentication, addProduct);

//Delete product from cart
routerCarts.delete('/:id/productos/:id_prod', reqLog, checkAuthentication, deleteProduct);

module.exports = routerCarts;