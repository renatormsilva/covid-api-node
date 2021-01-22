const express = require('express');
const CountryController = require('./controllers/CountryController');
const Country = require('./models/Country');
const routes = express.Router();
const api = require('./services/api')

routes.get('/show/:id', (req, res, next) => {
  var countryUrl = req.params.id
  api.get(`/countries/${countryUrl}/confirmed`).then((response) => {
    res.json(response.data)
  })
})

routes.get("/count", CountryController.index);
routes.post("/count", CountryController.store);



module.exports = routes;