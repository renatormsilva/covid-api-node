const express = require('express');
const StateController = require('./controllers/StateController');
const State = require('./models/State');
const routes = express.Router();


routes.post('/show')



routes.get("/db/:id", StateController.index);



module.exports = routes;