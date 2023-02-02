const mongoose = require('mongoose');
const { logError, log } = require('../../config/log.js')
const { MONGO } = require('../../config/config.js');

const connectionString = MONGO.MONGOURL || 'mongodb://localhost:27017/miBase'

const initMongoDB = async () => {
  try {
    log.info('CONECTANDO A MI DB');
    log.info(connectionString)
    await mongoose.connect(connectionString);    
    log.info('mongo connected successfully')

  } catch (error) {
    logError.error(error + 'trying to connect to database');
    return error;
  }
};

module.exports = initMongoDB;