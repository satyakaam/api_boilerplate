const serverless = require('serverless-http');
const chalk = require('chalk'); // colorful console.log
const app = require('./server');

const port = process.env.PORT || 3000;
console.log(chalk.green(`starting serverless in ${process.env.NODE_ENV} environment, port ${port}`)); // eslint-disable-line

// export
module.exports.handler = serverless(app);

