const Joi = require('joi');

module.exports = {
  body: {
    email: Joi.string().email().required(),
    ssn: Joi.string().regex(/\d{3}-\d{2}-\d{4}/).required(),
  },
};
