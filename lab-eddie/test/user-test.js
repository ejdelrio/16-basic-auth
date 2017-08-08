'use strict';

const expect = require('chai').expect;
const request = require('superagent');

const User = require('../model/user.js')
require('../server.js');

url = `http://localhost:${process.env.PORT}/api`;

const modelUser = {
  userName: 'Satan',
  email: 'Gotohell@666.com',
  password: '666666'
};

describe('Authentication Routes for lab', function() {
  describe('POST /api/newuser', function() {
    describe('With a proper body', function() {
      before(done => {

      })

      after(done => {

      })

      it('Return a req body', done => {
        request.post(`${url}/newuser`)
        .send(modelUser)
        .end((err, res) => {
          if(err) return done(err);
        });
      });
    })
  })
})