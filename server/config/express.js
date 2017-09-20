var path = require('path'),
    express = require('express'),
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    config = require('./config'),
    listingsRouter = require('../routes/listings.server.routes'),
    getCoordinates = require('../controllers/coordinates.server.controller.js');

module.exports.init = function() {
  //connect to database
  mongoose.connect(config.db.uri);

  //initialize app
  var app = express();

  //enable request logging for development debugging
  app.use(morgan('dev'));

  //body parsing middleware
  app.use(bodyParser.json());

  app.use('/', express.static(__dirname + '/../../client'));
  app.use('/public', express.static(__dirname + '/../../public'));
  /* server wrapper around Google Maps API to get latitude + longitude coordinates from address */

  app.use('/api/listings', listingsRouter);


  app.post('/api/coordinates', getCoordinates, function(req, res) {
    res.send(req.results);
  });

  /* serve static files */


  /* use the listings router for requests to the api */
  app.all('/*', function(req, res) {
    res.sendFile(path.resolve('client/index.html'));
  });

  /* go to homepage for all routes not specified */

  return app;
};
