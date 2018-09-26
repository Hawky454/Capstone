'use strict';

let express = require('express');
let bodyParser = require('body-parser');
let morgan = require('morgan');
let pg = require('pg');
let fs = require('fs');
let path = require('path');
let knexPath = path.join(__dirname, 'knexfile.js');
let port = process.env.PORT || 8000;
let env = process.env.NODE_ENV || 'development';
let config = require(knexPath)[env];
let knex = require('knex')(config);
let app = express();

// const PORT = 8000;

app.disable('x-powered-by');
app.use(morgan('short'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.use(function(request, response, next) {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


 


 app.use((_req, res) => {
    res.sendStatus(404);
  });

console.log('is this thing on?')

app.use((err, _req, res, _next) => {
    if (err.status) {
      return res
        .status(err.status)
        .set('Content-Type', 'text/plain')
        .send(err.message);
    }
});

app.listen(port, () => console.log('This is fucking working! Listening on port ' + port)); 



module.exports = app;
