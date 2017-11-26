const express = require('express');
// create router for version 1
const apiRoutes = express.Router();

/*
 * GET /users route to retrieve all the users.
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

module.exports = apiRoutes;

