const indexRouter = require('express').Router();
const routerProducts = require('./routerProducts.js');
const routerCarts = require('./routerCarts.js');
const userRouter = require('./users')

indexRouter.use('/api/productos', routerProducts)
indexRouter.use('/api/carrito', routerCarts)
indexRouter.use('/users', userRouter)

module.exports = indexRouter