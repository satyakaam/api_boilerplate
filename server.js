const express = require('express');
const path = require('path');
const open = require('open');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const chalk = require('chalk'); // colorful console.log
const log = require('./src/log.js');

const port = process.env.PORT || 3000;
console.log(chalk.green(`starting project in ${process.env.NODE_ENV} environment, port ${port}`)); // eslint-disable-line

const app = express();
const api = require('./src/api/index.js');

// middlewares
log.init(app); // logging policy (async)
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

// start the server
app.listen(port, (err) => {
  if (err) {
    console.log(err); // eslint-disable-line
  } else {
    if (process.env.NODE_ENV === 'dev') open(`http://localhost: ${port}`);
  }
});

module.exports = app;
