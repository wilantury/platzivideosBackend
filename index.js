const express = require('express');
const app = express();
const { config } = require('./config/index');
const moviesApi = require('./routes/movies.js');
//middleware Body parser
app.use(express.json());

moviesApi(app);
//rutas
/* app.get('/', function(req, res){
  res.send("Hello word");
})

app.get('/json', function(req, res){
  res.send({hello: 'Hello word'});
}) */

app.listen(config.port, function(){
  console.log(`Listening http://localhost:${config.port}`);
});