'use strict';
//db
const mongoose = require('mongoose');
mongoose.Promise = require('q').Promise;
const db = require( './db' );

//packages
const compression = require('compression')
const cookieParser = require('cookie-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');
const path = require('path');
const express = require('express');

//router
const users = require('./routes/users');
//const api = require('./routes/api');
//app
const app = express();

//APP SETUP
//compression
app.use(compression());
//cookie-parser
app.use(cookieParser('frenetic soap'));
//express-session
app.use(session({
  name: '_sqlt_.sid',
  store: new MongoStore({ mongooseConnection: db }),
  secret: 'malicious plate',
  resave: false,
  saveUninitialized: false,
}))
//express.static
//let oneDay = 86400000;
app.use(express.static(path.join(__dirname, '../src')));
app.use(express.static(path.join(__dirname, '../node_modules')));


//body-parser
app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }));
app.use(bodyParser.json());
//serve-favicon
app.use(favicon(__dirname + '/../src/favicon.ico'));
//routes
app.use('/users', users);
//app.use('/api', api);
app.get('*', function (req, res, next) {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

let port = process.env.PORT || '3000';
app.set('port', port);

app.listen(port, () => {
  console.log('App listening on port ' + port);
});

module.exports = app;
