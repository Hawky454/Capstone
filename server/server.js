const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const pg = require('pg');
const fs = require('fs');
const path = require('path');
const knexPath = path.join(__dirname, 'knexfile.js');
const port = process.env.PORT || 8000;
const env = process.env.NODE_ENV || 'development';
const config = require(knexPath)[env];
const knex = require('knex')(config);
const app = express();

app.disable('x-powered-by');
app.use(morgan('short'));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../build')));
app.use(bodyParser.urlencoded({ extended: false }));



//  app.use((_req, res) => {
//     res.sendStatus(404);
//   });

// console.log('is this thing on?');

// app.use((err, _req, res, _next) => {
//     if (err.status) {
//       return res
//         .status(err.status)
//         .set('Content-Type', 'text/plain')
//         .send(err.message);
//     }
// });



app.listen(port, () => console.log('This is fucking working! Listening on port ' + port)); 





app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});


app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: req.app.get('env') === 'development' ? err : {}
  });
});


module.exports = app;
