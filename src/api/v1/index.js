const express = require('express');
const models = require('./models/index');
const { celebrate, errors } = require('celebrate');

// create router for version 1
const apiRoutes = express.Router();

/*
 * GET /users route to retrieve all the users.
 * EXAMPLE
 */
apiRoutes.get('/users', (req, res) => {
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

<<<<<<< HEAD
=======
/*
 * POST /user route insert a user
 */
apiRoutes.post('/user', celebrate(models.User), (req, res) => {
  res.json([
    {
      id: 1,
      ssn: req.body.ssn,
      email: req.body.email,
    },
  ]);
});


// errors
apiRoutes.use(errors());

>>>>>>> ea7c95982b880ee889df3423e4fd58f226769058
module.exports = apiRoutes;
