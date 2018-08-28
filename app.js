'use strict';
var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./app/route');
var app = express();
// var cors = require('cors')
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//app.use(cors());
app.use(bodyParser.json({
  limit: '30mb'
}));
app.use(bodyParser.urlencoded({
  limit: '30mb',
  extended: true
}));
// app.use(bodyParser.json({ "limit": "2048kb" }));
app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
var cors = require('express-cors')

app.use(cors({
  allowedOrigins: ['http://localhost:3000']
}))

// app.use(cors({credentials: true, origin: 'http://localhost:1230'}));
app.all('/*', function(req, res, next) {
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Cache-Control', 'no-cache, must-revalidate');
  next();
});

setTimeout(function() {
  routes(app);
  /// catch 404 and forwarding to error handler
  app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
  // 413 too large
  app.use(function(req, res, next) {
    var err = new Error('too large');
    err.status = 413;
    res.status('413').json(err);
    next();
  });
  /// error handlers
  // development error handler
  // will print stacktrace
  if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
      res.status(err.status || 500);
      res.render('error', {
        message: err.message,
        error: err
      });
    });
  }
  // production error handler
  // no stacktraces leaked to user
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: {}
    });
  });
}, 1000);

module.exports = app;