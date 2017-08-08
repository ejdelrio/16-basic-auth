'use strict';

const createError = require('http-errors');
const debug = require('debug')('app:error');

module.exports = function(err, req, res, next) {
  console.error(err.message);
  console.log('ERROR NAME XXXXXX: ', err.name);
  if (err.status) {
    debug('user error');

    res.status(err.status).send(err.name);
    next();
    return;
  }

  if (err.name === 'ValidationError') {
    err = createError(400, err.message);
    res.status(err.status).send(err.name);
    next();
    return;
  }

  debug('server error');
  err = createError(500, err.message);
  res.status(err.status).send(err.name);
  next();
};

