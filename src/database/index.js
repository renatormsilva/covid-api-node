const Sequelize = require('sequelize');
const dbconfig = require('../config/database');

const State = require('../models/State')


const connection = new Sequelize(dbconfig);

State.init(connection);


module.exports = connection

