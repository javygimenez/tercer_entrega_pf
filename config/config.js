const config = {}

config.MONGO = {
    MONGOURL: process.env.MONGOURL
}

config.SESSION = {
    SECRET: process.env.SESSIONSECRET
}


module.exports = {...config}