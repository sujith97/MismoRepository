var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

if (app.get('env') === 'development') {
  console.log('DEVELOPMENT');
  // view engine setup.
  app.set('views', path.join(__dirname, 'views'));
  // Static file lookup.
  app.use(express.static(path.join(__dirname, 'public')));
  // connect to database
} else {
  console.log('PRODUCTION');
  app.set('views', path.join(__dirname, 'dist/views'));
  app.use(express.static(path.join(__dirname, 'dist')));
}

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.engine('html', require('ejs').renderFile);

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    console.log('Error: ' + err.message);
    res.render('error.html');
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  console.log('Error: ' + err.message);
  res.render('error.html');
});


module.exports = app;