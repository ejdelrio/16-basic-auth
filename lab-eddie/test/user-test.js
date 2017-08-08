'use strict';

const expect = require('chai').expect;
const request = require('superagent');

const User = require('../model/user.js')
require('../server.js');

const url = `http://localhost:${process.env.PORT}/api`;

const modelUser = {
  userName: 'Satan',
  email: 'Gotohell@666.com',
  passWord: '666666'
};

describe('Authentication Routes for lab', function() {
  describe('POST /api/newuser', function() {
    describe('With a proper body', function() {

      after(done => {
        User.remove({})
        .then(() => done())
        .catch(done);
      })

      it('Return a req body and a 200 code', done => {
        request.post(`${url}/newuser`)
        .send(modelUser)
        .end((err, res) => {
          if(err) return done(err);
          expect(res.status).to.equal(200);
          done();
        });
      });
    })
  })
})