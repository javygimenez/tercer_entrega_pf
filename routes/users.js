const passport = require('passport');
require('../middleware/auth');
const userRouter = require('express').Router();
const { exit, mailLogin, getLogin, regForm, errorReg, errorLogin } = require('../controllers/userMongo.js');
const { reqLog } = require('../middleware/reqLog.js')


//Registration
userRouter.get('/reg', reqLog, regForm)
userRouter.post('/reg', mailLogin, reqLog, passport.authenticate('register', { failureRedirect: '/users/errorReg', }), getLogin)
userRouter.get('/errorReg', reqLog, errorReg)

//Login
userRouter.get('/login',reqLog, getLogin)
userRouter.post('/login', reqLog, passport.authenticate('login', { failureRedirect: '/users/errorLogin', successRedirect: '/api/productos'}))
userRouter.get('/errorLogin', reqLog, errorLogin)

//Logout
userRouter.post('/exit', reqLog, exit)

module.exports = userRouter