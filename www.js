const open = require('open');
const chalk = require('chalk'); // colorful console.log
const app = require('./src/server');

const port = process.env.PORT || 3000;
console.log(chalk.green(`starting project in ${process.env.NODE_ENV} environment, port ${port}`)); // eslint-disable-line

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

