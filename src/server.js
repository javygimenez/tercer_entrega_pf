// const express = require("express");
// const routerProducts = require('../routes/routerProducts.js');
// const routerCarts = require('../routes/routerCarts.js');
// const indexRouter = require('express').Router();
// const userRouter = require('../routes/users.js')
// const http = require('http');
// const app = express();
// require('dotenv').config();
// const advancedOptions = { useNewUrlParser: true, useUnifiedTopology: true }
// const session = require('express-session')
// const { SESSION, MONGO, } = require('../config/config.js')
// const passport = require('passport')
// const mongoStore = require('connect-mongo')
// const {log, logError, logWarn} = require('../config/log.js')
// const { engine } = require('express-handlebars')



// //app.use(routes)

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use('/api/productos', routerProducts);
// app.use('/api/carrito', routerCarts);
// //indexRouter.use('/users', userRouter)
// app.use('/users', userRouter)
// app.use('*', (req, res) => {
// 	const path = req.params;
// 	const method = req.method;
// 	res.send({ error: -2, descripcion: `ruta '${path[0]}' método '${method}' no implementada` });
// });

// const httpServer = http.Server(app);

// //Llamando session
// app.use(session({
//     secret: SESSION.SECRET,
//     resave: true,
//     saveUninitialized: true,
//     store: mongoStore.create({
//         mongoUrl: MONGO.MONGOURL,
//         mongoOptions: advancedOptions,
//         collectionName: 'sessions'
//     }),
//     cookie: {
//         maxAge: 60000*10
//     }
// }))

// // Llamando passport

// app.use(passport.initialize());
// app.use(passport.session());



// //HBS

// app.engine(
//     'hbs',
//     engine()
// )
// app.set("view engine", 'hbs')
// app.set("views", ".././views")
// // app.engine('handlebars', engine())
// // app.set('views',  "./views");
// // app.set('view engine', 'handlebars');


// module.exports = httpServer;