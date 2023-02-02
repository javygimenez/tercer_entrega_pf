const { logError, log, logWarn, } = require('../config/log.js');
const { sendGmail } = require('../notifications/gmail/EmailSender.js');
const { htmlNewUserTemplate  } = require('../notifications/gmail/htmltemplates/NewUserCreatedTemplate.js');


//Session and Registration

let user = []

const getForm = (req, res) => {
    user = req.session.passport.user
    res.render('formulario', {user}) //product entry form
}

const regForm = (req, res) => {
    req.session.passport?.user ? res.send(`<h1> You are already logged in! </h1>`) : res.render('indexRegistration')
}

const getLogin = (req, res) => {
    res.render('indexLogin')
}

const mailLogin = async (req, res) => {
    const now = new Date();
    const newUserTemplateEmail = htmlNewUserTemplate(user._id, now.toLocaleString());
    await sendGmail ('Nuevo usuario creado', newUserTemplateEmail)
    res.render('indexLogin')
}

const exit = (req, res) => {
    try {
        let quittingUser = req.session.passport.user
        log.info('User logging out ' + req.session.passport.user)
        req.session.destroy();
        res.render('logout', { quittingUser });
    } catch (error) {
        logError.error('Unable to log out' + error);
        res.status(500).send("error: ", error);
    } 
}

//Error Handling

const errorReg = (req, res) => {
    logError.error('Registration error');
    let err = 'registration error'
    res.render('userError', {err});
}

const errorLogin = (req, res) => {
    logError.error('wrong user credentials');
    let err = 'wrong credentials'
    res.render('userError', {err});
}

module.exports = { mailLogin, getForm, exit, errorReg, errorLogin, regForm, getLogin }