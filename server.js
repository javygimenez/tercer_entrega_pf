const express = require("express");
const routerProducts = require('./routes/routerProducts.js');
const routerCarts = require('./routes/routerCarts.js');
const indexRouter = require('express').Router();
const userRouter = require('./routes/users.js')
const http = require('http');
const app = express();
require('dotenv').config();
const advancedOptions = { useNewUrlParser: true, useUnifiedTopology: true }
const session = require('express-session')
const { SESSION, MONGO, } = require('./config/config.js')
const passport = require('passport')
const mongoStore = require('connect-mongo')
const {log, logError, logWarn} = require('./config/log.js')
const { engine } = require('express-handlebars')
const server = require('./server.js');
const initMongoDB = require('./src/services/database.js');
const routes = require('./routes/indexR.js')


const init = async () => {
    await initMongoDB();
    const puerto = process.argv[2] || process.env.PORT || 8080;
  
    app.listen(puerto, () => log.info(`SERVER UP ON PORT ${puerto}`));
  };
  
  init();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
indexRouter.use('/api/productos', routerProducts);
indexRouter.use('/api/carrito', routerCarts);
indexRouter.use('/users', userRouter)

const httpServer = http.Server(app);

//Llamando session
app.use(session({
    secret: SESSION.SECRET,
    resave: true,
    saveUninitialized: true,
    store: mongoStore.create({
        mongoUrl: MONGO.MONGOURL,
        mongoOptions: advancedOptions,
        collectionName: 'sessions'
    }),
    cookie: {
        maxAge: 60000*10
    }
}))

// Llamando passport

app.use(passport.initialize());
app.use(passport.session());

app.use(routes)

//HBS

app.engine(
    'hbs',
    engine()
)
app.set("view engine", 'hbs')
app.set("views", "./views")


module.exports = httpServer;