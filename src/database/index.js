const Sequelize = require('sequelize');
const dbconfig = require('../config/database');

const Country= require('../models/Country')


const connection = new Sequelize(dbconfig);

Country.init(connection);


module.exports = connection

