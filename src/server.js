var http = require('http'); 
const express = require('express');
const routes = require('./routes')
const app = express();

require('./database')
app.use(require("cors")());

app.use(express.json());
app.use(routes);
 
var server = http.createServer(app); 
server.listen(3060);
console.log("Servidor escutando ")
