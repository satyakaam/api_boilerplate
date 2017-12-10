const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
// const chalk = require('chalk'); // colorful console.log
// const log = require('./log.js');

const app = express();
const api = require('./api/index.js');

// middlewares
// log.init(app); // logging policy (async)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// api
app.use('/api', api);

/*
 * General 404
 */
app.use((req, res) => {
  res.status(404).send({ url: `${req.originalUrl}  not found` });
});


module.exports = app;
