'use strict';

const Router = require('express').Router;
const jsonParser = require('body-parser').json();
const mongoose = require('mongoose');
const creatError = require('-http-errors');
const debug = require('debug')('app: auth-route')

authRoute = new Router();

authRoute.post('/api/signup', jsonParser, function(req, res, next) {
  debug('POST /api/signup');
});

authRoute.get('/api/signin', function(req, res, next) {
  debug('GET /api/signin');
});