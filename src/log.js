/*
Simple model that contains the log
 */
const logger = require('morgan'); // logger
const fs = require('fs');
const path = require('path');
const rfs = require('rotating-file-stream'); // log jsons

module.exports = {
  async init(app) {
    const logDirectory = path.join(__dirname, 'log');

    // ensure log directory exists
    if (!fs.existsSync(logDirectory)) {
      await fs.mkdir(logDirectory);
    }

    // create a rotating write stream
    const accessLogStream = rfs('access.log', {
      interval: '1d', // rotate daily
      path: logDirectory,
    });

    // setup the logger
    app.use(logger('combined', { stream: accessLogStream }));
    if (process.env.NODE_ENV === 'dev') app.use(logger('dev'));
  },
};
