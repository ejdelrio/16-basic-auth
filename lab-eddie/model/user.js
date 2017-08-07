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
