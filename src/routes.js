const express = require('express');
const StateController = require('./controllers/StateController');
const State = require('./models/State');
const routes = express.Router();


routes.post('/show')



routes.get("/db/:id", StateController.index);
routes.post("/db/:id", StateController.store);



module.exports = routes;