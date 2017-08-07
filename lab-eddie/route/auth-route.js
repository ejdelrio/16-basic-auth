'use strict';

const Router = require('express').Router;
const jsonParser = require('body-parser').json();
const creatError = require('-http-errors');
const debug = require('debug')('app: auth-route');
const basicAuth = require('../lib/basic-auth.js');

authRoute = new Router();

authRoute.post('/api/signup', jsonParser, function(req, res, next) {
  debug('POST /api/signup');

  let passWord = req.body.passWord;
  delete req.body.passWord;

  let user = new User(req.body);

  user.generatePasswordHash(passWord)
  .then(user => user.save())
  .then(user => user.generateToken())
  .then(token => res.send(token))
  .catch(next);

});

authRoute.get('/api/signin',basicAuth , function(req, res, next) {
  debug('GET /api/signin');


});