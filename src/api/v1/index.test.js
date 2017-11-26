const path = require('path');
const chai = require('chai');
const request = require('supertest');

const currentVersion = __dirname.split(path.sep).pop();
const { expect } = chai;

describe(`API ${currentVersion} Tests`, () => {
  describe('# Get all users', () => {
    it('should get all users', (done) => {
      request(global.app).get(`/api/${currentVersion}/users`).end((err, res) => {
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.be.an('array');
        done();
      });
    });
  });
});
