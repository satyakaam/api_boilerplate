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
  describe('# Create a new user', () => {
    it('should not pass the validation (nothing sent)', (done) => {
      request(global.app).post(`/api/${currentVersion}/user`).end((err, res) => {
        expect(res.statusCode).to.equal(400);
        done();
      });
    });
    it('should not pass the validation (wrong SSN)', (done) => {
      request(global.app).post(`/api/${currentVersion}/user`).send({ email: 'urixwd@gmail.com', ssn: '123-2222' }).end((err, res) => {
        expect(res.statusCode).to.equal(400);
        done();
      });
    });
    it('should pass the validation', (done) => {
      request(global.app).post(`/api/${currentVersion}/user`).send({ email: 'urixwd@gmail.com', ssn: '123-22-2222' }).end((err, res) => {
        expect(res.statusCode).to.equal(200);
        expect(res.body[0]).to.have.own.property('ssn');
        expect(res.body[0]).to.have.own.property('email');
        done();
      });
    });
  });
});
