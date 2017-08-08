'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const creatError = require('http-erros');
const debug = require('debug')('app: user');
const crypto = require('crypto');
const Promise = require('bluebird');
const jwt = require('jsonwebtoken');

const Schema = mongoose.Schema;

const User = Schema({
  userName: {type: String, required: true, unique: true},
  email: {type: String, required: true, unique: true},
  passWord: {type: String, required: true},
  findHash: {type: String, unique: true}
});

User.method.generatePasswordHash = function(password) {
  debug('generatePasswordHash');

  return Promise((resolve, reject) => {
    bcrypt.hash(password, 5, (err, hash) => {
      if(err) return reject(err);
      this.password = hash;
      resolve(this);
    })
  })
}

User.method.comparePass = function(password) {
  debug('comparePass');

  return Promise((resolve, reject) => {
    bcrypt.compare(password, this.password, (err, vali) => {
      if(err) return reject(err);
      if(!valid) return reject(creatError(401, 'Invalid Password!'));
      resolve(this);
    })
  });
}
