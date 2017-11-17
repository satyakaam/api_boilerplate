const express = require('express');
const path = require('path');
const open = require('open');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const chalk = require('chalk'); // colorful console.log
const log = require('./log.js');

const port = process.env.PORT || 3000;
console.log(chalk.green(`starting project in ${process.env.NODE_ENV} environment, port ${port}`)); // eslint-disable-line

const app = express();

// middlewares
log.init(app); // logging policy (async)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/users', (req, res) => {
  res.json([
    {
      id: 1,
      firstName: 'Bob',
      lastName: 'Smith',
      email: 'bob@gmail.com',
    },
    {
      id: 2,
      firstName: 'Tammy',
      lastName: 'Norton',
      email: 'tnorton@yahoo.com',
    },
    {
      id: 3,
      firstName: 'Tina',
      lastName: 'Lee',
      email: 'lee.tina@hotmail.com, ',
    },
  ]);
});

// start the server
app.listen(port, (err) => {
  if (err) {
    console.log(err); // eslint-disable-line
  } else {
    open(`http://localhost: ${port}`);
  }
});
