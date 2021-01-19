var http = require('http'); 
const express = require('express');
const app = express();
const axios = require("axios");

app.use(require("cors")());

const api = axios.create({
    baseURL: "https://covid19.mathdro.id/api"
})

app.get('/show/:id', (req, res, next) => {

        var countryUrl = req.params.id 

    api.get(`/countries/${countryUrl}/confirmed`).then((response) => {
        
        res.json(response.data)
    })
    
})
 
var server = http.createServer(app); 
server.listen(3030);
console.log("Servidor escutando ")
